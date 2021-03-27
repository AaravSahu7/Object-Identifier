img = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#300dba");
    text("Dog", 30, 75);
    noFill();
    stroke("#300dba")
    rect(15, 50, 570, 362);
}