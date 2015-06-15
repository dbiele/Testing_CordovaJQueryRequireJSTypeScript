/// <reference path='typings/requirejs/require.d.ts' />
import App = require('app');
requirejs.config({
    paths: {
        jquery: 'lib/jquery-2.1.4'
    }
});
require(['../cordova', 'app'], function (app) {
    //The following line appears to be the problem. When uncommented it causes the error and looks for scripts/jquery.
    //App.initialize();
});
// More information about RequireJS can be found @ http://requirejs.org/docs/api.html