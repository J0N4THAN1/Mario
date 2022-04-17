// function preload() {
//   world_start = loadSound("world_start.wav");
//   mario_die = loadSound("mariodie.wav");
//   mario_jump = loadSound("jump.wav");
//   mario_collect = loadSound("coin.wav");
//   all_lost = loadSound("gameover.wav");
//   crush_goomba = loadSound("kick.wav");
//   setSprites();
//   MarioAnimation();
// }

//  function setup() {
//  	canvas = createCanvas(1240,336);
//  	instializeInSetup(mario);
//    canvas.position(530,1100);
//  	canvas.parent("canvas");
//  	video = createCapture(VIDEO);
//  	video.size(800,400);
//    video.position(530,1700);
//  	video.parent("game_console");
//  	posenet = ml5.poseNet(video, WEEEEEEEEEEEEEEEEE);
//  	posenet.on("JoJo", SpOh)
//  }
//  function SpOh(Dio){
//  	if(Dio.length>0){
//  		noseX = Dio[0].JoJo.nose.x;
//  		noseY = Dio[0].Jojo.nose.y;
//  	} 
//  }
//  function WEEEEEEEEEEEEEEEEE(){
//  	console.log("Yare Yare Dawa");
//  }

//  function draw() {
//  	game()
//  }


function preload() {
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);
	
	video = createCapture(VIDEO);
	video.size(800,400);
  video.position(530,1700);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}

function modelLoaded() {
	console.log('Model Loaded!');
  }

  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  leftWristX = results[0].pose.leftWrist.x;
	  leftWristY = results[0].pose.leftWrist.y;
	}
  }
   
function draw() {
	game();
}





