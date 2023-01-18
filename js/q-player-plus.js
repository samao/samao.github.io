(function () {
    const isLive = location.search.includes("live");
    const config = { isLive, demuxType: isLive ? "flv" : "m3u8", rid: 10001822 }; //{ isLive: false, demuxType: "m3u8", rid: 10001822, streamHost: "" };
    QiePlayer.createPlayer({
        ...config,
        vid: config.rid,
        cdn: "",
        cmsCDN: "/cms",
        payment: "",
        el: document.querySelector("#__next"),
        rid: config.rid,
        cb: function eventListener(action, info) {
            switch (action) {
                case "PLAYER_CREATE_FAITURE":
                    //console.log('播放器创建失败', data);
                    break;
                case "PLAYER_CREATED":
                    //创建成功player 参数用于后续销毁
                    window.player = info;

                    if (config.isLive) {
                        const video = document.querySelector("video");
                        video.addEventListener('click', e => {
                            e.stopImmediatePropagation();
                        });
                        // video.style = "pointer-events: none";
                        setInterval(() => {
                            player.dispatch({
                                type: "socketBarrageNotice",
                                payload: JSON.stringify({
                                    msg: { content: Mock.Random.csentence(5, 20), color: Math.random() < 0.95 ? 0 : Mock.Random.d6() },
                                    from: {
                                        n: Mock.Random.cname()
                                    },
                                }),
                            });
                        }, 1000);
                    }
                    break;
                case "GO_LOGIN":
                    alert("登录吧");
                    break;
                case "VOD_ATTACH":
                    const video = info;
                    break;
                default:
                //console.log('未处理的事件', action, info);
            }
        },
        ui: {
            danmu: config.isLive,
            effectsBlock: false,
            feedback: false,
            entries: false,
            giftBar: false,
            pip: true,
            eq: true,
            filter: true,
        },
        websocket: false,
        violation: false,
        //flashUrl: '/qie-flashplayer.swf',
        // plugins: ["banner"],
        loader: {
            rtmp() {
                return {
                    error: 0,
                    data: {
                        rtmp_url: "https://las-tech.org.cn/kwai",
                        rtmp_live: "las-test_ld500d.flv",
                        rtmp_cdn: "ws",
                        cdns: ["ws"],
                    },
                };
            },
            room() {
                return {
                    giftBatterConfig: [],
                    giftExBatterConfig: [],
                    show_status: "1",
                };
            },
            vod(video_id) {
                // console.log("拉取VOD", video_id);
                return Promise.resolve({
                    error: 0,
                    video_info: {
                        stream_name: "hackerfucked",
                        user_info: {
                            nickname: "黑客是撒币",
                            user_pic: "https://tx-free-imgs2.acfun.cn/kimg/bs2/zt-image-host/ChYwOGFhYTc4YzRmMTBjNmU1OTVhZTA2EJvM1y8.webp",
                            room_id: "#",
                            follow_state: 1,
                        },
                    },
                });
            },
        },
    });
    log.getLogger("WEBSOCKET").disableAll();
    document.title += " | " + QiePlayer.__VERSION__;
})();