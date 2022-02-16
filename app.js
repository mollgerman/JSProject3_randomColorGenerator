/*Declare constants and variables*/

const btn = document.getElementById("bton");
const rgb_btn = document.getElementById("rgb");
const hex_btn = document.getElementById("hex");
const copy = document.getElementById("copy");
const modeText = document.querySelector(".mode");
const color = document.querySelector(".color");

let mode = 'RGB';
let toCopy = 'rgb(105,105,90)';


/*Add event listeners for every button */

rgb_btn.addEventListener("click", function(){  /*RGB button*/
    mode = 'RGB';
    modeText.textContent = 'Mode: ' + mode;
});

hex_btn.addEventListener("click", function(){  /*HEX button*/
    mode = 'HEX';
    modeText.textContent = 'Mode: ' + mode;
    
});

btn.addEventListener("click", function(){  /*Generate random color button*/
    if (mode === 'RGB'){
        randomRGBColor();
    }
    else {
        randomHexColor();
    }
});

copy.addEventListener("click", function(){  /*Copy to clipboard button*/
    copyToClipboard(toCopy);
});


/*Declare all functions*/

function randomRGBColor() {  /*Get random RGB color*/
    let RGB = [];
    for (let i = 0; i < 3; i++) {
        RGB.push(Math.floor(Math.random() * 255));
    }
    let RGBColor = 'rgb(' + RGB.join(',') + ')';
    document.body.style.backgroundColor = RGBColor; 
    toCopy = RGBColor;
    color.textContent = `Color: (${RGB.join(',')})`; 
    return RGB;
}

function randomHexColor() {
    let hex = [];
    let RGB = [];
    for (let i = 0; i < 3; i++) {
        RGB.push(Math.floor(Math.random() * 255));
    }
    for (let num in RGB){
        hex[num] = RGB[num].toString(16);
    }
    let hexColor = '#' + hex[0] + hex[1] + hex[2];
    document.body.style.backgroundColor = hexColor;
    toCopy = hexColor; 
    color.textContent = 'Color: ' + hexColor; 
    return hexColor;
    console.log(hexColor)
}

function copyToClipboard(toCopy) {
    /*Extracted from w3schools.com*/

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(toCopy);

    /* Alert the copied text */
    alert("Copied the text: " + toCopy);

}
