if (window.location.hash != "#undefined") {
    var msg = "According to our server reported, the page<br>";
    msg += "<span id=\"url\">" + window.location.hash.substring(1) + "</span>";
    msg += " <br>had been marked as danger by PBP Network.";
    document.getElementById("report").innerHTML = msg;
} else {
    document.getElementById("report").innerHTML = "Unknown State";
}