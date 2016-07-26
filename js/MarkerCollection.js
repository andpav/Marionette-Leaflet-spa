
var MarkerMVC = MarkerMVC || {};

(function () {
    'use strict';

    // Marker Model
    // ----------
    MarkerMVC.Marker = Backbone.Model.extend({
        defaults: {
            title: '',
            lon: '',
            lat: '',
            selected: false
        },

        initialize: function () {
        }
    });

    // Marker Collection
    // ---------------
    MarkerMVC.MarkerList = Backbone.Collection.extend({
        model: MarkerMVC.Marker

    });


})();
