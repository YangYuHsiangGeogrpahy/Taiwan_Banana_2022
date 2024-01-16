var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_roadmap_2 = new ol.layer.Tile({
            'title': 'road map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_COUNTY_MOI_1090820_3 = new ol.format.GeoJSON();
var features_COUNTY_MOI_1090820_3 = format_COUNTY_MOI_1090820_3.readFeatures(json_COUNTY_MOI_1090820_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COUNTY_MOI_1090820_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COUNTY_MOI_1090820_3.addFeatures(features_COUNTY_MOI_1090820_3);
var lyr_COUNTY_MOI_1090820_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COUNTY_MOI_1090820_3, 
                style: style_COUNTY_MOI_1090820_3,
                interactive: true,
    title: 'COUNTY_MOI_1090820 複製<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_3_0.png" /> 0 - 20000<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_3_1.png" /> 20000 - 40000<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_3_2.png" /> 40000 - 60000<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_3_3.png" /> 60000 - 80000<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_3_4.png" /> 80000 - 100000<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_3_5.png" /> 100000 - 107593<br />'
        });
var format_Banana_Size_4 = new ol.format.GeoJSON();
var features_Banana_Size_4 = format_Banana_Size_4.readFeatures(json_Banana_Size_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Banana_Size_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Banana_Size_4.addFeatures(features_Banana_Size_4);
var lyr_Banana_Size_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Banana_Size_4, 
                style: style_Banana_Size_4,
                interactive: true,
    title: 'Banana_Size<br />\
    <img src="styles/legend/Banana_Size_4_0.png" /> 0 - 20000<br />\
    <img src="styles/legend/Banana_Size_4_1.png" /> 20000 - 40000<br />\
    <img src="styles/legend/Banana_Size_4_2.png" /> 40000 - 60000<br />\
    <img src="styles/legend/Banana_Size_4_3.png" /> 60000 - 80000<br />\
    <img src="styles/legend/Banana_Size_4_4.png" /> 80000 - 100000<br />\
    <img src="styles/legend/Banana_Size_4_5.png" /> 100000 - 107593<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_roadmap_2.setVisible(true);lyr_COUNTY_MOI_1090820_3.setVisible(true);lyr_Banana_Size_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleMaps_1,lyr_roadmap_2,lyr_COUNTY_MOI_1090820_3,lyr_Banana_Size_4];
lyr_COUNTY_MOI_1090820_3.set('fieldAliases', {'COUNTYID': 'COUNTYID', 'COUNTYCODE': 'COUNTYCODE', 'COUNTYNAME': 'COUNTYNAME', 'COUNTYENG': 'COUNTYENG', '2022年香蕉產量_公噸': '2022年香蕉產量_公噸', '2021年香蕉產量_公噸': '2021年香蕉產量_公噸', '2022年鳳梨產量_公噸': '2022年鳳梨產量_公噸', '2021年鳳梨產量_公噸': '2021年鳳梨產量_公噸', '2022年香蕉每公頃平均產量_公斤': '2022年香蕉每公頃平均產量_公斤', '2021年香蕉每公頃平均產量_公斤': '2021年香蕉每公頃平均產量_公斤', '2022年鳳梨每公頃平均產量_公斤': '2022年鳳梨每公頃平均產量_公斤', '2021年鳳梨每公頃平均產量_公斤': '2021年鳳梨每公頃平均產量_公斤', });
lyr_Banana_Size_4.set('fieldAliases', {'COUNTYID': 'COUNTYID', 'COUNTYCODE': 'COUNTYCODE', 'COUNTYNAME': 'COUNTYNAME', 'COUNTYENG': 'COUNTYENG', '2022年香蕉產量_公噸': '2022年香蕉產量_公噸', '2021年香蕉產量_公噸': '2021年香蕉產量_公噸', '2022年鳳梨產量_公噸': '2022年鳳梨產量_公噸', '2021年鳳梨產量_公噸': '2021年鳳梨產量_公噸', '2022年香蕉每公頃平均產量_公斤': '2022年香蕉每公頃平均產量_公斤', '2021年香蕉每公頃平均產量_公斤': '2021年香蕉每公頃平均產量_公斤', '2022年鳳梨每公頃平均產量_公斤': '2022年鳳梨每公頃平均產量_公斤', '2021年鳳梨每公頃平均產量_公斤': '2021年鳳梨每公頃平均產量_公斤', });
lyr_COUNTY_MOI_1090820_3.set('fieldImages', {'COUNTYID': 'TextEdit', 'COUNTYCODE': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'COUNTYENG': 'TextEdit', '2022年香蕉產量_公噸': 'TextEdit', '2021年香蕉產量_公噸': 'TextEdit', '2022年鳳梨產量_公噸': 'TextEdit', '2021年鳳梨產量_公噸': 'TextEdit', '2022年香蕉每公頃平均產量_公斤': 'TextEdit', '2021年香蕉每公頃平均產量_公斤': 'TextEdit', '2022年鳳梨每公頃平均產量_公斤': 'TextEdit', '2021年鳳梨每公頃平均產量_公斤': 'TextEdit', });
lyr_Banana_Size_4.set('fieldImages', {'COUNTYID': 'TextEdit', 'COUNTYCODE': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'COUNTYENG': 'TextEdit', '2022年香蕉產量_公噸': 'TextEdit', '2021年香蕉產量_公噸': 'TextEdit', '2022年鳳梨產量_公噸': 'TextEdit', '2021年鳳梨產量_公噸': 'TextEdit', '2022年香蕉每公頃平均產量_公斤': 'TextEdit', '2021年香蕉每公頃平均產量_公斤': 'TextEdit', '2022年鳳梨每公頃平均產量_公斤': 'TextEdit', '2021年鳳梨每公頃平均產量_公斤': 'TextEdit', });
lyr_COUNTY_MOI_1090820_3.set('fieldLabels', {'COUNTYID': 'header label', 'COUNTYCODE': 'header label', 'COUNTYNAME': 'header label', 'COUNTYENG': 'header label', '2022年香蕉產量_公噸': 'header label', '2021年香蕉產量_公噸': 'header label', '2022年鳳梨產量_公噸': 'header label', '2021年鳳梨產量_公噸': 'header label', '2022年香蕉每公頃平均產量_公斤': 'header label', '2021年香蕉每公頃平均產量_公斤': 'header label', '2022年鳳梨每公頃平均產量_公斤': 'header label', '2021年鳳梨每公頃平均產量_公斤': 'header label', });
lyr_Banana_Size_4.set('fieldLabels', {'COUNTYID': 'header label', 'COUNTYCODE': 'header label', 'COUNTYNAME': 'header label', 'COUNTYENG': 'header label', '2022年香蕉產量_公噸': 'header label', '2021年香蕉產量_公噸': 'header label', '2022年鳳梨產量_公噸': 'header label', '2021年鳳梨產量_公噸': 'header label', '2022年香蕉每公頃平均產量_公斤': 'header label', '2021年香蕉每公頃平均產量_公斤': 'header label', '2022年鳳梨每公頃平均產量_公斤': 'header label', '2021年鳳梨每公頃平均產量_公斤': 'header label', });
lyr_Banana_Size_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});