<html>
<head>
	<title>HLS</title>
	<script type="text/javascript" src="jquery-2.2.4.min.js"></script>
	<script src="https://cdn.jsdelivr.net/hls.js/latest/hls.min.js"></script>
	<style type="text/css">
	video{
		width: 400px;
		height: 300px;
	}
	</style>
</head>
<body>
<video id="video"></video>
<script>
 	var body = $('body');
 	body.css({
 		width:'100%',
 		height:'100%',
 		margin:0
 	})
 	var video = $('#video');
 	if(Hls.isSupported()) {
	    var hls = new Hls();
	    hls.loadSource('http://www.streambox.fr/playlists/test_001/stream.m3u8');
	    hls.attachMedia(video);
	    hls.on(Hls.Events.MANIFEST_PARSED,function() {
	      video.play();
	  });
	 }else{
	 	video.html('不支持的视频');
	 }
</script>

</body>
</html>
