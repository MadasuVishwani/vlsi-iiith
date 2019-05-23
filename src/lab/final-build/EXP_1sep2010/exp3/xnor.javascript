!DOCTYPE html>
<html>
<body>

<canvas id="xnorCanvas" width="1400" height="650" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>

<script>



 	var i=0;
    var j=0;
  
	var strBuff;
	var txtArea;
	var myline;
//	var time = new Array[1000] ;
	//var Va_in = new Array[1000] ;
	//var Vb_in = new Array[1000] ;
	//var V_out = new Array[1000] ;
	var no_values = 0 ;
    
    
 		
var c = document.getElementById("xnorCanvas");
var ctx = c.getContext("2d");

paint(ctx);  

function paint(ctx){

s
ctx.fillStyle = "#D3D3D3";
ctx.fillRect(0, 0, 1400, 650);
ctx.stroke();


ctx.lineJoin = "round";
 ctx.beginPath();
ctx.fillStyle = "#0000FF";
 		 

ctx.beginPath();
ctx.moveTo(1100, 50);
ctx.lineTo(1150 , 50);
ctx.stroke(); 

ctx.beginPath();
ctx.lineCap = "round";
ctx.fillStyle = "#0000FF";
ctx.stroke();

drawline(1100,50,1150,50);
ctx.fillText("Input Voltage ", 1200 , 50 ); 
ctx.fillStyle = "#008000";

for( i = 0 ; i < 200 - 1 ; i++ ){
drawline(100+5*i , 500-Math.round(i*400),100 + 5*(i+1) , 500-Math.round(i+1*400));
}
		
        
drawline(1100,80,1150,80);
ctx.fillText("Input Voltage ", 1200 , 80 ); 
ctx.fillStyle = "#FF0000";

for( i = 0 ; i < 200 - 1 ; i++ )		{
drawline(200+5*i , 500-Math.round(i*400),100 + 5*(i+1) , 500-Math.round(i+1*400));
		}
        
drawline(1100,110,1150,110);	
ctx.fillText("Input Voltage ", 1200 , 110 ); 
ctx.fillStyle = "#000000";
ctx.stroke();

drawline(100,520,100,40);	
drawline(100,280,1200,280);
ctx.fillText("Time --> ",  550 , 540 );
ctx.font = "20px Arial";
ctx.fillText("WAVEFORM OF THE INPUT AND OUTPUT VOLTAGES OF SIMULATED CIRCUIT", 200 , 500); 
//ctx.rotate(-3.14/2 , 30 , 260 );
ctx.fillText("Volt --> ",  30 , 260 );
//ctx.rotate(-3.14/2 , 30 , 260 );

drawOval(ctx,100,200,1,2);
drawOval(ctx,100,200,2,1);

 }

var fileToRead = "outfile_nand";
function drawline(a,b,c,d){
ctx.beginPath();
ctx.moveTo(a, b);
ctx.lineTo(c,d);
ctx.stroke();
}
function drawOval(ctx, cX,cY,w,h){
var radius = 40;
ctx.beginPath();
ctx.save();
         ctx.translate(w, h);
         ctx.scale(2, 1);
         ctx.beginPath();
         ctx.arc(cX, cY, radius, 0, 2 * Math.PI, false);
         ctx.restore();
         ctx.fillStyle = '#000000';
         ctx.fill();
         ctx.lineWidth = 2;
         ctx.strokeStyle = 'yellow';
         ctx.stroke();
         
         }


</script>

</body>
</html>
