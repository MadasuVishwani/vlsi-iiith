<title>Simulator</title>
  <link rel="stylesheet" href="boxes.css">
</head>
<body>

 <script type="text/javascript">
   function myFunction(form)
   {
     alert(form.gate.value)
   }
</script>

 <h1 align="center">Schematic Design Of Transistor Level XOR & XNOR Gate</h1>

 <div class="box lightblue-box">

   <form name="myform" action="" method="get">

     <select id="gate">
      <option value="" selected disabled hidden>Select the gate type</option>
      <option value="1">XOR gate circuit</option>
      <option value="2">XNOR gate circuit</option>
    </select>

   
    <button onclick="myFunction(this.form)">Simulate</button>
     <button onclick="myFunction(this.form)">Layout Design</button>
      <button onclick="myFunction(this.form)">Full graph</button>
  </form>

   <h5 class="box blue-box">Graph goes here</h5>
</div>
</body>
</html>