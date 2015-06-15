# Testing_CordovaJQueryRequireJSTypeScript
Problem with requireJS loading jQuery in VS2015 Apache Cordova TypeScript project.

## Problem##
Require.js will look for the jQuery.js file only in scripts/jquery regardless of a requirejs.config.

## Problem Code ##
The problem code is located in `scripts\index.ts`.
 
When App.initialize() is commented out, no errors are reported when debugging in Ripple. 

```
require(['../cordova', 'app'], function (app) {
    //The following line appears to be the problem. When uncommented it causes the error and looks for scripts/jquery.
    //App.initialize();
});
```

However, when App.initialize() is uncommented and tested in ripple, require.js looks only for scripts/jquery and disregards any settings in requirejs.config.

Please see `scripts\index.ts` and publish.  Then uncomment `//App.initialize();` and see if you get an error.

The error is 404 and is unable to find scripts/jquery. 
