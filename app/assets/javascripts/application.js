// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var chart = AmCharts.makeChart( "chartdiv1", {
  "type": "radar",
  "theme": "dark",
  "dataProvider": [ 
  {
    "country": "Economico",
    "%": 156.9
  }, {
    "country": "Ambiental",
    "%": 131.1
  }, {
    "country": "Social",
    "%": 115.8
  } 
   ],

  "startDuration": 2,
  "graphs": [ {
    "balloonText": "[[value]] % de indicador",
    "bullet": "round",
    "lineThickness": 1,
    "valueField": "%"
  } ],
  "categoryField": "country",
  "export": {
    "enabled": true
  }
} );

var chart = AmCharts.makeChart( "IndicadorEsperado", {
  "type": "radar",
  "theme": "dark",
  "dataProvider": [ 
  {
    "country": "Economico",
    "%": 156.9
  }, {
    "country": "Ambiental",
    "%": 131.1
  }, {
    "country": "Social",
    "%": 115.8
  } 
   ],

  "startDuration": 2,
  "graphs": [ {
    "balloonText": "[[value]] % de indicador",
    "bullet": "round",
    "lineThickness": 1,
    "valueField": "%"
  } ],
  "categoryField": "country",
  "export": {
    "enabled": true
  }
} );

      var chart = AmCharts.makeChart("chartdiv", {
    "type": "xy",
    "theme": "light",
    "autoMarginOffset": 20,
    "dataProvider": [{
        "ax": 1,
        "ay": 0.5,
        "bx": 1,
        "by": 2.2
    }, {
        "ax": 2,
        "ay": 1.3,
        "bx": 2,
        "by": 4.9
    }, {
        "ax": 3,
        "ay": 2.3,
        "bx": 3,
        "by": 5.1
    }, {
        "ax": 4,
        "ay": 2.8,
        "bx": 4,
        "by": 5.3
    }, {
        "ax": 5,
        "ay": 3.5,
        "bx": 5,
        "by": 6.1
    }, {
        "ax": 6,
        "ay": 5.1,
        "bx": 6,
        "by": 8.3
    }, {
        "ax": 7,
        "ay": 6.7,
        "bx": 7,
        "by": 10.5
    }, {
        "ax": 8,
        "ay": 8,
        "bx": 8,
        "by": 12.3
    }, {
        "ax": 9,
        "ay": 8.9,
        "bx": 9,
        "by": 14.5
    }, {
        "ax": 10,
        "ay": 9.7,
        "bx": 10,
        "by": 15
    }, {
        "ax": 11,
        "ay": 10.4,
        "bx": 11,
        "by": 18.8
    }, {
        "ax": 12,
        "ay": 11.7,
        "bx": 12,
        "by": 19
    }],
    "valueAxes": [{
        "position": "bottom",
        "axisAlpha": 0,
        "dashLength": 1,
        "title": "X Axis"
    }, {
        "axisAlpha": 0,
        "dashLength": 1,
        "position": "left",
        "title": "Y Axis"
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "x:[[x]] y:[[y]]",
        "bullet": "triangleUp",
        "lineAlpha": 0,
        "xField": "ax",
        "yField": "ay",
        "lineColor": "#FF6600",
        "fillAlphas": 0
    }, {
        "balloonText": "x:[[x]] y:[[y]]",
        "bullet": "triangleDown",
        "lineAlpha": 0,
        "xField": "bx",
        "yField": "by",
        "lineColor": "#FCD202",
        "fillAlphas": 0
    }],
    "trendLines": [{
        "finalValue": 11,
        "finalXValue": 12,
        "initialValue": 2,
        "initialXValue": 1,
        "lineColor": "#FF6600"
    }, {
        "finalValue": 19,
        "finalXValue": 12,
        "initialValue": 1,
        "initialXValue": 1,
        "lineColor": "#FCD202"
    }],
    "marginLeft": 64,
    "marginBottom": 60,
    "chartScrollbar": {},
    "chartCursor": {},
    "export": {
        "enabled": true,
        "position": "bottom-right"
    }
});


      $(document).ready(function(mostrarMapa){
    $("#esconderIndicador").click(function(mostrarMapa){
        $("#chartdiv1").hide();
    });
    $("#mostrarIndicador").click(function(mostrarMapa){
        $("#chartdiv1").show();
                 console.log('test');


    });
});
            $(document).ready(function(mostrarMapa){
    $("#esconderIndicadorEsperado").click(function(mostrarMapa){
        $("#IndicadorEsperado").hide();
    });
    $("#mostrarIndicadorEsperado").click(function(mostrarMapa){
        $("#IndicadorEsperado").show();
                 console.log('test');


    });
});


      $(document).ready(function(mostrarMapa){
    $("#hide").click(function(mostrarMapa){
        $("#map").hide();
    });
    $("#mostrar").click(function(mostrarMapa){
        $("#map").show();
                 console.log('test');


    });
});

      $(document).ready(function(mostrarMapa){
    $("#escondeGrafica").click(function(mostrarMapa){
        $("#chartdiv").hide();
    });
    $("#mostrarGrafica").click(function(mostrarMapa){
        $("#chartdiv").show();
                 console.log('test');


    });
});


      $(document).ready(function(initMap) {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Aquí es el proyecto');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      });
          console.log("hola");



