<!DOCTYPE html>
<html>
<head>
	<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30=" crossorigin="anonymous"></script>
	<title>lab5 simulator</title>
	<link rel="stylesheet" type="text/css" href="exp5.css">
	
	<script src="exp5try.js"></script>
	
	<style>canvas{width:80%;}</style>
 <style>
 h1 {
            font-family: 'Open Sans';
            background-color: #808080;
            padding: 10px;
            color: #FFFFFF;
            text-align: center
           
        }
    p {
            font-family: 'Open Sans';
            font-size: 15px;
            background-color: #A9A9A9;
            padding: 5px;
            font-weight: bold;
        }    
    h4 {
    background-color: #FFFF00;
            padding: 2px;
            }
    h3{
            background-color: #808080;
            padding: 3px;
        }
            
        </style>
</head>
<body>
	<h1 id="heading">EXPERIMENT ON XOR/XOR GATES</h1>
	<div id="simulate_button">
		<p><button class="btn"> Simulate</button>   <button class="btn"> Full Graph</button>
        <select id="gate" class="some-margin">
      <option value="0" selected disabled hidden>Select the gate type</option>
      <option value="1">XOR Gate Circuit</option>
      <option value="2">XNOR Gate Circuit</option>
    </select>
        <button class="btn"> Layout Design</button></p>
	</div>
	<table id="one">
		<tr>
			<th align="left">
				<h3 id="toolhead">Tool Bar</h3>
				<h4><div id="smallheadings">Available icons </div></h4><br>

				<table>
					<tr>
					 	<td><img class="componentButton PMOS" src="D:\images/PMOS.png" style="width:40px;height:50px;"></td>
						<td><img class="componentButton NMOS" src="D:\images/NMOS.png"style="width:40px;height:50px;"></td>  
					</tr>
					<tr>
						<td><img class="componentButton Ground" src="D:\images/Ground.png" style="width:40px;height:50px;"></td>
						 <td><img class="componentButton Capacitor"  src="D:\images/Capacitor.png"style="width:40px;height:50px;"></td>
					 </tr>
					<tr>
					 	<td><img class="componentButton Wire" src="D:\images/Wire.png"  style="width:40px;height:50px;"></td>
					  	<td><img class="componentButton Vdd" src="D:\images/vdd.png" style="width:40px;height:50px;"></td>
					  </tr>
					
					<tr>
					 	<td><img class="componentButton input" src="D:\images/input.png" style="width:40px;height:50px;"></td>
					  	<td><img class="componentButton output" src="D:\images/output.png" style="width:40px;height:50px;"></td>   
					</tr>
					
				</table>
				<br>

			</th>

			<th>
				<h3 id="toolhead">Circuit Design</h3><br>
				<div class="canvas">
					<svg id='connector_canvas'></svg>
				</div>
				
				
			</th>

			<th>
				<h3 id="toolhead">Simulation Of Circuit</h3>
				<div class="graph-zone"></div>

			</th>

		</tr>
</body>
</html>