<html>
  <head>
    <meta charset="UTF-8">
    <title>H5播放器 beta</title>
  <link rel="stylesheet" href="css/normalize.css">
  <script type="text/javascript" src="AcH5Player.js"></script></head>
  <body>
    <div class="player-wrap" style="position: fixed;width:978px;height: 626px; margin: 0 auto; top:0px;"></div>
    <script>;
      let player = AcH5Player.createPlayer(document.querySelector('.player-wrap'));
    </script>
  </body>
</html>