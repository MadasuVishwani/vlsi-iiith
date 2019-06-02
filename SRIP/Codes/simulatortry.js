 <!DOCTYPE html>
<html>
<head>
	<title>Simulator</title>
	<link rel="stylesheet" href="layout.css">
  <script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
<script src="http://code.jquery.com/ui/1.9.2/jquery-ui.min.js"></script>
<style>
h1 {
            font-family: 'arial';
            background-color: rgb(255, 171, 13);
            padding: 30px;
            color: rgb(9, 200, 0);
            text-align: center
           
        }
</style>

</head>
<body>
  <script type="text/javascript" src="UI.js"></script>


 <div class="container">
 <h1>Simulator for XOR and XNOR gates</h1>
  <!--<div class="item1">Simulator for D Flip Flop</div>-->
  <div class="item2" style="text-align: center;">
  	<!--img goes here -->
    <h3>Components</h3>
    <p class="some-text">Input:</p>
    <img src="D:\images/Input.png" class="tool" width="50px" height="50px">
    <p class="some-text">Output:</p>
    <img src="D:\images/Output.png" class="tool" width="50px" height="50px">
    <p class="some-text">PMOS:</p>
    <img src="D:\images/pmos.png" class="tool" width="70px" height="70px">
    <p class="ome-text">NMOS:</p>
    <img src="D:\images/nmos.png" class="tool" width="70px" height="70px">
    <p class="some-text">V_dd:</p>
    <img src="D:\images/vdd.png" class="tool" width="70px" height="70px">
    <p class="some-text">Ground:</p>
    <img src="D:\images/ground.png" class="tool" width="70px" height="70px">
    
    
    
  	<button onclick="Erase()" id="erase">Erase</button>
  </div>
  <div class="item3">
  	<!-- The canvas goes here -->
  	<canvas id="canvas" width="600px" height="500px" style="border:2px solid #000000";>

   	</canvas>
  </div>
</div>

   <input type="button" value="Help" onclick="window.open('Help2.html')" />

 </body>
</html>