function goToHome() {
    document.location = "/";
}

async function changeLang() {
    let res = await fetch("/lang", {
        method: "GET",
    });
    location.reload();
}

document.getElementById("lang").addEventListener("click", changeLang);

document.getElementById("home").addEventListener("click", goToHome);
