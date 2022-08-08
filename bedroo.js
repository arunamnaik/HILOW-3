function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

img = "";

function preload(){
    img = loadImage("Bedroo.jpg");
}

function draw(){
    image(img, 0,0,640,420);
    fill("#000000");
    text("BED",155,75);
    noFill();
    stroke("#000000");
    rect(150,60,450,350);
}