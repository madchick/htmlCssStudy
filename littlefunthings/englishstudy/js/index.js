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

function getArticleList() {
    loadXHR()
        .then(
            (result) => { 
                // console.log(result);
                renderArticleList(result);
            },
            (error) => { 
                console.log(error);
                return "";
            }           
        );
}

function renderArticleList(jsonData) {
    if (jsonData!="")
    {
        articleList = JSON.parse(jsonData);
        newHTMLData = "";
        for(i=0 ; i<articleList.length ; i++)
            newHTMLData += "<div class='u-container-style u-grey-10 u-list-item u-repeater-item u-video-cover u-list-item-1'><a href='dearabby.html?id=" + articleList[i].articleid + "'><div class='u-container-layout u-similar-container u-valign-top u-container-layout-1'><h2 class='u-custom-font u-text u-text-default u-text-1'>" + articleList[i].title + "</h2><p class='u-text u-text-2'>" + articleList[i].desc + "</p><p class='u-text u-text-2'>" + articleList[i].info + "</p><div class='u-border-1 u-border-grey-dark-1 u-expanded-width u-line u-line-horizontal u-line-1'></div></div></a></div>";
        document.getElementById('articleList').innerHTML = newHTMLData;
    }
}