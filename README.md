<html>
<head>
	<title>HLS</title>
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
  if(Hls.isSupported()) {
    var video = document.getElementById('video');
    var hls = new Hls();
    hls.loadSource('http://cnhlsvodhls01.e.vhall.com//vhallrecord/682723428/20161222125031/record.m3u8');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
  });
 }else{
 	console.log('不支持');
 }
</script>

</body>
</html>
