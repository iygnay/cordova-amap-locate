package kain.amap.location;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Build;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.util.Log;

import com.amap.api.location.AMapLocation;
import com.amap.api.location.AMapLocationClient;
import com.amap.api.location.AMapLocationClientOption;
import com.amap.api.location.AMapLocationListener;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import java.util.ArrayList;

import io.reactivex.Observer;
import io.reactivex.disposables.Disposable;
import io.reactivex.subjects.AsyncSubject;

public class AMapLocatePlugin extends CordovaPlugin implements AMapLocationListener {
  AsyncSubject<AMapLocation> asyncSub = AsyncSubject.create();
  static int PERMISSON_REQUESTCODE = 0;
  static String[] checkPermission = new String[]{
    Manifest.permission.ACCESS_COARSE_LOCATION,
    Manifest.permission.ACCESS_FINE_LOCATION,
    Manifest.permission.WRITE_EXTERNAL_STORAGE,
    Manifest.permission.READ_EXTERNAL_STORAGE,
    Manifest.permission.READ_PHONE_STATE
  };


  @Override
  protected void pluginInitialize() {
    super.pluginInitialize();
    if (Build.VERSION.SDK_INT >= 23 && cordova.getActivity().getApplicationInfo().targetSdkVersion >= 23) {
      this.checkPermissions();
    }
    this.initAMapLocation();
  }

  public AMapLocationClient mLocationClient = null;
  public AMapLocationClientOption mLocationOption = null;

  private void initAMapLocation() {
    this.mLocationOption = new AMapLocationClientOption();
    this.mLocationOption.setOnceLocation(true);
    this.mLocationClient = new AMapLocationClient(cordova.getActivity().getApplicationContext());
    this.mLocationClient.setLocationOption(this.mLocationOption);
    this.mLocationClient.setLocationListener(this);
  }

  private void checkPermissions() {
    ArrayList<String> needAccessPermissionList = new ArrayList<>();
    for (String permission : checkPermission) {
      if (ContextCompat.checkSelfPermission(cordova.getContext(), permission)
        != PackageManager.PERMISSION_GRANTED) {
        needAccessPermissionList.add(permission);
      }
    }
    if (needAccessPermissionList.size() != 0) {
      String[] needAccessPermission = new String[needAccessPermissionList.size()];
      needAccessPermissionList.toArray(needAccessPermission);
      ActivityCompat.requestPermissions(cordova.getActivity(), needAccessPermission, PERMISSON_REQUESTCODE);
    }
  }

  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    this.initAMapLocation();
    switch (action) {
      case "getCurrentPosition":
        this.getCurrentPosition(callbackContext);
        return true;
      default:
        return false;
    }
  }

  @Override
  public void onLocationChanged(AMapLocation location) {
    if (location != null) {
      if (location.getErrorCode() == 0) {
        this.asyncSub.onNext(location);
        this.asyncSub.onComplete();
      } else {
        Log.e("AmapError", "location Error, ErrCode:"
          + location.getErrorCode() + ", errInfo:"
          + location.getErrorInfo());
      }
    }
  }

  private void getCurrentPosition(CallbackContext callbackContext) {
    AMapLocationClient self = this.mLocationClient;
    this.mLocationClient.startLocation();
    this.asyncSub.subscribe(new Observer<AMapLocation>() {
      @Override
      public void onSubscribe(Disposable d) {

      }

      @Override
      public void onNext(AMapLocation aMapLocation) {
        JSONArray json = new JSONArray();
        try {
          json.put(aMapLocation.getLatitude());
          json.put(aMapLocation.getLongitude());
          callbackContext.success(json);
        } catch (Exception e) {
          callbackContext.error("异常");
        }
      }

      @Override
      public void onError(Throwable e) {

      }

      @Override
      public void onComplete() {
        if (self != null) self.stopLocation();
      }
    });
  }
}
