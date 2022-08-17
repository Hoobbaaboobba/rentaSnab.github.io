var request = document.getElementById("requestion");
var body = document.getElementById("body");
var close = document.getElementById("btnreq3")

function openRequest() {
    request.style.display = "flex";
    body.style.overflow = "hidden";
}

function closeRequest() {
    request.style.display = "none";
    body.style.overflow = "auto";
}