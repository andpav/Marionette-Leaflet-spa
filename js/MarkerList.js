var MarkerMVC = MarkerMVC || {};

(function () {
    'use strict';

    MarkerMVC.MarkerItemView = Backbone.Marionette.ItemView.extend({
        tagName: 'li',
        template: "#template-markerItemView",

        ui: {
            element: "#markerCoords"
        },

        events: {

            "click @ui.element": 'listElementClicked'

        },


        initialize: function () {

            // console.log(this.model);

        },

        listElementClicked: function () {
            MarkerMVC.App.vent.trigger('listElementClicked', this.model);

        }

    });

// Layout Collection View
// ------------------
    MarkerMVC.MarkerListView = Backbone.Marionette.CollectionView.extend({
        template: '#template-markerListView',
        childView: MarkerMVC.MarkerItemView,
        childViewContainer: '#markerList',


        initialize: function () {
            this.map = this.options.map;
            _.each(this.options.collection.models, function (model) {


                this.blueIcon = L.icon({
                    iconUrl: 'img/blue.png',
                    iconSize: [25, 41]
                });

                this.redIcon = L.icon({
                    iconUrl: 'img/red.png',
                    iconSize: [25, 41]
                });


                this.showOnMap(model);

            }, this);

            MarkerMVC.App.vent.on('listElementClicked', function (marker) {

                this.centralize(marker);

            }, this);


        },
        showOnMap: function (model) {


            L.marker([model.get("lon"), model.get("lat")], {icon: this.blueIcon}).addTo(this.map).on('click', function () {
                this.centralize(model);
            }, this);
        },

        centralize: function (model) {

            this.map.setView([model.get("lon"), model.get("lat")], 13);

            if (!!this.selectedItem) {

                this.selectedItem.set("selected", false);
                this.map.removeLayer(this.selectedMarker);

            }

            var marker = L.marker([model.get("lon"), model.get("lat")], {icon: this.redIcon}).on('click', function () {
                this.centralize(model);
            }, this);

            marker.addTo(this.map).bindPopup("<b>" + model.get("title") + "</b>"
                + "<br>" + "longitude: " + model.get("lon") +
                "<br>" + "latitude: " + model.get("lat")).openPopup();


            model.set("selected", true);

            this.selectedItem = model;
            this.selectedMarker = marker;

            this.render();


        }


    });
})();
