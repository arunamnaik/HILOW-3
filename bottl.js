function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

img = "";

function preload(){
    img = loadImage("Bottl.jpg");
}

function draw(){
    image(img, 0,0,640,420);
    fill("#000000");
    text("BOTTLES",155,75);
    noFill();
    stroke("#000000");
    rect(25,50,600,350);
}