const request = require("request");
const fs = require("fs");
var wav = require('wav');
var play = require('play');


// postWithAudio();

postWithText();
// postWithAudio();

function postWithAudio() {
    // const data = fs.readFileSync('./audio_16k16bit.pcm');
    // const data = fs.readFileSync('./catIsBlue.wav');
    // const data = fs.readFileSync('./test.wav');

    const options = {
        method: "POST",
        uri: "https://dictation.nuancemobility.net:443/NMDPAsrCmdServlet/dictation?appId=NMDPTRIAL_jessesilber_gmail_com20180127114702&appKey=3cd6a8612112b94049f6c12a35da90b6314215126182a6b1133cb9c11b571c572ec4b84fd6718f1f6751499c2bd9525c1b676e7ce9152dfd51e6be6c3edac36c&id=C4461956B60B",
        headers: {
            "Content-Type": audioType("wave16000"),
            "Accept-Language": "ENUS",
            "Transfer-Encoding": "chunked",
            "Accept": "application/xml",
            "Accept-Topic": "Dictation",
        },
        body: data,
    };


    request(options, (error, response, body) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(body);
        }
    });
}

function postWithText() {

    const options = {
        method: "POST",
        uri: "https://tts.nuancemobility.net/NMDPTTSCmdServlet/tts?appId=NMDPTRIAL_jessesilber_gmail_com20180127114702&appKey=3cd6a8612112b94049f6c12a35da90b6314215126182a6b1133cb9c11b571c572ec4b84fd6718f1f6751499c2bd9525c1b676e7ce9152dfd51e6be6c3edac36c&ttsLang=en_US",
        headers: {
            "Content-Type": "text/plain",
            "Accept": "audio/x-wav",
        },
        body: "Hello there!"
    };


    request(options, (error, response, body) => {
        if (error) {
            console.log(error);
        }
        else {
            fs.writeFile("./test.wav", body);
        }
    })
}
function audioType(type) {
    switch (type) {
        case "wave8000":
            return "audio/x-wav;codec=pcm;bit=16;rate=8000";
        case "wave16000":
            return "audio/x-wav;codec=pcm;bit=16;rate=16000";
        case "wave22000":
            return "x-wav;codec=pcm;bit=16;rate=22000";
        default:
            return "fuck you";
    }
}