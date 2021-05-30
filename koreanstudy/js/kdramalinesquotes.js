function loadXHR(speakText) {
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
    loadXHR(speakText)
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