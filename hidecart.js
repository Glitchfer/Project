const msct = document.getElementsByClassName("mascot")[0]; //<--- jika get by classname harus disertakan indexnya
const wish = document.getElementsByClassName("wishlist")[0];
const chkot = document.getElementsByClassName("checkout")[0];
const selected = document.getElementsByClassName("selected");
let pick = document.getElementsByClassName("a1");


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

    // nonaktifkan semua ceklis
    for (let i = 0; i <= cartCount - 1; i++) {
        selected[i].style.display = "none";
    }
    badge.innerHTML = 0;
}


////////////////////////////////////////////////////////////////////////
// menampilkan ceklis dan menghilangkan ceklis ketika menu dipencet
// note.1; 
// hal-hal yg belum dapat dilakukan:
// 1.mengembalikan menu yang dipilih/ tidak jadi dipilih menjadi sebuah angka
// 2.if menu dipilih maka cart +1, if menu tidak jadi dipilih maka cart -1
// note.2;
// menggunakan metode ini tidak berfungsi ketika tombol cancel ditekan ataupun
// menu wishlist & checkout terlebihdahulu di hilangkan 
const select = document.querySelectorAll('.selected')
for (let y = 0; y <= cartCount - 1; y++) {
    select[y].classList.add('dark')
}
const sel = document.querySelectorAll('.dark')
for (let x = 0; x <= cartCount - 1; x++) {

    pick[x].onclick = function () {
        sel[x].classList.toggle('dark');
    }
}

// // cara untuk cek value css
// console.log(selected[0].style.display === "");
// // alert(typeof selected[0].style.display)