ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([572134.906657, 5554640.299115, 913821.979587, 5785532.124218]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_CouvertureLiveObjects_1 = new ol.layer.Tile({
            'title': 'Couverture Live Objects',
            'opacity': 0.426000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://couverture-mobile.orange.fr/arcgis/rest/services/extern/geomap_LoRa/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_CouvertureLTEMOrange_2 = new ol.layer.Tile({
            'title': 'Couverture LTE-M Orange',
            'opacity': 0.628000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://couverture-mobile.orange.fr/arcgis/rest/services/extern/geomap_LTE/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_1009103435_Survey_Hte_Maurienne_Oct24V3_3 = new ol.format.GeoJSON();
var features_1009103435_Survey_Hte_Maurienne_Oct24V3_3 = format_1009103435_Survey_Hte_Maurienne_Oct24V3_3.readFeatures(json_1009103435_Survey_Hte_Maurienne_Oct24V3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1009103435_Survey_Hte_Maurienne_Oct24V3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1009103435_Survey_Hte_Maurienne_Oct24V3_3.addFeatures(features_1009103435_Survey_Hte_Maurienne_Oct24V3_3);
var lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1009103435_Survey_Hte_Maurienne_Oct24V3_3, 
                style: style_1009103435_Survey_Hte_Maurienne_Oct24V3_3,
                popuplayertitle: "1009103435_Survey_Hte_Maurienne_Oct24V3",
                interactive: true,
                title: '1009103435_Survey_Hte_Maurienne_Oct24V3'
            });
var format_1009103435_Survey_Hte_Maurienne_Oct24V3_4 = new ol.format.GeoJSON();
var features_1009103435_Survey_Hte_Maurienne_Oct24V3_4 = format_1009103435_Survey_Hte_Maurienne_Oct24V3_4.readFeatures(json_1009103435_Survey_Hte_Maurienne_Oct24V3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1009103435_Survey_Hte_Maurienne_Oct24V3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1009103435_Survey_Hte_Maurienne_Oct24V3_4.addFeatures(features_1009103435_Survey_Hte_Maurienne_Oct24V3_4);
var lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1009103435_Survey_Hte_Maurienne_Oct24V3_4, 
                style: style_1009103435_Survey_Hte_Maurienne_Oct24V3_4,
                popuplayertitle: "1009103435_Survey_Hte_Maurienne_Oct24V3",
                interactive: true,
                title: '1009103435_Survey_Hte_Maurienne_Oct24V3'
            });
var lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "1009103435_Survey_Hte_Maurienne_Oct24V3",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1009103435_Survey_Hte_Maurienne_Oct24V3_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [649702.404398, 5544336.249436, 857607.583461, 5782862.307389]
                            })
                        });
var format_PAVs_mauriennebrutALL_6 = new ol.format.GeoJSON();
var features_PAVs_mauriennebrutALL_6 = format_PAVs_mauriennebrutALL_6.readFeatures(json_PAVs_mauriennebrutALL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAVs_mauriennebrutALL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAVs_mauriennebrutALL_6.addFeatures(features_PAVs_mauriennebrutALL_6);cluster_PAVs_mauriennebrutALL_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PAVs_mauriennebrutALL_6
});
var lyr_PAVs_mauriennebrutALL_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PAVs_mauriennebrutALL_6, 
                style: style_PAVs_mauriennebrutALL_6,
                popuplayertitle: "PAVs_maurienne - brut ALL",
                interactive: true,
                title: '<img src="styles/legend/PAVs_mauriennebrutALL_6.png" /> PAVs_maurienne - brut ALL'
            });
var format_georeffranceepci_7 = new ol.format.GeoJSON();
var features_georeffranceepci_7 = format_georeffranceepci_7.readFeatures(json_georeffranceepci_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_georeffranceepci_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_georeffranceepci_7.addFeatures(features_georeffranceepci_7);
var lyr_georeffranceepci_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_georeffranceepci_7, 
                style: style_georeffranceepci_7,
                popuplayertitle: "georef-france-epci",
                interactive: true,
                title: '<img src="styles/legend/georeffranceepci_7.png" /> georef-france-epci'
            });
var group_1009103435_Survey_Hte_Maurienne_Oct24V3 = new ol.layer.Group({
                                layers: [lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_3,lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_4,lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_5,],
                                fold: "open",
                                title: "1009103435_Survey_Hte_Maurienne_Oct24V3"});

