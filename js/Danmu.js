

	var DANMU_STATUS = {
		UNPLAYED:'unplayed',
		PLAYING:'playing'
	}

	const TIME_OVER = 10;
	
	function DanmuControler(){
		this.vid = "";
		this.map = [];
		this.prevTime = 0;
		this.time = 0;
		this.activeDanms = [];
		this.waitedMap = [];
	}

	DanmuControler.prototype.completed = function(value) {
		value.status = DANMU_STATUS.UNPLAYED;
		this.activeDanms.splice(this.activeDanms.indexOf(value),1);
	};

	DanmuControler.prototype.startDanmu = function(value) {
		value.status = DANMU_STATUS.PLAYING;
		this.activeDanms.push(value)
	};

	DanmuControler.prototype.clearDanmuPlayed = function() {
		this.activeDanms.length = 0;
		this.waitedMap.length = 0;
	};

	DanmuControler.prototype.update = function(t) {
		if(Math.abs(t - this.prevTime) > TIME_OVER){
			this.clearDanmuPlayed();
		}else{
			var max = Math.max(this.prevTime,t);
			var min = Math.min(this.prevTime,t);

			this.waitedMap = this.map.filter(function(a){
				return a.time > min && a.time <= max;
			});
		}
		this.prevTime = t;
		//console.log('当前需要播放弹幕：',this.waitedMap.length);
	};

	DanmuControler.prototype.size = function() {
		return this.map.length;
	};

	DanmuControler.prototype.loadHistory = function() {
		var self = this;
		$.ajax({
			url:'http://i.acfun.tv/h5/data/danmu.json',
			success:function(value){
				self.parseDanmus(value);
			},
			error:function(e){
				console.log('加载弹幕失败',e);
			}
		})
	};

	DanmuControler.prototype.initDanmus = function(videoId) {
		this.vid = videoId;
		this.loadHistory();
	};

	DanmuControler.prototype.parseDanmus = function(value) {
		var self = this;
		var danmuMap = value[2];
		if(danmuMap.length !== 0){
			danmuMap.forEach(function(e){
				var danmu = {
					'msg':e.m,
					'size':e.c.split(',')[3],
					'color':Number(e.c.split(',')[1]),
					'mode':e.c.split(',')[2],
					'time':e.c.split(',')[0],
					'id':e.c.split(",")[6]
				};
				self.map.push(danmu);
			})
		}
		this.ready();
	};

	DanmuControler.prototype.ready = function() {
		console.log('弹幕加载完成,总共：',this.size(),'条');
	};
