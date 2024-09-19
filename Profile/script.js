
var count = 0;

function Sidebar(){
    count = count + 1;
    if ((count%2)==0){
        closeSidebar()
    }
    else{
        openSidebar()
    }
}
function openSidebar() {
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("center").style.marginLeft = "20%";
    document.getElementById("footer").style.marginLeft = "20%";
    document.getElementById("button").innerHTML="☰ Close Sidebar";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0%";
    document.getElementById("center").style.marginLeft = "0%";
    document.getElementById("footer").style.marginLeft = "0%";
    document.getElementById("button").innerHTML="☰ Open Sidebar";
}

function edit(X) {
    let userInput = prompt("Input");

    if (userInput !== null && userInput.trim() !== "") {
        document.getElementById(X).textContent = userInput;

        localStorage.setItem(X + "Content", userInput);
    }
}

function loadStoredContent() {
    const Y = ["text_ign", "text_fn", "text_ln"];
    Y.forEach(X => {
        let storedContent = localStorage.getItem(X + "Content");
        if (storedContent !== null) {
            document.getElementById(X).textContent = storedContent;
        }
        else{
            document.getElementById('text_ign').textContent = "Lanio";
            document.getElementById('text_fn').textContent = "Yassine";
            document.getElementById('text_ln').textContent = "Bouajina";
        }
    });
}
function addFriend(){
    alert("Action Not Allowed ; User is in quarantine for thinking against PlorfCorp™ Interests");
}

window.onload = loadStoredContent;

