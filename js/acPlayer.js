$(() => {
	//------工具函数
	const createButton = (id,imgUrl = '',text='',float = 'right') => {
		let button = $(`<li><div id="${id}">${text}</div></li>`);
		button.css({
			'width':'40px',
			'height':'40px',
			'line-height':'40px',
			'overflow':'none',
			'background-color':'white',
			'float':float,
			'position':'relative',
			'text-align':'center',
			'cursor':'hand',
		});
		if(imgUrl !== '')
		{
			let img = $(`<img src="${imgUrl}" >`);
			img.css({
				'margin':'8px 8px 8px 8px'
			})
			button.find('div').append(img);
		}
		button.mouseenter(()=>{
			button.css('background-color','#f5f5f5');
		});
		button.mouseleave(() => {
			button.css('background-color','white')
		});
		return button;
	}
	//阻止点击冒泡
	const stopPropagation = (ele) => {
		ele.click(e => e.stopPropagation());
	}

	const digit = time =>
	{
		if(Number.isNaN(time)) return '00:00';
		try{
			var _hours = Math.floor(time / 3600);
			var _mins = Math.floor(time % 3600 / 60);
			var _seconds = Math.floor(time % 3600 % 60);
		}catch(e){
			_hours = 0;
			_mins = 0;
			_seconds = 0;
		}
		return (_hours == 0 ? ("") : (_hours < 10 ? ("0" + _hours.toString() + ":") : (_hours.toString() + ":"))) + (_mins < 10 ? ("0" + _mins.toString()) : (_mins.toString())) + ":" + (_seconds < 10 ? ("0" + _seconds.toString()) : (_seconds.toString()));
	}

	const PLAYER_WIDTH = '100%';
	const PLAYER_HEIGHT = '100%';
	//------容器
	let player = $('#acPlayer');
	player.css({
		'width':PLAYER_WIDTH+'px',
		'height':PLAYER_HEIGHT+'px',
		'background-color':'black',
		'position':'relative',
		'left':0,
		'top':0,
		'font-size':'12px',
		'font-family':'微软雅黑',
		'color':'#999',
	});
	//------video jq
	let video = $(`<video id="video"></video>`);
	video.css({
		'width':'100%',
		'height':'100%',
	});
	//-------danmu
	let danmu = $(`<canvas id="danmu"></canvas>`)
	//-------控制栏
	const CONTROL_H = 40;
	let control = $(`<div id="control"></div>`);
	control.css({
		'width':'100%',
		'height':CONTROL_H + 'px',
		'bottom':'0px',
		'background-color':'white',
		'border': '1px',
		'border-color':'gray',
		'overflow':'none',
		'position':'relative',
	});
	//-------
	function setupPlayer(){
		player.append(video);
		player.append(danmu);
		player.append(pauseAnimate);
		player.append(control);
		control.append(leftBox);
		control.append(rightBox);

		leftBox.append(togglePlayBut);
		leftBox.append(timelabel);

		rightBox.append(fullscreenBut);
		rightBox.append(optBut);
		rightBox.append(lopBut);
		rightBox.append(volBut);
		volBut.append(volumeBar);
		rightBox.append(danmuBut);
		rightBox.append(qualityBut);
		qualityBut.append(qualityOpt);

		//设置统一样式
		danmu.css({
			'width':'100%',
			'height':'calc(100% - 40px)',
			'position':'absolute',
			'top':0,
			'left':0,
		});
		player.find('ul li').css({
			'outline':'none',
			'pading-right':5,
			'margin':0,
			'padding-bottom':0,
			'border':1
		});

		timelabel.css({
			'color':'gray',
			'float':'left',
			'height':40,
			'line-height':'40px',
			'padding':'0px 5px 0px 5px',
			'font-family':'微软雅黑',
			'font-size':12,
		});
	}

	//-------左边工具
	let leftBox = $(`<ul id="leftBox"></ul>`);
	leftBox.css({
		'height':'100%',
		'list-style':'none',
		'margin':0,
		'padding':0,
		'float':'left'
	});

	//-------右边工具
	let rightBox = $(`<ul id="rightBox"></ul>`);
	rightBox.css({
		'height':'100%',
		'list-style':'none',
		'margin':0,
		'padding':0,
		'float':'right'
	});

	//图标文件夹
	const imgFloder = 'image/'

	//------左边组件
	let togglePlayBut = createButton('play',`${imgFloder}V3Play.png`,'','left');
	let timelabel = $(`<li>00:00 / 00:00</li>`);

	//右边组件
	let fullscreenBut = createButton('fullscreen',`${imgFloder}V3NormalScreen.png`);
	let optBut = createButton('opt',`${imgFloder}V3Option.png`);
	let lopBut = createButton('loop',`${imgFloder}V3UnLoop.png`);
	let volBut = createButton('vol',`${imgFloder}V3Volume.png`);
	let danmuBut = createButton('danmu',`${imgFloder}V3DanmuOpen.png`);
	let qualityBut = createButton('quality','','标清');

	//暂停动画
	let pauseAnimate = $(`<img src="${imgFloder}pause.gif">`);
	pauseAnimate.css({
		'position':'absolute',
		'right':20,
		'bottom':20 + 40,
		'width':233,
		'height':50,
	});

	//音量控制
	let volumeBar = $(`<div><span>100%</span><div id="volbar"></div></div>`);
	volumeBar.css({
		'width':40,
		'height':100,
		'background-color':'white',
		'border':1,
		'border-color':'#666',
		'border-style':'none',
		'border-radius':'3px 3px 0px 0px',
		'position':'absolute',
		'top':-110,
		'color':'#999',
		'padding':'5px 0px',
		'text-align':'center',
		'line-height':'16px',
	});
	volumeBar.find('span').css({
		'font-family':'微软雅黑',
		'height':16,
		'font-size':12,
	})
	volumeBar.find('div').css({
		'width':8,
		'background-color':'red',
		'border-radius':3,
		'height':80,
		'margin':'5px 16px 0px 16px',
	})
	volumeBar.hide();

	//清晰度
	let qualityOpt = $(`
			<ul>
				<li>原画</li>
				<li>超清</li>
				<li>高清</li>
				<li>标清</li>
			</ul>
		`);
	qualityOpt.css({
		'width':82,
		'list-style':'none',
		'background-color':'white',
		'border-radius':'3px 3px 0px 0px',
		'position':'absolute',
		'top':-(31*4 + 10),
		'color':'#999',
		'padding':'5px 0px',
		'left':-21,
		'text-align':'center',
		'line-height':'31px',
	});
	qualityOpt.hide();

	//-------视频请求成功
	let ready = () => {
		console.log('视频头文件解析完成');
		togglePlayBut.click(() => toggleVideo());
		lopBut.click(() => toggleLoop());
		volBut.click((e) => toggleMute());
		danmuBut.click(() => toggleDanmu());
		fullscreenBut.click(() => toggleScreen());

		volBut.hover(()=>volumeBar.show(),()=>volumeBar.hide());
		qualityBut.hover(()=>qualityOpt.show(),()=>qualityOpt.hide());
		
		stopPropagation(volumeBar);

		video.on('contextmenu',() => false);
		danmu.on('contextmenu',() => false);
		dm.load();

		video.css('height','calc(100% - 40px)');
		danmu.css('height','calc(100%-40px)');
		player.on('fullscreenchange mozfullscreenchange webkitfullscreenchange msfullscreenchange',(e) => {
			toggleUI();
		})
	}

	const fullScreenStatus = () => document.fullscreen||document.mozFullScreen||document.webkitIsFullScreen||document.msFullscreenElement;

	const toggleUI = () => {
		let fullscreen = fullScreenStatus();
		if(fullscreen){
			player.css({
				'width':'100%',
				'height':'100%',
				'left':0,
				'top':0,
				'position':'absolute',
			});
		}else{
			player.css({
				'width':PLAYER_WIDTH+'px',
				'height':PLAYER_HEIGHT+'px',
				'left':0,
				'top':0,
				'position':'relative',
			});
		}
	}
	//切换全屏
	let toggleScreen = () => {
		let div = player.get(0);
		let fullscreen = fullScreenStatus();
		if(div.requestFullscreen){
			if(!fullscreen)
				div.requestFullscreen();
			else
				document.exitFullscreen();
		}else if(div.mozRequestFullScreen){
			if(!fullscreen)
				div.mozRequestFullScreen();
			else
				document.mozCancelFullScreen();
		}else if(div.webkitRequestFullScreen){
			if(!fullscreen)
				div.webkitRequestFullScreen();
			else
				document.webkitCancelFullScreen();
		}else if(div.msRequestFullscreen){
			if(!fullscreen)
				div.msRequestFullscreen();
			else
				document.msExitFullscreen();
		}
	}
	//弹幕显隐
	let toggleDanmu = () => {
		if(danmu.css('display') === 'none')
		{
			danmu.show();
			danmuBut.find('img').attr('src',`${imgFloder}V3DanmuOpen.png`);
		}else{
			danmu.hide();
			danmuBut.find('img').attr('src',`${imgFloder}V3DanmuHiden.png`);
		}
	}
	//开关静音
	let toggleMute = () => {
		if(video.prop('muted'))
		{
			video.prop('muted',false);
			volBut.find('img').attr('src',`${imgFloder}V3Volume.png`);
			console.log('音量控制',volumeBar.width(),volumeBar.height());
		}else{
			video.prop('muted',true);
			volBut.find('img').attr('src',`${imgFloder}V3Mute.png`);
		}
	}
	//循环开关
	let toggleLoop = () => {
		if(video.attr('loop'))
		{
			video.attr('loop',false);
			lopBut.find('img').attr('src',`${imgFloder}V3UnLoop.png`)
		}else{
			video.attr('loop',true);
			lopBut.find('img').attr('src',`${imgFloder}V3Loop.png`)
		}
	}
	//暂停开关
	let toggleVideo = () => {
		if(video.prop('paused')){
			video.trigger('play');
			togglePlayBut.find('img').attr('src',`${imgFloder}V3Pause.png`);
			toggleAnimate(true);
		}else{
			video.trigger('pause');
			togglePlayBut.find('img').attr('src',`${imgFloder}V3Play.png`);
			toggleAnimate(false);
		}
	}
	let finished = () => {
		if(video.attr('loop')){
			video.get(0).play();
		}else{
			video.get(0).pause();
			togglePlayBut.find('img').attr('src',`${imgFloder}V3Play.png`);
			toggleAnimate(false);
		}
	}
	//暂停动画
	let toggleAnimate = (bool) => {
		if(bool){
			pauseAnimate.animate({
				'opacity':0,
				'width':233 * 1.5,
				'height':50 * 1.5,
				'bottom':20 - 50*.25 + 40,
				'right':20 - 233*.25,
			},'slow',()=>pauseAnimate.hide());
		}else{
			pauseAnimate.show();
			pauseAnimate.animate({
				'opacity':1,
				'width':233,
				'height':50,
				'right':20,
				'bottom':20 + 40,
			});
		}
	}
	//弹幕数据结构
	class DanmuVo{
		constructor(){
			this.x = 0;
			this.y = 0;
			this.speed = 6;
		}
		set id(value){
			this._id = value;
		}
		get id(){
			return this._id;
		}
		set color(value){
			this._color = Number(value);
		}
		get color(){
			return this._color
		}
		set mode(value){
			this._mode = value;
		}
		get mode(){
			return this._mode;
		}
		set size(value){
			this._size = value;
		}
		get size(){
			return this._size;
		}
		set time(value){
			this._time = Number(value);
		}
		get time(){
			return this._time;
		}
		set text(value){
			this._text = value;
		}
		get text(){
			return this._text;
		}

		update(){
			this.x -= this.speed;
		}

		start(x,y,width){
			this.running = true;
			this.x = Math.floor(x);
			this.y = Math.floor(y);
			this.die = false;
			this.width = width;
		}

		stop(){
			this.running = false;
			this.die = true;
		}
	}

	//弹幕管理类
	class Danmaku{

		constructor(video,canvas,auto = true){
			this._vid = '';
			this._map = new Map();
			this._set = new Set();
			this._canvas = canvas.get(0);
			this._auto = auto;
			this._id = 0;
			this._video = video.get(0);
			this._time = video.get(0).currentTime;
		}

		//弹幕加载
		load(vid = '5035599'){
			$.get(`http://danmu.aixifan.com/V4/${vid}_2/4073558400000/1000?order=-1`,(data) => {
				console.log('加载完毕');
				let danmuMap = Array.from(data[2]);
				for(let {c,m} of danmuMap){
					let [time,color,mode,size,,,cmtid] = c.split(',');
					//console.log(`时间 ${time} 颜色 ${Number(color).toString(16)} 样式 ${mode} 字号${size} 内容:%c${m}`,`color:#${Number(color).toString(16)};`);
					let vo = new DanmuVo();
					vo.time = time;
					vo.color = color;
					vo.size = size;
					vo.mode = mode;
					vo.text = m;
					vo.id = cmtid;
					this._map.set(cmtid,vo)
				}
				if(this._auto){
					this.run();
				}
			})
		}
		//当前视频时间
		get currentTime(){
			return this._video.currentTime;
		}
		//搜索当前需要添加弹幕
		update(){
			if(this._video.paused) return;
			if(this._time !== this.currentTime){
				var addMap = Array.from(this._map.values()).filter(vo => {
					if(this.currentTime > 0){
						if(this.currentTime < this._time || (this.currentTime - this._time > 1)){
							return false;
						}
						return vo.time >= this._time && vo.time < this.currentTime && vo.mode === '1';
					}
					return false;
				});

				this._time = this.currentTime;

				addMap.forEach(e => {
					e.die = false;
					this._set.add(e.id);
				});
			}
		}
		//渲染弹幕
		render(){
			
			if(this._video.paused) return;

			var ctx = this._canvas.getContext("2d");
			this._canvas.width = $(this._video).width();
			this._canvas.height = $(this._video).height();
			ctx.clearRect(0,0,this._canvas.width,this._canvas.height);

			var delMap = new Set();
			for(let id of this._set){
				let vo = this._map.get(id);
				ctx.font = `${vo.size}px 微软雅黑`; //设置绘制字体  
			    ctx.fillStyle = `#${vo.color.toString(16)}`; //设置绘制文字的颜色 
				if(vo.running && !vo.die)
				{
					vo.update();
					if(vo.x < -vo.width){
						//console.log('删除弹幕',vo.x,-ctx.measureText(vo.text).width);
						vo.stop();
						delMap.add(vo.id);
					}else{
			    		ctx.fillText(vo.text, vo.x, vo.y);
					}
				}else{
					vo.start(this._canvas.width + Math.random() * 30,Math.random() * (this._canvas.height - 40) + 20,ctx.measureText(vo.text).width);
				}
			}
			for(let id of delMap){
				this._set.delete(id);
			}
		}
		//开启弹幕刷新
		run(){
			console.log(`弹幕数 ${this._map.size}`);
			/*for(let [key, value] of this._map){
				console.log(key,value.text);
			}*/
			this._id = setInterval(() => this.render(),50);
		}
		//关闭弹幕刷新
		stop(){
			clearInterval(this._id);
		}
	}
	//弹幕管理
	let dm = new Danmaku(video,danmu);

	//-------
	if(Hls.isSupported()) {
		setupPlayer();
	    var hls = new Hls();
	    hls.loadSource("http://www.streambox.fr/playlists/test_001/stream.m3u8")//'http://cnhlsvodhls01.e.vhall.com//vhallrecord/682723428/20161222125031/record.m3u8');
	    hls.attachMedia(video.get(0));
		hls.on(Hls.Events.MANIFEST_PARSED,ready);
		video.on('ended',() => {
			console.log('播放结束');
			finished();
		})
		setInterval(() => {
			var cur = digit(video.prop('currentTime'));
			var dur = digit(video.prop('duration'));
			timelabel.html(`${cur} / ${dur}`);
			dm.update();
		},250)
	 }else{
	 	player.append($(`<span style="color:#FFF">不支持的浏览器</span>`));
	 }
})