define(["require", "exports", 'jquery'], function (require, exports, jq) {
    var App;
    (function (App) {
        "use strict";
        function initialize() {
            console.log("initialize called");
        }
        App.initialize = initialize;
        document.addEventListener('deviceready', onDeviceReady, false);
        function onDeviceReady() {
            console.log("cordova is ready: onDeviceReady");
            console.log("testing intialize" + jq.fn.jquery);
        }
    })(App || (App = {}));
    return App;
});
//# sourceMappingURL=app.js.map