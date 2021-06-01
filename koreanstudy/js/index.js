function loadXHR() {
    return new Promise((resolve, reject) => {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "./data/index.json");
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

function onload() {
    loadXHR()
        .then(
            (result) => { 
                // console.log(result);
                renderDramaList(result);
            },
            (error) => { 
                console.log(error);
                return "";
            }           
        );
}

function renderDramaList(jsonData) {
    console.log(jsonData);
    if (jsonData!="")
    {
        dramaList = JSON.parse(jsonData);
        console.log(dramaList);
        newHTMLData = "<div class='item-1'><a href='kdramalinesquotes.html' class='card'><div class='thumb' style='background-image: url(./images/0101.png);'></div><article><h1>It’s Okay to Not Be Okay</h1><p>The New York Times named this romantic drama series one of The Best International Shows of 2020.</p><span>2020</span></article></a></div>";
        document.getElementById('kdramalist').innerHTML = newHTMLData;
    }
}