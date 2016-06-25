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

},{"./header":"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-hh7JLrdx.tmp/src/header.js","./project-set":"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-hh7JLrdx.tmp/src/project-set.js","./test":"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-hh7JLrdx.tmp/src/test.js"}],"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-hh7JLrdx.tmp/src/header.js":[function(require,module,exports){
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

},{}],"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-hh7JLrdx.tmp/src/project-set.js":[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Project = _interopRequire(require("./project"));

var ReferenceLinks = _interopRequire(require("./reference-links"));

var ProjectSet = function ProjectSet() {
    _classCallCheck(this, ProjectSet);

    var webSpeechExperiments = new Project({
        title: "Web Speech Experiments",
        referenceLinks: ReferenceLinks.create({
            demo: "https://www.xdumaine.com/web-speech-experiments/",
            source: "https://github.com/xdumaine/web-speech-experiments"
        }),
        imageSource: "https://cloud.githubusercontent.com/assets/833911/16359689/8a0fedf8-3b0c-11e6-8b25-fb0cdfa7cf1a.png",
        description: "Starting from Google webkitSpeechRecognition example, and combining the experimental API\n                with the speechSynthesis API, I made an example of an app that both listens to and speaks to users"
    });

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

    this.projects = ko.observableArray([webSpeechExperiments, morseCode, singleDivCss, collaborate,
    //halloween,
    enumerateDevices, aside, motorcycle, sfu, triangleWebrtc, futureWebrtc, webtask]);
};

module.exports = ProjectSet;

},{"./project":"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-hh7JLrdx.tmp/src/project.js","./reference-links":"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-hh7JLrdx.tmp/src/reference-links.js"}],"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-hh7JLrdx.tmp/src/project.js":[function(require,module,exports){
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

},{}],"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-hh7JLrdx.tmp/src/reference-links.js":[function(require,module,exports){
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

},{}],"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-hh7JLrdx.tmp/src/test.js":[function(require,module,exports){
"use strict";

module.exports = {
    test: function test() {
        console.log("test - hi");
    }
};

},{}]},{},["./src/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm9jY29saS1mYXN0LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9hcHAuanMiLCJzcmMvaGVhZGVyLmpzIiwic3JjL3Byb2plY3Qtc2V0LmpzIiwic3JjL3Byb2plY3QuanMiLCJzcmMvcmVmZXJlbmNlLWxpbmtzLmpzIiwic3JjL3Rlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNBTyxJQUFJLDJCQUFNLFFBQVE7O0lBQ2xCLE1BQU0sMkJBQU0sVUFBVTs7SUFDdEIsVUFBVSwyQkFBTSxlQUFlOztJQUVoQyxJQUFJLEdBQ0ssU0FEVCxJQUFJLENBQ00sSUFBSSxFQUFFOzBCQURoQixJQUFJOztBQUVGLFFBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztDQUMzQjs7SUFHQyxHQUFHLEdBQ00sU0FEVCxHQUFHLENBQ08sSUFBSSxFQUFFOzBCQURoQixHQUFHOztBQUVELFFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNaLFFBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUMzQixRQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7O0FBRWpDLFFBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUM1QixJQUFJLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUN4QixJQUFJLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUN4QixJQUFJLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUMzQixDQUFDLENBQUM7O0FBRUgsTUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDaEM7O2lCQUdV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Q0FBQztBQUNMLDhCQUFNLEVBQUUsS0FBSyxDQUFDLElBQUk7QUFDbEIsNkJBQUssRUFBRSxNQUFNO0FBQ2IsaUNBQVMsRUFBRSxhQUFhO3FCQUMzQixDQUFDLENBQUM7aUJBQ047QUFDRCxvQkFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO0FBQ2QsdUJBQUcsQ0FBQyxJQUFJLENBQUM7QUFDTCw4QkFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO0FBQ3BCLDZCQUFLLEVBQUUsUUFBUTtBQUNmLGlDQUFTLEVBQUUsbUJBQW1CO3FCQUNqQyxDQUFDLENBQUM7aUJBQ047QUFDRCxvQkFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO0FBQ2QsdUJBQUcsQ0FBQyxJQUFJLENBQUM7QUFDTCw4QkFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO0FBQ3BCLDZCQUFLLEVBQUUsUUFBUTtBQUNmLGlDQUFTLEVBQUUsa0JBQWtCO3FCQUNoQyxDQUFDLENBQUM7aUJBQ047QUFDRCxvQkFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO0FBQ2IsdUJBQUcsQ0FBQyxJQUFJLENBQUM7QUFDTCw4QkFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLO0FBQ25CLDZCQUFLLEVBQUUsT0FBTztBQUNkLGlDQUFTLEVBQUUsaUJBQWlCO3FCQUMvQixDQUFDLENBQUM7aUJBQ047QUFDRCx1QkFBTyxHQUFHLENBQUM7YUFDZDs7OztXQWpDQyxjQUFjOzs7aUJBb0NMLGNBQWM7Ozs7O2lCQ3BDZDtBQUNYLFFBQUksRUFBQSxnQkFBRztBQUNILGVBQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDNUI7Q0FDSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVGVzdCBmcm9tICcuL3Rlc3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgUHJvamVjdFNldCBmcm9tICcuL3Byb2plY3Qtc2V0JztcblxuY2xhc3MgQ2FyZCB7XG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICB0aGlzLnRpdGxlID0gb3B0cy50aXRsZTtcbiAgICB9XG59XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IoZWxlbSkge1xuICAgICAgICBUZXN0LnRlc3QoKTtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBuZXcgUHJvamVjdFNldCgpO1xuXG4gICAgICAgIHRoaXMuY2FyZHMgPSBrby5vYnNlcnZhYmxlQXJyYXkoW1xuICAgICAgICAgICAgbmV3IENhcmQoe3RpdGxlOiAnZm9vJ30pLFxuICAgICAgICAgICAgbmV3IENhcmQoe3RpdGxlOiAnYmFyJ30pLFxuICAgICAgICAgICAgbmV3IENhcmQoe3RpdGxlOiAnYmF6J30pXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcywgZWxlbSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBwKCk7XG4iLCJjbGFzcyBIZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpbmtzID0ga28ub2JzZXJ2YWJsZUFycmF5KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0dpdGh1YicsXG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzOiAnZmEgZmEtZ2l0aHViJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwczovL2dpdGh1Yi5jb20veGR1bWFpbmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnQmxvZycsXG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzOiAnZmEgZmEtcnNzJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwczovL2Jsb2cueGR1bWFpbmUuY29tJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N0YWNrT3ZlcmZsb3cnLFxuICAgICAgICAgICAgICAgIGljb25DbGFzczogJ2ZhIGZhLXN0YWNrLW92ZXJmbG93JyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3VzZXJzLzM4MTQyMi94ZHVtYWluZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdSw6lzdW3DqScsXG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzOiAnZmEgZmEtc3RhY2stZXhjaGFuZ2UnLFxuICAgICAgICAgICAgICAgIHRhcmdldDogJ2h0dHBzOi8vY2FyZWVycy5zdGFja292ZXJmbG93LmNvbS9kdW1haW5lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NsaWRlcycsXG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzOiAnZmEgZmEtdHYnLFxuICAgICAgICAgICAgICAgIHRhcmdldDogJ2h0dHBzOi8vc2xpZGVzLnhkdW1haW5lLmNvbSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFJlZmVyZW5jZUxpbmtzIGZyb20gJy4vcmVmZXJlbmNlLWxpbmtzJztcblxuY2xhc3MgUHJvamVjdFNldCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IHdlYlNwZWVjaEV4cGVyaW1lbnRzID0gbmV3IFByb2plY3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdXZWIgU3BlZWNoIEV4cGVyaW1lbnRzJyxcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmtzOiBSZWZlcmVuY2VMaW5rcy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRlbW86ICdodHRwczovL3d3dy54ZHVtYWluZS5jb20vd2ViLXNwZWVjaC1leHBlcmltZW50cy8nLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS94ZHVtYWluZS93ZWItc3BlZWNoLWV4cGVyaW1lbnRzJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vY2xvdWQuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fzc2V0cy84MzM5MTEvMTYzNTk2ODkvOGEwZmVkZjgtM2IwYy0xMWU2LThiMjUtZmIwY2RmYTdjZjFhLnBuZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYFN0YXJ0aW5nIGZyb20gR29vZ2xlIHdlYmtpdFNwZWVjaFJlY29nbml0aW9uIGV4YW1wbGUsIGFuZCBjb21iaW5pbmcgdGhlIGV4cGVyaW1lbnRhbCBBUElcbiAgICAgICAgICAgICAgICB3aXRoIHRoZSBzcGVlY2hTeW50aGVzaXMgQVBJLCBJIG1hZGUgYW4gZXhhbXBsZSBvZiBhbiBhcHAgdGhhdCBib3RoIGxpc3RlbnMgdG8gYW5kIHNwZWFrcyB0byB1c2Vyc2BcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbW9yc2VDb2RlID0gbmV3IFByb2plY3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdXZWJSVEMgRFRNRiBNb3JzZSBDb2RlJyxcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmtzOiBSZWZlcmVuY2VMaW5rcy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRlbW86ICdodHRwczovL21vcnNlY29kZS54ZHVtYWluZS5jb20nLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS94ZHVtYWluZS93ZWJydGMtZHRtZi1tb3JzZWNvZGUvJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vY2xvdWQuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fzc2V0cy84MzM5MTEvMTI1MzA2OTIvZDE0YjFlYzYtYzFiNC0xMWU1LTg4NGYtZDdjNmI4OGViMWEwLnBuZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYEkgZGVjaWRlZCB0byBwdXQgdG9nZXRoZXIgYSBkZW1vIHRoYXQgY29udmVydHMgdGV4dCBpbnRvIG1vcnNlIGNvZGUsXG4gICAgICAgICAgICAgICAgdGhlbiBzZW5kcyBpdCBvdmVyIGEgV2ViUlRDIHBlZXJjb25uZWN0aW9uIHVzaW5nIERUTUYgdG9uZXMgd2l0aFxuICAgICAgICAgICAgICAgIHZhcnlpbmcgZGVsYXlzLiBJdCdzIG5vdCByZWFsbHkgdXNlZnVsLCBidXQgaXQncyBhIHNvcnQgb2YgZXhwZXJpbWVudFxuICAgICAgICAgICAgICAgIGFuZCBkZW1vIG9mIHdoYXQncyBwb3NzaWJsZS5gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNpbmdsZURpdkNzcyA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnU2luZ2xlIERpdiBDU1MnLFxuICAgICAgICAgICAgcmVmZXJlbmNlTGlua3M6IFJlZmVyZW5jZUxpbmtzLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZGVtbzogJ2h0dHBzOi8vY3NzLnhkdW1haW5lLmNvbScsXG4gICAgICAgICAgICAgICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3hkdW1haW5lL3hhbmRlci5jc3MnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGxpdmVEZW1vOiAnPGRpdiBjbGFzcz1cImNvbnRyb2xsZXJcIj48ZGl2PjwvZGl2PjwvZGl2PicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYEknbSB3b3JraW5nIG9uIGEgc2VyaWVzIG9mIENTUyBpbGx1c3RyYXRpb25zXG4gICAgICAgICAgICAgICAgaW5zcGlyZWQgYnkgPGEgaHJlZj1cImh0dHA6Ly9hLnNpbmdsZWRpdi5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5hLnNpbmdsZWRpdi5jb208L2E+LlxuICAgICAgICAgICAgICAgIEFsbCBDU1MgaXMgd3JpdHRlbiBieSBtZSwgdXNpbmcgbXkgb3duIGtub3dsZWRnZSBzdXBwbGVtZW50ZWQgYnkgZG9jcyBhbmRcbiAgICAgICAgICAgICAgICBleGFtcGxlcyBvbmxpbmUuIE5vIHNuaXBwZXRzIGFyZSByZXVzZWQuIEFzIG9mIG5vdywgYWxsIGlsbHVzdHJhdGlvbnMgdXNlIGEgc2luZ2xlIHRhZy5gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNvbGxhYm9yYXRlID0gbmV3IFByb2plY3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdDb2xsYWJvcmF0ZSAtIEludGVyYWN0aXZlIEludGVsbGlnZW5jZScsXG4gICAgICAgICAgICB3aWRlOiB0cnVlLFxuICAgICAgICAgICAgdGVjaEl0ZW1zOiBbICdodG1sNScsICdjc3MzJywgJ2phdmFzY3JpcHQnLCAnd2VicnRjJyBdLFxuICAgICAgICAgICAgZmlndXJlU2V0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vY2xvdWQuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fzc2V0cy84MzM5MTEvNzQ0NzkxOC84Zjc0Yzg5YS1mMWQ5LTExZTQtODYzZS00YTQzMTQ3N2ZhMjUuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBYTVBQIGJhc2VkIGNoYXQgd2l0aCBtdWx0aS1wYXJ0eSBXZWJSVEMgdmlkZW8gY2FsbGluZy4gSSB3b3JrIHdpdGggYW4gb3V0c3RhbmRpbmcgdGVhbSB0byByZWZpbmUgYW5kIGltcHJvdmUgb3VyIHRlYW0gY2hhdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIEkgaGVhZGVkIHVwIGFuIGVmZm9ydCB0byBzdXBlcmNoYXJnZSBvdXIgYXBwIHdpdGggdmlkZW8gY2FsbGluZywgYmFzZWQgb24gb3BlbiBzb3VyY2UgbGlicmFyaWVzIGFuZCBwb3dlcmVkIGJ5IFdlYlJUQy4gSSB3b3JrXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoIGphdmFzY3JpcHQgKGVzNiBhbmQgY29mZmVlc2NyaXB0LCB0b28hKSwgQ1NTIChMRVNTKSwgYW5kIEhUTUw1IGluIHRoZSBFbWJlci5qcyBmcm9udC1lbmQuIEFzIGEgcGFydCBvZiB0aGlzIHByb2plY3QsIElcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyaWJ1dGUgdG8gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hbmR5ZXQvU2ltcGxlV2ViUlRDXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2ltcGxlV2ViUlRDPC9hPiBhbmQgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL290YWxrXCI+T1RhbGsgbW9kdWxlczwvYT4gbGlrZSBKaW5nbGUuanMuYCxcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2U6IGtvLm9ic2VydmFibGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlU291cmNlOiAnaHR0cHM6Ly9jbG91ZC5naXRodWJ1c2VyY29udGVudC5jb20vYXNzZXRzLzgzMzkxMS83NDQ3OTA1LzNkMzNlZWY4LWYxZDktMTFlNC05YzM3LWI2ZGFmZGQ2OTdmZS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYFBsdWdpbi1sZXNzIHNjcmVlbiBzaGFyaW5nLiBVc2luZyBicm93c2VyIHNjcmVlbiBjYXB0dXJlIEFQSXMgYW5kIGV4dGVuc2lvbnMsIHdoZXJlIG5lY2Vzc2FyeS5gLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZToga28ub2JzZXJ2YWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vY2xvdWQuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fzc2V0cy84MzM5MTEvNzQ0NzkwNC8zZDMyYmJkYy1mMWQ5LTExZTQtOWUwZi1hYzg3NzEyZjk4N2MuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBQZWVyLXRvLXBlZXIgbGltaXRhdGlvbnMgKG1lc2ggbmV0d29yaykgc2xvd2VkIHVzIGRvd24sIGJ1dCBkaWRuJ3Qgc3RvcCBtZS4gSSBkZWxpdmVyZWQgYSB3b3JraW5nIHNvbHV0aW9uIG9wdGltaXplZCBmb3Igc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZlcmVuY2VzIHRvIGdldCB0aGUgcHJvZHVjdCBvdXQgdGhlIGRvb3IsIGFuZCBwb3dlcmluZyBhbG1vc3QgYWxsIG9mIG91ciBzbWFsbCB2aWRlbyBjb25mZXJlbmNlIG5lZWRzLiBJbiB0aGUgbWVhbnRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBJJ20gd29ya2luZyB3aXRoIGV4cGVydHMgdG8gaW50ZWdyYXRlIHdpdGggYSBzaW5nbGUtcG9pbnQgc2VsZWN0aXZlIGZvcndhcmRpbmcgc2VydmVyIGZvciBhbiBldmVuIGJldHRlciBleHBlcmllbmNlLmAsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlOiBrby5vYnNlcnZhYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBoYWxsb3dlZW4gPSBuZXcgUHJvamVjdCh7XG4gICAgICAgICAgICB0aXRsZTogJ0hhbGxvd2VlbiAyMDE1JyxcbiAgICAgICAgICAgIGltYWdlU291cmNlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9tQVBDSDFQLmpwZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYEZvciBIYWxsb3dlZW4gdGhpcyB5ZWFyLCBJIGRyZXNzZWQgYXMgRnJ5IGZyb20gRnV0dXJhbWEuXG4gICAgICAgICAgICAgICAgSSBidWlsdCBCZW5kZXIncyBoZWFkIHVzaW5nIHN5cm9mb2FtLCBwYXBlciwgYW5kIHBhaW50LlxuICAgICAgICAgICAgICAgIEkgZGVjb3JhdGVkIG15IG9mZmljZSBsaWtlIHRoZSBQbGFuZXQgRXhwcmVzcyBzaGlwIHdpdGhcbiAgICAgICAgICAgICAgICBzdGFyLWJhY2tkcm9wIHdpbmRvd3MsIGEgaGF0Y2ggZG9vciB3aXRoIGxvZ28sIGFuZCBhXG4gICAgICAgICAgICAgICAgZnVsbC1zaXplZCBTbHVybSBtYWNoaW5lLmBcbiAgICAgICAgICAgIC8vdG9kbzogYWxsb3cgbGlua2luZyB0byBsYXJnZSBpbWFnZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlbnVtZXJhdGVEZXZpY2VzID0gbmV3IFByb2plY3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdlbnVtZXJhdGVEZXZpY2VzJyxcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmtzOiBSZWZlcmVuY2VMaW5rcy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRlbW86ICdodHRwczovL3d3dy54ZHVtYWluZS5jb20vZW51bWVyYXRlRGV2aWNlcy90ZXN0LycsXG4gICAgICAgICAgICAgICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3hkdW1haW5lL2VudW1lcmF0ZURldmljZXMvJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vY2xvdWQuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fzc2V0cy84MzM5MTEvNzUwMjc1My82NTEwMDYwYy1mNDBjLTExZTQtOWQ2Yy00YzBlNzRjYTY3NmQucG5nJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQSBXZWJSVEMgaGVscGVyIGxpYnJhcnkgZm9yIG5vcm1hbGl6aW5nIGJyb3dzZXIgQVBJcyBmb3IgZW51bWVyYXRpbmcgbWVkaWEgZGV2aWNlcy5gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGFzaWRlID0gbmV3IFByb2plY3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdBc2lkZSAoR2hvc3QgVGhlbWUpJyxcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmtzOiBSZWZlcmVuY2VMaW5rcy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS94ZHVtYWluZS9naG9zdC1hc2lkZS8nXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGltYWdlU291cmNlOiAnaHR0cHM6Ly9jbG91ZC5naXRodWJ1c2VyY29udGVudC5jb20vYXNzZXRzLzgzMzkxMS83NTAyOTYxL2M4YWY0YmNjLWY0MGQtMTFlNC04ZjFmLWRjYTE2MjI1YzNiNi5qcGcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBBc2lkZSBpcyBhIDxhIGhyZWY9XCJodHRwOi8vZ2hvc3Qub3JnXCI+R2hvc3Q8L2E+IHRoZW1lIHRoYXQgcG93ZXJzIG15IGJsb2cuIE1ha2VzIHVzZSBvZiBoYW5kbGViYXJzLCBDU1MzLCBhbmQgdGhlIEdob3N0IHRoZW1lIEFQSWBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbW90b3JjeWNsZSA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnTW90b3JjeWNsZSBMRUQgRWZmZWN0cyB3aXRoIEFyZHVpbm8nLFxuICAgICAgICAgICAgcmVmZXJlbmNlTGlua3M6IFJlZmVyZW5jZUxpbmtzLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZGVtbzogJ2h0dHBzOi8vdHdpdHRlci5jb20veGFuZGVyZHVtYWluZS9zdGF0dXMvNjYwOTE4MTEzODAyODQ2MjA4JyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20veGR1bWFpbmUvZXNwbG9yYS1uZW9waXhlbHMnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGltYWdlU291cmNlOiAnaHR0cHM6Ly9jbG91ZC5naXRodWJ1c2VyY29udGVudC5jb20vYXNzZXRzLzgzMzkxMS8xMDg3MzUxOC9kMTY0MDI1ZS04MGUzLTExZTUtOGVlMy0wODZkNTZjMzJiOWIuSlBHJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQXJkdWlubyBFc3Bsb3JhIGJvYXJkIHdpdGggTmVvcGl4ZWxzIHRvIGFkZCBMRUQgZWZmZWN0cyB0byBtb3RvcmN5Y2xlLmBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc2Z1ID0gbmV3IFByb2plY3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdXZWJSVEMgd2l0aCBTRlUnLFxuICAgICAgICAgICAgcmVmZXJlbmNlTGlua3M6IFJlZmVyZW5jZUxpbmtzLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgc2xpZGVzOiAnaHR0cHM6Ly9zbGlkZXMueGR1bWFpbmUuY29tL3NmdS8nLFxuICAgICAgICAgICAgICAgIHZpZGVvOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj13d2hUX1kwZXgwQSdcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL2Nsb3VkLmdpdGh1YnVzZXJjb250ZW50LmNvbS9hc3NldHMvODMzOTExLzEwODczNTAxL2ExZDE2NTdjLTgwZTMtMTFlNS05ZjJjLWEzN2QyOTM0OWRlZC5wbmcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBBIHNlcmllcyBvZiBzbGlkZXMgSSBwdXQgdG9nZXRoZXIgYXJvdW5kIHRoZSBhcmNoaXRlY3R1cmUgb2YgdXNpbmcgYW4gU0ZVXG4gICAgICAgICAgICAgICAgbGlrZSBKaXRzaSBWaWRlb0JyaWRnZSBmb3IgYnVpbGRpbmcgYmV0dGVyIG11bHRpcG9pbnQgdmlkZW8gY29uZmVyZW5jaW5nLlxuICAgICAgICAgICAgICAgIFByZXNlbnRlZCBhdFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3Lm1lZXR1cC5jb20vVHJpYW5nbGUtV2ViUlRDL1wiIHRhcmdldD1cIl9ibGFua1wiPnRoZSBtZWV0dXAgSSBob3N0LjwvYT5gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRyaWFuZ2xlV2VicnRjID0gbmV3IFByb2plY3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdUcmlhbmdsZSBXZWJSVEMnLFxuICAgICAgICAgICAgcmVmZXJlbmNlTGlua3M6IFJlZmVyZW5jZUxpbmtzLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZGVtbzogJ2h0dHA6Ly93d3cubWVldHVwLmNvbS9UcmlhbmdsZS1XZWJSVEMvJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vY2xvdWQuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fzc2V0cy84MzM5MTEvMTE5NDU0OTMvNmIyNDg3Y2MtYTgxZS0xMWU1LTkwMWEtNGI5YjgxZjgwNDRmLnBuZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYEEgbWVldHVwIGdyb3VwIGRpc2N1c3NpbmcgdGVjaG5pY2FsIGRldGFpbHMsIGlubm92YXRpb24sIGFuZCBkZXZlbG9wbWVudCBvZiBXZWJSVEMuYFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBmdXR1cmVXZWJydGMgPSBuZXcgUHJvamVjdCh7XG4gICAgICAgICAgICB0aXRsZTogJ1RoZSBGdXR1cmUgb2YgV2ViUlRDJyxcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmtzOiBSZWZlcmVuY2VMaW5rcy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHNsaWRlczogJ2h0dHBzOi8vc2xpZGVzLnhkdW1haW5lLmNvbS93ZWJydGMtbnYvJyxcbiAgICAgICAgICAgICAgICB2aWRlbzogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9MjVQZmdRMEZOd00nXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGltYWdlU291cmNlOiAnaHR0cHM6Ly9jbG91ZC5naXRodWJ1c2VyY29udGVudC5jb20vYXNzZXRzLzgzMzkxMS8xMTYxMTIwNy85ZjQxOTllNi05YjhmLTExZTUtOGQ2MC0wZGNlMTM1YWY5YjkucG5nJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgU2xpZGVzIGRpc2N1c3NpbmcgdGhlIGN1cnJlbnQgc3RhdGUgb2YgV2ViUlRDIGltcGxlbWVudGF0aW9uIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBvZiBzcGVjIGRlZmluaXRpb24sXG4gICAgICAgICAgICAgICAgd2hpY2ggd2lsbCBmb3JtIHRoZSBmdXR1cmUgb2YgV2ViUlRDIGFuZCBPUlRDLlxuICAgICAgICAgICAgICAgIFByZXNlbnRlZCBhdFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3Lm1lZXR1cC5jb20vVHJpYW5nbGUtV2ViUlRDL1wiIHRhcmdldD1cIl9ibGFua1wiPnRoZSBtZWV0dXAgSSBob3N0LjwvYT5gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHdlYnRhc2sgPSBuZXcgUHJvamVjdCh7XG4gICAgICAgICAgICB0aXRsZTogJ1NlY3VyZSBDbGllbnQgQXV0aGVudGljYXRpb24gd2l0aCBXZWJ0YXNrJyxcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmtzOiBSZWZlcmVuY2VMaW5rcy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vYmxvZy54ZHVtYWluZS5jb20vdXNpbmctd2VidGFzay1pby1mb3Itc2VjdXJlLWFwaS10b2tlbnMvJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vYmxvZy54ZHVtYWluZS5jb20vY29udGVudC9pbWFnZXMvMjAxNS8wNy9TY3JlZW4tU2hvdC0yMDE1LTA3LTE5LWF0LTctMzUtMTktUE0ucG5nJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgU2VjdXJlIGF1dGhlbnRpY2F0aW9uIHRvIGFuIEFQSSBmcm9tIGEgc2VydmVybGVzcyBqYXZhc2NyaXB0IGFwcGxpY2F0aW9uIHVzaW5nIFdlYnRhc2suaW9gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBrby5vYnNlcnZhYmxlQXJyYXkoW1xuICAgICAgICAgICAgd2ViU3BlZWNoRXhwZXJpbWVudHMsXG4gICAgICAgICAgICBtb3JzZUNvZGUsXG4gICAgICAgICAgICBzaW5nbGVEaXZDc3MsXG4gICAgICAgICAgICBjb2xsYWJvcmF0ZSxcbiAgICAgICAgICAgIC8vaGFsbG93ZWVuLFxuICAgICAgICAgICAgZW51bWVyYXRlRGV2aWNlcyxcbiAgICAgICAgICAgIGFzaWRlLFxuICAgICAgICAgICAgbW90b3JjeWNsZSxcbiAgICAgICAgICAgIHNmdSxcbiAgICAgICAgICAgIHRyaWFuZ2xlV2VicnRjLFxuICAgICAgICAgICAgZnV0dXJlV2VicnRjLFxuICAgICAgICAgICAgd2VidGFza1xuICAgICAgICBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RTZXQ7XG4iLCJjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihpdGVtKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBpdGVtLnRpdGxlO1xuICAgICAgICB0aGlzLnJlZmVyZW5jZUxpbmtzID0gaXRlbS5yZWZlcmVuY2VMaW5rcyB8fCBudWxsO1xuICAgICAgICB0aGlzLnRlY2hJdGVtcyA9IGl0ZW0udGVjaEl0ZW1zID8ga28ub2JzZXJ2YWJsZUFycmF5KGl0ZW0udGVjaEl0ZW1zKSA6IG51bGw7XG4gICAgICAgIHRoaXMuaW1hZ2VTb3VyY2UgPSBrby5vYnNlcnZhYmxlKGl0ZW0uaW1hZ2VTb3VyY2UpO1xuICAgICAgICB0aGlzLmxpdmVEZW1vID0ga28ub2JzZXJ2YWJsZShpdGVtLmxpdmVEZW1vKTtcbiAgICAgICAgdGhpcy53aWRlID0ga28ub2JzZXJ2YWJsZShpdGVtLndpZGUpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5maWd1cmVTZXQgPSBrby5vYnNlcnZhYmxlQXJyYXkoaXRlbS5maWd1cmVTZXQpO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5maWd1cmVTZXQoKTtcbiAgICAgICAgY29uc3QgZmlyc3QgPSBpdGVtc1swXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFpdGVtc1tpXS5jb2xsYXBzZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zW2krMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaSsxXS5jb2xsYXBzZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QuY29sbGFwc2UoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5jb2xsYXBzZSh0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2aW91cygpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmZpZ3VyZVNldCgpO1xuICAgICAgICBjb25zdCBsYXN0ID0gaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGZvciAobGV0IGkgPSBpdGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKCFpdGVtc1tpXS5jb2xsYXBzZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAwICYmIGl0ZW1zW2ktMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaS0xXS5jb2xsYXBzZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdC5jb2xsYXBzZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmNvbGxhcHNlKHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImNsYXNzIFJlZmVyZW5jZUxpbmtzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIHN0YXRpYyBjcmVhdGUobGlua3MpIHtcbiAgICAgICAgY29uc3QgYXJyID0gbmV3IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICBpZiAobGlua3MuZGVtbykge1xuICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhcmdldDogbGlua3MuZGVtbyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ2RlbW8nLFxuICAgICAgICAgICAgICAgIGljb25DbGFzczogJ2ZhIGZhLW1hZ2ljJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmtzLnNvdXJjZSkge1xuICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhcmdldDogbGlua3Muc291cmNlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnc291cmNlJyxcbiAgICAgICAgICAgICAgICBpY29uQ2xhc3M6ICdmYSBmYS1maWxlLWNvZGUtbydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5rcy5zbGlkZXMpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGxpbmtzLnNsaWRlcyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3NsaWRlcycsXG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzOiAnZmEgZmEtdGVsZXZpc2lvbidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5rcy52aWRlbykge1xuICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhcmdldDogbGlua3MudmlkZW8sXG4gICAgICAgICAgICAgICAgdGl0bGU6ICd2aWRlbycsXG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzOiAnZmEteW91dHViZS1wbGF5J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZmVyZW5jZUxpbmtzO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IC0gaGknKTtcbiAgICB9XG59O1xuIl19
