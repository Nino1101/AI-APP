music1=0;
music2=0;
leftX=0;
leftY=0;
rightX=0;
rightY=0;
function preload()
{
song=loadSound('music.mp3');
song=loadSound('music2.mp3')
}
function setup()
{
    canvas=createCanvas(600,500);
    canvas.center;
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function modelLoaded()
{
    console.log('Posenet is initialized');
}
if(results.length>0)
    {
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        scoreRightWrist=results[0].pose.keypoints[10].score;
        console.log("scoreLeftWrist="+scoreLeftWrist+"scoreRightWrist="+scoreRightWrist);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristY="+rightWristY+"rightWristX="+rightWristX);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"rightWristY="+rightWristY);   
     }
    
