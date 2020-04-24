(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){"use strict";var _interopRequire=function(obj){return obj&&obj.__esModule?obj["default"]:obj};var _classCallCheck=function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}};var Test=_interopRequire(require("./test"));var Header=_interopRequire(require("./header"));var ProjectSet=_interopRequire(require("./project-set"));var Card=function Card(opts){_classCallCheck(this,Card);this.title=opts.title};var App=function App(elem){_classCallCheck(this,App);Test.test();this.header=new Header;this.projects=new ProjectSet;ko.applyBindings(this,elem)};module.exports=new App},{"./header":2,"./project-set":3,"./test":6}],2:[function(require,module,exports){"use strict";var _classCallCheck=function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}};var Header=function Header(){_classCallCheck(this,Header);this.links=ko.observableArray([{title:"Github",iconClass:"fa fa-github",target:"https://github.com/xdumaine"},{title:"Blog",iconClass:"fa fa-rss",target:"https://blog.xdumaine.com"},{title:"StackOverflow",iconClass:"fa fa-stack-overflow",target:"https://stackoverflow.com/users/381422/xdumaine"},{title:"Résumé",iconClass:"fa fa-stack-exchange",target:"https://careers.stackoverflow.com/dumaine"},{title:"Slides",iconClass:"fa fa-tv",target:"https://slides.xdumaine.com"}])};module.exports=Header},{}],3:[function(require,module,exports){"use strict";var _interopRequire=function(obj){return obj&&obj.__esModule?obj["default"]:obj};var _classCallCheck=function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}};var Project=_interopRequire(require("./project"));var ReferenceLinks=_interopRequire(require("./reference-links"));var ProjectSet=function ProjectSet(){_classCallCheck(this,ProjectSet);var woodWorking=new Project({title:"Woodworking",referenceLinks:ReferenceLinks.create({demo:"https://instagram.com/xanderdumakes"}),script:'\x3c!-- LightWidget WIDGET --\x3e<script src="https://cdn.lightwidget.com/widgets/lightwidget.js"><\/script><iframe src="http://lightwidget.com/widgets/5379a8b11a0a57ec841fc6e2712963a2.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>'});var webSpeechExperiments=new Project({title:"Web Speech Experiments",referenceLinks:ReferenceLinks.create({demo:"https://www.xdumaine.com/web-speech-experiments/",source:"https://github.com/xdumaine/web-speech-experiments"}),imageSource:"https://cloud.githubusercontent.com/assets/833911/16359689/8a0fedf8-3b0c-11e6-8b25-fb0cdfa7cf1a.png",description:"Starting from Google webkitSpeechRecognition example, and combining the experimental API\n                with the speechSynthesis API, I made an example of an app that both listens to and speaks to users"});var morseCode=new Project({title:"WebRTC DTMF Morse Code",referenceLinks:ReferenceLinks.create({demo:"https://morsecode.xdumaine.com",source:"https://github.com/xdumaine/webrtc-dtmf-morsecode/"}),imageSource:"https://cloud.githubusercontent.com/assets/833911/12530692/d14b1ec6-c1b4-11e5-884f-d7c6b88eb1a0.png",description:"I decided to put together a demo that converts text into morse code,\n                then sends it over a WebRTC peerconnection using DTMF tones with\n                varying delays. It's not really useful, but it's a sort of experiment\n                and demo of what's possible."});var singleDivCss=new Project({title:"Single Div CSS",referenceLinks:ReferenceLinks.create({demo:"https://css.xdumaine.com",source:"https://github.com/xdumaine/xander.css"}),liveDemo:'<div class="controller"><div></div></div>',description:'I\'m working on a series of CSS illustrations\n                inspired by <a href="http://a.singlediv.com" target="_blank">a.singlediv.com</a>.\n                All CSS is written by me, using my own knowledge supplemented by docs and\n                examples online. No snippets are reused. As of now, all illustrations use a single tag.'});var collaborate=new Project({title:"Collaborate - Interactive Intelligence",wide:true,techItems:["html5","css3","javascript","webrtc"],figureSet:[{imageSource:"https://cloud.githubusercontent.com/assets/833911/7447918/8f74c89a-f1d9-11e4-863e-4a431477fa25.jpg",description:'XMPP based chat with multi-party WebRTC video calling. I work with an outstanding team to refine and improve our team chat.\n                        I headed up an effort to supercharge our app with video calling, based on open source libraries and powered by WebRTC. I work\n                        with javascript (es6 and coffeescript, too!), CSS (LESS), and HTML5 in the Ember.js front-end. As a part of this project, I\n                        contribute to <a href="https://github.com/andyet/SimpleWebRTC" target="_blank">SimpleWebRTC</a> and the\n                        <a href="https://github.com/otalk">OTalk modules</a> like Jingle.js.',collapse:ko.observable(false)},{imageSource:"https://cloud.githubusercontent.com/assets/833911/7447905/3d33eef8-f1d9-11e4-9c37-b6dafdd697fe.jpg",description:"Plugin-less screen sharing. Using browser screen capture APIs and extensions, where necessary.",collapse:ko.observable(true)},{imageSource:"https://cloud.githubusercontent.com/assets/833911/7447904/3d32bbdc-f1d9-11e4-9e0f-ac87712f987c.jpg",description:"Peer-to-peer limitations (mesh network) slowed us down, but didn't stop me. I delivered a working solution optimized for small\n                        conferences to get the product out the door, and powering almost all of our small video conference needs. In the meantime,\n                        I'm working with experts to integrate with a single-point selective forwarding server for an even better experience.",collapse:ko.observable(true)}]});var halloween=new Project({title:"Halloween 2015",imageSource:"https://i.imgur.com/mAPCH1P.jpg",description:"For Halloween this year, I dressed as Fry from Futurama.\n                I built Bender's head using syrofoam, paper, and paint.\n                I decorated my office like the Planet Express ship with\n                star-backdrop windows, a hatch door with logo, and a\n                full-sized Slurm machine."});var enumerateDevices=new Project({title:"enumerateDevices",referenceLinks:ReferenceLinks.create({demo:"https://www.xdumaine.com/enumerateDevices/test/",source:"https://github.com/xdumaine/enumerateDevices/"}),imageSource:"https://cloud.githubusercontent.com/assets/833911/7502753/6510060c-f40c-11e4-9d6c-4c0e74ca676d.png",description:"A WebRTC helper library for normalizing browser APIs for enumerating media devices."});var aside=new Project({title:"Aside (Ghost Theme)",referenceLinks:ReferenceLinks.create({source:"https://github.com/xdumaine/ghost-aside/"}),imageSource:"https://cloud.githubusercontent.com/assets/833911/7502961/c8af4bcc-f40d-11e4-8f1f-dca16225c3b6.jpg",description:'Aside is a <a href="http://ghost.org">Ghost</a> theme that powers my blog. Makes use of handlebars, CSS3, and the Ghost theme API'});var motorcycle=new Project({title:"Motorcycle LED Effects with Arduino",referenceLinks:ReferenceLinks.create({demo:"https://twitter.com/xanderdumaine/status/660918113802846208",source:"https://github.com/xdumaine/esplora-neopixels"}),imageSource:"https://cloud.githubusercontent.com/assets/833911/10873518/d164025e-80e3-11e5-8ee3-086d56c32b9b.JPG",description:"Arduino Esplora board with Neopixels to add LED effects to motorcycle."});var sfu=new Project({title:"WebRTC with SFU",referenceLinks:ReferenceLinks.create({slides:"https://slides.xdumaine.com/sfu/",video:"https://www.youtube.com/watch?v=wwhT_Y0ex0A"}),imageSource:"https://cloud.githubusercontent.com/assets/833911/10873501/a1d1657c-80e3-11e5-9f2c-a37d29349ded.png",description:'A series of slides I put together around the architecture of using an SFU\n                like Jitsi VideoBridge for building better multipoint video conferencing.\n                Presented at\n                <a href="http://www.meetup.com/Triangle-WebRTC/" target="_blank">the meetup I host.</a>'});var triangleWebrtc=new Project({title:"Triangle WebRTC",referenceLinks:ReferenceLinks.create({demo:"http://www.meetup.com/Triangle-WebRTC/"}),imageSource:"https://cloud.githubusercontent.com/assets/833911/11945493/6b2487cc-a81e-11e5-901a-4b9b81f8044f.png",description:"A meetup group discussing technical details, innovation, and development of WebRTC."});var futureWebrtc=new Project({title:"The Future of WebRTC",referenceLinks:ReferenceLinks.create({slides:"https://slides.xdumaine.com/webrtc-nv/",video:"https://www.youtube.com/watch?v=25PfgQ0FNwM"}),imageSource:"https://cloud.githubusercontent.com/assets/833911/11611207/9f4199e6-9b8f-11e5-8d60-0dce135af9b9.png",description:'Slides discussing the current state of WebRTC implementation and the current state of spec definition,\n                which will form the future of WebRTC and ORTC.\n                Presented at\n                <a href="http://www.meetup.com/Triangle-WebRTC/" target="_blank">the meetup I host.</a>'});var webtask=new Project({title:"Secure Client Authentication with Webtask",referenceLinks:ReferenceLinks.create({source:"https://blog.xdumaine.com/using-webtask-io-for-secure-api-tokens/"}),imageSource:"https://blog.xdumaine.com/content/images/2015/07/Screen-Shot-2015-07-19-at-7-35-19-PM.png",description:"Secure authentication to an API from a serverless javascript application using Webtask.io"});this.projects=ko.observableArray([woodWorking,webSpeechExperiments,morseCode,singleDivCss,collaborate,enumerateDevices,aside,motorcycle,sfu,triangleWebrtc,futureWebrtc,webtask])};module.exports=ProjectSet},{"./project":4,"./reference-links":5}],4:[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var key in props){var prop=props[key];prop.configurable=true;if(prop.value)prop.writable=true}Object.defineProperties(target,props)}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _classCallCheck=function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}};var Project=function(){function Project(item){_classCallCheck(this,Project);this.title=item.title;this.referenceLinks=item.referenceLinks||null;this.techItems=item.techItems?ko.observableArray(item.techItems):null;this.imageSource=ko.observable(item.imageSource);this.liveDemo=ko.observable(item.liveDemo);this.wide=ko.observable(item.wide);this.script=ko.observable(item.script);this.description=item.description;this.figureSet=ko.observableArray(item.figureSet)}_createClass(Project,{next:{value:function next(){var items=this.figureSet();var first=items[0];for(var i=0;i<items.length;i++){if(!items[i].collapse()){if(items[i+1]){items[i+1].collapse(false)}else{first.collapse(false)}items[i].collapse(true);return}}}},previous:{value:function previous(){var items=this.figureSet();var last=items[items.length-1];for(var i=items.length-1;i>=0;i--){if(!items[i].collapse()){if(i>0&&items[i-1]){items[i-1].collapse(false)}else{last.collapse(false)}items[i].collapse(true);return}}}}});return Project}();module.exports=Project},{}],5:[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var key in props){var prop=props[key];prop.configurable=true;if(prop.value)prop.writable=true}Object.defineProperties(target,props)}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _classCallCheck=function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}};var ReferenceLinks=function(){function ReferenceLinks(){_classCallCheck(this,ReferenceLinks)}_createClass(ReferenceLinks,null,{create:{value:function create(links){var arr=new ko.observableArray;if(links.demo){arr.push({target:links.demo,title:"demo",iconClass:"fa fa-magic"})}if(links.source){arr.push({target:links.source,title:"source",iconClass:"fa fa-file-code-o"})}if(links.slides){arr.push({target:links.slides,title:"slides",iconClass:"fa fa-television"})}if(links.video){arr.push({target:links.video,title:"video",iconClass:"fa-youtube-play"})}return arr}}});return ReferenceLinks}();module.exports=ReferenceLinks},{}],6:[function(require,module,exports){"use strict";module.exports={test:function test(){console.log("test - hi")}}},{}]},{},[1]);