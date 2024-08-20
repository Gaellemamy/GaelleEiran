let activeMode = "";
let rotation = 0;
const full = 360;
const low = 0;
const ibumoso = 270;
const iburyo = 90;
const hasi = 180;
const hejuru = 0;

ob = document.getElementById("oneButton")
tb1 = document.getElementById("twoButton1")
tb2 = document.getElementById("twoButton2")
bi = document.getElementById("babyImg");
bh = document.getElementById("bighead");

const useonesoftbutton = "u1sb";
const usetwosoftbutton = "u2sb";
const useonehardbutton = "u1hb";
const usetwohardbutton = "u2hb";
const usefourhardbutton = "u4hb";

function changeMode(mode) {
    activeMode = mode
    window.focus()
    if(document.activeElement){
        document.activeElement.blur()
    }
    if (activeMode == useonesoftbutton) {
        tb1.style.display = "none";
        tb2.style.display = "none";
        ob.style.display = "block";
    } else if (activeMode == usetwosoftbutton) {
        ob.style.display = "none";
        tb1.style.display = "block";
        tb2.style.display = "block";
    } else if (activeMode == useonehardbutton) {
        ob.style.display = "none";
        tb1.style.display = "none";
        tb2.style.display = "none";
    } else if (activeMode == usetwohardbutton) {
        ob.style.display = "none";
        tb1.style.display = "none";
        tb2.style.display = "none";
    } else if (activeMode == usefourhardbutton) {
        ob.style.display = "none";
        tb1.style.display = "none";
        tb2.style.display = "none";
    }
}

function OnekeyRotator() {
    rotation == full ? (rotation = 90) : rotation += 90;
    bi.style.transform = `rotate(${rotation}deg)`;
    bh.innerText = `IKEREKEZO: ${rotation} DEGREES`;
}

function ImageRotator(direction) {
    if (direction == "imbere") {
        rotation == full ? (rotation = full) : rotation += 90;
    } else {
        rotation == low ? (rotation = low) : rotation -= 90;
    }
    bi.style.transform = `rotate(${rotation}deg)`;
    bh.innerText = `IKEREKEZO: ${rotation} DEGREES`;
}
function ImgDirection(direction) {
    if (direction == "ibumoso") {
        rotation = ibumoso;
    } else if(direction == "hejuru"){
        rotation = hejuru;
    }else if(direction == "iburyo"){
        rotation = iburyo;
    }else if(direction == "hasi"){
        rotation = hasi;
    }
    bi.style.transform = `rotate(${rotation}deg)`;
    bh.innerText = `${direction}: ${rotation} DEGREES`;
}

// Function to handle the arrow key press
function handleArrowKeyPress(event) {
    if (activeMode == useonehardbutton) {
        if (event.key == 'ArrowRight') {
            OnekeyRotator();
        }
    } else if (activeMode == usetwohardbutton) {
        switch (event.key) {
            case 'ArrowLeft':
                ImageRotator("inyuma");
                break;
            case 'ArrowRight':
                ImageRotator("imbere");
                break;
            default:
                break;
        }
    } else if (activeMode == usefourhardbutton) {
        // Check which key was pressed
        switch (event.key) {
            case 'ArrowLeft':
                ImgDirection("ibumoso");
                break;
            case 'ArrowRight':
                ImgDirection("iburyo");
                break;
            case 'ArrowUp':
                ImgDirection("hejuru");
                break;
            case 'ArrowDown':
                ImgDirection("hasi");
                break;
            default:
                break;
        }
    }
}

// Add the event listener to the document
document.addEventListener('keydown', handleArrowKeyPress);
