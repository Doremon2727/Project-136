status = "";

function setup() {
    canvas = createCanvas(480,380);
    canvas.position ();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function draw() {
    image(video, 0, 0 , 480, 380);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

