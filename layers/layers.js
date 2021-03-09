var wms_layers = [];


        var lyr_Googlemaps_0 = new ol.layer.Tile({
            'title': 'Google maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Googlehybrid_1 = new ol.layer.Tile({
            'title': 'Google hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamento_2 = new ol.format.GeoJSON();
var features_Departamento_2 = format_Departamento_2.readFeatures(json_Departamento_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamento_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_2.addFeatures(features_Departamento_2);
var lyr_Departamento_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamento_2, 
                style: style_Departamento_2,
                interactive: true,
                title: '<img src="styles/legend/Departamento_2.png" /> Departamento'
            });
var format_ViviendasenreasruralesINDEC_3 = new ol.format.GeoJSON();
var features_ViviendasenreasruralesINDEC_3 = format_ViviendasenreasruralesINDEC_3.readFeatures(json_ViviendasenreasruralesINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasruralesINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasruralesINDEC_3.addFeatures(features_ViviendasenreasruralesINDEC_3);
var lyr_ViviendasenreasruralesINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasruralesINDEC_3, 
                style: style_ViviendasenreasruralesINDEC_3,
                interactive: true,
    title: 'Viviendas en áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_0.png" /> 0<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_1.png" /> 1 - 900 <br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_2.png" /> 901 - 4.000 <br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_3.png" /> 4.001 - 6.650 <br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_3_4.png" /> 6.651 - 10.650 <br />'
        });
var format_PEAINDEC_4 = new ol.format.GeoJSON();
var features_PEAINDEC_4 = format_PEAINDEC_4.readFeatures(json_PEAINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_4.addFeatures(features_PEAINDEC_4);
var lyr_PEAINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_4, 
                style: style_PEAINDEC_4,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_4_0.png" /> 8.000 - 22.000 <br />\
    <img src="styles/legend/PEAINDEC_4_1.png" /> 22.001 - 50.620 <br />\
    <img src="styles/legend/PEAINDEC_4_2.png" /> 50.621 - 113.785 <br />\
    <img src="styles/legend/PEAINDEC_4_3.png" /> 113.785 o más<br />'
        });
var format_CabezasdeporcinosMAGyP_5 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_5 = format_CabezasdeporcinosMAGyP_5.readFeatures(json_CabezasdeporcinosMAGyP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_5.addFeatures(features_CabezasdeporcinosMAGyP_5);
var lyr_CabezasdeporcinosMAGyP_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_5, 
                style: style_CabezasdeporcinosMAGyP_5,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_5_0.png" /> 70 - 900 <br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_5_1.png" /> 901 - 2.485 <br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_5_2.png" /> 2.486 - 4.365 <br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_5_3.png" /> 4.366 o más<br />'
        });
var format_CabezasdeovinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_6 = format_CabezasdeovinosMAGyP_6.readFeatures(json_CabezasdeovinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_6.addFeatures(features_CabezasdeovinosMAGyP_6);
var lyr_CabezasdeovinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_6, 
                style: style_CabezasdeovinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_1.png" /> 1 - 300 <br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_2.png" /> 301 - 1.700 <br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_3.png" /> 1.701 - 4.200 <br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_4.png" /> 4.201 o más<br />'
        });
var format_CabezasdecaprinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_7 = format_CabezasdecaprinosMAGyP_7.readFeatures(json_CabezasdecaprinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_7.addFeatures(features_CabezasdecaprinosMAGyP_7);
var lyr_CabezasdecaprinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_7, 
                style: style_CabezasdecaprinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_1.png" /> 1 - 225 <br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_2.png" /> 226 - 1.000 <br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_3.png" /> 1.00 - 4.900 <br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_4.png" /> 4.901 o más<br />'
        });
