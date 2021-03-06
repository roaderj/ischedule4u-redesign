// Check if there is an user logged in
function checkCookie() {
    var email=getCookie("email");
    // if noone is logged in, go to login page
    if (email=="") {
        window.location = "/login";
    }
}

// Get the name of the user
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}