objects = [];
img = "";
status = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    object_detector = ml5.objectDetector("cocossd", model_loaded);
}

function draw() {
    image(img, 0, 0, 640, 420);

    if(status != "") {
        for(var i=0; i<objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill("#FF0000")
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x - 60, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function model_loaded() {
    console.log("model loaded");
    status = true;
    object_detector.detect(img, got_result);
}

function got_result(error, results) {
    if(error) {
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}