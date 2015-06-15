import jq = require('jquery');
module App {
    "use strict";
    export function initialize() {
        console.log("initialize called");
    }
    document.addEventListener('deviceready', onDeviceReady, false);
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        console.log("cordova is ready: onDeviceReady");
        console.log("Checking jQuery version number = " + jq.fn.jquery);
    }
}
export = App;