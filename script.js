var canvas = document.getElementById("mycanvas"); // variable that attaches to your html document
   var context = canvas.getContext("2d"); // getContext decides the “type” of canvas
   // x and y coordinates always start at the top left of an element or the page
   context.moveTo(0, 0);  // x, y coordinates where the line starts
   context.lineTo(200,100); //x, y coordinates where the line ends
   context.stroke(); // function that creates the line, won’t work without this code