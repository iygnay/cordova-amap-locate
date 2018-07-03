package van.amap.locate

import android.Manifest
import android.os.Build
import android.support.v4.app.ActivityCompat
import com.amap.api.location.AMapLocation
import com.amap.api.location.AMapLocationClient
import com.amap.api.location.AMapLocationClientOption
import com.amap.api.location.AMapLocationListener
import io.reactivex.subjects.AsyncSubject
import org.apache.cordova.CallbackContext
import org.apache.cordova.CordovaPlugin
import org.json.JSONArray

class AMapLocatePlugin : CordovaPlugin(), AMapLocationListener {
    private var mLocationClient: AMapLocationClient? = null
    private var mLocationClientOption: AMapLocationClientOption? = null

    private val asyncSubject: AsyncSubject<AMapLocation> = AsyncSubject.create()
    private val PERMISSON_REQUESTCODE: Int = 0;
    private val checkPermission: Array<String> = arrayOf(
            Manifest.permission.ACCESS_COARSE_LOCATION,
            Manifest.permission.ACCESS_FINE_LOCATION,
            Manifest.permission.WRITE_EXTERNAL_STORAGE,
            Manifest.permission.READ_EXTERNAL_STORAGE,
            Manifest.permission.READ_PHONE_STATE
    )

    override fun pluginInitialize() {
        super.pluginInitialize()
        if (cordova.getActivity().getApplicationInfo().targetSdkVersion >= 23 &&
                Build.VERSION.SDK_INT >= 23) checkPermissions()
        initAMapLocation()
    }

    override fun execute(action: String?, args: JSONArray?, callbackContext: CallbackContext?): Boolean {
        initAMapLocation()
        when (action) {
            "getCurrentPosition" -> {
                getCurrentPosition(callbackContext!!)
                return true
            }
            else -> return false
        }
    }

    private fun initAMapLocation() {
        mLocationClientOption = AMapLocationClientOption()
        mLocationClientOption!!.setOnceLocation(true)
        mLocationClient = AMapLocationClient(cordova.activity.application.applicationContext)
        mLocationClient!!.setLocationOption(mLocationClientOption);
        mLocationClient!!.setLocationListener(this);
    }

    private fun checkPermissions() {
        ActivityCompat.requestPermissions(
                cordova.activity,
                checkPermission,
                PERMISSON_REQUESTCODE
        )
    }

    override fun onLocationChanged(location: AMapLocation?) {
        if (location?.errorCode == 0) {
            asyncSubject.onNext(location)
            asyncSubject.onComplete()
        } else {
            mLocationClient!!.startLocation()
        }
    }

    fun getCurrentPosition(callbackContext: CallbackContext) {
        mLocationClient!!.startLocation()
        asyncSubject.subscribe({
            var json = JSONArray()
            json.put(it.getLatitude())
            json.put(it.getLongitude())
            callbackContext.success(json)
            mLocationClient!!.stopLocation()
        })
    }
}