<html>
  <head>
  <link rel="stylesheet" href="css/normalize.css">
  <script type="text/javascript" src="AcH5Player.js"></script></head>
  <body>
    <div class="player-wrap" style="position: fixed;width:978px;height: 626px; margin: 20px auto; top:0px;"></div>
    <script>;
      var player = AcH5Player.createPlayer(document.querySelector('.player-wrap'));
      function clearOther() {
        var body = document.body.querySelector('.markdown-body');
        body.removeChild(body.querySelector('h1'));
        body.removeChild(body.querySelector('.footer'));
      }
      try {
        document.title = 'React Video Demo';
        clearOther();
      }catch(e){
        console.log('错误了');
        console.log(e);
      }
    </script>
  </body>
</html>
