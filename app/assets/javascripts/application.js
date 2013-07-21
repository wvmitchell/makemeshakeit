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
	setTimeout("slide_face_six()", 3000);
	setTimeout("slide_face_six()", 4500);
	setTimeout("slide_face_one()", 5300);
	setTimeout("slide_face_one()", 6500); 
	setTimeout("slide_face_two()", 8300);
	setTimeout("slide_face_two()", 9500);
	setTimeout("slide_face_three()", 11300);
	setTimeout("slide_face_three()", 12500);
	setTimeout("slide_face_four()", 14300);
	setTimeout("slide_face_four()", 15500);
	setTimeout("new_nav()", 17500);
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
	"Stretch!","Reverse!","Step!","Spin!",
	"Turn!","Grab!","Popup!","Twist!",
	"Hands!","Shake!","Drum!","Fly!",
	"Cry!","Kick!","Twirl!","Swim!",
	"Pull!","Push!", "Jump!", "Faster!",
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

function playSong(){
	R.ready(function() {
	  R.player.play({source: "a123273", initialPosition: 20}); // Radiohead, The Bends
	  
	});
}



