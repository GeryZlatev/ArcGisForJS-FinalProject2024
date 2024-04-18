require(["esri/config", "esri/WebMap", "esri/views/MapView"],
    function (esriConfig, WebMap, MapView) {

        esriConfig.apiKey = "AAPK77ebc8a134de4074a160da0e32d0d877onv_cK6xV7_3fD5hbgt8oYIPGcwHVf3SZVZkhweY7eONVEXqwdhRAkgphMmXCg9x";

        const webmap = new WebMap({
            portalItem: {
                id: "232b4d297d054b2a831a3ce629ac8495"
            }
        });

        const view = new MapView({
            container: "viewDiv",
            map: webmap
        })
    })