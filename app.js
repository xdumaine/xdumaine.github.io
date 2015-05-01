(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/app.js":[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Test = _interopRequire(require("./test"));

var App = function App() {
    _classCallCheck(this, App);

    Test.test();
    setTimeout(function () {
        return window.location = "http://xdumaine.com";
    }, 3000);
};

module.exports = new App();

},{"./test":"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-fp09xGt6.tmp/src/test.js"}],"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-fp09xGt6.tmp/src/test.js":[function(require,module,exports){
"use strict";

module.exports = {
    test: function test() {
        console.log("test - hi");
    }
};

},{}]},{},["./src/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm9jY29saS1mYXN0LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9hcHAuanMiLCJzcmMvdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztJQ0FPLElBQUksMkJBQU0sUUFBUTs7SUFFbkIsR0FBRyxHQUNNLFNBRFQsR0FBRyxHQUNTOzBCQURaLEdBQUc7O0FBRUQsUUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ1osY0FBVSxDQUFDO2VBQU0sTUFBTSxDQUFDLFFBQVEsR0FBRyxxQkFBcUI7S0FBQSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQ25FOztpQkFHVSxJQUFJLEdBQUcsRUFBRTs7Ozs7aUJDVFQ7QUFDWCxRQUFJLEVBQUEsZ0JBQUc7QUFDSCxlQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzVCO0NBQ0oiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFRlc3QgZnJvbSAnLi90ZXN0JztcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgVGVzdC50ZXN0KCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gd2luZG93LmxvY2F0aW9uID0gJ2h0dHA6Ly94ZHVtYWluZS5jb20nLCAzMDAwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBcHAoKTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdCAtIGhpJyk7XG4gICAgfVxufTtcbiJdfQ==
