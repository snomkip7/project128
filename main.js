
song1="";
song2="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;


function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("frozen.mp3");
}

function setup(){
    video = createCapture(VIDEO);
    video.hide();
    
    canvas = createCanvas(600, 500);
    canvas.center();

    //CHANGE THIS------------------------------------------------

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

    //CHANGE THIS------------------------------------------------
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play1(){
    song2.stop();
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}
function play2(){
    song1.stop();
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
}

function modelLoaded(){
console.log("Model has been loaded :D");
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("left wrist x is "+leftWristX+" left wrist y is "+leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("right wrist x is "+rightWristX+" right wrist y is "+rightWristY);
}
}