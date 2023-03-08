function goToHome() {
    document.location = "/";
}

async function getReviews() {
    let res = await fetch("/myRev", {
        method: "GET"
    });
    return await res.json();
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

getReviews()
    .then((val) => {
        let str = '';
        const lang = String(document.location.pathname).split('/')[1];
        let buttonText;
        if (lang == "en") {
            buttonText = "Edit";
        } else if(lang == "ru") {
            buttonText = "Изменить";
        }
        val.forEach((el, i) => { str += '<div class="col"><div class="card"><div class="card-header">' + el[0] + '</div><div>' + el[1] + '</div><div class="card-footer">' + el[2] + '/10</div></div><a id="btn-'+ i +'" class="btn btn-primary">'+ buttonText +'</a></div>' });
        document.getElementById('reviews').innerHTML = str;
        val.forEach((el, i) => {document.getElementById("btn-"+i).addEventListener("click", ()=>{document.location = "/editRev/"+el[3];});});
    });

function unlog() {
    document.location = "/unlog";
}

async function changeLang() {
    let res = await fetch("/lang", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ path: document.location.pathname })
    });
    document.location = await res.text();
}

document.getElementById("unlog").addEventListener("click", unlog);

document.getElementById("lang").addEventListener("click", changeLang);

document.getElementById("home").addEventListener("click", goToHome);

document.getElementById("newRev").addEventListener("click", ()=>{document.location ="/editRev/new"});
