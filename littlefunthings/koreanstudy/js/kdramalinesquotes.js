function kakaoSpeakGetData(speakText) {
    return new Promise((resolve, reject) => {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "https://kakaoi-newtone-openapi.kakao.com/v1/synthesize");
            xhr.responseType = "blob";
            xhr.setRequestHeader("Authorization", "d3cb4a2a5826dd35d794c2e14a2afd15");
            xhr.setRequestHeader("Content-type", "application/xml");
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
            xhr.send("<speak>" + speakText + "</speak>");
        } catch (err) {
            reject(err.message);
        }
    });
}

function kakaoSpeak(speakText) {
    kakaoSpeakGetData(speakText)
        .then(
            (result) => { 
                // console.log(result);
                document.getElementById('kakaoSpeak').src = window.URL.createObjectURL(result);
            },
            (error) => { 
                console.log(error);
            }           
        );
}

function loadQuotesData(dramaid) {
    return new Promise((resolve, reject) => {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "./data/" + dramaid + ".json");
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

function onload() {
    loadQuotesData("0008")
        .then(
            (result) => { 
                // console.log(result);
                if (result!="")
                {
                    quotesList = JSON.parse(result);
                    newHTMLData = "<div class='img1' style='background-image: url(" + quotesList.image1 + ");'></div><div class='story'><div class='img2' style='background-image: url(" + quotesList.image1 + ");'></div><h2>" + quotesList.title + "</h2><h3>" + quotesList.info + "</h3><p id='linesSec1'>" + quotesList.lines[0].linesSec1 + "</p><P id='linesSec2'>" + quotesList.lines[0].linesSec2 + "</P><button onclick='speakLines()'>Listen</button></br><center><a href='https://developers.kakao.com/docs/latest/ko/voice/common' target='kakaotts'><img src='./images/voice_logo.png' width='350'></a></center><br/></div>";
                    document.getElementById('databox').innerHTML = newHTMLData;
                    renderQuotes();
                }
            },
            (error) => { 
                console.log(error);
                return "";
            }           
        );
}

function renderQuotes() {
    textData2 = document.getElementById('linesSec2').innerText;
    textData2 = textData2.match(/[^\r\n]+/g);

    linesIndex = 0;
    linesIndexMax = textData2.length;
    linesData = textData2;

    newHTMLData = "";
    for(i=0 ; i<linesIndexMax ; i++)
    {
        newHTMLLine = "<a onclick='kakaoSpeak(\"" + linesData[i] + "\")'>" + linesData[i] + "</a></br>";
        newHTMLData += newHTMLLine;
    }
    document.getElementById('linesSec2').innerHTML = newHTMLData;
}

function speakLines() {
    kakaoSpeak(linesData[linesIndex]);
    let aud = document.getElementById("kakaoSpeak");
    aud.onended = function() {
        linesIndex++;
        if(linesIndex<linesIndexMax) {
            kakaoSpeak(linesData[linesIndex]);
        }
        else {
            this.onended = null;
            linesIndex = 0;
        }
    };
}