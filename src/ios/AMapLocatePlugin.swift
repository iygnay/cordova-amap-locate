import RxSwift
import RxCocoa

@objc(AMapLocatePlugin) class AMapLocatelugin: CDVPlugin, AMapLocationManagerDelegate {
    private var mapKey: String?
    private var locationManager: AMapLocationManager?
    private var asyncSub: AsyncSubject<CLLocation>?

    override func pluginInitialize() {
        super.pluginInitialize()
        asyncSub = AsyncSubject<CLLocation>()
        initMap()
    }

    @objc(getCurrentPosition:)
    func getCurrentPosition(commond: CDVInvokedUrlCommand) {
        locationManager!.startUpdatingLocation()
        asyncSub!.subscribe(onNext: { location in
            let pluginResult = CDVPluginResult(
                    status: CDVCommandStatus_OK,
                    messageAs: [location.coordinate.latitude, location.coordinate.longitude]
            )
            self.commandDelegate.send(pluginResult, callbackId: commond.callbackId)
        }, onError: { error in
            print(error)
        }, onCompleted: {
            self.locationManager!.stopUpdatingLocation()
        }, onDisposed: {
            print("Disposed!")
        })
    }


    func amapLocationManager(_ manager: AMapLocationManager!, didUpdate location: CLLocation!, reGeocode: AMapLocationReGeocode!) {
        asyncSub!.onNext(location)
        asyncSub!.onCompleted()
    }

    private func initMap() {
        AMapServices.shared().apiKey = Bundle.main.infoDictionary!["AMapServicesKey"] as! String
        locationManager = AMapLocationManager()
        locationManager!.allowsBackgroundLocationUpdates = true
        locationManager!.delegate = self
        locationManager!.distanceFilter = 200
        locationManager!.pausesLocationUpdatesAutomatically = true
    }
}