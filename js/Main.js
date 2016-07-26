
var MarkerMVC = MarkerMVC || {};

(function () {
    'use strict';

    var MarkerApp = Backbone.Marionette.Application.extend({
        setRootLayout: function () {
            this.root = new MarkerMVC.RootLayout();
        }
    });


    MarkerMVC.App = new MarkerApp();

    MarkerMVC.App.on('before:start', function () {
        MarkerMVC.App.setRootLayout();
    });
    MarkerMVC.App.start();
})();