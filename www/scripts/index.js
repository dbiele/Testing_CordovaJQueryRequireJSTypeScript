define(["require", "exports"], function (require, exports) {
    requirejs.config({
        paths: {
            jquery: 'lib/jquery-2.1.4'
        }
    });
    require(['../cordova', 'app'], function (app) {
    });
});
//# sourceMappingURL=index.js.map