var format_CabezasdebovinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_8 = format_CabezasdebovinosMAGyP_8.readFeatures(json_CabezasdebovinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_8.addFeatures(features_CabezasdebovinosMAGyP_8);
var lyr_CabezasdebovinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_8, 
                style: style_CabezasdebovinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_1.png" /> 1 - 800 <br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_2.png" /> 801 - 4.450 <br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_3.png" /> 4.451 - 25.650 <br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_4.png" /> 25.651 - 45.100 <br />'
        });
var format_HectreasdetabacoINDEC_9 = new ol.format.GeoJSON();
var features_HectreasdetabacoINDEC_9 = format_HectreasdetabacoINDEC_9.readFeatures(json_HectreasdetabacoINDEC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdetabacoINDEC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdetabacoINDEC_9.addFeatures(features_HectreasdetabacoINDEC_9);
var lyr_HectreasdetabacoINDEC_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdetabacoINDEC_9, 
                style: style_HectreasdetabacoINDEC_9,
                interactive: true,
    title: 'Hectáreas de tabaco (INDEC)<br />\
    <img src="styles/legend/HectreasdetabacoINDEC_9_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdetabacoINDEC_9_1.png" /> 1 - 50 <br />\
    <img src="styles/legend/HectreasdetabacoINDEC_9_2.png" /> 51 - 650 <br />\
    <img src="styles/legend/HectreasdetabacoINDEC_9_3.png" /> 651 o más<br />'
        });
var format_HectreasdehortalizasINDEC_10 = new ol.format.GeoJSON();
var features_HectreasdehortalizasINDEC_10 = format_HectreasdehortalizasINDEC_10.readFeatures(json_HectreasdehortalizasINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdehortalizasINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdehortalizasINDEC_10.addFeatures(features_HectreasdehortalizasINDEC_10);
var lyr_HectreasdehortalizasINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdehortalizasINDEC_10, 
                style: style_HectreasdehortalizasINDEC_10,
                interactive: true,
    title: 'Hectáreas de hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_1.png" /> 10 - 80 <br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_2.png" /> 81 - 225 <br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_3.png" /> 225 - 575 <br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_4.png" /> 576 - 1.260<br />'
        });
var format_HectreasdecaadeazucarINDEC_11 = new ol.format.GeoJSON();
var features_HectreasdecaadeazucarINDEC_11 = format_HectreasdecaadeazucarINDEC_11.readFeatures(json_HectreasdecaadeazucarINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdecaadeazucarINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdecaadeazucarINDEC_11.addFeatures(features_HectreasdecaadeazucarINDEC_11);
var lyr_HectreasdecaadeazucarINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdecaadeazucarINDEC_11, 
                style: style_HectreasdecaadeazucarINDEC_11,
                interactive: true,
    title: 'Hectáreas de caña de azucar (INDEC)<br />\
    <img src="styles/legend/HectreasdecaadeazucarINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdecaadeazucarINDEC_11_1.png" /> 50 - 4.000 <br />\
    <img src="styles/legend/HectreasdecaadeazucarINDEC_11_2.png" /> 4.001 - 13.000 <br />\
    <img src="styles/legend/HectreasdecaadeazucarINDEC_11_3.png" /> 13.001 - 30.900 <br />\
    <img src="styles/legend/HectreasdecaadeazucarINDEC_11_4.png" /> 30.901 - 47.900 <br />'
        });
var format_HectreasdelimonerosINDEC_12 = new ol.format.GeoJSON();
var features_HectreasdelimonerosINDEC_12 = format_HectreasdelimonerosINDEC_12.readFeatures(json_HectreasdelimonerosINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdelimonerosINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdelimonerosINDEC_12.addFeatures(features_HectreasdelimonerosINDEC_12);
var lyr_HectreasdelimonerosINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdelimonerosINDEC_12, 
                style: style_HectreasdelimonerosINDEC_12,
                interactive: true,
    title: 'Hectáreas de limoneros (INDEC)<br />\
    <img src="styles/legend/HectreasdelimonerosINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdelimonerosINDEC_12_1.png" /> 85 - 600 <br />\
    <img src="styles/legend/HectreasdelimonerosINDEC_12_2.png" /> 601 - 2.035 <br />\
    <img src="styles/legend/HectreasdelimonerosINDEC_12_3.png" /> 2.036 - 5.650 <br />\
    <img src="styles/legend/HectreasdelimonerosINDEC_12_4.png" /> 5.651 - 8.900 <br />'
        });
