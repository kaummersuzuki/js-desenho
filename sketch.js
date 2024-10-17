function setup() {
    createCanvas(500, 400);
    background("red");
  }
  
  function draw() {
    stroke("white")
    fill("black")
   
    if(mouseIsPressed){
    rect(mouseX, mouseY, 100, 200)
  }
  }