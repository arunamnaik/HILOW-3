function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

img = "";

function preload(){
    img = loadImage("Baske.png");
}

function draw(){
    image(img, 0,0,640,420);
    fill("#000000");
    text("BASKET",155,75);
    noFill();
    stroke("#000000");
    rect(10,30,620,400);
}