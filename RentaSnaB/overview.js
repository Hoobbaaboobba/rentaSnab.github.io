var contentcont1 = document.getElementById("contentcont1");
var contentcont2 = document.getElementById("contentcont2");
var contentcont3 = document.getElementById("contentcont3");
var img = document.getElementById("img");
var border = document.getElementById("orangelinebottom")

function openHTML() {
    contentcont1.style.display = "block";
    contentcont2.style.display = "none";
    img.style.display = "none";
    border.style.marginLeft = "20px";
    border.style.width = "104px";
}

function openCSS() {
    contentcont1.style.display = "none";
    contentcont2.style.display = "block";
    img.style.display = "block";
    border.style.marginLeft = "144px";
    border.style.width = "79px";
}
