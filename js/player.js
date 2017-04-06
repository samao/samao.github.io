$(function(){
	(function($){
		var id;
		$(document).on('mousemove',function(e){
			if(id !== undefined){
				window.clearTimeout(id);
			}
			id = setTimeout(function(){
				$(e.target).trigger('mousemoveend');
			},100)
		});

	})(jQuery);

	var controler = {
		domsHash:{
			container:".container",
			containerInner:".container-inner",
			videoPlayerContainer:".video-player-container",
			videoContainer:".video-container",
			playerContainer:".player-container",
			mediaVideo:"#media-video",
			playControl:".play-control",
			playButton:".play-button",
			pauseButton:".pause-button",
			volumeControl:".volume-control",
			volumeButton:".volume-button",
			volumeButtonMute:".volume-button-mute",
			progress:".progress",
			progressOver:".progress-over",
			progressHidden:".progress-hidden",
			progressBackground:".progress-background",
			indicator:".indicator",
			fullScreenButton:".fullscreen-button",
			danmuCanvas:"#danmuCanvas"
		},
		isPlay:true,
		isVolume:true,
		isEnd:false,
		progressBarWidth:100,
		danmu:new DanmuControler(),
		init:function(){
			controler.initCanvas();
			controler.defaultSetting();
			controler.clickSettings();
			controler.playControlVideo();
			controler.volumeControlVideo();
			controler.progressControlVideo();
			controler.mouseHideControl();
			controler.danmu.initDanmus(4828293);
		},
		initCanvas:function(){
			var playerContainer = $(controler.domsHash.videoContainer);
			var canvas = $("<canvas></canvas>");
			canvas.attr("id","danmuCanvas");
			$(controler.domsHash.danmuCanvas).css({
						"width":$(controler.domsHash.mediaVideo).width(),
						"height":$(controler.domsHash.mediaVideo).height(),
					});
			playerContainer.append(canvas)
		},
		defaultSetting:function(){
			var video = $(controler.domsHash.mediaVideo).get(0);
			$(controler.domsHash.mediaVideo).get(0).controls = false;
			$(window).on("resize",function(){
				console.log("初始化resize");
				var playerW = $(controler.domsHash.playerContainer).width();
				$(controler.domsHash.progress).width(playerW - 223);
				$(controler.domsHash.progressBackground).width(playerW - 223 - 40);
				$(controler.domsHash.progressHidden).width(playerW - 223 - 40);
				controler.progressBarWidth = playerW - 223 - 40;
				$(controler.domsHash.progressOver).css("width",
					controler.progressBarWidth/video.duration * video.currentTime);
				console.log("resize:",controler.progressBarWidth,$(controler.domsHash.mediaVideo).height());
				$(controler.domsHash.danmuCanvas).css({
						"width":$(controler.domsHash.mediaVideo).width(),
						"height":$(controler.domsHash.mediaVideo).height(),
					});
			})
			//$(controler.domsHash.danmuCanvas).css("opacity","0.3");

			$(window).trigger("resize");
		},
		clickSettings:function(){
			$(controler.domsHash.playControl).click(controler.playControlVideo);
			$(controler.domsHash.volumeControl).click(controler.volumeControlVideo);
			$(controler.domsHash.mediaVideo).click(controler.playControlVideo);
			$(controler.domsHash.fullScreenButton).click(controler.fullScreenControl);
			/*$(controler.domsHash.danmuCanvas).click(function(){
				$(controler.domsHash.mediaVideo).trigger("click");
			})*/
			$("body").on("keyup",function(e){
				if(e.which == 27){
					controler.exitFullScreen();
				}
			})
		},
		fullScreenControl:function(){
			if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement){
				if (document.documentElement.requestFullscreen){
					document.documentElement.requestFullscreen();
				}else if (document.documentElement.msRequestFullscreen){
					document.documentElement.msRequestFullscreen();
				}else if (document.documentElement.mozRequestFullScreen){
					document.documentElement.mozRequestFullScreen();
				}else if (document.documentElement.webkitRequestFullscreen){
					document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
				}
				controler.onFullScreen();
			}else{
				if (document.exitFullscreen)
				{
					document.exitFullscreen();
				}else if(document.msExitFullscreen){
					document.msExitFullscreen();
				}else if (document.mozCancelFullScreen){
					document.mozCancelFullScreen();
				}else if (document.webkitExitFullscreen){
					document.webkitExitFullscreen();
				}
				controler.exitFullScreen();
			}
		},
		onFullScreen:function(){
			$(controler.domsHash.progressOver).css("width", 
				controler.progressBarWidth / $(controler.domsHash.mediaVideo).get(0).duration * $(controler.domsHash.mediaVideo).get(0).currentTime);

			$(controler.domsHash.container).css("display","block");
			$(controler.domsHash.videoPlayerContainer).width("100%");
			$(controler.domsHash.videoPlayerContainer).height("100%");
			$(controler.domsHash.videoContainer).height("calc(100% - 40px)");
			$(controler.domsHash.progress).width($(controler.domsHash.playerContainer).width() - 223);
			$(controler.domsHash.progressBackground).width($(controler.domsHash.playerContainer).width() - 223 - 40);
			$(controler.domsHash.progressHidden).width($(controler.domsHash.playerContainer).width() - 223 - 40);
			controler.progressBarWidth = $(controler.domsHash.playerContainer).width() - 223 - 40;

			$(controler.domsHash.containerInner).css("display","none");

			$(controler.domsHash.danmuCanvas).css({
						"width":$(controler.domsHash.mediaVideo).width(),
						"height":$(controler.domsHash.mediaVideo).height(),
					});
		},
		exitFullScreen:function(){
			$(controler.domsHash.container).css("display", "-webkit-box");
			$(controler.domsHash.container).css("display", "-moz-box");
			$(controler.domsHash.container).css("display", "-ms-flexbox");
			$(controler.domsHash.container).css("display", "-webkit-flex");
			$(controler.domsHash.container).css("display", "flex");
			$(controler.domsHash.videoPlayerContainer).width(648);
			$(controler.domsHash.videoPlayerContainer).height(350);
			$(controler.domsHash.videoContainer).height(310);
			$(controler.domsHash.progress).width($(controler.domsHash.playerContainer).width() - 223);
			$(controler.domsHash.progressBackground).width($(controler.domsHash.playerContainer).width() - 223 - 40);
			$(controler.domsHash.progressHidden).width($(controler.domsHash.playerContainer).width() - 223 - 40);
			controler.progressBarWidth = $(controler.domsHash.playerContainer).width() - 223 - 40;

			$(controler.domsHash.progressOver).css("width",
				($(controler.domsHash.mediaVideo).get(0).duration/$(controler.domsHash.mediaVideo).get(0).duration) * controler.progressBarWidth);
			$(controler.domsHash.containerInner).css("display","inherit");
			$(controler.domsHash.danmuCanvas).css({
						"width":$(controler.domsHash.mediaVideo).width(),
						"height":$(controler.domsHash.mediaVideo).height(),
					});
		},
		mouseHideControl:function(){

		},
		playControlVideo:function(){
			var video = $(controler.domsHash.mediaVideo).get(0);
			if(controler.isPlay){
				video.play();
			}else{
				video.pause();
			}
			$(controler.domsHash.playButton).css('display',controler.isPlay ? "none":"table-cell");
			$(controler.domsHash.pauseButton).css("display",!controler.isPlay ? "none":"table-cell");
			controler.isPlay = !controler.isPlay;
			controler.isEnd = false;

			console.log('当前播放：',controler.isPlay);
		},
		volumeControlVideo:function(){
			$(controler.domsHash.mediaVideo).get(0).muted = !controler.isVolume;
			$(controler.domsHash.volumeButtonMute).css("display",controler.isVolume?"none":"table-cell");
			$(controler.domsHash.volumeButton).css("display",!controler.isVolume?"none":"table-cell");
			controler.isVolume = !controler.isVolume;
		},
		progressControlVideo:function(){
			var mouseX = 0,
				isDown = false,
				currentMinute = 0,
				currentSecond = 0,
				mediaPlayer = $(controler.domsHash.mediaVideo).get(0);

			mediaPlayer.addEventListener('timeupdate',function(){
				$(controler.domsHash.progressOver).css("width",
					controler.progressBarWidth / mediaPlayer.duration * mediaPlayer.currentTime);
				videoEndControl();
				setIndicator(mediaPlayer.currentTime,mediaPlayer.duration)
			},false);

			function videoEndControl(){
				if(mediaPlayer.currentTime >= mediaPlayer.duration){
					controler.isPlay = false;
					controler.playControlVideo();
					controler.isEnd();
				}
			}

			function setIndicator(currentTime,duration){
				var durationMinute = Math.floor(duration/60);
				var durationSecond = Math.floor(duration - durationMinute * 60);
				currentSecond = Math.floor(currentTime);
				currentMinute = Math.floor(currentSecond/60);
				currentSecond = currentSecond - currentMinute * 60;
				$(controler.domsHash.indicator).text(Appendzero(currentMinute)+":"+Appendzero(currentSecond) + " / " + Appendzero(durationMinute) + ":"+Appendzero(durationSecond))

				controler.danmu.update(currentTime);
				addToView()
			}

			function Appendzero(obj) {
				if(obj < 10) 
					return "0" + obj
				else 
					return obj;
		    }

		    $(controler.domsHash.progressHidden).mousemove(function(e){
		    	var parentOffset = $(this).parent().offset();
		    	mouseX = Math.floor(e.pageX - parentOffset.left - 20);
		    	if(isDown){
		    		mediaPlayer.currentTime = (mediaPlayer.duration / controler.progressBarWidth) * mouseX;
		    	}
		    })

		    $(controler.domsHash.progressHidden).click(function(){
		    	if(!isDown){
		    		mediaPlayer.currentTime = (mediaPlayer.duration / controler.progressBarWidth) * mouseX;
		    	}
		    });

		    $(controler.domsHash.progressHidden).mousedown(function(){
		    	console.log("鼠标按下");
		    	isDown = true;
		    	mediaPlayer.currentTime = (mediaPlayer.duration / controler.progressBarWidth) * mouseX;
		    	mediaPlayer.pause();
		    });

		    $(controler.domsHash.progressHidden).mouseup(function(){
		    	isDown = false;
		    	if(!controler.isEnd){
		    		controler.isPlay = true;
		    		controler.playControlVideo();
		    	}
		    });

		    $(controler.domsHash.progressHidden).mouseout(function(){
		    	isDown = false;
		    	if(!controler.isEnd){
		    		controler.isPlay = true;
		    		controler.playControlVideo();
		    	}
		    })

		    /*$(controler.domsHash.canvas).click(function(){
		    	controler.playControlVideo();
		    })
			()*/
		}
	}

	controler.init();

	(function(){
			var canvas = $(controler.domsHash.danmuCanvas).get(0);
			function randomY()
			{
				return Math.random()*($(controler.domsHash.mediaVideo).height() - 10) + 10;
			}
			var damus = [];
			var ctx = canvas.getContext("2d");
			
			setInterval(function()
			{
				canvas.width = $(controler.domsHash.mediaVideo).width();
				canvas.height = $(controler.domsHash.mediaVideo).height();
				var screen = $(controler.domsHash.mediaVideo)
				ctx.clearRect(0,0,canvas.width,canvas.height);
				damus = controler.danmu.activeDanms.concat();
				try{
					for(var i = 0; i<damus.length;i++){
						var d = damus[i];
						ctx.font = d.size+"px 微软雅黑"; //设置绘制字体  
			    		ctx.fillStyle = to16Hex(d.color); //设置绘制文字的颜色 

						if(!d.hasOwnProperty('p')){
							d.p = {
								x:$(controler.domsHash.mediaVideo).width()+Math.random()*10,
								y:randomY()
							};
							d.die = false;
						}
						d.p.x -= 5;
						d.die = d.p.x < -(ctx.measureText(d.msg).width); 
						
						if(d.die){
							delete d.p;
							d.die = false;
			    			controler.danmu.completed(d);
						}else{
							ctx.fillText(d.msg, d.p.x,d.p.y); 
						}
			    	}
		    	}catch(e){
		    		console.log(e);
		    	}
			},100);
	})();
	
	function to16Hex(value){
		var colorMap = [0,0,0,0,0,0];
		value.toString(16).split('').forEach(function(e,i){
			colorMap[i] = e;
		});
		colorMap = colorMap.reverse();
		//console.log(value,"#"+colorMap.join(''))
		return "#"+colorMap.join('');
	}

	function addToView(){
		//console.log('需要添加',controler.danmu.waitedMap.length);
		controler.danmu.waitedMap.forEach(function(e){
			controler.danmu.startDanmu(e);
		})
		controler.danmu.waitedMap.length = 0;
		//console.log('当前弹幕',controler.danmu.activeDanms.length)
	}
});