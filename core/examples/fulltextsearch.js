var app;

Ext.onReady(function() {
    GeoExt.Lang.set("en");

    var app = new gxp.Viewer({
        portalConfig: {
            renderTo: document.body,
            layout: "border",
            width: 1024,
            height: 800,
            items: ["mymap"]
        },
        tools: [{
            ptype: 'cgxp_fulltextsearch',
            url: "http://mapfish-geoportal.demo-camptocamp.com/demo/wsgi/fulltextsearch",
            actionTarget: "map.tbar",
            showCenter: true,
            pointRecenterZoom: 11,
            coordsRecenterZoom: 11,
            widgetOptions: {
              tooltipEl: 'search-tip',
              projectionCodes: [21781, 4326],
              comboWidth: 300,
              emptyText: 'Search a place or a coordinate',
              limits: {
                  limit: 30
              }
            }
        },
        {
            ptype: 'cgxp_fulltextsearch',
            url: "http://mapfish-geoportal.demo-camptocamp.com/demo/wsgi/fulltextsearch",
            actionTarget: "map.tbar",
            showCenter: true,
            pointRecenterZoom: 11,
            widgetOptions: {
              grouping: true,
              comboWidth: 300,
              emptyText: 'Search a place (grouped results)',
              limits: {
                  limit: 100,
                  partitionlimit: 5
              }
            }
        }],
        sources: {
            osm: {
                ptype: "gxp_osmsource"
            }
        },
        map: {
            id: "mymap",
            xtype: 'cgxp_mappanel',
            projection: "EPSG:900913",
            units: "m",
            maxResolution: 156543.0339,
            maxExtent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
            center: [0, 0],
            zoom: 2,
            tbar: [],
            layers: [{
                source: "osm",
                name: "mapnik"
            }]
        }
    });
});
