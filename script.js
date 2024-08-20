let rotation = 0;
const full = 360;
const low = 0;

bi = document.getElementById("babyImg");
bh = document.getElementById("bighead");


function changeMode(value){
    alert(value)
}

function OnekeyRotator(){
    rotation == full ? (rotation = 90) : rotation+=90;
    bi.style.transform = `rotate(${rotation}deg)`;
    bh.innerText = `IKEREKEZO: ${rotation} DEGREES`;
}

function ImageRotator(direction) {
    if (direction == "imbere") {
        rotation == full ? (rotation = full) : rotation +=90;
    } else {
        rotation == low ? (rotation = low) : rotation -=90;
    }
    bi.style.transform = `rotate(${rotation}deg)`;
    bh.innerText = `IKEREKEZO: ${rotation} DEGREES`;
}