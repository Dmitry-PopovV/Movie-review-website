function goToHome() {
    document.location = "/";
}

async function getReview() {
    let res = await fetch("/selRev", {
        method: "GET"
    });
    return await res.json();
}

let reviewID;

getReview()
    .then((val) => {
        document.getElementById('filmName').value = val[0];
        document.getElementById('revText').innerHTML = val[1];
        document.getElementById('revRating').value = val[2];
        reviewID = val[3];
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
        body: JSON.stringify({ path: document.location.pathname })
    });
    document.location = await res.text();
}

async function updateRev() {
    const bodyData = {
        name: document.getElementById("filmName").value,
        text: document.getElementById("revText").value,
        rating: document.getElementById("revRating").value,
    };
    let res = await fetch("/updateRev", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    });
    if (!res.ok) {
        let errorText = await res.text();
        document.getElementById("error").innerHTML = errorText;
    } else {
        goToMy();
    }
}

document.getElementById("profile").addEventListener("click", goToMy);

document.getElementById("lang").addEventListener("click", changeLang);

document.getElementById("home").addEventListener("click", goToHome);

document.getElementById("confirm").addEventListener("click", updateRev);
