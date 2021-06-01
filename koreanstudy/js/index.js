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
    if (jsonData!="")
    {
        dramaList = JSON.parse(jsonData);
        newHTMLData = "";
        for(i=0 ; i<dramaList.length ; i++)
            newHTMLData += "<div class='item-" + i + "'><a href='kdramalinesquotes.html' class='card'><div class='thumb' style='background-image: url(" + dramaList[i].image + ");'></div><article><h1>" + dramaList[i].title + "</h1><p>" + dramaList[i].desc + "</p><span>" + dramaList[i].desc2 + "</span></article></a></div>";
        document.getElementById('kdramalist').innerHTML = newHTMLData;
    }
}