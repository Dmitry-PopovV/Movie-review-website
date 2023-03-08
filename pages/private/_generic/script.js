function goToHome() {
    document.location = "/";
}

async function getRecommendations() {
    let res = await fetch("/rec", {
        method: "GET",
    });
    return await res.json();
}

getRecommendations()
    .then((val) => {
        let str = '';
        console.log(val);
        val.forEach((el, i) => { str += '<div id="user-'+ el[1] +'" class="col card"><div class="row g-0"><div class="col-auto"><img class="img-fluid rounded-start userImg" src="'+ el[0] +'"></div><div class="col">'+ el[1] +'</div></div></div>' });
        document.getElementById('recommendations').innerHTML = str;
        val.forEach((el) => {document.getElementById("user-"+el[1]).addEventListener("click", ()=>{document.location = "/user/"+el[1];});});
    });

function goToMy() {
    document.location = '/' + String(document.location.pathname).split('/')[1] + "/my";
}

async function changeLang() {
    let res = await fetch("/lang", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({path: document.location.pathname})
    });
    document.location = await res.text();
}

document.getElementById("profile").addEventListener("click", goToMy);

document.getElementById("lang").addEventListener("click", changeLang);

document.getElementById("home").addEventListener("click", goToHome);
