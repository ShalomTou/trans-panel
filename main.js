function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}

checkSession();

function checkSession() {
    var c = getCookie("visited");
    if (c === "yes") {
        //  alert("Welcome back!");
    } else {
        setCookie("visited", "yes", 365);
        //  alert("Check the Question mark to understend better how its works");
        firstTimeDialog()
    }
}


function firstTimeDialog() {

    let body = document.querySelector(`body`)
    let container = document.querySelector(`.container-fluid`)
    container.style = "opacity:.2;"
    let dialog = document.createElement(`div`)
    dialog.innerHTML = "<button type='button' id='close' onclick='closeDialog()' class='btn btn-danger float-left'>x</button></button></button><h1>First time?</h1><p class='fs-3'>Hi, welcome to the transcriptioners platform :)<br>If you want to understend better how does it work you can click on the question mark at the left side of the website.<br>Totally lost? contact the support at <code>support</code></p>"
    dialog.id = "dialog"
    body.insertBefore(dialog, body.firstChild)
}

function closeDialog() {
    let container = document.querySelector(`.container-fluid`)
    document.querySelector('#dialog').style.display = 'none'
    container.style = "opacity:1;"


}