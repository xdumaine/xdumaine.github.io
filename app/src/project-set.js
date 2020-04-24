import Project from "./project";
import ReferenceLinks from "./reference-links";

class ProjectSet {
  constructor() {
    const woodWorking = new Project({
      title: "Woodworking",
      referenceLinks: ReferenceLinks.create({
        demo: "https://instagram.com/xanderdumakes",
      }),
      script:
        '<!-- LightWidget WIDGET --><script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="https://cdn.lightwidget.com/widgets/5379a8b11a0a57ec841fc6e2712963a2.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>',
    });

    const webSpeechExperiments = new Project({
      title: "Web Speech Experiments",
      referenceLinks: ReferenceLinks.create({
        demo: "https://www.xdumaine.com/web-speech-experiments/",
        source: "https://github.com/xdumaine/web-speech-experiments",
      }),
      imageSource:
        "https://cloud.githubusercontent.com/assets/833911/16359689/8a0fedf8-3b0c-11e6-8b25-fb0cdfa7cf1a.png",
      description: `Starting from Google webkitSpeechRecognition example, and combining the experimental API
                with the speechSynthesis API, I made an example of an app that both listens to and speaks to users`,
    });

    const morseCode = new Project({
      title: "WebRTC DTMF Morse Code",
      referenceLinks: ReferenceLinks.create({
        demo: "https://morsecode.xdumaine.com",
        source: "https://github.com/xdumaine/webrtc-dtmf-morsecode/",
      }),
      imageSource:
        "https://cloud.githubusercontent.com/assets/833911/12530692/d14b1ec6-c1b4-11e5-884f-d7c6b88eb1a0.png",
      description: `I decided to put together a demo that converts text into morse code,
                then sends it over a WebRTC peerconnection using DTMF tones with
                varying delays. It's not really useful, but it's a sort of experiment
                and demo of what's possible.`,
    });

    const singleDivCss = new Project({
      title: "Single Div CSS",
      referenceLinks: ReferenceLinks.create({
        demo: "https://css.xdumaine.com",
        source: "https://github.com/xdumaine/xander.css",
      }),
      liveDemo: '<div class="controller"><div></div></div>',
      description: `I'm working on a series of CSS illustrations
                inspired by <a href="http://a.singlediv.com" target="_blank">a.singlediv.com</a>.
                All CSS is written by me, using my own knowledge supplemented by docs and
                examples online. No snippets are reused. As of now, all illustrations use a single tag.`,
    });

    const collaborate = new Project({
      title: "Collaborate - Interactive Intelligence",
      wide: true,
      techItems: ["html5", "css3", "javascript", "webrtc"],
      figureSet: [
        {
          imageSource:
            "https://cloud.githubusercontent.com/assets/833911/7447918/8f74c89a-f1d9-11e4-863e-4a431477fa25.jpg",
          description: `XMPP based chat with multi-party WebRTC video calling. I work with an outstanding team to refine and improve our team chat.
                        I headed up an effort to supercharge our app with video calling, based on open source libraries and powered by WebRTC. I work
                        with javascript (es6 and coffeescript, too!), CSS (LESS), and HTML5 in the Ember.js front-end. As a part of this project, I
                        contribute to <a href="https://github.com/andyet/SimpleWebRTC" target="_blank">SimpleWebRTC</a> and the
                        <a href="https://github.com/otalk">OTalk modules</a> like Jingle.js.`,
          collapse: ko.observable(false),
        },
        {
          imageSource:
            "https://cloud.githubusercontent.com/assets/833911/7447905/3d33eef8-f1d9-11e4-9c37-b6dafdd697fe.jpg",
          description: `Plugin-less screen sharing. Using browser screen capture APIs and extensions, where necessary.`,
          collapse: ko.observable(true),
        },
        {
          imageSource:
            "https://cloud.githubusercontent.com/assets/833911/7447904/3d32bbdc-f1d9-11e4-9e0f-ac87712f987c.jpg",
          description: `Peer-to-peer limitations (mesh network) slowed us down, but didn't stop me. I delivered a working solution optimized for small
                        conferences to get the product out the door, and powering almost all of our small video conference needs. In the meantime,
                        I'm working with experts to integrate with a single-point selective forwarding server for an even better experience.`,
          collapse: ko.observable(true),
        },
      ],
    });

    const halloween = new Project({
      title: "Halloween 2015",
      imageSource: "https://i.imgur.com/mAPCH1P.jpg",
      description: `For Halloween this year, I dressed as Fry from Futurama.
                I built Bender's head using syrofoam, paper, and paint.
                I decorated my office like the Planet Express ship with
                star-backdrop windows, a hatch door with logo, and a
                full-sized Slurm machine.`,
      //todo: allow linking to large image
    });

    const enumerateDevices = new Project({
      title: "enumerateDevices",
      referenceLinks: ReferenceLinks.create({
        demo: "https://www.xdumaine.com/enumerateDevices/test/",
        source: "https://github.com/xdumaine/enumerateDevices/",
      }),
      imageSource:
        "https://cloud.githubusercontent.com/assets/833911/7502753/6510060c-f40c-11e4-9d6c-4c0e74ca676d.png",
      description: `A WebRTC helper library for normalizing browser APIs for enumerating media devices.`,
    });

    const aside = new Project({
      title: "Aside (Ghost Theme)",
      referenceLinks: ReferenceLinks.create({
        source: "https://github.com/xdumaine/ghost-aside/",
      }),
      imageSource:
        "https://cloud.githubusercontent.com/assets/833911/7502961/c8af4bcc-f40d-11e4-8f1f-dca16225c3b6.jpg",
      description: `Aside is a <a href="http://ghost.org">Ghost</a> theme that powers my blog. Makes use of handlebars, CSS3, and the Ghost theme API`,
    });

    const motorcycle = new Project({
      title: "Motorcycle LED Effects with Arduino",
      referenceLinks: ReferenceLinks.create({
        demo: "https://twitter.com/xanderdumaine/status/660918113802846208",
        source: "https://github.com/xdumaine/esplora-neopixels",
      }),
      imageSource:
        "https://cloud.githubusercontent.com/assets/833911/10873518/d164025e-80e3-11e5-8ee3-086d56c32b9b.JPG",
      description: `Arduino Esplora board with Neopixels to add LED effects to motorcycle.`,
    });

    const sfu = new Project({
      title: "WebRTC with SFU",
      referenceLinks: ReferenceLinks.create({
        slides: "https://slides.xdumaine.com/sfu/",
        video: "https://www.youtube.com/watch?v=wwhT_Y0ex0A",
      }),
      imageSource:
        "https://cloud.githubusercontent.com/assets/833911/10873501/a1d1657c-80e3-11e5-9f2c-a37d29349ded.png",
      description: `A series of slides I put together around the architecture of using an SFU
                like Jitsi VideoBridge for building better multipoint video conferencing.
                Presented at
                <a href="http://www.meetup.com/Triangle-WebRTC/" target="_blank">the meetup I host.</a>`,
    });

    const triangleWebrtc = new Project({
      title: "Triangle WebRTC",
      referenceLinks: ReferenceLinks.create({
        demo: "http://www.meetup.com/Triangle-WebRTC/",
      }),
      imageSource:
        "https://cloud.githubusercontent.com/assets/833911/11945493/6b2487cc-a81e-11e5-901a-4b9b81f8044f.png",
      description: `A meetup group discussing technical details, innovation, and development of WebRTC.`,
    });

    const futureWebrtc = new Project({
      title: "The Future of WebRTC",
      referenceLinks: ReferenceLinks.create({
        slides: "https://slides.xdumaine.com/webrtc-nv/",
        video: "https://www.youtube.com/watch?v=25PfgQ0FNwM",
      }),
      imageSource:
        "https://cloud.githubusercontent.com/assets/833911/11611207/9f4199e6-9b8f-11e5-8d60-0dce135af9b9.png",
      description: `Slides discussing the current state of WebRTC implementation and the current state of spec definition,
                which will form the future of WebRTC and ORTC.
                Presented at
                <a href="http://www.meetup.com/Triangle-WebRTC/" target="_blank">the meetup I host.</a>`,
    });

    const webtask = new Project({
      title: "Secure Client Authentication with Webtask",
      referenceLinks: ReferenceLinks.create({
        source:
          "https://blog.xdumaine.com/using-webtask-io-for-secure-api-tokens/",
      }),
      imageSource:
        "https://blog.xdumaine.com/content/images/2015/07/Screen-Shot-2015-07-19-at-7-35-19-PM.png",
      description: `Secure authentication to an API from a serverless javascript application using Webtask.io`,
    });

    this.projects = ko.observableArray([
      woodWorking,
      webSpeechExperiments,
      morseCode,
      singleDivCss,
      collaborate,
      //halloween,
      enumerateDevices,
      aside,
      motorcycle,
      sfu,
      triangleWebrtc,
      futureWebrtc,
      webtask,
    ]);
  }
}

export default ProjectSet;
