var ubicacion = {lat:20.704118 , lng:-100.444068}
var ubicacionUNAM = {lat:20.7004932, lng:-100.4457812}
var ubicacionFresko = {lat:20.705809, lng:-100.444611} 
var map;
var map2;
var map3;
var map4;

function initMap() {
    
    map = new google.maps.Map(document.getElementById('map2'), {
        center: ubicacion,
        zoom: 15 /*https://developers.google.com/maps/documentation/javascript/tutorial#zoom-levels*/
    });
    
    map2 = new google.maps.Map(document.getElementById('map'), {
        center: ubicacion,
        zoom: 15 /*https://developers.google.com/maps/documentation/javascript/tutorial#zoom-levels*/
    });
    var marker = new google.maps.Marker({position: ubicacion, map: map});
    
    map3 = new google.maps.Map(document.getElementById('map3'), {
        center: ubicacion,
        zoom: 15 /*https://developers.google.com/maps/documentation/javascript/tutorial#zoom-levels*/
    });
    
    //Utilizar el método map de Arrays para crear un arreglo con las etiquetas:
    
    //Cadena de carácteres con las etiquetas:
    var labels = 'ABCD';
    
    // var markers = locations.map(function(location, i) {
    //     return new google.maps.Marker({
    //         position: location,
    //         label: labels[i % labels.length],
    //         map: map3
    //     });
    // });
    
    // var markerCluster = new MarkerClusterer(map3, markers,
    //     {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    
    // } No funciona porqué el JS con los MarkerClusterer no existe :) Se supone que deberia de estár aquí:
    //   https://github.com/googlemaps/v3-utility-library/blob/master/markerclusterer/src/markerclusterer.js
    
    var locations = [
        {lat: 20.703480, lng: -100.443000},
        {lat: 20.703485, lng: -100.443005},
        {lat: 20.703490, lng: -100.443010},
        
    ]
    
    var styledMapType = new google.maps.StyledMapType([
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#242f3e"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#746855"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#242f3e"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#263c3f"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#6b9a76"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#38414e"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#212a37"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9ca5b3"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#746855"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#1f2835"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#f3d19c"
                }
            ]
        },
        {
            "featureType": "road.local",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#2f3948"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#17263c"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#515c6d"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#17263c"
                }
            ]
        }
    ], {name: 'Negrito :)'});
    
    
    map4 = new google.maps.Map(document.getElementById('map4'), {
        center: ubicacion,
        zoom: 15, /*https://developers.google.com/maps/documentation/javascript/tutorial#zoom-levels*/
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
            'negrito :)']
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    });
    
    map4.mapTypes.set('negrito :)', styledMapType);
    map4.setMapTypeId('negrito :)');
    
    
    var marker = new google.maps.Marker({
        position: ubicacion,
        map: map4,
        animation: google.maps.Animation.DROP,
        label: 'A', //Se ve feo con animaciones y si la label tiene una longitud > 1 
        title: 'Facultad de Informática'
    });
    
    var image = {
        
        url: 'C:/xampp/htdocs/hidroinformatica/Maps API/cloud.svg',
        // size: new google.maps.Size(50,50),
        // origin: new google.maps.Point(0, 0),
        // anchor: new google.maps.Point(0, 0)
        
    }
    
    var marker2 = new google.maps.Marker({
        position: ubicacionUNAM,
        map: map4,
        // icon: image,
        draggable: true,
        title: 'UNAM'
    });
    
    //Estilos personalizados:
    // https://mapstyle.withgoogle.com/
    //Utilizando iconos de Map Icons
    var marker3 = new google.maps.Marker({
        position: ubicacionFresko,
        map: map4,
        icon: {
            // path: google.maps.SymbolPath.CIRCLE,
            //Path SVG: (Está muy grande el SVG :( )
            path: 'M25.577 8.938c2.297.169 4.306-1.468 4.488-3.648.184-2.191-1.53-4.108-3.827-4.277-2.3-.167-4.309 1.46-4.487 3.651-.179 2.19 1.536 4.103 3.826 4.274zm17.206 32.062l-1.388-12h-2.252c.021-1 .018-1.111-.051-1.718-.067-.621-.264-1.075-.585-1.218.263-.28.438-.636.472-1.037.051-.632-.245-1.223-.74-1.575l-5.732-3.768-4.22-7.946c-.699-1.04-1.883-1.879-3.312-1.999-1.098-.076-2.108.287-2.925.827l-8.374 6.482c-.276.222-.483.514-.577.865l-1.951 7.851-.148.233v.003h-.016c-.327 0-.625.312-.739.725-.11.405-.245.94-.245 1.373v.902h-2.174l-1.388 12h5.609l-2.459 3.935c-.16.305-.348.736-.381 1.152-.121 1.49 1.039 2.785 2.594 2.904 1.111.074 2.067-.462 2.648-1.318l4.15-6.673h.543l-.085-.737 1.151-1.852c.125-.248.522-.855.566-1.143l1.406-6.11 6.001 6.273 1.884 9.431c.301 1.115 1.263 2.035 2.543 2.129 1.557.118 2.92-.981 3.044-2.468l-.017-.548-.984-4.975h8.132zm-31.826-13.01c.056-.473.233-.742.545-.742l.117-.002c.315.381.783.642 1.323.686.619.048 1.175-.219 1.553-.633.084.071.151.178.197.326.083.287.131.616.131.887 0 .162-.008.488-.019.488h-3.876c-.013 0-.009-.643.029-1.01zm5.731 1.01h-1.185c.025-1 .018-1.111-.047-1.718-.056-.52-.203-.922-.436-1.128l1.479-6.442 2.917-2.257-2.728 11.545zm21.758 0h-3.879c-.016 0-.011-.643.029-1.01.052-.473.232-.742.545-.742.449 0 .856-.014 1.217-.022.363-.013.858-.031 1.481-.031.239 0 .401.142.491.431.086.287.132.616.132.887l-.016.487zm-12.546-2.283l1.88-7.936 1.581 2.983c.125.205.273.374.468.533l5.647 3.703h-.853c-.327 0-.447.312-.56.725-.107.405-.063.94-.063 1.373v.902h-2.532l-.409 3.53-5.159-5.813z',
            scale: 1,
        },
        draggable: true,
        title: 'Fresko'
    });
    
    var escocia = {lat:56.4730620 , lng:-4.0971417}
    
    
    //Event listener que te mueve a Escocia después de mover el mapa con el mouse
    // map4.addListener('dragstart', function() {
    //     alert("No me muevas >:(");
    //     window.setTimeout(function() {
    //         map4.panTo(escocia);
    //     }, 3000);
    // });
    
    //Event Listeners: https://developers.google.com/maps/documentation/javascript/events#ui-events
    
    
    //Infowindows
    var infowindow = new google.maps.InfoWindow();
    var informaciondelawindow = document.getElementById('infowindow');
    
    marker2.addListener('click', function() {
        informaciondelawindow.style.display = "inline";
        infowindow.setContent(informaciondelawindow);
        infowindow.open(map4, marker2);
    });
    
    marker3.addListener('click', function() {
        infowindow.setContent("Vamos al Fresko :)");
        infowindow.open(map4, marker3);
    });
    
    //Polyline
    var coordenadasPoligono = [
        
        ubicacion,
        ubicacionUNAM,
        ubicacionFresko
        
    ]
    
    //Construcción del póligono
    var poligono = new google.maps.Polygon({
        paths: coordenadasPoligono,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    poligono.setMap(map4);
    
    
    //Heatmap
    var HeatMapData = [
        
        {location: ubicacionFresko, weight: 1},
        {location: ubicacion, weight: 0.5},
        {location: ubicacionUNAM, weight: 2},
        
    ];
    
    //Esto no funciona :(
    var heatmap = new google.maps.visualization.HeatmapLayer({
        data: HeatMapData
    });
    heatmap.setMap(map4);
}  

initMap();

