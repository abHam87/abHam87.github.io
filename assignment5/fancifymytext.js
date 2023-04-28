

function makeBigger() {
    document.getElementById("inputText-1").style.fontSize = "24pt";
}

function makeFancy() {
    //alert("Hello, world")
    const text = document.getElementById("inputText-1");
    text.style.fontWeight = "bold";
    text.style.color = "#0000FF";
    text.style.textDecoration = "underline";
}

function takeFancyOut() {
    //alert("Styles will go away");
    const text = document.getElementById("inputText-1");
    text.style.fontWeight = "24";
    text.style.color = "#000000";
    text.style.textDecoration = "none";
}
function makeNormal() {

    const text = document.getElementById("inputText-1");
    text.style.fontSize = "10pt";
}
function MooChanges() {

    document.getElementById("inputText-1").value = document.getElementById("inputText-1").value.toUpperCase();
    const text = document.getElementById("inputText-1").value;
    const words = text.split(" ");

    const lastWord = words[words.length - 1];
    const suffix = "-Moo";
    words[words.length - 1] = lastWord + suffix;

    for (var i = 0; i < words.length; i++) {
        let word = words[i].trim();
        word += "💙";
        words[i] = word;
        //words[words.length-1] = 
    }
    document.getElementById("inputText-1").value = words.join("");
}