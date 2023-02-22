function lower(el) {
    var str = el.value;
    el.value = str.toLowerCase();
}

function createMessage() {
    document.getElementById("result").style.display = "inline";
    document.getElementById("word1").innerHTML =
        document.getElementById("noun").value;
    document.getElementById("word2").innerHTML =
        document.getElementById("noun1").value;
    document.getElementById("word3").innerHTML =
        document.getElementById("noun2").value;
    document.getElementById("word4").innerHTML =
        document.getElementById("liquid").value;
    document.getElementById("word5").innerHTML =
        document.getElementById("verb").value;

    lower(document.getElementById("noun"));
    lower(document.getElementById("noun1"));
    lower(document.getElementById("noun2"));
    lower(document.getElementById("liquid"));
    lower(document.getElementById("verb"));
}

function goAgain() {
    location.reload();
    return false;
}