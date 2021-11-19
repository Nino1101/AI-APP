music1=0;
music2=0;
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

    image(video,0,0,600,500);

}