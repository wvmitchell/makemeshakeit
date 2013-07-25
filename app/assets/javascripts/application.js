// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .




// === Code for activating camera, recording video, and playing back === /

function onVideoFail(e) {
	console.log('webcam fail!', e);
};

function hasGetUserMedia() {
	return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
	window.URL = window.URL || window.webkitURL;
	navigator.getUserMedia = navigator.getUserMedia ||
							navigator.webkitGetUserMedia ||
							navigator.mozGetUserMedia ||
							navigator.msGetUserMedia;


	if (navigator.getUserMedia) {
		navigator.getUserMedia({video: true, audio: false}, function(stream){
			var video = document.querySelector('video');
			//var recorder = new MediaRecorder(stream);
			video.src = window.URL.createObjectURL(stream);

			//var recorder = RecordRTC({
			//   video: video
			//});
			
			//recorder.recordVideo();
			
			//$("#grid_btn").click(function(){
			//	recorder.stopVideo(function(url) {
			//           document.getElementById('video-url-preview').innerHTML = '<a href="' + url + '" target="_blank">open video.webm</a>';
			//	});
			//	recorder.saveToDisk();
			//});
			
			
			
		}, onVideoFail);
	} else {
		alert('failed');
	}
} else {
	alert('getUserMedia() is not supported by this browser!!');
}



function slide_faces () {
	setTimeout("slide_face_six()", 2800);
	setTimeout("slide_face_six()", 4400);
	setTimeout("slide_face_one()", 5800);
	setTimeout("slide_face_one()", 7400); 
	setTimeout("slide_face_two()", 8800);
	setTimeout("slide_face_two()", 10400);
	setTimeout("slide_face_three()", 11800);
	setTimeout("slide_face_three()", 13200);
	setTimeout("slide_face_four()", 14800);
	setTimeout("slide_face_four()", 16200);
	setTimeout("new_nav()", 17200);
};

function slide_face_one () {
	$("#face1").toggle ( "slide" );	
};

function slide_face_two () {
	$("#face2").toggle ( "slide" );
};

function slide_face_three () {
	$("#face3").toggle ( "slide" );
};

function slide_face_four () {
	$("#face4").toggle ( "slide" );
};

function slide_face_six () {
	$("#face6").toggle ( "slide" );
};

function new_nav() {
	$("#new_nav").animate({right: "220px"}, 500);
};

var actions = [		
	"Stretch!","Reverse!","Lunge!","Spin!",
	"Attack!","Shake!","Twist!",
	"Break!","Maracas!","Drum!","Chicken!",
	"Weep?","Kick!","Crash!","Swim It!",
	"Crank!","Shove!", "Jump!", "Faster!",
	"Vibrate!"];

var count = 0;

function changeText(){
	intID = setInterval(switchText, 3000);
};

function switchText(){
	document.getElementById("word").innerHTML = actions[Math.ceil(Math.random() * actions.length) -1];		
		$("#word").animate({
			opacity: 1,
			fontSize: "200px",
			left: "430px",
			top: "150px"
		}, 500 );
		$("#word").animate({
			opacity: 0,
			fontSize: "300px",
			left: "-1200px"
		}, 1800);
		if(count == 4){
			clearInt();
		}
		count++;
	};

function clearInt() {
	clearInterval(intID);
}	
$("#button").click(function(){
	changeText();
});

function pleaseWork() {
  var tester = document.getElementsByClassName('slow');
  var tester_fast = document.getElementsByClassName('fast');
  if (tester.length > 2) {
    for (i=0; i<9; i++) {
      document.getElementById("slow0").playbackRate = 1.0;
        document.getElementById("slow0").setAttribute("id", "my-video" + i);
        tester.item(0).setAttribute("id", "slow0");
        tester.item(0).setAttribute("class", "my-video");
    };
  };
  if (tester_fast.length > 2) {
    for (i=0; i<9; i++) {
      document.getElementById("fast0").playbackRate = 1.0;
        document.getElementById("fast0").setAttribute("id", "my-video" + i);
        tester_fast.item(0).setAttribute("id", "fast0");
        tester_fast.item(0).setAttribute("class", "my-video");
    };
  };
  
};   

function slowMusic () { 
var elements = document.getElementsByClassName('my-video');
for (i=0; i<=9; i++) {
  
   document.getElementById("my-video0").playbackRate = 0.4;
   document.getElementById("my-video0").setAttribute("id", "slow" + i);
   elements.item(0).setAttribute("id", "my-video0");
   elements.item(0).setAttribute("class", "slow");
  };
};


function fastMusic () { 
var elements = document.getElementsByClassName('my-video');
for (i=0; i<=9; i++) {
   
   document.getElementById("my-video0").playbackRate = 2.0;
   document.getElementById("my-video0").setAttribute("id", "fast" + i);
   elements.item(0).setAttribute("id", "my-video0");
   elements.item(0).setAttribute("class", "fast");
  };
};	

function normalTime () {
	document.getElementById("slowJamSong").pause();
	document.getElementById("thirsty").pause();
	document.getElementById("normalSpeed").play();
	pleaseWork();
};


function makeSong () {
	document.getElementById("normalSpeed").pause();
	document.getElementById("thirsty").pause();
	document.getElementById("slowJamSong").play();
	slowMusic();
};

function fastUp () {
	document.getElementById("normalSpeed").pause();
	document.getElementById("slowJamSong").pause();
	document.getElementById("thirsty").play();
	fastMusic();
};

function playSong(){
	R.ready(function() {
	  R.player.play({source: "t25005149", initialPosition: 33}) // Radiohead, The Bends
	});
};
