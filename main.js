NoseX = 0;
NoseY = 0;

function preload() {
    clownNose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill("#db2c2c");
    stroke("#ff8640");
    //circle(NoseX, NoseY, 20);
    image(clownNose, NoseX, NoseY, 30, 30);
}

function snapShot() {
    save("filteredSelfie.png");
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        NoseX = results[0].pose.nose.x - 15;
        NoseY = results[0].pose.nose.y - 15;
        console.log(`Nose X = ${NoseX}`);
        console.log(`Nose Y = ${NoseY}`);
    }
}