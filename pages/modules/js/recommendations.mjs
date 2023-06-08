async function getRecommendations() {
    let res = await fetch("/rec", {
        method: "GET",
    });
    return await res.json();
}

getRecommendations()
    .then((val) => {
        let str = '';
        val.forEach((el) => { str += '<div id="user-'+ el[1] +'" class="col card"><div class="row g-0"><div class="col-auto"><img class="img-fluid rounded-start userImg" src="'+ el[0] +'"></div><div class="col">'+ el[1] +'</div></div></div>';});
        document.getElementById('recommendations').innerHTML = str;
        val.forEach((el) => {document.getElementById("user-"+el[1]).addEventListener("click", ()=>{document.location = "/users/"+el[1];});});
    });
