function googleSpeakGetData(speakText) {
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
    googleSpeakGetData(speakText)
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

function loadArticleData(articleid) {
    return new Promise((resolve, reject) => {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "./data/" + articleid + ".json");
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
            xhr.send();
        } catch (err) {
            reject(err.message);
        }
    });
}

let linesIndex;
let linesIndexMax;
let linesData;

function getArticleData() {
    var Request = function() {  
        this.getParameter = function(name) {  
            var rtnval = '';  
            var nowAddress = unescape(location.href);  
            var parameters = (nowAddress.slice(nowAddress.indexOf('?') + 1,  
                    nowAddress.length)).split('&');  
            for (var i = 0; i < parameters.length; i++) {  
                var varName = parameters[i].split('=')[0];  
                if (varName.toUpperCase() == name.toUpperCase()) {  
                    rtnval = parameters[i].split('=')[1];  
                    break;  
                }  
            }  
            return rtnval;  
        }  
    }  
    var request = new Request();
    var paramValue = request.getParameter('id');

    loadArticleData(paramValue)
        .then(
            (result) => { 
                // console.log(result);
                if (result!="")
                {
                    quotesList = JSON.parse(result);
                    newHTMLData = "<div class='img1' style='background-image: url(" + quotesList.image1 + ");'></div><div class='story'><div class='img2' style='background-image: url(" + quotesList.image1 + ");'></div><h2>" + quotesList.title + "</h2><h3>" + quotesList.info + "</h3><p id='linesSec1'>" + quotesList.lines[0].linesSec1 + "</p><P id='linesSec2'>" + quotesList.lines[0].linesSec2 + "</P><button onclick='speakLines()'>영어로 듣기</button> - <a href=https://cloud.google.com/text-to-speech target='googletts'>powered by google cloud</a><br/></div>";
                    document.getElementById('databox').innerHTML = newHTMLData;
                    renderArticles();
                }
            },
            (error) => { 
                console.log(error);
                return "";
            }           
        );
}

function renderArticles() {
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