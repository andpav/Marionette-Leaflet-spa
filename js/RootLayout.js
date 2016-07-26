
var MarkerMVC = MarkerMVC || {};

(function () {
    'use strict';

    MarkerMVC.RootLayout = Backbone.Marionette.LayoutView.extend({
        el:'.wrapper',
        regions: {
            markerCollection: '#markerCollection'
        },

        initialize: function () {
            this.MarkerList = new MarkerMVC.MarkerList();

            var data = [{
                "title": "marker #1",
                "lon": 51.5,
                "lat": -0.08
            },
                {
                    "title": "marker #2",
                    "lon": 51.6,
                    "lat": -0.28
                },
                {
                    "title": "marker #3",
                    "lon": 51.3,
                    "lat": -0.02
                },
                {
                    "title": "marker #4",
                    "lon": 51.4,
                    "lat": -0.22
                },
                {
                    "title": "marker #5",
                    "lon": 51.5,
                    "lat": -0.3
                },
                {
                    "title": "marker #6",
                    "lon": 51.5,
                    "lat": 0.09
                },
                {
                    "title": "marker #7",
                    "lon": 51.6,
                    "lat": 0.02
                },
                {
                    "title": "marker #8",
                    "lon": 51.4,
                    "lat": 0.03
                },
                {
                    "title": "marker #9",
                    "lon": 51.7,
                    "lat": -0.16
                }
            ];
            /*
            var data = $.getJSON( "input.json", function() {
                console.log( "success" );
            });
            */

           // var data = JSON.parse(input);

            this.MarkerList.set(data);

            this.map = L.map('mapId').setView([51.505, -0.09], 10);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18,
                id: 'andpav.0cj5158n',
                accessToken: 'pk.eyJ1IjoiYW5kcGF2IiwiYSI6ImNpcGJ0bHd0azAwMXV2aG5uZng2MjZ6d3IifQ.rQNpERb6NvmwsbH2Glowdg'
            }).addTo(this.map);

            this.showMarkerList(this.MarkerList,this.map);

        },
        showMarkerList: function (markerList,map1) {
            this.showChildView('markerCollection',new MarkerMVC.MarkerListView({
                collection: markerList,
                map: map1
            }));
        }
    });
})();
