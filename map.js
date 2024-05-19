require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapGallery",
],
    function (
        esriConfig,
        WebMap,
        MapView,
        Home,
        LayerList,
        BasemapGallery,
    ) {

        esriConfig.apiKey = "AAPK77ebc8a134de4074a160da0e32d0d877onv_cK6xV7_3fD5hbgt8oYIPGcwHVf3SZVZkhweY7eONVEXqwdhRAkgphMmXCg9x";

        const webmap = new WebMap({
            portalItem: {
                id: "232b4d297d054b2a831a3ce629ac8495"
            },
        });

        const view = new MapView({
            container: "viewDiv",
            map: webmap,
        });

        const homeBtn = new Home({
            view,
        });

        view.ui.add(homeBtn, "top-left");

        const layerList = new LayerList({
            view,
        });

        view.ui.add("layer-list-btn", "top-right");
        view.ui.add(layerList, "top-right");
        view.ui.add("basemap-gallery-btn", "top-right")

        const basemapGalery = new BasemapGallery({
            view
        });

        view.ui.add(basemapGalery, "top-right");

        document.getElementById("layer-list-btn").addEventListener("click", function () {
            toggleButton("layerList");
        });

        document.getElementById("basemap-gallery-btn").addEventListener("click", function(){
            toggleButton("gallery");
        });

        function toggleButton(el) {
            if(el == "layerList") {
                const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
                const currentProp = layerListEl.style.getPropertyValue("display");
                layerListEl.style.setProperty("display", currentProp == "none" ? "block" : "none");
            } else if ("gallery") {
                const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
                const currentPropGallery = galleryEl.style.getPropertyValue("display");
                galleryEl.style.setProperty("display", currentPropGallery == "none" ? "block" : "none");
            }

        }

    });
