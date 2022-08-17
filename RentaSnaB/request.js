var content1 = document.getElementById("contentreq1");
var content2 = document.getElementById("contentreq2");
var orange1 = document.getElementById("orangeborderbottom1")
var orange2 = document.getElementById("orangeborderbottom2")


function openReq1() {
    content1.style.display = "block";
    content2.style.display = "none";
    orange1.style.display = "block";
    orange2.style.display = "none";
}

function openReq2() {
    content1.style.display = "none";
    content2.style.display = "block";
    orange1.style.display = "none";
    orange2.style.display = "block";
}
