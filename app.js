(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/app.js":[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Test = _interopRequire(require("./test"));

var Header = _interopRequire(require("./header"));

var ProjectSet = _interopRequire(require("./project-set"));

var Card = function Card(opts) {
    _classCallCheck(this, Card);

    this.title = opts.title;
};

var App = function App(elem) {
    _classCallCheck(this, App);

    Test.test();
    this.header = new Header();
    this.projects = new ProjectSet();

    this.cards = ko.observableArray([new Card({ title: "foo" }), new Card({ title: "bar" }), new Card({ title: "baz" })]);

    ko.applyBindings(this, elem);
};

module.exports = new App();

},{"./header":"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-mQMlExPC.tmp/src/header.js","./project-set":"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-mQMlExPC.tmp/src/project-set.js","./test":"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-mQMlExPC.tmp/src/test.js"}],"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-mQMlExPC.tmp/src/header.js":[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Header = function Header() {
    _classCallCheck(this, Header);

    this.links = ko.observableArray([{
        title: "Github",
        iconClass: "fa fa-github",
        target: "https://github.com/xdumaine"
    }, {
        title: "Blog",
        iconClass: "fa fa-rss",
        target: "https://blog.xdumaine.com"
    }, {
        title: "StackOverflow",
        iconClass: "fa fa-stack-overflow",
        target: "https://stackoverflow.com/users/381422/xdumaine"
    }, {
        title: "Résumé",
        iconClass: "fa fa-stack-exchange",
        target: "https://careers.stackoverflow.com/dumaine"
    }, {
        title: "Slides",
        iconClass: "fa fa-tv",
        target: "https://slides.xdumaine.com"
    }]);
};

module.exports = Header;

},{}],"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-mQMlExPC.tmp/src/project-set.js":[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Project = _interopRequire(require("./project"));

var ReferenceLinks = _interopRequire(require("./reference-links"));

var ProjectSet = function ProjectSet() {
    _classCallCheck(this, ProjectSet);

    var morseCode = new Project({
        title: "WebRTC DTMF Morse Code",
        referenceLinks: ReferenceLinks.create({
            demo: "https://morsecode.xdumaine.com",
            source: "https://github.com/xdumaine/webrtc-dtmf-morsecode/"
        }),
        imageSource: "https://cloud.githubusercontent.com/assets/833911/12530692/d14b1ec6-c1b4-11e5-884f-d7c6b88eb1a0.png",
        description: "I decided to put together a demo that converts text into morse code,\n                then sends it over a WebRTC peerconnection using DTMF tones with\n                varying delays. It's not really useful, but it's a sort of experiment\n                and demo of what's possible."
    });

    var singleDivCss = new Project({
        title: "Single Div CSS",
        referenceLinks: ReferenceLinks.create({
            demo: "https://css.xdumaine.com",
            source: "https://github.com/xdumaine/xander.css"
        }),
        liveDemo: "<div class=\"controller\"><div></div></div>",
        description: "I'm working on a series of CSS illustrations\n                inspired by <a href=\"http://a.singlediv.com\" target=\"_blank\">a.singlediv.com</a>.\n                All CSS is written by me, using my own knowledge supplemented by docs and\n                examples online. No snippets are reused. As of now, all illustrations use a single tag."
    });

    var collaborate = new Project({
        title: "Collaborate - Interactive Intelligence",
        wide: true,
        techItems: ["html5", "css3", "javascript", "webrtc"],
        figureSet: [{
            imageSource: "https://cloud.githubusercontent.com/assets/833911/7447918/8f74c89a-f1d9-11e4-863e-4a431477fa25.jpg",
            description: "XMPP based chat with multi-party WebRTC video calling. I work with an outstanding team to refine and improve our team chat.\n                        I headed up an effort to supercharge our app with video calling, based on open source libraries and powered by WebRTC. I work\n                        with javascript (es6 and coffeescript, too!), CSS (LESS), and HTML5 in the Ember.js front-end. As a part of this project, I\n                        contribute to <a href=\"https://github.com/andyet/SimpleWebRTC\" target=\"_blank\">SimpleWebRTC</a> and the\n                        <a href=\"https://github.com/otalk\">OTalk modules</a> like Jingle.js.",
            collapse: ko.observable(false)
        }, {
            imageSource: "https://cloud.githubusercontent.com/assets/833911/7447905/3d33eef8-f1d9-11e4-9c37-b6dafdd697fe.jpg",
            description: "Plugin-less screen sharing. Using browser screen capture APIs and extensions, where necessary.",
            collapse: ko.observable(true)
        }, {
            imageSource: "https://cloud.githubusercontent.com/assets/833911/7447904/3d32bbdc-f1d9-11e4-9e0f-ac87712f987c.jpg",
            description: "Peer-to-peer limitations (mesh network) slowed us down, but didn't stop me. I delivered a working solution optimized for small\n                        conferences to get the product out the door, and powering almost all of our small video conference needs. In the meantime,\n                        I'm working with experts to integrate with a single-point selective forwarding server for an even better experience.",
            collapse: ko.observable(true)
        }]
    });

    var halloween = new Project({
        title: "Halloween 2015",
        imageSource: "https://i.imgur.com/mAPCH1P.jpg",
        description: "For Halloween this year, I dressed as Fry from Futurama.\n                I built Bender's head using syrofoam, paper, and paint.\n                I decorated my office like the Planet Express ship with\n                star-backdrop windows, a hatch door with logo, and a\n                full-sized Slurm machine."
        //todo: allow linking to large image
    });

    var enumerateDevices = new Project({
        title: "enumerateDevices",
        referenceLinks: ReferenceLinks.create({
            demo: "https://www.xdumaine.com/enumerateDevices/test/",
            source: "https://github.com/xdumaine/enumerateDevices/"
        }),
        imageSource: "https://cloud.githubusercontent.com/assets/833911/7502753/6510060c-f40c-11e4-9d6c-4c0e74ca676d.png",
        description: "A WebRTC helper library for normalizing browser APIs for enumerating media devices."
    });

    var aside = new Project({
        title: "Aside (Ghost Theme)",
        referenceLinks: ReferenceLinks.create({
            source: "https://github.com/xdumaine/ghost-aside/"
        }),
        imageSource: "https://cloud.githubusercontent.com/assets/833911/7502961/c8af4bcc-f40d-11e4-8f1f-dca16225c3b6.jpg",
        description: "Aside is a <a href=\"http://ghost.org\">Ghost</a> theme that powers my blog. Makes use of handlebars, CSS3, and the Ghost theme API"
    });

    var motorcycle = new Project({
        title: "Motorcycle LED Effects with Arduino",
        referenceLinks: ReferenceLinks.create({
            demo: "https://twitter.com/xanderdumaine/status/660918113802846208",
            source: "https://github.com/xdumaine/esplora-neopixels"
        }),
        imageSource: "https://cloud.githubusercontent.com/assets/833911/10873518/d164025e-80e3-11e5-8ee3-086d56c32b9b.JPG",
        description: "Arduino Esplora board with Neopixels to add LED effects to motorcycle."
    });

    var sfu = new Project({
        title: "WebRTC with SFU",
        referenceLinks: ReferenceLinks.create({
            slides: "https://slides.xdumaine.com/sfu/",
            video: "https://www.youtube.com/watch?v=wwhT_Y0ex0A"
        }),
        imageSource: "https://cloud.githubusercontent.com/assets/833911/10873501/a1d1657c-80e3-11e5-9f2c-a37d29349ded.png",
        description: "A series of slides I put together around the architecture of using an SFU\n                like Jitsi VideoBridge for building better multipoint video conferencing.\n                Presented at\n                <a href=\"http://www.meetup.com/Triangle-WebRTC/\" target=\"_blank\">the meetup I host.</a>"
    });

    var triangleWebrtc = new Project({
        title: "Triangle WebRTC",
        referenceLinks: ReferenceLinks.create({
            demo: "http://www.meetup.com/Triangle-WebRTC/"
        }),
        imageSource: "https://cloud.githubusercontent.com/assets/833911/11945493/6b2487cc-a81e-11e5-901a-4b9b81f8044f.png",
        description: "A meetup group discussing technical details, innovation, and development of WebRTC."
    });

    var futureWebrtc = new Project({
        title: "The Future of WebRTC",
        referenceLinks: ReferenceLinks.create({
            slides: "https://slides.xdumaine.com/webrtc-nv/",
            video: "https://www.youtube.com/watch?v=25PfgQ0FNwM"
        }),
        imageSource: "https://cloud.githubusercontent.com/assets/833911/11611207/9f4199e6-9b8f-11e5-8d60-0dce135af9b9.png",
        description: "Slides discussing the current state of WebRTC implementation and the current state of spec definition,\n                which will form the future of WebRTC and ORTC.\n                Presented at\n                <a href=\"http://www.meetup.com/Triangle-WebRTC/\" target=\"_blank\">the meetup I host.</a>"
    });

    var webtask = new Project({
        title: "Secure Client Authentication with Webtask",
        referenceLinks: ReferenceLinks.create({
            source: "https://blog.xdumaine.com/using-webtask-io-for-secure-api-tokens/"
        }),
        imageSource: "https://blog.xdumaine.com/content/images/2015/07/Screen-Shot-2015-07-19-at-7-35-19-PM.png",
        description: "Secure authentication to an API from a serverless javascript application using Webtask.io"
    });

    this.projects = ko.observableArray([morseCode, singleDivCss, collaborate, halloween, enumerateDevices, aside, motorcycle, sfu, triangleWebrtc, futureWebrtc, webtask]);
};

module.exports = ProjectSet;

},{"./project":"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-mQMlExPC.tmp/src/project.js","./reference-links":"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-mQMlExPC.tmp/src/reference-links.js"}],"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-mQMlExPC.tmp/src/project.js":[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Project = (function () {
    function Project(item) {
        _classCallCheck(this, Project);

        this.title = item.title;
        this.referenceLinks = item.referenceLinks || null;
        this.techItems = item.techItems ? ko.observableArray(item.techItems) : null;
        this.imageSource = ko.observable(item.imageSource);
        this.liveDemo = ko.observable(item.liveDemo);
        this.wide = ko.observable(item.wide);
        this.description = item.description;
        this.figureSet = ko.observableArray(item.figureSet);
    }

    _createClass(Project, {
        next: {
            value: function next() {
                var items = this.figureSet();
                var first = items[0];
                for (var i = 0; i < items.length; i++) {
                    if (!items[i].collapse()) {
                        if (items[i + 1]) {
                            items[i + 1].collapse(false);
                        } else {
                            first.collapse(false);
                        }
                        items[i].collapse(true);
                        return;
                    }
                }
            }
        },
        previous: {
            value: function previous() {
                var items = this.figureSet();
                var last = items[items.length - 1];
                for (var i = items.length - 1; i >= 0; i--) {
                    if (!items[i].collapse()) {
                        if (i > 0 && items[i - 1]) {
                            items[i - 1].collapse(false);
                        } else {
                            last.collapse(false);
                        }
                        items[i].collapse(true);
                        return;
                    }
                }
            }
        }
    });

    return Project;
})();

module.exports = Project;

},{}],"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-mQMlExPC.tmp/src/reference-links.js":[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var ReferenceLinks = (function () {
    function ReferenceLinks() {
        _classCallCheck(this, ReferenceLinks);
    }

    _createClass(ReferenceLinks, null, {
        create: {
            value: function create(links) {
                var arr = new ko.observableArray();
                if (links.demo) {
                    arr.push({
                        target: links.demo,
                        title: "demo",
                        iconClass: "fa fa-magic"
                    });
                }
                if (links.source) {
                    arr.push({
                        target: links.source,
                        title: "source",
                        iconClass: "fa fa-file-code-o"
                    });
                }
                if (links.slides) {
                    arr.push({
                        target: links.slides,
                        title: "slides",
                        iconClass: "fa fa-television"
                    });
                }
                if (links.video) {
                    arr.push({
                        target: links.video,
                        title: "video",
                        iconClass: "fa-youtube-play"
                    });
                }
                return arr;
            }
        }
    });

    return ReferenceLinks;
})();

module.exports = ReferenceLinks;

},{}],"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-mQMlExPC.tmp/src/test.js":[function(require,module,exports){
"use strict";

module.exports = {
    test: function test() {
        console.log("test - hi");
    }
};

},{}]},{},["./src/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm9jY29saS1mYXN0LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9hcHAuanMiLCJzcmMvaGVhZGVyLmpzIiwic3JjL3Byb2plY3Qtc2V0LmpzIiwic3JjL3Byb2plY3QuanMiLCJzcmMvcmVmZXJlbmNlLWxpbmtzLmpzIiwic3JjL3Rlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNBTyxJQUFJLDJCQUFNLFFBQVE7O0lBQ2xCLE1BQU0sMkJBQU0sVUFBVTs7SUFDdEIsVUFBVSwyQkFBTSxlQUFlOztJQUVoQyxJQUFJLEdBQ0ssU0FEVCxJQUFJLENBQ00sSUFBSSxFQUFFOzBCQURoQixJQUFJOztBQUVGLFFBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztDQUMzQjs7SUFHQyxHQUFHLEdBQ00sU0FEVCxHQUFHLENBQ08sSUFBSSxFQUFFOzBCQURoQixHQUFHOztBQUVELFFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNaLFFBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUMzQixRQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7O0FBRWpDLFFBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUM1QixJQUFJLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUN4QixJQUFJLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUN4QixJQUFJLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUMzQixDQUFDLENBQUM7O0FBRUgsTUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDaEM7O2lCQUdV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QUFTLEVBQUUsbUJBQW1CO3FCQUNqQyxDQUFDLENBQUM7aUJBQ047QUFDRCxvQkFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO0FBQ2QsdUJBQUcsQ0FBQyxJQUFJLENBQUM7QUFDTCw4QkFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO0FBQ3BCLDZCQUFLLEVBQUUsUUFBUTtBQUNmLGlDQUFTLEVBQUUsa0JBQWtCO3FCQUNoQyxDQUFDLENBQUM7aUJBQ047QUFDRCxvQkFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO0FBQ2IsdUJBQUcsQ0FBQyxJQUFJLENBQUM7QUFDTCw4QkFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLO0FBQ25CLDZCQUFLLEVBQUUsT0FBTztBQUNkLGlDQUFTLEVBQUUsaUJBQWlCO3FCQUMvQixDQUFDLENBQUM7aUJBQ047QUFDRCx1QkFBTyxHQUFHLENBQUM7YUFDZDs7OztXQWpDQyxjQUFjOzs7aUJBb0NMLGNBQWM7Ozs7O2lCQ3BDZDtBQUNYLFFBQUksRUFBQSxnQkFBRztBQUNILGVBQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDNUI7Q0FDSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVGVzdCBmcm9tICcuL3Rlc3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgUHJvamVjdFNldCBmcm9tICcuL3Byb2plY3Qtc2V0JztcblxuY2xhc3MgQ2FyZCB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICB0aGlzLnRpdGxlID0gb3B0cy50aXRsZTtcbiAgICB9XG59XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IoZWxlbSkge1xuICAgICAgICBUZXN0LnRlc3QoKTtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBuZXcgUHJvamVjdFNldCgpO1xuXG4gICAgICAgIHRoaXMuY2FyZHMgPSBrby5vYnNlcnZhYmxlQXJyYXkoW1xuICAgICAgICAgICAgbmV3IENhcmQoe3RpdGxlOiAnZm9vJ30pLFxuICAgICAgICAgICAgbmV3IENhcmQoe3RpdGxlOiAnYmFyJ30pLFxuICAgICAgICAgICAgbmV3IENhcmQoe3RpdGxlOiAnYmF6J30pXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcywgZWxlbSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBwKCk7XG4iLCJjbGFzcyBIZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpbmtzID0ga28ub2JzZXJ2YWJsZUFycmF5KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0dpdGh1YicsXG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzOiAnZmEgZmEtZ2l0aHViJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwczovL2dpdGh1Yi5jb20veGR1bWFpbmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnQmxvZycsXG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzOiAnZmEgZmEtcnNzJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwczovL2Jsb2cueGR1bWFpbmUuY29tJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N0YWNrT3ZlcmZsb3cnLFxuICAgICAgICAgICAgICAgIGljb25DbGFzczogJ2ZhIGZhLXN0YWNrLW92ZXJmbG93JyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3VzZXJzLzM4MTQyMi94ZHVtYWluZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdSw6lzdW3DqScsXG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzOiAnZmEgZmEtc3RhY2stZXhjaGFuZ2UnLFxuICAgICAgICAgICAgICAgIHRhcmdldDogJ2h0dHBzOi8vY2FyZWVycy5zdGFja292ZXJmbG93LmNvbS9kdW1haW5lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NsaWRlcycsXG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzOiAnZmEgZmEtdHYnLFxuICAgICAgICAgICAgICAgIHRhcmdldDogJ2h0dHBzOi8vc2xpZGVzLnhkdW1haW5lLmNvbSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFJlZmVyZW5jZUxpbmtzIGZyb20gJy4vcmVmZXJlbmNlLWxpbmtzJztcblxuY2xhc3MgUHJvamVjdFNldCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG1vcnNlQ29kZSA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnV2ViUlRDIERUTUYgTW9yc2UgQ29kZScsXG4gICAgICAgICAgICByZWZlcmVuY2VMaW5rczogUmVmZXJlbmNlTGlua3MuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBkZW1vOiAnaHR0cHM6Ly9tb3JzZWNvZGUueGR1bWFpbmUuY29tJyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20veGR1bWFpbmUvd2VicnRjLWR0bWYtbW9yc2Vjb2RlLydcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL2Nsb3VkLmdpdGh1YnVzZXJjb250ZW50LmNvbS9hc3NldHMvODMzOTExLzEyNTMwNjkyL2QxNGIxZWM2LWMxYjQtMTFlNS04ODRmLWQ3YzZiODhlYjFhMC5wbmcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBJIGRlY2lkZWQgdG8gcHV0IHRvZ2V0aGVyIGEgZGVtbyB0aGF0IGNvbnZlcnRzIHRleHQgaW50byBtb3JzZSBjb2RlLFxuICAgICAgICAgICAgICAgIHRoZW4gc2VuZHMgaXQgb3ZlciBhIFdlYlJUQyBwZWVyY29ubmVjdGlvbiB1c2luZyBEVE1GIHRvbmVzIHdpdGhcbiAgICAgICAgICAgICAgICB2YXJ5aW5nIGRlbGF5cy4gSXQncyBub3QgcmVhbGx5IHVzZWZ1bCwgYnV0IGl0J3MgYSBzb3J0IG9mIGV4cGVyaW1lbnRcbiAgICAgICAgICAgICAgICBhbmQgZGVtbyBvZiB3aGF0J3MgcG9zc2libGUuYFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzaW5nbGVEaXZDc3MgPSBuZXcgUHJvamVjdCh7XG4gICAgICAgICAgICB0aXRsZTogJ1NpbmdsZSBEaXYgQ1NTJyxcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmtzOiBSZWZlcmVuY2VMaW5rcy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRlbW86ICdodHRwczovL2Nzcy54ZHVtYWluZS5jb20nLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS94ZHVtYWluZS94YW5kZXIuY3NzJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBsaXZlRGVtbzogJzxkaXYgY2xhc3M9XCJjb250cm9sbGVyXCI+PGRpdj48L2Rpdj48L2Rpdj4nLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBJJ20gd29ya2luZyBvbiBhIHNlcmllcyBvZiBDU1MgaWxsdXN0cmF0aW9uc1xuICAgICAgICAgICAgICAgIGluc3BpcmVkIGJ5IDxhIGhyZWY9XCJodHRwOi8vYS5zaW5nbGVkaXYuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+YS5zaW5nbGVkaXYuY29tPC9hPi5cbiAgICAgICAgICAgICAgICBBbGwgQ1NTIGlzIHdyaXR0ZW4gYnkgbWUsIHVzaW5nIG15IG93biBrbm93bGVkZ2Ugc3VwcGxlbWVudGVkIGJ5IGRvY3MgYW5kXG4gICAgICAgICAgICAgICAgZXhhbXBsZXMgb25saW5lLiBObyBzbmlwcGV0cyBhcmUgcmV1c2VkLiBBcyBvZiBub3csIGFsbCBpbGx1c3RyYXRpb25zIHVzZSBhIHNpbmdsZSB0YWcuYFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjb2xsYWJvcmF0ZSA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29sbGFib3JhdGUgLSBJbnRlcmFjdGl2ZSBJbnRlbGxpZ2VuY2UnLFxuICAgICAgICAgICAgd2lkZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlY2hJdGVtczogWyAnaHRtbDUnLCAnY3NzMycsICdqYXZhc2NyaXB0JywgJ3dlYnJ0YycgXSxcbiAgICAgICAgICAgIGZpZ3VyZVNldDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL2Nsb3VkLmdpdGh1YnVzZXJjb250ZW50LmNvbS9hc3NldHMvODMzOTExLzc0NDc5MTgvOGY3NGM4OWEtZjFkOS0xMWU0LTg2M2UtNGE0MzE0NzdmYTI1LmpwZycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgWE1QUCBiYXNlZCBjaGF0IHdpdGggbXVsdGktcGFydHkgV2ViUlRDIHZpZGVvIGNhbGxpbmcuIEkgd29yayB3aXRoIGFuIG91dHN0YW5kaW5nIHRlYW0gdG8gcmVmaW5lIGFuZCBpbXByb3ZlIG91ciB0ZWFtIGNoYXQuXG4gICAgICAgICAgICAgICAgICAgICAgICBJIGhlYWRlZCB1cCBhbiBlZmZvcnQgdG8gc3VwZXJjaGFyZ2Ugb3VyIGFwcCB3aXRoIHZpZGVvIGNhbGxpbmcsIGJhc2VkIG9uIG9wZW4gc291cmNlIGxpYnJhcmllcyBhbmQgcG93ZXJlZCBieSBXZWJSVEMuIEkgd29ya1xuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBqYXZhc2NyaXB0IChlczYgYW5kIGNvZmZlZXNjcmlwdCwgdG9vISksIENTUyAoTEVTUyksIGFuZCBIVE1MNSBpbiB0aGUgRW1iZXIuanMgZnJvbnQtZW5kLiBBcyBhIHBhcnQgb2YgdGhpcyBwcm9qZWN0LCBJXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cmlidXRlIHRvIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYW5keWV0L1NpbXBsZVdlYlJUQ1wiIHRhcmdldD1cIl9ibGFua1wiPlNpbXBsZVdlYlJUQzwvYT4gYW5kIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9vdGFsa1wiPk9UYWxrIG1vZHVsZXM8L2E+IGxpa2UgSmluZ2xlLmpzLmAsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlOiBrby5vYnNlcnZhYmxlKGZhbHNlKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vY2xvdWQuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fzc2V0cy84MzM5MTEvNzQ0NzkwNS8zZDMzZWVmOC1mMWQ5LTExZTQtOWMzNy1iNmRhZmRkNjk3ZmUuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBQbHVnaW4tbGVzcyBzY3JlZW4gc2hhcmluZy4gVXNpbmcgYnJvd3NlciBzY3JlZW4gY2FwdHVyZSBBUElzIGFuZCBleHRlbnNpb25zLCB3aGVyZSBuZWNlc3NhcnkuYCxcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2U6IGtvLm9ic2VydmFibGUodHJ1ZSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL2Nsb3VkLmdpdGh1YnVzZXJjb250ZW50LmNvbS9hc3NldHMvODMzOTExLzc0NDc5MDQvM2QzMmJiZGMtZjFkOS0xMWU0LTllMGYtYWM4NzcxMmY5ODdjLmpwZycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgUGVlci10by1wZWVyIGxpbWl0YXRpb25zIChtZXNoIG5ldHdvcmspIHNsb3dlZCB1cyBkb3duLCBidXQgZGlkbid0IHN0b3AgbWUuIEkgZGVsaXZlcmVkIGEgd29ya2luZyBzb2x1dGlvbiBvcHRpbWl6ZWQgZm9yIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25mZXJlbmNlcyB0byBnZXQgdGhlIHByb2R1Y3Qgb3V0IHRoZSBkb29yLCBhbmQgcG93ZXJpbmcgYWxtb3N0IGFsbCBvZiBvdXIgc21hbGwgdmlkZW8gY29uZmVyZW5jZSBuZWVkcy4gSW4gdGhlIG1lYW50aW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgSSdtIHdvcmtpbmcgd2l0aCBleHBlcnRzIHRvIGludGVncmF0ZSB3aXRoIGEgc2luZ2xlLXBvaW50IHNlbGVjdGl2ZSBmb3J3YXJkaW5nIHNlcnZlciBmb3IgYW4gZXZlbiBiZXR0ZXIgZXhwZXJpZW5jZS5gLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZToga28ub2JzZXJ2YWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaGFsbG93ZWVuID0gbmV3IFByb2plY3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdIYWxsb3dlZW4gMjAxNScsXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vbUFQQ0gxUC5qcGcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBGb3IgSGFsbG93ZWVuIHRoaXMgeWVhciwgSSBkcmVzc2VkIGFzIEZyeSBmcm9tIEZ1dHVyYW1hLlxuICAgICAgICAgICAgICAgIEkgYnVpbHQgQmVuZGVyJ3MgaGVhZCB1c2luZyBzeXJvZm9hbSwgcGFwZXIsIGFuZCBwYWludC5cbiAgICAgICAgICAgICAgICBJIGRlY29yYXRlZCBteSBvZmZpY2UgbGlrZSB0aGUgUGxhbmV0IEV4cHJlc3Mgc2hpcCB3aXRoXG4gICAgICAgICAgICAgICAgc3Rhci1iYWNrZHJvcCB3aW5kb3dzLCBhIGhhdGNoIGRvb3Igd2l0aCBsb2dvLCBhbmQgYVxuICAgICAgICAgICAgICAgIGZ1bGwtc2l6ZWQgU2x1cm0gbWFjaGluZS5gXG4gICAgICAgICAgICAvL3RvZG86IGFsbG93IGxpbmtpbmcgdG8gbGFyZ2UgaW1hZ2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZW51bWVyYXRlRGV2aWNlcyA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnZW51bWVyYXRlRGV2aWNlcycsXG4gICAgICAgICAgICByZWZlcmVuY2VMaW5rczogUmVmZXJlbmNlTGlua3MuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBkZW1vOiAnaHR0cHM6Ly93d3cueGR1bWFpbmUuY29tL2VudW1lcmF0ZURldmljZXMvdGVzdC8nLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS94ZHVtYWluZS9lbnVtZXJhdGVEZXZpY2VzLydcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL2Nsb3VkLmdpdGh1YnVzZXJjb250ZW50LmNvbS9hc3NldHMvODMzOTExLzc1MDI3NTMvNjUxMDA2MGMtZjQwYy0xMWU0LTlkNmMtNGMwZTc0Y2E2NzZkLnBuZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYEEgV2ViUlRDIGhlbHBlciBsaWJyYXJ5IGZvciBub3JtYWxpemluZyBicm93c2VyIEFQSXMgZm9yIGVudW1lcmF0aW5nIG1lZGlhIGRldmljZXMuYFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBhc2lkZSA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnQXNpZGUgKEdob3N0IFRoZW1lKScsXG4gICAgICAgICAgICByZWZlcmVuY2VMaW5rczogUmVmZXJlbmNlTGlua3MuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20veGR1bWFpbmUvZ2hvc3QtYXNpZGUvJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vY2xvdWQuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fzc2V0cy84MzM5MTEvNzUwMjk2MS9jOGFmNGJjYy1mNDBkLTExZTQtOGYxZi1kY2ExNjIyNWMzYjYuanBnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQXNpZGUgaXMgYSA8YSBocmVmPVwiaHR0cDovL2dob3N0Lm9yZ1wiPkdob3N0PC9hPiB0aGVtZSB0aGF0IHBvd2VycyBteSBibG9nLiBNYWtlcyB1c2Ugb2YgaGFuZGxlYmFycywgQ1NTMywgYW5kIHRoZSBHaG9zdCB0aGVtZSBBUElgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG1vdG9yY3ljbGUgPSBuZXcgUHJvamVjdCh7XG4gICAgICAgICAgICB0aXRsZTogJ01vdG9yY3ljbGUgTEVEIEVmZmVjdHMgd2l0aCBBcmR1aW5vJyxcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmtzOiBSZWZlcmVuY2VMaW5rcy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRlbW86ICdodHRwczovL3R3aXR0ZXIuY29tL3hhbmRlcmR1bWFpbmUvc3RhdHVzLzY2MDkxODExMzgwMjg0NjIwOCcsXG4gICAgICAgICAgICAgICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3hkdW1haW5lL2VzcGxvcmEtbmVvcGl4ZWxzJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vY2xvdWQuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fzc2V0cy84MzM5MTEvMTA4NzM1MTgvZDE2NDAyNWUtODBlMy0xMWU1LThlZTMtMDg2ZDU2YzMyYjliLkpQRycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYEFyZHVpbm8gRXNwbG9yYSBib2FyZCB3aXRoIE5lb3BpeGVscyB0byBhZGQgTEVEIGVmZmVjdHMgdG8gbW90b3JjeWNsZS5gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNmdSA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnV2ViUlRDIHdpdGggU0ZVJyxcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmtzOiBSZWZlcmVuY2VMaW5rcy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHNsaWRlczogJ2h0dHBzOi8vc2xpZGVzLnhkdW1haW5lLmNvbS9zZnUvJyxcbiAgICAgICAgICAgICAgICB2aWRlbzogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9d3doVF9ZMGV4MEEnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGltYWdlU291cmNlOiAnaHR0cHM6Ly9jbG91ZC5naXRodWJ1c2VyY29udGVudC5jb20vYXNzZXRzLzgzMzkxMS8xMDg3MzUwMS9hMWQxNjU3Yy04MGUzLTExZTUtOWYyYy1hMzdkMjkzNDlkZWQucG5nJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQSBzZXJpZXMgb2Ygc2xpZGVzIEkgcHV0IHRvZ2V0aGVyIGFyb3VuZCB0aGUgYXJjaGl0ZWN0dXJlIG9mIHVzaW5nIGFuIFNGVVxuICAgICAgICAgICAgICAgIGxpa2UgSml0c2kgVmlkZW9CcmlkZ2UgZm9yIGJ1aWxkaW5nIGJldHRlciBtdWx0aXBvaW50IHZpZGVvIGNvbmZlcmVuY2luZy5cbiAgICAgICAgICAgICAgICBQcmVzZW50ZWQgYXRcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5tZWV0dXAuY29tL1RyaWFuZ2xlLVdlYlJUQy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj50aGUgbWVldHVwIEkgaG9zdC48L2E+YFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB0cmlhbmdsZVdlYnJ0YyA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnVHJpYW5nbGUgV2ViUlRDJyxcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmtzOiBSZWZlcmVuY2VMaW5rcy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRlbW86ICdodHRwOi8vd3d3Lm1lZXR1cC5jb20vVHJpYW5nbGUtV2ViUlRDLydcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL2Nsb3VkLmdpdGh1YnVzZXJjb250ZW50LmNvbS9hc3NldHMvODMzOTExLzExOTQ1NDkzLzZiMjQ4N2NjLWE4MWUtMTFlNS05MDFhLTRiOWI4MWY4MDQ0Zi5wbmcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBBIG1lZXR1cCBncm91cCBkaXNjdXNzaW5nIHRlY2huaWNhbCBkZXRhaWxzLCBpbm5vdmF0aW9uLCBhbmQgZGV2ZWxvcG1lbnQgb2YgV2ViUlRDLmBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZnV0dXJlV2VicnRjID0gbmV3IFByb2plY3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdUaGUgRnV0dXJlIG9mIFdlYlJUQycsXG4gICAgICAgICAgICByZWZlcmVuY2VMaW5rczogUmVmZXJlbmNlTGlua3MuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBzbGlkZXM6ICdodHRwczovL3NsaWRlcy54ZHVtYWluZS5jb20vd2VicnRjLW52LycsXG4gICAgICAgICAgICAgICAgdmlkZW86ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTI1UGZnUTBGTndNJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vY2xvdWQuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fzc2V0cy84MzM5MTEvMTE2MTEyMDcvOWY0MTk5ZTYtOWI4Zi0xMWU1LThkNjAtMGRjZTEzNWFmOWI5LnBuZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYFNsaWRlcyBkaXNjdXNzaW5nIHRoZSBjdXJyZW50IHN0YXRlIG9mIFdlYlJUQyBpbXBsZW1lbnRhdGlvbiBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgb2Ygc3BlYyBkZWZpbml0aW9uLFxuICAgICAgICAgICAgICAgIHdoaWNoIHdpbGwgZm9ybSB0aGUgZnV0dXJlIG9mIFdlYlJUQyBhbmQgT1JUQy5cbiAgICAgICAgICAgICAgICBQcmVzZW50ZWQgYXRcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5tZWV0dXAuY29tL1RyaWFuZ2xlLVdlYlJUQy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj50aGUgbWVldHVwIEkgaG9zdC48L2E+YFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB3ZWJ0YXNrID0gbmV3IFByb2plY3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdTZWN1cmUgQ2xpZW50IEF1dGhlbnRpY2F0aW9uIHdpdGggV2VidGFzaycsXG4gICAgICAgICAgICByZWZlcmVuY2VMaW5rczogUmVmZXJlbmNlTGlua3MuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdodHRwczovL2Jsb2cueGR1bWFpbmUuY29tL3VzaW5nLXdlYnRhc2staW8tZm9yLXNlY3VyZS1hcGktdG9rZW5zLydcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL2Jsb2cueGR1bWFpbmUuY29tL2NvbnRlbnQvaW1hZ2VzLzIwMTUvMDcvU2NyZWVuLVNob3QtMjAxNS0wNy0xOS1hdC03LTM1LTE5LVBNLnBuZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYFNlY3VyZSBhdXRoZW50aWNhdGlvbiB0byBhbiBBUEkgZnJvbSBhIHNlcnZlcmxlc3MgamF2YXNjcmlwdCBhcHBsaWNhdGlvbiB1c2luZyBXZWJ0YXNrLmlvYFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb2plY3RzID0ga28ub2JzZXJ2YWJsZUFycmF5KFtcbiAgICAgICAgICAgIG1vcnNlQ29kZSxcbiAgICAgICAgICAgIHNpbmdsZURpdkNzcyxcbiAgICAgICAgICAgIGNvbGxhYm9yYXRlLFxuICAgICAgICAgICAgaGFsbG93ZWVuLFxuICAgICAgICAgICAgZW51bWVyYXRlRGV2aWNlcyxcbiAgICAgICAgICAgIGFzaWRlLFxuICAgICAgICAgICAgbW90b3JjeWNsZSxcbiAgICAgICAgICAgIHNmdSxcbiAgICAgICAgICAgIHRyaWFuZ2xlV2VicnRjLFxuICAgICAgICAgICAgZnV0dXJlV2VicnRjLFxuICAgICAgICAgICAgd2VidGFza1xuICAgICAgICBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RTZXQ7XG4iLCJjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihpdGVtKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBpdGVtLnRpdGxlO1xuICAgICAgICB0aGlzLnJlZmVyZW5jZUxpbmtzID0gaXRlbS5yZWZlcmVuY2VMaW5rcyB8fCBudWxsO1xuICAgICAgICB0aGlzLnRlY2hJdGVtcyA9IGl0ZW0udGVjaEl0ZW1zID8ga28ub2JzZXJ2YWJsZUFycmF5KGl0ZW0udGVjaEl0ZW1zKSA6IG51bGw7XG4gICAgICAgIHRoaXMuaW1hZ2VTb3VyY2UgPSBrby5vYnNlcnZhYmxlKGl0ZW0uaW1hZ2VTb3VyY2UpO1xuICAgICAgICB0aGlzLmxpdmVEZW1vID0ga28ub2JzZXJ2YWJsZShpdGVtLmxpdmVEZW1vKTtcbiAgICAgICAgdGhpcy53aWRlID0ga28ub2JzZXJ2YWJsZShpdGVtLndpZGUpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5maWd1cmVTZXQgPSBrby5vYnNlcnZhYmxlQXJyYXkoaXRlbS5maWd1cmVTZXQpO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5maWd1cmVTZXQoKTtcbiAgICAgICAgY29uc3QgZmlyc3QgPSBpdGVtc1swXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFpdGVtc1tpXS5jb2xsYXBzZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zW2krMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaSsxXS5jb2xsYXBzZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QuY29sbGFwc2UoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5jb2xsYXBzZSh0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2aW91cygpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmZpZ3VyZVNldCgpO1xuICAgICAgICBjb25zdCBsYXN0ID0gaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGZvciAobGV0IGkgPSBpdGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKCFpdGVtc1tpXS5jb2xsYXBzZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAwICYmIGl0ZW1zW2ktMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaS0xXS5jb2xsYXBzZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdC5jb2xsYXBzZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmNvbGxhcHNlKHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImNsYXNzIFJlZmVyZW5jZUxpbmtzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIHN0YXRpYyBjcmVhdGUobGlua3MpIHtcbiAgICAgICAgY29uc3QgYXJyID0gbmV3IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICBpZiAobGlua3MuZGVtbykge1xuICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhcmdldDogbGlua3MuZGVtbyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ2RlbW8nLFxuICAgICAgICAgICAgICAgIGljb25DbGFzczogJ2ZhIGZhLW1hZ2ljJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmtzLnNvdXJjZSkge1xuICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhcmdldDogbGlua3Muc291cmNlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnc291cmNlJyxcbiAgICAgICAgICAgICAgICBpY29uQ2xhc3M6ICdmYSBmYS1maWxlLWNvZGUtbydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5rcy5zbGlkZXMpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGxpbmtzLnNsaWRlcyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3NsaWRlcycsXG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzOiAnZmEgZmEtdGVsZXZpc2lvbidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5rcy52aWRlbykge1xuICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhcmdldDogbGlua3MudmlkZW8sXG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbycsXG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzOiAnZmEteW91dHViZS1wbGF5J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZmVyZW5jZUxpbmtzO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IC0gaGknKTtcbiAgICB9XG59O1xuIl19
