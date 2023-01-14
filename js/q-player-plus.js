(function () {
    const config = { isLive: false, demuxType: "m3u8", rid: 10001822, streamHost: "" };
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
            danmu: false,
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
            vod(video_id) {
                console.log("拉取VOD", video_id);
                return Promise.resolve({
                    error: 0,
                    msg: "\u83b7\u53d6\u6210\u529f",

                    video_info: {
                        id: "1285892",
                        stream_name: "3106510kcee11d",
                    },
                });
            },
        },
    });
    log.getLogger("WEBSOCKET").disableAll();
    document.title += " | " + QiePlayer.__VERSION__;
})();
