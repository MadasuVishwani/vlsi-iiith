<!DOCTYPE html>
<html>
<head>
<title>Quiz</title>
<style>
div#test{ border:2px solid DodgerBlue; padding:20px 60px 60px 60px; background-color:##ff6347; width:70%;}
.figure
{
   float:left;
}
.fig
{
   float:right;
}
</style>
<script type="text/javascript">
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC,cdD,correct = 0;
var questions = [
  ["1) Can you distinguish between AND and XNOR gate when both the inputs are 1?", "NO", "YES ", "MAY or MAY NOT", "none of the above", "A"],
  
  ["2) Chose the correct design of (A+BC)' using NMOS only.", "fig1", "fig2", "fig3", "fig4", "C"],
  
  ["3) Chose the correct design of (AC+BC)' using PMOS only.", "fig5", "fig6", "fig7", "fig8","A"],
  
  ["4) In above question what is the minimum number of transistor required for making the design? ", "4", "2", "5","3", "D"],
  
  ["5) Chose the correct design of ABC using complementary logic.","fig9","fig10","fig11","fig12","B"],
  
  ["6) Chose the correct design of A+B+C using complementary logic.","fig13","fig14","fig15","fig16","B"],
  
  ["7) What will be the minimum number of transistor required for designing ABC+A'BC'+(AB)'C+A(BC)'?","12","11","8","10","B"],
  
  ["8) What will be the minimum number of transistor required for designing xy+xz+zy+xy'+z ?","6","4","3","2","D"],
  
  ["9) Reduce the expression xy(z+w)+y'(x'z+xz)+z'w and tell the min number of transistor required for the design.","8","6","11","12","A"],

  ];
function get(x){
  return document.getElementById(x);
}
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    
    pos = 0;
    correct = 0;
    
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  chD = questions[pos][4];
   test.innerHTML = "<h3>"+question+"</h3>";
  
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
 
  if(choice == questions[pos][5]){
 
    correct++;
  }

  pos++;
  
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
</script>
</head>
<body>
<h2 id="test_status"></h2>
<div id="test"></div>
<p class="figure"><b>fig1</b> </p><img src="D:\images\comp1.jpg" class="figure">
<p class="figure"><b>fig2</b></p><img src="D:\images\comp2.jpg" class="figure">
<p class="figure"><b>fig3</b></p><img src="D:\images\comp3.jpg" class="figure">
<p class="figure"><b>fig4</b></p><img src="D:\images\comp4.jpg" class="figure">
<p class="figure"><b>fig5</b> </p><img src="D:\images\comp5.jpg" class="figure">
<p class="figure"><b>fig6</b></p><img src="D:\images\comp6.jpg" class="figure">
<p class="figure"><b>fig7</b></p><img src="D:\images\comp7.jpg" class="figure">
<p class="figure"><b>fig8</b></p><img src="D:\images\comp8.jpg" class="figure">
<p class="figure"><b>fig9</b> </p><img src="D:\images\comp9.jpg" class="figure">
<p class="figure"><b>fig10</b></p><img src="D:\images\comp10.jpg" class="figure">
<p class="figure"><b>fig11</b></p><img src="D:\images\comp11.jpg" class="figure">
<p class="figure"><b>fig12</b></p><img src="D:\images\comp12.jpg" class="figure">
<p class="figure"><b>fig13</b> </p><img src="D:\images\comp13.jpg" class="figure">
<p class="figure"><b>fig14</b></p><img src="D:\images\comp14.jpg" class="figure">
<p class="figure"><b>fig15</b></p><img src="D:\images\comp15.jpg" class="figure">
<p class="figure"><b>fig16</b></p><img src="D:\images\comp16.jpg" class="figure">



 </body>
</html> 