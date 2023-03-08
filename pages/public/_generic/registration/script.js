function goToHome() {
    document.location = "/";
}

async function tryRegistration() {
    const bodyData = {
        login: document.getElementById("login").value,
        password: document.getElementById("password").value,
        password2: document.getElementById("password2").value
    };
    let res = await fetch("/reg", {
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
        goToHome();
    }
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

document.getElementById("home").addEventListener("click", goToHome);

document.getElementById("submit").addEventListener("click", tryRegistration);

document.getElementById("lang").addEventListener("click", changeLang);
