// RGB Colors with JS by Mr. M

// Variables
let redInEl = getElementById("redIn");
let greenInEl = getElementById("greenIn");
let blueInEl = getElementById("blueIn");
let rgbStringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");



// Event Listener
redInEl.addEventListener("input", rgbPreview)
greenInEl.addEventListener("input", rgbPreview)
blueInEl.addEventListener("input", rgbPreview)

// Event Function
function rgbPreview() {
    
// Input
let rValue = +redInEl.value;
let gValue = +greenInEl.value;
let bValue = +blueInEl.value;
   
// Validate Colors
if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
    } else if (rValue > 255) {
      rValue = 255;
      redInEl.value = 255;
    }

    if (gValue < 0) {
        gValue = 0;
        greenInEl.value = 0;
        } else if (gValue > 255) {
          gValue = 255;
          greenInEl.value = 255;
        }

        if (bValue < 0) {
            bValue = 0;
            blueInEl.value = 0;
            } else if (bValue > 255) {
              bValue = 255;
              blueInEl.value = 255;
            }

// Processing
    let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";
    
    // Output
rgbStringOutEl.innerHTML = rgbString;
displayEl.style.background = rgbString;


}