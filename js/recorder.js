$(document).ready(function(){
	$("#record").click(function(){
		var obj = {}, txt="";
    obj = {
            video: false,
            audio: true
        };
        txt = "<audio>";
   
        /*$("#save").empty();
        var output = $(txt).appendTo("#save")[0],
            source = window.URL.createObjectURL(stream);
        output.autoplay = true;
        output.src = source;
        console.log(stream);
        window.a = stream; //debug*/
        navigator.webkitGetUserMedia(obj, function(stream) {
		var url = (window.URL || window.webkitURL).createObjectURL(stream);
    var link = document.getElementById("save");
    link.href = url;
    link.download =  'output.wav';
		});
    }, function(err) {
        console.log(err);
        err.code == 1 && (alert("You can click the button again anytime to enable."))
    });
	});
});