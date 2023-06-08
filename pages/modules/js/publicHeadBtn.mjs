function goToRegistration() {
    document.location = document.location + "registration";
}

function goToEnter() {
    document.location = document.location +  "enter";
}

document.getElementById("registration").addEventListener("click", goToRegistration);

document.getElementById("enter").addEventListener("click", goToEnter);
