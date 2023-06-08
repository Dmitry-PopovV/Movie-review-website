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

document.getElementById("confirm").addEventListener("click", updateRev);
