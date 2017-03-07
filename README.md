<html>
<head>
	<title>HLS</title>
	<script type="text/javascript" src="jquery-2.2.4.min.js"></script>
	<script src="https://cdn.jsdelivr.net/hls.js/latest/hls.min.js"></script>
	<style type="text/css">
	.video{
		width: 400px;
		height: 300px;
	}
	</style>
</head>
<body>
<video id="video" autoplay="true" controls="true"></video>
<script>
	var rect = {width:$(window).width(),height:$(window).height()};

 	var body = $('body');
 	body.css({
 		width:'100%',
 		margin:0
 	});
 	body.height(rect.height);

 	var box = $(".container");
 	box.css({
 		width:"100%",
 		height:"100%",
 		margin:0
 	})

 	var video = $('#video');
 	video.width(rect.width);
 	video.height(rect.height);

 	if(Hls.isSupported()) {
	    var hls = new Hls();
	    hls.loadSource('http://www.streambox.fr/playlists/test_001/stream.m3u8');
	    hls.attachMedia(video.get(0));
	    hls.on(Hls.Events.MANIFEST_PARSED,function() {
	      video.play();
	  });
	 }else{
	 	video.html('不支持的视频');
	 }
</script>

</body>
</html>
