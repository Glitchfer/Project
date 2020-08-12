const msct = document.getElementsByClassName("mascot")[0]; //<--- jika get by classname diikuti indexnya
const wish = document.getElementsByClassName("wishlist")[0];
const chkot = document.getElementsByClassName("checkout")[0];
const selected = document.getElementsByClassName("selected");

//1. cari class HTML yang isinya akan berubah kapanpun, dan masukkan dalam sebuah variabel
const badge = document.getElementsByClassName("badge-info")[0];

//2. buat variabel yang nilainya akan merubah isi dari point 1
let code;
//   a. buat proses dimana nilai dari variabel ini akan terisi berdasarkan
//      selected yang aktif (menu yg terceklis = (style.display = true))
const cartCount = selected.length;
code = cartCount;
//      o buat proses pengecekkan index selected yang aktif menggunakan looping
//        hasilnya akan mereturn jumlah index yang displaynya aktif

//3. buat fungsi yang nilai parameternya (argumentnya) isi dari point 1 = point 2
hideShow(badge.innerHTML = code);

//3. buat kondisi dimana;
//  a. jika nilai dari parameter lebih kecil dari 1 maka
//     class maskot akan muncul dan class wishlist serta class checkout akan hilang
//  b. jika nilai dari parameter lebih besar dari 1 maka
//     class maskot akan hilang dan class wishlist serta class checkout akan muncul

function hideShow(number) {

    if (number < 1) {
        msct.style.display = "block";

        wish.style.display = "none";

        chkot.style.display = "none";

    } else {
        msct.style.display = "none";

        wish.style.display = "block";

        chkot.style.display = "block";
    }
}

/////////////////////////////////////////////////////////////////////
//get button cancel to hide the selected menu
const cancel = document.getElementsByClassName("cancelBtn")[0];
//  when the user click on cancel button, hide selected item
cancel.onclick = function () {
    msct.style.display = "block";

    wish.style.display = "none";

    chkot.style.display = "none";

    // struktur looping buat cek display selected none / bukan
    // var indexList = [];

    // for (nilaiAwal = 0; nilaiAwal <= filtAkhir - 1; nilaiAwal++) {

    //     indexList[nilaiAwal] = saring[nilaiAwal];
    // }

    selected[0].style.display = "none";
    selected[1].style.display = "none";
    selected[2].style.display = "none";
    badge.innerHTML = 0;
}