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

    ko.applyBindings(this, elem);
};

module.exports = new App();

},{"./header":"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-RLZMnOMm.tmp/src/header.js","./project-set":"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-RLZMnOMm.tmp/src/project-set.js","./test":"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-RLZMnOMm.tmp/src/test.js"}],"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-RLZMnOMm.tmp/src/header.js":[function(require,module,exports){
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

},{}],"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-RLZMnOMm.tmp/src/project-set.js":[function(require,module,exports){
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

},{"./project":"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-RLZMnOMm.tmp/src/project.js","./reference-links":"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-RLZMnOMm.tmp/src/reference-links.js"}],"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-RLZMnOMm.tmp/src/project.js":[function(require,module,exports){
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

},{}],"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-RLZMnOMm.tmp/src/reference-links.js":[function(require,module,exports){
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

},{}],"/Users/xanderdumaine/Code/personal/xdumaine.github.io/tmp/babel-tmp_dest_dir-RLZMnOMm.tmp/src/test.js":[function(require,module,exports){
"use strict";

module.exports = {
    test: function test() {
        console.log("test - hi");
    }
};

},{}]},{},["./src/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm9jY29saS1mYXN0LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9hcHAuanMiLCJzcmMvaGVhZGVyLmpzIiwic3JjL3Byb2plY3Qtc2V0LmpzIiwic3JjL3Byb2plY3QuanMiLCJzcmMvcmVmZXJlbmNlLWxpbmtzLmpzIiwic3JjL3Rlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNBTyxJQUFJLDJCQUFNLFFBQVE7O0lBQ2xCLE1BQU0sMkJBQU0sVUFBVTs7SUFDdEIsVUFBVSwyQkFBTSxlQUFlOztJQUVoQyxJQUFJLEdBQ0ssU0FEVCxJQUFJLENBQ00sSUFBSSxFQUFFOzBCQURoQixJQUFJOztBQUVGLFFBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztDQUMzQjs7SUFHQyxHQUFHLEdBQ00sU0FEVCxHQUFHLENBQ08sSUFBSSxFQUFFOzBCQURoQixHQUFHOztBQUVELFFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNaLFFBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUMzQixRQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7O0FBRWpDLE1BQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQ2hDOztpQkFHVSxJQUFJLEdBQUcsRUFBRTs7Ozs7OztJQ3BCbEIsTUFBTSxHQUNHLFNBRFQsTUFBTSxHQUNNOzBCQURaLE1BQU07O0FBRUosUUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQzVCO0FBQ0ksYUFBSyxFQUFFLFFBQVE7QUFDZixpQkFBUyxFQUFFLGNBQWM7QUFDekIsY0FBTSxFQUFFLDZCQUE2QjtLQUN4QyxFQUNEO0FBQ0ksYUFBSyxFQUFFLE1BQU07QUFD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ZixpQ0FBUyxFQUFFLG1CQUFtQjtxQkFDakMsQ0FBQyxDQUFDO2lCQUNOO0FBQ0Qsb0JBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNkLHVCQUFHLENBQUMsSUFBSSxDQUFDO0FBQ0wsOEJBQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtBQUNwQiw2QkFBSyxFQUFFLFFBQVE7QUFDZixpQ0FBUyxFQUFFLGtCQUFrQjtxQkFDaEMsQ0FBQyxDQUFDO2lCQUNOO0FBQ0Qsb0JBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtBQUNiLHVCQUFHLENBQUMsSUFBSSxDQUFDO0FBQ0wsOEJBQU0sRUFBRSxLQUFLLENBQUMsS0FBSztBQUNuQiw2QkFBSyxFQUFFLE9BQU87QUFDZCxpQ0FBUyxFQUFFLGlCQUFpQjtxQkFDL0IsQ0FBQyxDQUFDO2lCQUNOO0FBQ0QsdUJBQU8sR0FBRyxDQUFDO2FBQ2Q7Ozs7V0FqQ0MsY0FBYzs7O2lCQW9DTCxjQUFjOzs7OztpQkNwQ2Q7QUFDWCxRQUFJLEVBQUEsZ0JBQUc7QUFDSCxlQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzVCO0NBQ0oiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFRlc3QgZnJvbSAnLi90ZXN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IFByb2plY3RTZXQgZnJvbSAnLi9wcm9qZWN0LXNldCc7XG5cbmNsYXNzIENhcmQge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IG9wdHMudGl0bGU7XG4gICAgfVxufVxuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKGVsZW0pIHtcbiAgICAgICAgVGVzdC50ZXN0KCk7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xuICAgICAgICB0aGlzLnByb2plY3RzID0gbmV3IFByb2plY3RTZXQoKTtcblxuICAgICAgICBrby5hcHBseUJpbmRpbmdzKHRoaXMsIGVsZW0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwcCgpO1xuIiwiY2xhc3MgSGVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saW5rcyA9IGtvLm9ic2VydmFibGVBcnJheShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdHaXRodWInLFxuICAgICAgICAgICAgICAgIGljb25DbGFzczogJ2ZhIGZhLWdpdGh1YicsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9naXRodWIuY29tL3hkdW1haW5lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Jsb2cnLFxuICAgICAgICAgICAgICAgIGljb25DbGFzczogJ2ZhIGZhLXJzcycsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9ibG9nLnhkdW1haW5lLmNvbSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdGFja092ZXJmbG93JyxcbiAgICAgICAgICAgICAgICBpY29uQ2xhc3M6ICdmYSBmYS1zdGFjay1vdmVyZmxvdycsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS91c2Vycy8zODE0MjIveGR1bWFpbmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnUsOpc3Vtw6knLFxuICAgICAgICAgICAgICAgIGljb25DbGFzczogJ2ZhIGZhLXN0YWNrLWV4Y2hhbmdlJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwczovL2NhcmVlcnMuc3RhY2tvdmVyZmxvdy5jb20vZHVtYWluZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTbGlkZXMnLFxuICAgICAgICAgICAgICAgIGljb25DbGFzczogJ2ZhIGZhLXR2JyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwczovL3NsaWRlcy54ZHVtYWluZS5jb20nXG4gICAgICAgICAgICB9XG4gICAgICAgIF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBSZWZlcmVuY2VMaW5rcyBmcm9tICcuL3JlZmVyZW5jZS1saW5rcyc7XG5cbmNsYXNzIFByb2plY3RTZXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCB3ZWJTcGVlY2hFeHBlcmltZW50cyA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnV2ViIFNwZWVjaCBFeHBlcmltZW50cycsXG4gICAgICAgICAgICByZWZlcmVuY2VMaW5rczogUmVmZXJlbmNlTGlua3MuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBkZW1vOiAnaHR0cHM6Ly93d3cueGR1bWFpbmUuY29tL3dlYi1zcGVlY2gtZXhwZXJpbWVudHMvJyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20veGR1bWFpbmUvd2ViLXNwZWVjaC1leHBlcmltZW50cydcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL2Nsb3VkLmdpdGh1YnVzZXJjb250ZW50LmNvbS9hc3NldHMvODMzOTExLzE2MzU5Njg5LzhhMGZlZGY4LTNiMGMtMTFlNi04YjI1LWZiMGNkZmE3Y2YxYS5wbmcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBTdGFydGluZyBmcm9tIEdvb2dsZSB3ZWJraXRTcGVlY2hSZWNvZ25pdGlvbiBleGFtcGxlLCBhbmQgY29tYmluaW5nIHRoZSBleHBlcmltZW50YWwgQVBJXG4gICAgICAgICAgICAgICAgd2l0aCB0aGUgc3BlZWNoU3ludGhlc2lzIEFQSSwgSSBtYWRlIGFuIGV4YW1wbGUgb2YgYW4gYXBwIHRoYXQgYm90aCBsaXN0ZW5zIHRvIGFuZCBzcGVha3MgdG8gdXNlcnNgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG1vcnNlQ29kZSA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnV2ViUlRDIERUTUYgTW9yc2UgQ29kZScsXG4gICAgICAgICAgICByZWZlcmVuY2VMaW5rczogUmVmZXJlbmNlTGlua3MuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBkZW1vOiAnaHR0cHM6Ly9tb3JzZWNvZGUueGR1bWFpbmUuY29tJyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20veGR1bWFpbmUvd2VicnRjLWR0bWYtbW9yc2Vjb2RlLydcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL2Nsb3VkLmdpdGh1YnVzZXJjb250ZW50LmNvbS9hc3NldHMvODMzOTExLzEyNTMwNjkyL2QxNGIxZWM2LWMxYjQtMTFlNS04ODRmLWQ3YzZiODhlYjFhMC5wbmcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBJIGRlY2lkZWQgdG8gcHV0IHRvZ2V0aGVyIGEgZGVtbyB0aGF0IGNvbnZlcnRzIHRleHQgaW50byBtb3JzZSBjb2RlLFxuICAgICAgICAgICAgICAgIHRoZW4gc2VuZHMgaXQgb3ZlciBhIFdlYlJUQyBwZWVyY29ubmVjdGlvbiB1c2luZyBEVE1GIHRvbmVzIHdpdGhcbiAgICAgICAgICAgICAgICB2YXJ5aW5nIGRlbGF5cy4gSXQncyBub3QgcmVhbGx5IHVzZWZ1bCwgYnV0IGl0J3MgYSBzb3J0IG9mIGV4cGVyaW1lbnRcbiAgICAgICAgICAgICAgICBhbmQgZGVtbyBvZiB3aGF0J3MgcG9zc2libGUuYFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzaW5nbGVEaXZDc3MgPSBuZXcgUHJvamVjdCh7XG4gICAgICAgICAgICB0aXRsZTogJ1NpbmdsZSBEaXYgQ1NTJyxcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmtzOiBSZWZlcmVuY2VMaW5rcy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRlbW86ICdodHRwczovL2Nzcy54ZHVtYWluZS5jb20nLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS94ZHVtYWluZS94YW5kZXIuY3NzJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBsaXZlRGVtbzogJzxkaXYgY2xhc3M9XCJjb250cm9sbGVyXCI+PGRpdj48L2Rpdj48L2Rpdj4nLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBJJ20gd29ya2luZyBvbiBhIHNlcmllcyBvZiBDU1MgaWxsdXN0cmF0aW9uc1xuICAgICAgICAgICAgICAgIGluc3BpcmVkIGJ5IDxhIGhyZWY9XCJodHRwOi8vYS5zaW5nbGVkaXYuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+YS5zaW5nbGVkaXYuY29tPC9hPi5cbiAgICAgICAgICAgICAgICBBbGwgQ1NTIGlzIHdyaXR0ZW4gYnkgbWUsIHVzaW5nIG15IG93biBrbm93bGVkZ2Ugc3VwcGxlbWVudGVkIGJ5IGRvY3MgYW5kXG4gICAgICAgICAgICAgICAgZXhhbXBsZXMgb25saW5lLiBObyBzbmlwcGV0cyBhcmUgcmV1c2VkLiBBcyBvZiBub3csIGFsbCBpbGx1c3RyYXRpb25zIHVzZSBhIHNpbmdsZSB0YWcuYFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjb2xsYWJvcmF0ZSA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29sbGFib3JhdGUgLSBJbnRlcmFjdGl2ZSBJbnRlbGxpZ2VuY2UnLFxuICAgICAgICAgICAgd2lkZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlY2hJdGVtczogWyAnaHRtbDUnLCAnY3NzMycsICdqYXZhc2NyaXB0JywgJ3dlYnJ0YycgXSxcbiAgICAgICAgICAgIGZpZ3VyZVNldDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL2Nsb3VkLmdpdGh1YnVzZXJjb250ZW50LmNvbS9hc3NldHMvODMzOTExLzc0NDc5MTgvOGY3NGM4OWEtZjFkOS0xMWU0LTg2M2UtNGE0MzE0NzdmYTI1LmpwZycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgWE1QUCBiYXNlZCBjaGF0IHdpdGggbXVsdGktcGFydHkgV2ViUlRDIHZpZGVvIGNhbGxpbmcuIEkgd29yayB3aXRoIGFuIG91dHN0YW5kaW5nIHRlYW0gdG8gcmVmaW5lIGFuZCBpbXByb3ZlIG91ciB0ZWFtIGNoYXQuXG4gICAgICAgICAgICAgICAgICAgICAgICBJIGhlYWRlZCB1cCBhbiBlZmZvcnQgdG8gc3VwZXJjaGFyZ2Ugb3VyIGFwcCB3aXRoIHZpZGVvIGNhbGxpbmcsIGJhc2VkIG9uIG9wZW4gc291cmNlIGxpYnJhcmllcyBhbmQgcG93ZXJlZCBieSBXZWJSVEMuIEkgd29ya1xuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBqYXZhc2NyaXB0IChlczYgYW5kIGNvZmZlZXNjcmlwdCwgdG9vISksIENTUyAoTEVTUyksIGFuZCBIVE1MNSBpbiB0aGUgRW1iZXIuanMgZnJvbnQtZW5kLiBBcyBhIHBhcnQgb2YgdGhpcyBwcm9qZWN0LCBJXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cmlidXRlIHRvIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYW5keWV0L1NpbXBsZVdlYlJUQ1wiIHRhcmdldD1cIl9ibGFua1wiPlNpbXBsZVdlYlJUQzwvYT4gYW5kIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9vdGFsa1wiPk9UYWxrIG1vZHVsZXM8L2E+IGxpa2UgSmluZ2xlLmpzLmAsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlOiBrby5vYnNlcnZhYmxlKGZhbHNlKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vY2xvdWQuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fzc2V0cy84MzM5MTEvNzQ0NzkwNS8zZDMzZWVmOC1mMWQ5LTExZTQtOWMzNy1iNmRhZmRkNjk3ZmUuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBQbHVnaW4tbGVzcyBzY3JlZW4gc2hhcmluZy4gVXNpbmcgYnJvd3NlciBzY3JlZW4gY2FwdHVyZSBBUElzIGFuZCBleHRlbnNpb25zLCB3aGVyZSBuZWNlc3NhcnkuYCxcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2U6IGtvLm9ic2VydmFibGUodHJ1ZSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL2Nsb3VkLmdpdGh1YnVzZXJjb250ZW50LmNvbS9hc3NldHMvODMzOTExLzc0NDc5MDQvM2QzMmJiZGMtZjFkOS0xMWU0LTllMGYtYWM4NzcxMmY5ODdjLmpwZycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgUGVlci10by1wZWVyIGxpbWl0YXRpb25zIChtZXNoIG5ldHdvcmspIHNsb3dlZCB1cyBkb3duLCBidXQgZGlkbid0IHN0b3AgbWUuIEkgZGVsaXZlcmVkIGEgd29ya2luZyBzb2x1dGlvbiBvcHRpbWl6ZWQgZm9yIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25mZXJlbmNlcyB0byBnZXQgdGhlIHByb2R1Y3Qgb3V0IHRoZSBkb29yLCBhbmQgcG93ZXJpbmcgYWxtb3N0IGFsbCBvZiBvdXIgc21hbGwgdmlkZW8gY29uZmVyZW5jZSBuZWVkcy4gSW4gdGhlIG1lYW50aW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgSSdtIHdvcmtpbmcgd2l0aCBleHBlcnRzIHRvIGludGVncmF0ZSB3aXRoIGEgc2luZ2xlLXBvaW50IHNlbGVjdGl2ZSBmb3J3YXJkaW5nIHNlcnZlciBmb3IgYW4gZXZlbiBiZXR0ZXIgZXhwZXJpZW5jZS5gLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZToga28ub2JzZXJ2YWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaGFsbG93ZWVuID0gbmV3IFByb2plY3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdIYWxsb3dlZW4gMjAxNScsXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vbUFQQ0gxUC5qcGcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBGb3IgSGFsbG93ZWVuIHRoaXMgeWVhciwgSSBkcmVzc2VkIGFzIEZyeSBmcm9tIEZ1dHVyYW1hLlxuICAgICAgICAgICAgICAgIEkgYnVpbHQgQmVuZGVyJ3MgaGVhZCB1c2luZyBzeXJvZm9hbSwgcGFwZXIsIGFuZCBwYWludC5cbiAgICAgICAgICAgICAgICBJIGRlY29yYXRlZCBteSBvZmZpY2UgbGlrZSB0aGUgUGxhbmV0IEV4cHJlc3Mgc2hpcCB3aXRoXG4gICAgICAgICAgICAgICAgc3Rhci1iYWNrZHJvcCB3aW5kb3dzLCBhIGhhdGNoIGRvb3Igd2l0aCBsb2dvLCBhbmQgYVxuICAgICAgICAgICAgICAgIGZ1bGwtc2l6ZWQgU2x1cm0gbWFjaGluZS5gXG4gICAgICAgICAgICAvL3RvZG86IGFsbG93IGxpbmtpbmcgdG8gbGFyZ2UgaW1hZ2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZW51bWVyYXRlRGV2aWNlcyA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnZW51bWVyYXRlRGV2aWNlcycsXG4gICAgICAgICAgICByZWZlcmVuY2VMaW5rczogUmVmZXJlbmNlTGlua3MuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBkZW1vOiAnaHR0cHM6Ly93d3cueGR1bWFpbmUuY29tL2VudW1lcmF0ZURldmljZXMvdGVzdC8nLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS94ZHVtYWluZS9lbnVtZXJhdGVEZXZpY2VzLydcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL2Nsb3VkLmdpdGh1YnVzZXJjb250ZW50LmNvbS9hc3NldHMvODMzOTExLzc1MDI3NTMvNjUxMDA2MGMtZjQwYy0xMWU0LTlkNmMtNGMwZTc0Y2E2NzZkLnBuZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYEEgV2ViUlRDIGhlbHBlciBsaWJyYXJ5IGZvciBub3JtYWxpemluZyBicm93c2VyIEFQSXMgZm9yIGVudW1lcmF0aW5nIG1lZGlhIGRldmljZXMuYFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBhc2lkZSA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnQXNpZGUgKEdob3N0IFRoZW1lKScsXG4gICAgICAgICAgICByZWZlcmVuY2VMaW5rczogUmVmZXJlbmNlTGlua3MuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20veGR1bWFpbmUvZ2hvc3QtYXNpZGUvJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vY2xvdWQuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fzc2V0cy84MzM5MTEvNzUwMjk2MS9jOGFmNGJjYy1mNDBkLTExZTQtOGYxZi1kY2ExNjIyNWMzYjYuanBnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQXNpZGUgaXMgYSA8YSBocmVmPVwiaHR0cDovL2dob3N0Lm9yZ1wiPkdob3N0PC9hPiB0aGVtZSB0aGF0IHBvd2VycyBteSBibG9nLiBNYWtlcyB1c2Ugb2YgaGFuZGxlYmFycywgQ1NTMywgYW5kIHRoZSBHaG9zdCB0aGVtZSBBUElgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG1vdG9yY3ljbGUgPSBuZXcgUHJvamVjdCh7XG4gICAgICAgICAgICB0aXRsZTogJ01vdG9yY3ljbGUgTEVEIEVmZmVjdHMgd2l0aCBBcmR1aW5vJyxcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmtzOiBSZWZlcmVuY2VMaW5rcy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRlbW86ICdodHRwczovL3R3aXR0ZXIuY29tL3hhbmRlcmR1bWFpbmUvc3RhdHVzLzY2MDkxODExMzgwMjg0NjIwOCcsXG4gICAgICAgICAgICAgICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3hkdW1haW5lL2VzcGxvcmEtbmVvcGl4ZWxzJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vY2xvdWQuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fzc2V0cy84MzM5MTEvMTA4NzM1MTgvZDE2NDAyNWUtODBlMy0xMWU1LThlZTMtMDg2ZDU2YzMyYjliLkpQRycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYEFyZHVpbm8gRXNwbG9yYSBib2FyZCB3aXRoIE5lb3BpeGVscyB0byBhZGQgTEVEIGVmZmVjdHMgdG8gbW90b3JjeWNsZS5gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNmdSA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnV2ViUlRDIHdpdGggU0ZVJyxcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmtzOiBSZWZlcmVuY2VMaW5rcy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHNsaWRlczogJ2h0dHBzOi8vc2xpZGVzLnhkdW1haW5lLmNvbS9zZnUvJyxcbiAgICAgICAgICAgICAgICB2aWRlbzogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9d3doVF9ZMGV4MEEnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGltYWdlU291cmNlOiAnaHR0cHM6Ly9jbG91ZC5naXRodWJ1c2VyY29udGVudC5jb20vYXNzZXRzLzgzMzkxMS8xMDg3MzUwMS9hMWQxNjU3Yy04MGUzLTExZTUtOWYyYy1hMzdkMjkzNDlkZWQucG5nJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQSBzZXJpZXMgb2Ygc2xpZGVzIEkgcHV0IHRvZ2V0aGVyIGFyb3VuZCB0aGUgYXJjaGl0ZWN0dXJlIG9mIHVzaW5nIGFuIFNGVVxuICAgICAgICAgICAgICAgIGxpa2UgSml0c2kgVmlkZW9CcmlkZ2UgZm9yIGJ1aWxkaW5nIGJldHRlciBtdWx0aXBvaW50IHZpZGVvIGNvbmZlcmVuY2luZy5cbiAgICAgICAgICAgICAgICBQcmVzZW50ZWQgYXRcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5tZWV0dXAuY29tL1RyaWFuZ2xlLVdlYlJUQy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj50aGUgbWVldHVwIEkgaG9zdC48L2E+YFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB0cmlhbmdsZVdlYnJ0YyA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnVHJpYW5nbGUgV2ViUlRDJyxcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmtzOiBSZWZlcmVuY2VMaW5rcy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRlbW86ICdodHRwOi8vd3d3Lm1lZXR1cC5jb20vVHJpYW5nbGUtV2ViUlRDLydcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL2Nsb3VkLmdpdGh1YnVzZXJjb250ZW50LmNvbS9hc3NldHMvODMzOTExLzExOTQ1NDkzLzZiMjQ4N2NjLWE4MWUtMTFlNS05MDFhLTRiOWI4MWY4MDQ0Zi5wbmcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBBIG1lZXR1cCBncm91cCBkaXNjdXNzaW5nIHRlY2huaWNhbCBkZXRhaWxzLCBpbm5vdmF0aW9uLCBhbmQgZGV2ZWxvcG1lbnQgb2YgV2ViUlRDLmBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZnV0dXJlV2VicnRjID0gbmV3IFByb2plY3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdUaGUgRnV0dXJlIG9mIFdlYlJUQycsXG4gICAgICAgICAgICByZWZlcmVuY2VMaW5rczogUmVmZXJlbmNlTGlua3MuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBzbGlkZXM6ICdodHRwczovL3NsaWRlcy54ZHVtYWluZS5jb20vd2VicnRjLW52LycsXG4gICAgICAgICAgICAgICAgdmlkZW86ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTI1UGZnUTBGTndNJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vY2xvdWQuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fzc2V0cy84MzM5MTEvMTE2MTEyMDcvOWY0MTk5ZTYtOWI4Zi0xMWU1LThkNjAtMGRjZTEzNWFmOWI5LnBuZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYFNsaWRlcyBkaXNjdXNzaW5nIHRoZSBjdXJyZW50IHN0YXRlIG9mIFdlYlJUQyBpbXBsZW1lbnRhdGlvbiBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgb2Ygc3BlYyBkZWZpbml0aW9uLFxuICAgICAgICAgICAgICAgIHdoaWNoIHdpbGwgZm9ybSB0aGUgZnV0dXJlIG9mIFdlYlJUQyBhbmQgT1JUQy5cbiAgICAgICAgICAgICAgICBQcmVzZW50ZWQgYXRcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5tZWV0dXAuY29tL1RyaWFuZ2xlLVdlYlJUQy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj50aGUgbWVldHVwIEkgaG9zdC48L2E+YFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB3ZWJ0YXNrID0gbmV3IFByb2plY3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdTZWN1cmUgQ2xpZW50IEF1dGhlbnRpY2F0aW9uIHdpdGggV2VidGFzaycsXG4gICAgICAgICAgICByZWZlcmVuY2VMaW5rczogUmVmZXJlbmNlTGlua3MuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdodHRwczovL2Jsb2cueGR1bWFpbmUuY29tL3VzaW5nLXdlYnRhc2staW8tZm9yLXNlY3VyZS1hcGktdG9rZW5zLydcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL2Jsb2cueGR1bWFpbmUuY29tL2NvbnRlbnQvaW1hZ2VzLzIwMTUvMDcvU2NyZWVuLVNob3QtMjAxNS0wNy0xOS1hdC03LTM1LTE5LVBNLnBuZycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYFNlY3VyZSBhdXRoZW50aWNhdGlvbiB0byBhbiBBUEkgZnJvbSBhIHNlcnZlcmxlc3MgamF2YXNjcmlwdCBhcHBsaWNhdGlvbiB1c2luZyBXZWJ0YXNrLmlvYFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb2plY3RzID0ga28ub2JzZXJ2YWJsZUFycmF5KFtcbiAgICAgICAgICAgIHdlYlNwZWVjaEV4cGVyaW1lbnRzLFxuICAgICAgICAgICAgbW9yc2VDb2RlLFxuICAgICAgICAgICAgc2luZ2xlRGl2Q3NzLFxuICAgICAgICAgICAgY29sbGFib3JhdGUsXG4gICAgICAgICAgICAvL2hhbGxvd2VlbixcbiAgICAgICAgICAgIGVudW1lcmF0ZURldmljZXMsXG4gICAgICAgICAgICBhc2lkZSxcbiAgICAgICAgICAgIG1vdG9yY3ljbGUsXG4gICAgICAgICAgICBzZnUsXG4gICAgICAgICAgICB0cmlhbmdsZVdlYnJ0YyxcbiAgICAgICAgICAgIGZ1dHVyZVdlYnJ0YyxcbiAgICAgICAgICAgIHdlYnRhc2tcbiAgICAgICAgXSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0U2V0O1xuIiwiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IoaXRlbSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gaXRlbS50aXRsZTtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VMaW5rcyA9IGl0ZW0ucmVmZXJlbmNlTGlua3MgfHwgbnVsbDtcbiAgICAgICAgdGhpcy50ZWNoSXRlbXMgPSBpdGVtLnRlY2hJdGVtcyA/IGtvLm9ic2VydmFibGVBcnJheShpdGVtLnRlY2hJdGVtcykgOiBudWxsO1xuICAgICAgICB0aGlzLmltYWdlU291cmNlID0ga28ub2JzZXJ2YWJsZShpdGVtLmltYWdlU291cmNlKTtcbiAgICAgICAgdGhpcy5saXZlRGVtbyA9IGtvLm9ic2VydmFibGUoaXRlbS5saXZlRGVtbyk7XG4gICAgICAgIHRoaXMud2lkZSA9IGtvLm9ic2VydmFibGUoaXRlbS53aWRlKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZmlndXJlU2V0ID0ga28ub2JzZXJ2YWJsZUFycmF5KGl0ZW0uZmlndXJlU2V0KTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuZmlndXJlU2V0KCk7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gaXRlbXNbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghaXRlbXNbaV0uY29sbGFwc2UoKSkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtc1tpKzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2krMV0uY29sbGFwc2UoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0LmNvbGxhcHNlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbXNbaV0uY29sbGFwc2UodHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJldmlvdXMoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5maWd1cmVTZXQoKTtcbiAgICAgICAgY29uc3QgbGFzdCA9IGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdO1xuICAgICAgICBmb3IgKGxldCBpID0gaXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmICghaXRlbXNbaV0uY29sbGFwc2UoKSkge1xuICAgICAgICAgICAgICAgIGlmIChpID4gMCAmJiBpdGVtc1tpLTFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ktMV0uY29sbGFwc2UoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3QuY29sbGFwc2UoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5jb2xsYXBzZSh0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJjbGFzcyBSZWZlcmVuY2VMaW5rcyB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBzdGF0aWMgY3JlYXRlKGxpbmtzKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IG5ldyBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgaWYgKGxpbmtzLmRlbW8pIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGxpbmtzLmRlbW8sXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdkZW1vJyxcbiAgICAgICAgICAgICAgICBpY29uQ2xhc3M6ICdmYSBmYS1tYWdpYydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5rcy5zb3VyY2UpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGxpbmtzLnNvdXJjZSxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3NvdXJjZScsXG4gICAgICAgICAgICAgICAgaWNvbkNsYXNzOiAnZmEgZmEtZmlsZS1jb2RlLW8nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlua3Muc2xpZGVzKSB7XG4gICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBsaW5rcy5zbGlkZXMsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdzbGlkZXMnLFxuICAgICAgICAgICAgICAgIGljb25DbGFzczogJ2ZhIGZhLXRlbGV2aXNpb24nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlua3MudmlkZW8pIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGxpbmtzLnZpZGVvLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAndmlkZW8nLFxuICAgICAgICAgICAgICAgIGljb25DbGFzczogJ2ZhLXlvdXR1YmUtcGxheSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZlcmVuY2VMaW5rcztcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZXN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdCAtIGhpJyk7XG4gICAgfVxufTtcbiJdfQ==
