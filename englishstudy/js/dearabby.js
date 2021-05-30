function loadXHR(speakText) {
    return new Promise((resolve, reject) => {
        let sendData = {
  "audioConfig": {
    "audioEncoding": "MP3",
    "pitch": 0,
    "speakingRate": 1
  },
  "input": {
    "text": ""
  },
  "voice": {
    "languageCode": "en-US",
    "name": "en-US-Wavenet-D"
  }
};
sendData.input.text = speakText;

        try {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyAqHvBdn5-cTDFBgMjcs8E1tZlXPEmR1V0");
            xhr.setRequestHeader("Authorization", "Bearer");
            xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
            xhr.onerror = event => {
                reject(`Network error: ${event}`);
            };
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject(`XHR load error: ${xhr.statusText}`);
                }
            };
            xhr.send(JSON.stringify(sendData));
        } catch (err) {
            reject(err.message);
        }
    });
}

function googleSpeak(speakText) {
    loadXHR(speakText)
        .then(
            (result) => { 
                let resultData = JSON.parse(result);
                // console.log(resultData.audioContent);
                document.getElementById('googleSpeak').src = "data:audio/mp3;base64," + resultData.audioContent;
            },
            (error) => { 
                console.log(error);
            }           
        );
}