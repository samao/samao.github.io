<html>
  <head>
    <meta charset="UTF-8">
    <title>H5播放器 beta</title>
  <link rel="stylesheet" href="css/normalize.css">
  <script type="text/javascript" src="AcH5Player.js"></script></head>
  <body>
    <div class="player-wrap" style="position: fixed;width:978px;height: 626px; margin: 20px auto; top:0px;"></div>
    <script>;
      var player = AcH5Player.createPlayer(document.querySelector('.player-wrap'));
      var body = document.body.querySelector('.markdown-body');
      try {
        body.removeChild(body.querySelector('h1'));
        document.title = 'React Video Demo';
      }catch(e){
        console.log('错误了');
        console.log(e);
      }
    </script>
  </body>
</html>
