var request = document.getElementById("requestion");
var body = document.getElementById("body");
var mark = document.getElementById("sent");
var marks = document.getElementById("sents")
var btndisable = document.getElementById("submot1");
var btndable = document.getElementById("submot");
var btndisables = document.getElementById("submot3");
var btndables = document.getElementById("submot2");
var sent = document.getElementById("submittext3")
var success = document.getElementById('submittext2');
var sents = document.getElementById("submittext6")
var successs = document.getElementById('submittext5');

function closesentRequest() {
    body.style.overflow = "auto";
    mark.style.display = "none";
    btndisable.style.display = "block";
    btndable.style.display = "none";
    sent.style.display = "block";
    success.style.display = "none";
}

function closesentRequests() {
    body.style.overflow = "auto";
    marks.style.display = "none";
    btndisables.style.display = "none";
    btndables.style.display = "block";
    sents.style.display = "block";
    successs.style.display = "none";
}
