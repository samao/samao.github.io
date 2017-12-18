$(() => {
	//全局配置
	const CONFIG = {
		maxBuffer:20,
		debug:true,
	}
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
				'margin':'8px 8px 8px 8px',
				'background-color':'Transparent',
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
	const uint = Math.floor;
	//阻止点击冒泡
	const stopPropagation = (ele) => {
		ele.click(e => e.stopPropagation());
	}
	//格式化秒数
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
	//日志
	const log = (...val) => {
		if(CONFIG.debug)
			console.log(`%c[H5Player]%c ${new Date().toLocaleTimeString()},${val.join(',')}`,"color:red;font-weight:bold;","color:black");
	};
	//获取当前缓存范围
	const timeRange = () => {
		let ranges = video.prop('buffered');
		let curTime = video.prop('currentTime');
		for(let i = 0; i < ranges.length; ++i){
			if(ranges.start(i) <= curTime && ranges.end(i)>= curTime){
				return {'start':ranges.start(i),'end':ranges.end(i)};
			}
		}
		return {'start':curTime,'end':curTime};
	}
	//重绘前置
	const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;


	const PLAYER_WIDTH = '800';
	const PLAYER_HEIGHT = '600';
	//-------控制栏
	const CONTROL_H = 40;
	//------容器
	let player = $('#acPlayer');
	player.css({
		'width':'100%',
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
	let video = $(`<video id="video" preload="none" x-webkit-airplay="allow" webkit-playsinline playsinline="true"></video>`);
	video.css({
		'width':'100%',
		'height':'calc(100% - CONTROL_H+"px")',
		'object-fit':'contain',
	});
	//-------danmu
	let danmu = $(`<canvas id="danmu"></canvas>`);
	//-------rightMenu
	let rightMenu = $(`<div id="menu"></div>`);
	rightMenu.css({
		'position':'fixed',
		'left':0,
		'top':0,
		'width':200,
		'background-color':'white',
		'text-align':'left',
		'line-height':'20px',
		'padding':'5px 8px',
		'border-radius':4,
	});
	let danmuMenu = $(`<div><nobr id="text"></nobr></div>
						<div><nobr id="block"></nobr></div>
						<div><nobr id="report"></nobr></div>
						<hr style="border-color:#3333;height:1px;"/>
					`);
	let copyMenu = $(`<div>AcFunH5Player: 1.0.0</div>
					<div>Author:隆隆_iDzeir</div>
					<div>Website: http://www.youtu.tv</div>
					`);
	rightMenu.hide();
	//-------buffer
	let bufferLayer = $(`<div id="bufferLayer">
			<div id="buffer">
				<div id="circle"></div>
				<div id="head">
					<img src="http://cdn.aixifan.com/dotnet/20130418/umeditor/dialogs/emotion/images/ac/01.gif"/>
				</div>
			</div>
		</div>`);

	
	let control = $(`<div id="controlLayer"></div>`);
	control.css({
		'width':'100%',
		'height':CONTROL_H + 'px',
		'bottom':'0px',
		'background-color':'white',
		'border': '1px',
		'border-color':'gray',
		'overflow':'none',
		'position':'relative',
		'z-index':2147483646,
	});
	const PRO_H = 4;
	let progressBar = $(`<div id="progressBar"><div id="loaded"></div><div id="played"></div></div>`);
	progressBar.css({
		'width':'100%',
		'height':PRO_H,
		'background-color':'black',
		'position':'absolute',
		'top':-PRO_H,
	});
	let played = progressBar.find('#played');
	played.css({
		'float':'left',
		'background-color':'red',
		'height':'100%',
		'position':'absolute',
	});
	let loaded = progressBar.find('#loaded');
	loaded.css({
		'background-color':'#999',
		'float':'left',
		'height':'100%',
		'position':'absolute',
	});
	//-------
	function setupPlayer(){
		$('body').children().remove();
		$('body').css({
			width:'100%',
			height:'100%',
			'background-color': '#333333',
			color:'white'
		});
		$('body').append('<h3 style="margin-bottom:10px;">出售该域名：qiyanlong@wozine.com</h3>')
		$('body').append(player);
		
		player.append(video);
		player.append(danmu);
		player.append(bufferLayer);
		player.append(pauseAnimate);
		player.append(control);
		control.append(progressBar);
		control.append(leftBox);

		leftBox.append(togglePlayBut);
		leftBox.append(timelabel);
		leftBox.append(inputBar);
		leftBox.append(sendBut);

		leftBox.append(fullscreenBut);
		leftBox.append(optBut);
		leftBox.append(lopBut);
		leftBox.append(volBut);
		volBut.append(volumeBar);
		leftBox.append(danmuBut);
		leftBox.append(qualityBut);
		qualityBut.append(qualityOpt);

		volumeBar.find('#volbar').slider({
			orientation:'vertical',
			range:'min',
			max:1,
			value:1,
			step:.05,
			animate:true,
			slide:(evt,ui) => {
				video.prop('volume',ui.value);
				volumeBar.find('#volume').html(uint(100*ui.value));
				let muted = video.prop('muted');
				if(ui.value === 0 && !muted){
					video.prop('muted',true);
					volBut.find('img').attr('src',`${imgFloder}V3Mute.png`);
				}else if(muted){
					video.prop('muted',false);
					volBut.find('img').attr('src',`${imgFloder}V3Volume.png`);
				}
			}
		},1).css({
			'background-color':'#ddd',
			'border':'none',
			'background':'#ddd',
		});
		volumeBar.find('.ui-slider-handle').css({
			'width':10,
			'height':10,
			'border-radius':'50%',
			'background-color':'white',
			'background':'white',
			'margin-left':2,
		}).focus(function(){
			$(this).css({
				'outline':'none',
			})
		})
		volumeBar.find('.ui-slider-range').css({
			'background-color':'red',
			'background':'red',
		});

		//设置统一样式
		danmu.css({
			'width':'100%',
			'height':'calc(100% - 40px)',
			'position':'absolute',
			'top':0,
			'left':0,
			'-webkit-filter':'drop-shadow(1px 1px 1px black)',
			'filter':'drop-shadow(1px 1px 1px black)',
		});
		//-----
		bufferLayer.css({
			'width':'100%',
			'height':'calc(100% - 40px)',
			'position':'absolute',
			'top':0,
			'pointer-events':'none',
		});
		bufferLayer.find('#buffer').css({
			'width':130,
			'height':130,
			'top':'calc(50% - 65px)',
			'left':'calc(50% - 65px)',
			'position':'relative',
		});
		bufferLayer.find('#circle').css({
			'width':'100%',
			'height':'100%',
			'opacity':.6,
			'border-radius':'50%',
			'background-color':'#334f74',
			'position':'absolute',
		})
		bufferLayer.find('#head').css({
			'width':90,
			'height':90,
			'background-color':'white',
			'margin':'auto',
			'border-radius':'50%',
			'position':'absolute',
			'top':20,
			'left':20,
		});
		bufferLayer.find('img').css({
			'width':75,
			'height':75,
			'margin':10,
			'background-color':'unset',
		});
		bufferLayer.hide();
		//------
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

		//inputArea.width(control.width() - rightBox.width() - togglePlayBut.width() - timelabel.width() - 130);
	}

	//-------左边工具
	let leftBox = $(`<ul id="leftBox"></ul>`);
	leftBox.css({
		'height':'100%',
		'width':'100%',
		'list-style':'none',
		'margin':0,
		'padding':0,
		'float':'left'
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
		'right':40,
		'bottom':40 + 40,
		'width':233,
		'height':50,
		'background-color':'Transparent',
	});

	//音量控制
	let volumeBar = $(`<div><span id="volume">100</span><div id="volbar"></div></div>`);
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
		'box-sizing':'unset',
		'display':'table-cell',
	});
	volumeBar.find('span').css({
		'font-family':'微软雅黑',
		'height':16,
		'font-size':12,
	})
	volumeBar.find('div').css({
		'width':8,
		'border-radius':3,
		'height':70,
		'margin':'8px auto',
	})
	volumeBar.hide();

	//清晰度
	let qualityOpt = $(`
			<ul>
				<li data="1080p">原画</li>
				<li data="720p">超清</li>
				<li data="480p">高清</li>
				<li data="320p">标清</li>
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

	let inputBar = $(`<li><input id="input" placeholder="这位爷，不发个弹幕玩玩嘛？"/></li>`)
	inputBar.css({
		'height':40,
		'width':'calc(100% - 450px)',
		'line-height':'40px',
		'margin-left':10,
		'float':'left',
	});
	let inputArea = inputBar.find('input');
	inputArea.css({
		'padding':3,
		'width':'100%',
		'border-radius':4,
		'background-color':'#f5f5f5',
		'padding-left':10,
		'height':26,
		'float':'left',
		'border':'none',
		'margin':6,
		'font-size':'12px',
		'outline':'none',
	});
	let sendBut = $(`<li><div>发送</div></li>`);
	sendBut.css({
		'width':50,
		'height':'100%',
		'color':'white',
		'float':'left',
	});
	sendBut.find('div').css({
		'background-color':'red',
		'color':'white',
		'width':'100%',
		'height':26,
		'line-height':'26px',
		'text-align':'center',
		'margin':'6px 0 6px 10px',
		'border-radius':4,
	});

	//-------视频请求成功
	let ready = () => {
		log('视频头文件解析完成');
		togglePlayBut.click(() => toggleVideo());
		lopBut.click(() => toggleLoop());
		volBut.click((e) => toggleMute());
		danmuBut.click(() => toggleDanmu());
		fullscreenBut.click(() => toggleScreen());
		sendBut.click(()=>{
			if(inputArea.val() !== ''){
				dm.send(JSON.stringify({
					action:'post',
					command:JSON.stringify({
						mode:'1',
						color:0xFF0000,
						size:20,
						stime:0,
						user:'1368971',
						message:inputArea.val()
					})
				}));
				inputArea.val('');
			}
		});

		volBut.hover(()=>volumeBar.show(),()=>volumeBar.hide());
		qualityBut.hover(()=>qualityOpt.show(),()=>qualityOpt.hide());
		progressBar.hover(()=>{
			progressBar.animate({
				'height':6,
				'top':-6,
			},'fast');
		},()=>{
			progressBar.animate({
				'height':PRO_H,
				'top':-PRO_H,
			},'fast');
		});
		progressBar.click(e => {
			log('seek',Number(video.prop('duration') * e.offsetX/progressBar.width()));
			video.prop('currentTime',Number(video.prop('duration') * e.offsetX/progressBar.width()));
			if(!loading){
				loading = true;
				netPause(false);
			}
		});
		pauseAnimate.click(()=>togglePlayBut.trigger('click'));

		inputArea.focus(()=>inputArea.attr('placeholder','')).blur(()=>inputArea.attr('placeholder','这位爷，不发个弹幕玩玩嘛？'));

		bufferAnimate();

		$(window).resize(()=>{
			let inputWidth = inputArea.width();
			if(inputWidth > 200){
				inputBar.show();
				sendBut.show();
			}else{
				inputBar.hide();
				sendBut.hide();
			}
		});

		stopPropagation(volumeBar);

		video.on('contextmenu',() => false);
		//bufferLayer.on('contextmenu',() => false);
		//danmu.on('contextmenu',() => false);
		//弹幕管理
		let dm = new Danmaku(video,danmu,true);
		dm.controler = new DanmaLineControler(video);
		dm.load();

		video.css('height','calc(100% - 40px)');
		danmu.css('height','calc(100%-40px)');
		player.on('fullscreenchange mozfullscreenchange webkitfullscreenchange msfullscreenchange',(e) => {
			toggleUI();
		});
		danmu.on('contextmenu',(e) => {
			var event = e || window.event;
			rightMenu.css({
				'left':event.offsetX,
				'top':event.offsetY,
			})
			rightMenu.empty();
			player.append(rightMenu);
			let vo = dm.getVoUnderPos(event.offsetX,event.offsetY);
			if(vo){
				danmuMenu.find('#text').text(`--复制>>${vo.text}`);
				danmuMenu.find('#block').text(`--屏蔽>>${vo.user}(${vo.text})`);
				danmuMenu.find('#report').text(`--举报>>${vo.user}(${vo.text})`);
				rightMenu.append(danmuMenu);
			}
			rightMenu.append(copyMenu);
			rightMenu.find('div').css({
				'overflow':'hidden',
				'text-overflow':'ellipsis',
				'width':'100%',
				'height':20,
			})
			rightMenu.show();
			return false;
		}).on('click',(e)=>{
			rightMenu.remove();
			togglePlayBut.trigger('click');
		});

		rightMenu.click((e)=>{
			let event = e || window.event;
			event.cancelBubble = true;
			rightMenu.remove();
		})

		let loading = true;
		video.on('timeupdate',(e) => {
			var cur = digit(video.prop('currentTime'));
			var dur = digit(video.prop('duration'));
			timelabel.html(`${cur} / ${dur}`);
			
			dm.update();
			played.width(`${100 * video.prop('currentTime')/video.prop('duration')}%`);

			let timeRanges = video.prop('buffered');
			if(timeRanges.length > 0)
			{
				let {start,end} = timeRange();
				loaded.width(`${100*end/video.prop('duration')}%`);
				let range = (end - video.prop('currentTime'));
				if(range > CONFIG.maxBuffer && loading){
					log(`${e.type}暂停加载`,end);
					netPause(true);
					loading = false;
				}else{
					if(!loading && 2 * range <= CONFIG.maxBuffer){
						log(`${e.type}恢复加载,${end}`);
						loading = true;
						netPause(false);
					}
				}
			}
		});

		video.on('durationchange',()=>{
			var cur = digit(video.prop('currentTime'));
			var dur = digit(video.prop('duration'));
			timelabel.html(`${cur} / ${dur}`);
		})

		video.on('progress',(e)=>{
			let {end} = timeRange();
			loaded.width(`${100*end/video.prop('duration')}%`);
			if(loading && (end - video.prop('currentTime')) > CONFIG.maxBuffer){
				netPause(true);
				loading = false;
				log(`${e.type}暂停加载,${end}`);
			}
		})

		video.on('ended',() => {
			//log('播放结束');
			finished();
		});
		video.on('waiting',()=>{
			//log('缓冲');
			bufferLayer.show();
		})
		video.on('canplay',()=>{
			//log('缓冲完成');
			bufferLayer.hide();
		});

		//$('body').append(`<span style="color:white;"> ${navigator.userAgent} </br><hr> ${Array.from(video.get(0).attributes).map(e => e.name + '=' + e.value)}</span>`)
	}

	//hls网络控制暂停下载
	const netPause = bool => {
		if(Hls.isSupported())
		{
			bool ? hls.stopLoad() : hls.startLoad();
		}
	}

	let circleTo = true
	const bufferAnimate = () => {
		let circle = bufferLayer.find('#circle');
		if(circleTo){
	      circle.animate({
	        'opacity':.5,
	        'width':120,
	        'height':120,
	        'top':5,
	        'left':5,
	      },1000,()=>bufferAnimate())
	    }else{
	      circle.animate({
	        'opacity':.6,
	        'width':130,
	        'height':130,
	        'top':0,
	        'left':0,
	      },1000,()=>bufferAnimate())
	    }
	    circleTo = !circleTo;
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
		let fullscreen = fullScreenStatus()
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
		try{
			if(fullScreenStatus()){
				$(screen).prop('orientation').lock('landscape')
			}else{
				$(screen).prop('orientation').unlock();
			}
		}catch(e){}
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
			log('音量控制',volumeBar.width(),volumeBar.height());
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
				'width':233 * 1.2,
				'height':50 * 1.2,
				'bottom':40 - 50*.1 + 40,
				'right':40 - 233*.1,
			},'slow',()=>pauseAnimate.hide());
		}else{
			pauseAnimate.show();
			pauseAnimate.animate({
				'opacity':1,
				'width':233,
				'height':50,
				'right':40,
				'bottom':40 + 40,
			});
		}
	} 

	//弹幕数据结构
	class DanmuVo{
		constructor(){
			this.x = 0;
			this.y = 0;
			this.speed = 6;
			this.user = '';
		}
		static get SIZE(){
			return [16,25,37];
		}
		static get MOVE(){
			return "1";
		}
		static get TOP(){
			return "5";
		}
		static get BOTTOM(){
			return "4";
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
			let min = Math.min.apply(null,DanmuVo.SIZE);
			let max = Math.max.apply(null,DanmuVo.SIZE);
			return Math.min(max,Math.max(min,this._size));
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
			if(this.mode === DanmuVo.MOVE){
				this.x -= this.speed;
			}else{
				this.alpha -= 2;
			}
		}

		start(x,y,width,line){
			this.running = true;
			this.x = Math.floor(x);
			this.y = Math.floor(y);
			this.die = false;
			this.width = width;
			this.alpha = 100;
		}

		get height(){
			return this.size + 2;
		}

		stop(){
			this.running = false;
			this.die = true;
		}

		toString(){
			return `弹幕：${this.x} ${this.y} ${this.width} ${this.height} ${this.text}`
		}
	}

	class DanmuSocket extends WebSocket{
		constructor(vid){
			super(`ws://danmaku.acfun.cn:443/${vid}`);
			super.onopen = this.onopen;
			super.onclose = this.onclose;
			super.onerror = this.onerror;
			super.onmessage = this.onmessage;
			this._vid = vid;
		}

		onopen(value){
			log('连接成功');
			this.sendAuthor();
		}

		onclose(value){
			log('连接关闭');
		}

		onerror(value){
			log('连接错误');
		}

		onmessage(body){
			var response = JSON.parse(body.data);
			if(response.status === '202'){
				log('登录成功');
				log('用户信息',JSON.stringify(response.msg));
			}else{
				log('服务器消息',body.data);
			}
		}

		sendAuthor(){
			var user = {};
			user['vid'] = this.vid;
			user['time'] = Date.now();
			user['uid'] = '1368971';
			user['uid_ck'] = '1469459601';
			this.send(JSON.stringify({'action':'auth',command:JSON.stringify(user)}));
		}
	}

	class DanmaLineControler{
		constructor(video){
			this._video = video;
			this.setupLine();
		}

		setupLine(){
			let config = {length:50}
			this._moveMap = Array.from(config).map((e,index) => new Line(index));
			this._topMap = Array.from(config).map((e,index) => new Line(index));
			this._bottomMap = Array.from(config).map((e,index) => new Line(index));
		}

		get moveMap(){
			var lineToal = uint(this._video.height() / Line.HEIGHT)
			return this._moveMap;	
		}

		get topMap(){
			var lineToal = uint(this._video.height() / Line.HEIGHT)
			return this._topMap;
		}

		get bottomMap(){
			var lineToal = uint(this._video.height() / Line.HEIGHT)
			return this._bottomMap;
		}

		getLineY(vo){
			let line,offsetY;
			switch(vo.mode){
				case DanmuVo.TOP:
					line = this.findTopLine();
					offsetY = line.offsetY + (Line.HEIGHT - vo.height) * .5 + vo.height;
				break;
				case DanmuVo.BOTTOM:
					line = this.findTopLine();
					offsetY = this._video.height() - (line.offsetY + (Line.HEIGHT - vo.height) * .5 + vo.height);
				break;
				default:
					line = this.findMoveLine();
					offsetY = line.offsetY + (Line.HEIGHT - vo.height) * .5 + vo.height;
				break;
			}
			line.last = vo;
			return {'line':line,'offset':offsetY};
		}

		findTopLine(){
			for(let line of this.topMap){
				if(!line.last || line.last.alpha <= 0)
					return line;
			}
		}

		findMoveLine(){
			//循环找出最佳行
			for(let line of this.moveMap){
				if(!line.last)
					return line;
				if((this._video.width() - line.last.x - line.last.width) > 20)
					return line;
			}
		}
	}

	class Line{
		static get HEIGHT(){
			return 45;
		}
		constructor(index){
			this.height = Line.HEIGHT;
			this.active = false;
			this._index = index;
			this._offsetY = this._index * Line.HEIGHT;
		}

		get offsetY(){
			return this._index * Line.HEIGHT;
		}

		set last(value){
			this._last = value;
		}

		get last(){
			return this._last;
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
			this._topOffset = 0;
			this._bottomOffset = 0;
			this.run = this.run.bind(this);
		}

		set controler(value){
			this._controler = value;
		}

		get controler(){
			return this._controler;
		}

		//弹幕加载
		load(vid = '5084270'){
			$.get(`http://danmu.aixifan.com/V4/${vid}_2/4073558400000/1000?order=-1`,(data) => {
				log('加载完毕');
				let danmuMap = Array.from(data[2]);
				for(let {c,m} of danmuMap){
					let [time,color,mode,size,user,,cmtid] = c.split(',');
					//log(`时间 ${time} 颜色 ${Number(color).toString(16)} 样式 ${mode} 字号${size} 内容:%c${m}`,`color:#${Number(color).toString(16)};`);
					let vo = new DanmuVo();
					vo.time = time;
					vo.color = color;
					vo.size = size;
					vo.mode = mode;
					vo.text = m;
					vo.id = cmtid;
					vo.user = user;
					this._map.set(cmtid,vo)
				}
				if(this._auto){
					this.initFps();
					this.run();
				}
			});
			
			var ws = new DanmuSocket(vid);
			this._ws = ws;
		}

		initFps(){
			log('动画：',Boolean(requestAnimationFrame));
			this._fps = 30;
			this._now = Date.now;
			this._then = Date.now();
			this._interval = 1000/this._fps;
			this._delta = 0;

			log(`弹幕数 ${this._map.size}`);
			/*for(let [key, value] of this._map){
				log(key,value.text);
			}*/
		}
		
		//发送消息
		send(msg){
			log('发送弹幕',msg);
			if(this._ws)
				this._ws.send(msg);
		}
		//当前视频时间
		get currentTime(){
			return this._video.currentTime;
		}

		getVoUnderPos(xpos,ypos){
			for(let id of this._set){
				let {x:left,y:top,width:width,height:height} = this._map.get(id);
				let xDis = xpos - left;
				let yDis = ypos - top + height;
				if(xDis >= 0 && xDis <= width && yDis >= 0 && yDis <= height)
					return this._map.get(id);
			}
			return null;
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
						return vo.time >= this._time && vo.time < this.currentTime && ['1','4','5'].indexOf(vo.mode) !== -1;
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

		toHex(value)
		{
			var hexs = value.toString(16);
			var black = "000000";
			return (black.substring(0,black.length - hexs.length) + hexs).toLocaleUpperCase();
		}
		
		//渲染弹幕
		render(){
			if(this._video.paused) return;
			var ctx = this._canvas.getContext("2d");
			var w = parseInt($(this._video).width()),h = parseInt($(this._video).height());
			//每次设置宽高重绘太耗性能
			if(w !== this._canvas.width || h !== this._canvas.height){
				this._canvas.width = w;
				this._canvas.height = h;
			}
			ctx.clearRect(0,0,this._canvas.width,this._canvas.height);
			var delMap = new Set();
			let set = [...this._set].sort((a,b) => {
				if(a.mode === b.mode) return 0;
				if(a.mode === DanmuVo.MOVE) return 1;
				return -1;
			});

			set.forEach(id =>{
				let vo = this._map.get(id);
				ctx.font = `${vo.size}px 微软雅黑`; //设置绘制字体  
			    ctx.fillStyle = `#${this.toHex(vo.color)}`; //设置绘制文字的颜色 
				if(vo.running && !vo.die)
				{
					vo.update();
					if(vo.x < -vo.width || vo.alpha <= 0){
						//log('删除弹幕',vo.x,-ctx.measureText(vo.text).width);
						vo.stop();
						delMap.add(vo.id);
						if(vo.mode === DanmuVo.TOP){
							this._topOffset -= vo.height + 10;
						}else if(vo.mode === DanmuVo.BOTTOM){
							this._bottomOffset -= vo.height + 10;
						}
					}else{
			    		ctx.fillText(vo.text, vo.x, vo.y);
					}
				}else{
					let xpos = 0,ypos = 0;
					switch(vo.mode){
						case DanmuVo.MOVE:
							//log('MOVE弹幕');
							xpos = this._canvas.width + Math.random() * 30;
						break;
						case DanmuVo.TOP:
							//log('TOP弹幕');
							xpos = (video.width() - ctx.measureText(vo.text).width) * .5;
						break;
						case DanmuVo.BOTTOM:
							//log('BOTTOM弹幕');
							xpos = (video.width() - ctx.measureText(vo.text).width) * .5;
						break;
					}
					if(vo.mode === DanmuVo.TOP){
						this._topOffset += vo.height + 10;
					}else if(vo.mode === DanmuVo.BOTTOM){
						this._bottomOffset += vo.height + 10;
					}
					let {offset} = this.controler.getLineY(vo);
					vo.start(xpos,offset,ctx.measureText(vo.text).width);
				}
			})
			for(let id of delMap){
				this._set.delete(id);
			}
		}
		//开启弹幕刷新
		run(){
			if(requestAnimationFrame){
				this._id = requestAnimationFrame(this.run)
				this._now = Date.now();
				this._delta = this._now - this._then;
				if(this._delta > this._interval){
					this._then = this._now - (this._delta % this._interval);
					this.render();
				}
			}else{
				this._id = setInterval(() => this.render(),this._interval);
			}
		}
		//关闭弹幕刷新
		stop(){
			clearInterval(this._id);
			let cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
			if(cancelAnimationFrame)
				cancelAnimationFrame(this._id);
		}
	}

	const VOD_URL = "http://www.streambox.fr/playlists/test_001/stream.m3u8";
	//-------
	setupPlayer();

	if(Hls.isSupported()) {
		let config = {
			debug:false,
		}
	    var hls = new Hls(config);
	    hls.loadSource(VOD_URL);
	    hls.attachMedia(video.get(0));
		hls.on(Hls.Events.MANIFEST_PARSED,ready);
	 }else{
	 	try{
	 		video.attr('src',VOD_URL);
	 		setTimeout(ready,1000);
	 	}catch(e){
	 		player.append($(`<span style="color:#FFF">不支持的浏览器${e.toString()}</span>`))
	 	}
	 }
})