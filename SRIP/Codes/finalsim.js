 <script>
        var canvas;
function init()
{
 canvas = new fabric.Canvas('myCanvas');
}
function makeOnCanvas(comp)
{
	var rect;    
    if(comp=='metal')
    {
        	rect = new fabric.Rect({
            top : 100,
            left : 100,
            width : 60,
            height : 70,
            fill : 'rgba(0,0,255,0.7)'
        });
        canvas.add(rect);
		document.getElementById("currentIcon").src="D:\images/PMOS.gif";
		
            
	}
	else if(comp=='nwell')
	{
		rect = new fabric.Rect({
            top : 100,
            left : 100,
            width : 60,
            height : 70,
            fill : 'rgba(192,192,192,0.7)'
        });
        canvas.add(rect);
        document.getElementById("currentIcon").src="D:\images/NMOS.gif";
	}
	else if(comp=='poly')
	{
		rect = new fabric.Rect({
            top : 100,
            left : 100,
            width : 60,
            height : 70,
            fill : 'rgba(255,0,0,0.7)'
        });
        canvas.add(rect);
		document.getElementById("currentIcon").src="D:\images/Ground.gif";
		
	}else if(comp=='nselect')
	{
		rect = new fabric.Rect({
            top : 100,
            left : 100,
            width : 60,
            height : 70,
            fill : 'rgba(127,255,0,0.7)'
        });
        canvas.add(rect);
        document.getElementById("currentIcon").src="D:\images/vdd.gif";
	}else if(comp=='contact')
	{
		rect = new fabric.Rect({
            top : 100,
            left : 100,
            width : 60,
			height : 70,
			fill : 'rgba(0,0,0,0.7)'
        });
        canvas.add(rect);
        document.getElementById("currentIcon").src="D:\images/input.gif";
	}else if(comp=='pselect')
        
	{
		rect = new fabric.Rect({
            top : 100,
            left : 100,
            width : 60,
            height : 70,
            fill : 'rgba(191, 85, 236, 0.7)'
        });
        canvas.add(rect);
        document.getElementById("currentIcon").src="D:\images/Wire.gif";
	}else if(comp=='active')
	{
		rect = new fabric.Rect({
            top : 100,
            left : 100,
            width : 60,
            height : 70,
            fill : 'rgba(0,255,0,0.7)'
        });
        canvas.add(rect);
        document.getElementById("currentIcon").src="D:\images/output.gif";
	}else if(comp=='via')
	{
		alert("not required for this experiment");
	}
}
</script>