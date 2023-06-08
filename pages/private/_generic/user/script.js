async function getReviews() {
    let res = await fetch("/rev", {
        method: "GET"
    });
    return await res.json();
}

async function getSelUser() {
    let res = await fetch("/selUser", {
        method: "GET"
    });
    return await res.json();
}

getSelUser()
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
        console.log("2>", val);
        val.forEach((el, i) => { str += '<div class="col"><div class="card"><div class="card-header">' + el[0] + '</div><div>' + el[1] + '</div><div class="card-footer">' + el[2] + '/10</div></div></div>' });
        document.getElementById('reviews').innerHTML = str;
    });

