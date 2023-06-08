async function tryEnter() {
    const bodyData = {
        login: document.getElementById("login").value,
        password: document.getElementById("password").value,
    };
    let res = await fetch("/enter", {
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

document.getElementById("submit").addEventListener("click", tryEnter);
