(function (doc) {
    //console header
    (function () {
        const title = 'font-size: 20px; font-weight: bold; color: red;';
        const li = 'font-size: 12px; color: #363; line-height: 18px;';
        console.log('%c技术栈:', title);
        console.log('%c1、React + redux', li);
        console.log('%c2、typescript + es6+', li);
        console.log('%c3、less', li);
        console.log('%c4、hls.js', li);
        console.log('%c5、webpack 4', li);
        console.log('%c关键点:', title);
        console.log('%c1、异步动态模块', li)
        console.log('%c2、webpack打包加速', li);
        console.log('%c3、模块拆分后chunkhash缓存策略', li);
        console.log('----------------')
        console.log('%c出售该域名：youtu.tv (on sale)', title);
        console.log('----------------')
    })()

    //---写入测试cookie
    function setCookie(key, value, exDays) {
        var d = new Date();
        d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
        doc.cookie = key + '=' + value + '; expires=' + d.toUTCString();
    }

    var cookies = {
        'auth_key': '1368971',
        'auth_key_ac_sha1': '1092229906',
        'auth_key_ac_sha1_': 'yaUni+PzvIbr2fqFRVn9tyb2Nt4=',
        'userLevel': 22,
        'userGroupLevel': 1
    }
    for (var i in cookies) {
        setCookie(i, cookies[i], 1)
    }
    console.log('***** 测试用户配置OK *****');

    //播放器接口
    window.playerApi = {
        f: {
            call: function (data) {
                console.log('[@html]', '接口调用：', JSON.stringify(data));
            },
            ready: function () {
                console.log('[@html]', '播放器接口准备就绪');
            }
        }
    }

    //---创建播放器
    H5Player.onReady(() => { });
    H5Player.createPlayer({
        vid: '6080192',
        el: document.querySelector('.player-wrap'),
        proxy: 'playerApi',
        cb: function () {
            //这里this绑定为player实例
        },
        type: 'h5',
        kernel: 'hls',
        backgroundURL: 'http://imgs.aixifan.com/content/2018_07_12/1531390013.jpg',
    });

    //---拉取更新
    try {
        fetch('https://api.github.com/repos/samao/Player.H5/commits', {
            headers: {
                'Accept': 'application/vnd.github.symmetra-preview+json'
            }
        }).then(res => res.json()).then(data => {
            return data[0]
        }).then(last => {
            var log = document.createElement('span');
            log.style.paddingLeft = 30;
            log.style.fontSize = 10;
            log.style.color = 'red';
            log.innerText = '更新日期：<' + last.commit.committer.date + '>  修改内容：' + last.commit.message;
            // document.querySelector('.sale').appendChild(log);
        })
    } catch (e) { }

    //---统计
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?7391d6450093bebbfa3ff5a289e274c2";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();

})(document);