var format_HectreasdemaizMAGyP_13 = new ol.format.GeoJSON();
var features_HectreasdemaizMAGyP_13 = format_HectreasdemaizMAGyP_13.readFeatures(json_HectreasdemaizMAGyP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdemaizMAGyP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdemaizMAGyP_13.addFeatures(features_HectreasdemaizMAGyP_13);
var lyr_HectreasdemaizMAGyP_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdemaizMAGyP_13, 
                style: style_HectreasdemaizMAGyP_13,
                interactive: true,
    title: 'Hectáreas de maiz (MAGyP)<br />\
    <img src="styles/legend/HectreasdemaizMAGyP_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdemaizMAGyP_13_1.png" /> 1 - 500 <br />\
    <img src="styles/legend/HectreasdemaizMAGyP_13_2.png" /> 501 - 6.000 <br />\
    <img src="styles/legend/HectreasdemaizMAGyP_13_3.png" /> 6.001 - 17.500 <br />\
    <img src="styles/legend/HectreasdemaizMAGyP_13_4.png" /> 17.501 o más<br />'
        });
var format_HectreasdetrigoMAGyP_14 = new ol.format.GeoJSON();
var features_HectreasdetrigoMAGyP_14 = format_HectreasdetrigoMAGyP_14.readFeatures(json_HectreasdetrigoMAGyP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdetrigoMAGyP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdetrigoMAGyP_14.addFeatures(features_HectreasdetrigoMAGyP_14);
var lyr_HectreasdetrigoMAGyP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdetrigoMAGyP_14, 
                style: style_HectreasdetrigoMAGyP_14,
                interactive: true,
    title: 'Hectáreas de trigo (MAGyP)<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_14_1.png" /> 1 - 400 <br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_14_2.png" /> 401 - 10.000 <br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_14_3.png" /> 10.001 - 15.000 <br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_14_4.png" /> 15.001 o más<br />'
        });
var format_HectreasdesojaMAGyP_15 = new ol.format.GeoJSON();
var features_HectreasdesojaMAGyP_15 = format_HectreasdesojaMAGyP_15.readFeatures(json_HectreasdesojaMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdesojaMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdesojaMAGyP_15.addFeatures(features_HectreasdesojaMAGyP_15);
var lyr_HectreasdesojaMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdesojaMAGyP_15, 
                style: style_HectreasdesojaMAGyP_15,
                interactive: true,
    title: 'Hectáreas de soja (MAGyP)<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_15_1.png" /> 200 - 3.200 <br />\
    <img src="styles/legend/HectreasdesojaMAGyP_15_2.png" /> 3.201 - 24.200 <br />\
    <img src="styles/legend/HectreasdesojaMAGyP_15_3.png" /> 24.201 - 30.600 <br />\
    <img src="styles/legend/HectreasdesojaMAGyP_15_4.png" /> 30.601 o más<br />'
        });
var format_Localidades_16 = new ol.format.GeoJSON();
var features_Localidades_16 = format_Localidades_16.readFeatures(json_Localidades_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_16.addFeatures(features_Localidades_16);
var lyr_Localidades_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_16, 
                style: style_Localidades_16,
                interactive: true,
                title: '<img src="styles/legend/Localidades_16.png" /> Localidades'
            });
var format_BER_17 = new ol.format.GeoJSON();
var features_BER_17 = format_BER_17.readFeatures(json_BER_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_17.addFeatures(features_BER_17);
var lyr_BER_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_17, 
                style: style_BER_17,
                interactive: true,
                title: '<img src="styles/legend/BER_17.png" /> BER'
            });
