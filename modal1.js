// first modal
//Get the modal
var modall = document.getElementById("addModal");

// Get the button that opens the modal
var btnn = document.getElementById("addClick");
var btnnn = document.getElementById("addclk");

// Get the <span> element that closes the modal
// var spann = document.getElementsByClassName("close")[0];
var cancell = document.getElementsByClassName("canc")[0];

// When the user clicks on the button, open the modal
btnn.onclick = function () {
    modall.style.display = "block";
}
btnnn.onclick = function () {
    modall.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// spann.onclick = function () {
//     modall.style.display = "none";
// }
cancell.onclick = function () {
    modall.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modall) {
//         modall.style.display = "none";
//     }
// }