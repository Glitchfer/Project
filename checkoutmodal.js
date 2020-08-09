// first modal
//Get the modal
var chkModal = document.getElementById("checkoutModal");

// Get the button that opens the modal
var chkBtn = document.getElementById("checkout");
// Get the <span> element that closes the modal
// var spann = document.getElementsByClassName("close")[0];
var span = document.getElementsByClassName("exit")[0];

// When the user clicks on the button, open the modal
chkBtn.onclick = function () {
    checkoutModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// spann.onclick = function () {
//     modall.style.display = "none";
// }
span.onclick = function () {
    checkoutModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == checkoutModal) {
        checkoutModal.style.display = "none";
    }
}