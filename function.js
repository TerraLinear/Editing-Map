            //ToDo
// 1) Get verticies of objects
// 2) Connect to Database
// 3) Add Attribute panel
// 4) Push added objects to Database via connection

import {apiKeys} from './apiKeys.js'

  //JS ESRI API require information
  require(["esri/config",
           "esri/Map",
           "esri/views/MapView",
           "esri/widgets/Sketch",
           "esri/layers/GraphicsLayer",
           "esri/Graphic",
           "esri/widgets/FeatureForm",
           "esri/form/FormTemplate"],
           function (esriConfig,
                     Map,
                     MapView,
                     Sketch,
                     GraphicsLayer,
                     Graphic,
                     FeatureForm,
                     FormTemplate) {

    esriConfig.apiKey = apiKeys.esriKey;
    
    const layer = new GraphicsLayer({
      opacity: 0.5
    });
    layer.spatialReference = {wkid: 102100};

    const map = new Map({
      basemap: "arcgis-topographic", // Basemap layer service
      layers: [layer]
    });

    const view = new MapView({
      map: map,
      center: [-97.748659, 30.258645], // Longitude, latitude
      zoom: 13, // Zoom level
      container: "viewDiv", // Div element
      popup:
      {
        autoOpenEnabled: false
      }
    });
    
    const sketch = new Sketch({
      layer: layer,
      view: view,
      creationMode: ["continuous","update"],
      hasZ: "true",
      enableZ: "true",
      state: "ready"
    });
    
    sketch.on("create", function(event){
      if (event.tool == "polyline" && event.state == "complete")
      {
        const coordsPolyline = event.graphic.geometry.paths[0];
        let jsonCoordsPolyline = JSON.stringify(coordsPolyline);
        console.log(jsonCoordsPolyline);
      }

      else if (event.tool == "point")
      {
        var coordsPointX = event.graphic.geometry.x;
        var coordsPointY = event.graphic.geometry.y;
        var coordsPt = [];
        coordsPt.push(coordsPointX);
        coordsPt.push(coordsPointY);
        var jsonCoordsPt = JSON.stringify(coordsPt);
        console.log(jsonCoordsPt);

      }

      else if (event.tool == "polygon" && event.state == "complete")
      {
        var coordsPolygon = event.graphic.geometry.rings[0]
        var jsonCoordsPolygon = JSON.stringify(coordsPolygon)
        console.log(jsonCoordsPolygon);
      }
      //bringvarToFunction(jsonCoordsPolygon);
      })

    view.on("click", function(event)
      {
        view.hitTest(event).then(function(response)
        {
          const results = response.results;
          console.log(results.geometry);
          console.log(response.results[0].graphic);

        });
      });

    // const featureForm = new FeatureForm({
    //   container: document.getElementById("formDiv"),
    //   //feature: layer,
    // });

    console.log(layer);
    // smap.add(layer);
    //view.ui.add(featureForm, "bottom-right");
    view.ui.add(sketch,"top-right");
  });




