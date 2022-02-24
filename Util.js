// RGB Colors with JS by Mr. M

// Event Listener
document.getElementById("preview-btn").addEventListener("click", rgbPreview);

// Event Function
function rgbPreview() {
    
// Input
let rValue = document.getElementById("redIn").value;
let gValue = document.getElementById("greenIn").value;
let bValue = document.getElementById("blueIn").value;
   
// Processing
    let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";
    
    // Output
document.getElementById("rgbStrOut").innerHTML = rgbString;
document.getElementById("display").style.background = rgbString;
}