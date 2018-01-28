var onFail = function(e) {
				console.log('Rejected!', e);
			};

			var onSuccess = function(s) {
				var context = new (window.AudioContext || window.webkitAudioContext)();
				var mediaStreamSource = context.createMediaStreamSource(s);
				recorder = new Recorder(mediaStreamSource);
				recorder.record();
			}

			window.URL = window.URL || window.webkitURL;
			navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

			var recorder;
			var audio = document.querySelector('audio');

			function startRecording() {
				if (navigator.getUserMedia) {
					navigator.getUserMedia({audio: true}, onSuccess, onFail);
				} else {
					console.log('navigator.getUserMedia not present');
				}
				
			}

			function stopRecording() {
				recorder.stop();
				recorder.exportWAV(function(s) {
				console.log(s);
				postWithAudio(s);
				//pass jesse the file here
					//audio.src = window.URL.createObjectURL(s);
				});
			}
/*$(document).ready(function(){
	$("#record").click(function(){
		startRecording();
		var obj = {}, txt="";
    obj = {
            video: false,
            audio: true
        };
        txt = "<audio>";
    navigator.webkitGetUserMedia(obj, function(stream) {
	
	var url = (window.URL || window.webkitURL).createObjectURL(stream);
    var link = document.getElementById("save");
    link.href = url;
    link.download =  'output.wav';
        $("#save").empty();
        var output = $(txt).appendTo("#save")[0],
            source = window.URL.createObjectURL(stream);
        output.autoplay = true;
        output.src = source;
        console.log(stream);
        window.a = stream; //debug
       
    }, function(err) {
        console.log(err);
        err.code == 1 && (alert("You can click the button again anytime to enable."))
    });
	});
});
$(document).ready(function(){
	$("#stop").click(function(){
		
	stopRecording();
	});
});*/