var format_BER_18 = new ol.format.GeoJSON();
var features_BER_18 = format_BER_18.readFeatures(json_BER_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_18.addFeatures(features_BER_18);
var lyr_BER_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_18, 
                style: style_BER_18,
                interactive: true,
                title: '<img src="styles/legend/BER_18.png" /> BER'
            });
var format_Delegacion_19 = new ol.format.GeoJSON();
var features_Delegacion_19 = format_Delegacion_19.readFeatures(json_Delegacion_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delegacion_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delegacion_19.addFeatures(features_Delegacion_19);
var lyr_Delegacion_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delegacion_19, 
                style: style_Delegacion_19,
                interactive: true,
                title: '<img src="styles/legend/Delegacion_19.png" /> Delegacion'
            });

lyr_Googlemaps_0.setVisible(true);lyr_Googlehybrid_1.setVisible(true);lyr_Departamento_2.setVisible(true);lyr_ViviendasenreasruralesINDEC_3.setVisible(true);lyr_PEAINDEC_4.setVisible(true);lyr_CabezasdeporcinosMAGyP_5.setVisible(true);lyr_CabezasdeovinosMAGyP_6.setVisible(true);lyr_CabezasdecaprinosMAGyP_7.setVisible(true);lyr_CabezasdebovinosMAGyP_8.setVisible(true);lyr_HectreasdetabacoINDEC_9.setVisible(true);lyr_HectreasdehortalizasINDEC_10.setVisible(true);lyr_HectreasdecaadeazucarINDEC_11.setVisible(true);lyr_HectreasdelimonerosINDEC_12.setVisible(true);lyr_HectreasdemaizMAGyP_13.setVisible(true);lyr_HectreasdetrigoMAGyP_14.setVisible(true);lyr_HectreasdesojaMAGyP_15.setVisible(true);lyr_Localidades_16.setVisible(true);lyr_BER_17.setVisible(true);lyr_BER_18.setVisible(true);lyr_Delegacion_19.setVisible(true);
var layersList = [lyr_Googlemaps_0,lyr_Googlehybrid_1,lyr_Departamento_2,lyr_ViviendasenreasruralesINDEC_3,lyr_PEAINDEC_4,lyr_CabezasdeporcinosMAGyP_5,lyr_CabezasdeovinosMAGyP_6,lyr_CabezasdecaprinosMAGyP_7,lyr_CabezasdebovinosMAGyP_8,lyr_HectreasdetabacoINDEC_9,lyr_HectreasdehortalizasINDEC_10,lyr_HectreasdecaadeazucarINDEC_11,lyr_HectreasdelimonerosINDEC_12,lyr_HectreasdemaizMAGyP_13,lyr_HectreasdetrigoMAGyP_14,lyr_HectreasdesojaMAGyP_15,lyr_Localidades_16,lyr_BER_17,lyr_BER_18,lyr_Delegacion_19];
lyr_Departamento_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_ViviendasenreasruralesINDEC_3.set('fieldAliases', {'viv rur': 'viv rur', });
lyr_PEAINDEC_4.set('fieldAliases', {'pea': 'pea', });
lyr_CabezasdeporcinosMAGyP_5.set('fieldAliases', {'porcinos': 'porcinos', });
lyr_CabezasdeovinosMAGyP_6.set('fieldAliases', {'ovinos': 'ovinos', });
lyr_CabezasdecaprinosMAGyP_7.set('fieldAliases', {'caprinos': 'caprinos', });
lyr_CabezasdebovinosMAGyP_8.set('fieldAliases', {'bovinos': 'bovinos', });
lyr_HectreasdetabacoINDEC_9.set('fieldAliases', {'Tabaco': 'Tabaco', });
lyr_HectreasdehortalizasINDEC_10.set('fieldAliases', {'Hortaliza': 'Hortaliza', });
lyr_HectreasdecaadeazucarINDEC_11.set('fieldAliases', {'azucar': 'azucar', });
lyr_HectreasdelimonerosINDEC_12.set('fieldAliases', {'limonero': 'limonero', });
lyr_HectreasdemaizMAGyP_13.set('fieldAliases', {'maiz': 'maiz', });
lyr_HectreasdetrigoMAGyP_14.set('fieldAliases', {'trigo': 'trigo', });
lyr_HectreasdesojaMAGyP_15.set('fieldAliases', {'soja': 'soja', });
lyr_Localidades_16.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_BER_17.set('fieldAliases', {'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', 'Localidad': 'Localidad', });
lyr_BER_18.set('fieldAliases', {'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', 'Localidad': 'Localidad', });
lyr_Delegacion_19.set('fieldAliases', {'LOCALIDAD': 'LOCALIDAD', });
lyr_Departamento_2.set('fieldImages', {'Depto': '', });
lyr_ViviendasenreasruralesINDEC_3.set('fieldImages', {'viv rur': 'TextEdit', });
lyr_PEAINDEC_4.set('fieldImages', {'pea': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_5.set('fieldImages', {'porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_6.set('fieldImages', {'ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_7.set('fieldImages', {'caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_8.set('fieldImages', {'bovinos': 'TextEdit', });
lyr_HectreasdetabacoINDEC_9.set('fieldImages', {'Tabaco': 'TextEdit', });
lyr_HectreasdehortalizasINDEC_10.set('fieldImages', {'Hortaliza': 'TextEdit', });
lyr_HectreasdecaadeazucarINDEC_11.set('fieldImages', {'azucar': 'TextEdit', });
lyr_HectreasdelimonerosINDEC_12.set('fieldImages', {'limonero': 'TextEdit', });
lyr_HectreasdemaizMAGyP_13.set('fieldImages', {'maiz': 'TextEdit', });
lyr_HectreasdetrigoMAGyP_14.set('fieldImages', {'trigo': 'TextEdit', });
lyr_HectreasdesojaMAGyP_15.set('fieldImages', {'soja': 'TextEdit', });
lyr_Localidades_16.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_BER_17.set('fieldImages', {'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', 'Localidad': 'TextEdit', });
lyr_BER_18.set('fieldImages', {'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', 'Localidad': 'TextEdit', });
lyr_Delegacion_19.set('fieldImages', {'LOCALIDAD': 'TextEdit', });
lyr_Departamento_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_ViviendasenreasruralesINDEC_3.set('fieldLabels', {'viv rur': 'inline label', });
lyr_PEAINDEC_4.set('fieldLabels', {'pea': 'inline label', });
lyr_CabezasdeporcinosMAGyP_5.set('fieldLabels', {'porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_6.set('fieldLabels', {'ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_7.set('fieldLabels', {'caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_8.set('fieldLabels', {'bovinos': 'inline label', });
lyr_HectreasdetabacoINDEC_9.set('fieldLabels', {'Tabaco': 'inline label', });
lyr_HectreasdehortalizasINDEC_10.set('fieldLabels', {'Hortaliza': 'inline label', });
lyr_HectreasdecaadeazucarINDEC_11.set('fieldLabels', {'azucar': 'inline label', });
lyr_HectreasdelimonerosINDEC_12.set('fieldLabels', {'limonero': 'inline label', });
lyr_HectreasdemaizMAGyP_13.set('fieldLabels', {'maiz': 'inline label', });
lyr_HectreasdetrigoMAGyP_14.set('fieldLabels', {'trigo': 'inline label', });
lyr_HectreasdesojaMAGyP_15.set('fieldLabels', {'soja': 'inline label', });
lyr_Localidades_16.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_BER_17.set('fieldLabels', {'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', 'Localidad': 'inline label', });
lyr_BER_18.set('fieldLabels', {'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', 'Localidad': 'inline label', });
lyr_Delegacion_19.set('fieldLabels', {'LOCALIDAD': 'inline label', });
lyr_Delegacion_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});