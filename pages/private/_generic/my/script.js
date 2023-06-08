async function getReviewsAndLang() {
    let res1 = await fetch("/myRev", {
        method: "GET"
    });
    let res2 = await fetch("/myLang", {
        method: "GET"
    });
    return {rev: await res1.json(),lang: await res2.json()};
}

async function getMyName() {
    let res = await fetch("/myName", {
        method: "GET"
    });
    return await res.json();
}

getMyName()
    .then((val) => {
        if (val[0] == "@error") {
            document.location = '/';
        } else {
            document.getElementById('userName').innerHTML = val[0];
        }
    });

getReviewsAndLang()
    .then((val) => {
        let str = '';
        let buttonText;
        if (val.lang[0] == "en") {
            buttonText = "Edit";
        } else if(val.lang[0] == "ru") {
            buttonText = "Изменить";
        }
        val.rev.forEach((el, i) => { str += '<div class="col"><div class="card"><div class="card-header">' + el[0] + '</div><div>' + el[1] + '</div><div class="card-footer">' + el[2] + '/10</div></div><a id="btn-'+ i +'" class="btn btn-primary">'+ buttonText +'</a></div>' });
        document.getElementById('reviews').innerHTML = str;
        val.rev.forEach((el, i) => {document.getElementById("btn-"+i).addEventListener("click", ()=>{document.location = "/editRev/"+el[3];});});
    });

function unlog() {
    document.location = "/unlog";
}

document.getElementById("unlog").addEventListener("click", unlog);

document.getElementById("newRev").addEventListener("click", ()=>{document.location ="/editRev/new"});
