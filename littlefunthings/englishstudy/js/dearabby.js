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

let linesIndex;
let linesIndexMax;
let linesData;

function onload() {
    textData1 = document.getElementById('linesSec1').innerText;
    textData1 = textData1.split(".");
    textData2 = document.getElementById('linesSec2').innerText;
    textData2 = textData2.split(".");

    linesIndex = 0;
    linesData = document.getElementById('linesSec1').innerText
        + document.getElementById('linesSec2').innerText;
    linesData = linesData.split(".");
    linesIndexMax = linesData.length;

    dataIndex = 0;
    newHTMLData = "";
    for(i=0 ; i<textData1.length-1 ; i++)
    {
        newHTMLLine = "<a onclick='speakLine(" + dataIndex + ")'>" + textData1[i] + ". </a>";
        newHTMLData += newHTMLLine;
        dataIndex++ ;
    }
    document.getElementById('linesSec1').innerHTML = newHTMLData;
    newHTMLData = "";
    for(i=0 ; i<textData2.length-1 ; i++)
    {
        newHTMLLine = "<a onclick='speakLine(" + dataIndex + ")'>" + textData2[i] + ". </a>";
        newHTMLData += newHTMLLine;
        dataIndex++;
    }
    document.getElementById('linesSec2').innerHTML = newHTMLData;
}

function speakLine(iIndex) {
    googleSpeak(linesData[iIndex]);
}

function speakLines() {
    googleSpeak(linesData[linesIndex]);
    let aud = document.getElementById("googleSpeak");
    aud.onended = function() {
        linesIndex++;
        if(linesIndex<linesIndexMax) {
            googleSpeak(linesData[linesIndex]);
        }
        else {
            this.onended = null;
            linesIndex = 0;
        }
    };
}