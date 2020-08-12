// first modal
//Get the modal
var chkModal = document.getElementById("checkoutModal");

// Get the button that opens the modal
var chkBtn = document.getElementById("checkout");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("exit")[0];

// When the user clicks on the button, open the modal
chkBtn.onclick = function () {
    chkModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    chkModal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == chkModal) {
//         chkModal.style.display = "none";
//     }
// }