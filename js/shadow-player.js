// Create a class for the element
class PopUpInfo extends HTMLElement {
    static version() {
        return 'v1.0.0';
    }
    constructor() {
        // Always call super first in constructor
        super();

        this.name = 'shadow-player';
        // Create a shadow root
        const shadow = this.attachShadow({ mode: "closed" });
        // Create spans
        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("player");

        this.hlsjs = this.createHlsJs(() => {
            this.video = this.createvideo();
            this.canvas = this.createCanvas();

            this.playBtn = this.createControls();
            this.wrapper.appendChild(this.video);
            this.wrapper.appendChild(this.canvas);
            this.wrapper.appendChild(this.playBtn);
        });

        // Create some CSS to apply to the shadow dom
        const style = document.createElement("style");
        style.textContent = `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .player{
          position: relative;
          width: 100%;
          height: 100%;
          margin: 0 auto;
        }
        .full {
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .video {
          background-color: #000;
        }
        .video.disable {
          pointer-events: none;
        }
        .danmu {
          position: absolute;
          pointer-events: none;
        }
        .play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: ${this.px2vw(50)};
          height: ${this.px2vw(50)};
          border-radius: 50%;
          pointer-events: none;
          font-size: ${this.px2vw(12)};
        }
        .play.hide {
          display: none;
        }
        `;

        // Attach the created elements to the shadow dom
        shadow.appendChild(style);

        shadow.appendChild(this.wrapper);
        this.wrapper.appendChild(this.hlsjs);

        this.wrapper.addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });
    }

    px2vw(px) {
      return (px * 100 / 750) + 'vw';
    }

    createHlsJs(cb) {
        const js = document.createElement("script");
        js.src = "/js/hls.min.js";
        js.async = true;

        js.onload = () => {
            cb();
        };

        return js;
    }

    createvideo() {
        const video = document.createElement("video");
        video.classList.add("full", "video");

        video.autoplay = false;
        video.controls = false;
        video.loop = true;

        video.addEventListener("click", () => {
            if (video.paused) {
                this.play();
            } else {
                this.playBtn.classList.remove("hide");
                video.pause();
            }
        });

        if (Hls.isSupported()) {
            let hls = new Hls({ debug: false });
            hls.loadSource(this.getAttribute("url"));
            hls.attachMedia(video);
            hls.on(Hls.Events.MEDIA_ATTACHED, () => {
                video.muted = true;
                this.play();
            });
        }

        video.addEventListener("waiting", () => {
            video.classList.add("disable");
        });

        video.addEventListener("canplay", () => {
            video.classList.remove("disable");
        });

        return video;
    }

    play() {
        // console.trace('自动播放了');
        this.video
            .play()
            .then(() => {
                // console.trace('自动播放了ok');
                this.playBtn.classList.add("hide");
            })
            .catch(() => {
                this.playBtn.classList.remove("hide");
            });
    }

    createCanvas() {
        const canvas = document.createElement("canvas");
        canvas.classList.add("full", "danmu");
        return canvas;
    }

    createControls() {
        const playBtn = document.createElement("button");
        playBtn.classList.add("play");
        playBtn.innerText = "PLAY";
        return playBtn;
    }

    printf() {
        console.log('HELLO', this.name);
    }
}

// Define the new element
customElements.define("shadow-player", PopUpInfo);