lyr_OpenStreetMap_0.setVisible(true);lyr_CouvertureLiveObjects_1.setVisible(true);lyr_CouvertureLTEMOrange_2.setVisible(true);lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_3.setVisible(true);lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_4.setVisible(true);lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_5.setVisible(true);lyr_PAVs_mauriennebrutALL_6.setVisible(true);lyr_georeffranceepci_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CouvertureLiveObjects_1,lyr_CouvertureLTEMOrange_2,group_1009103435_Survey_Hte_Maurienne_Oct24V3,lyr_PAVs_mauriennebrutALL_6,lyr_georeffranceepci_7];
lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PAVs_mauriennebrutALL_6.set('fieldAliases', {'#': '#', 'Nom': 'Nom', 'Adresse': 'Adresse', 'Territoire': 'Territoire', 'Centre d\'exploitation': 'Centre d\'exploitation', 'Types Produit': 'Types Produit', 'Contact': 'Contact', 'Carte': 'Carte', 'Position': 'Position', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'LoRa': 'LoRa', 'Couverture LTE-M': 'Couverture LTE-M', 'CS': 'CS', 'Volume CS': 'Volume CS', 'VERRE': 'VERRE', 'Volume Verre': 'Volume Verre', 'OM': 'OM', 'Volume Ordures ménagères': 'Volume Ordures ménagères', });
lyr_georeffranceepci_7.set('fieldAliases', {'geo_point_2d': 'geo_point_2d', 'year': 'year', 'reg_code': 'reg_code', 'reg_name': 'reg_name', 'dep_code': 'dep_code', 'dep_name': 'dep_name', 'epci_code': 'epci_code', 'epci_current_code': 'epci_current_code', 'epci_name': 'epci_name', 'epci_name_upper': 'epci_name_upper', 'epci_name_lower': 'epci_name_lower', 'epci_area_code': 'epci_area_code', 'epci_type': 'epci_type', 'epci_in_ctu': 'epci_in_ctu', });
lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PAVs_mauriennebrutALL_6.set('fieldImages', {'#': 'TextEdit', 'Nom': 'TextEdit', 'Adresse': 'TextEdit', 'Territoire': 'TextEdit', 'Centre d\'exploitation': 'TextEdit', 'Types Produit': 'TextEdit', 'Contact': 'TextEdit', 'Carte': 'TextEdit', 'Position': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'LoRa': 'TextEdit', 'Couverture LTE-M': 'TextEdit', 'CS': 'Range', 'Volume CS': 'TextEdit', 'VERRE': 'Range', 'Volume Verre': 'TextEdit', 'OM': 'Range', 'Volume Ordures ménagères': 'TextEdit', });
lyr_georeffranceepci_7.set('fieldImages', {'geo_point_2d': 'KeyValue', 'year': 'TextEdit', 'reg_code': 'List', 'reg_name': 'List', 'dep_code': 'List', 'dep_name': 'List', 'epci_code': 'List', 'epci_current_code': 'List', 'epci_name': 'List', 'epci_name_upper': 'TextEdit', 'epci_name_lower': 'TextEdit', 'epci_area_code': 'TextEdit', 'epci_type': 'TextEdit', 'epci_in_ctu': 'TextEdit', });
lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PAVs_mauriennebrutALL_6.set('fieldLabels', {'#': 'no label', 'Nom': 'hidden field', 'Adresse': 'no label', 'Territoire': 'no label', 'Centre d\'exploitation': 'inline label - always visible', 'Types Produit': 'no label', 'Contact': 'no label', 'Carte': 'no label', 'Position': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'LoRa': 'no label', 'Couverture LTE-M': 'no label', 'CS': 'no label', 'Volume CS': 'no label', 'VERRE': 'no label', 'Volume Verre': 'no label', 'OM': 'no label', 'Volume Ordures ménagères': 'no label', });
lyr_georeffranceepci_7.set('fieldLabels', {'geo_point_2d': 'no label', 'year': 'no label', 'reg_code': 'no label', 'reg_name': 'no label', 'dep_code': 'no label', 'dep_name': 'no label', 'epci_code': 'no label', 'epci_current_code': 'no label', 'epci_name': 'no label', 'epci_name_upper': 'no label', 'epci_name_lower': 'no label', 'epci_area_code': 'no label', 'epci_type': 'no label', 'epci_in_ctu': 'no label', });
lyr_georeffranceepci_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});