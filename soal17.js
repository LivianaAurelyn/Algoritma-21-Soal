const prompt = require('prompt-sync')();

let totalHarga = parseFloat(prompt("Masukkan total harga barang: "));
let diskon = 0;


if (totalHarga >= 200000) {
    diskon = 0.075 * totalHarga;
}

let totalBayar = totalHarga - diskon;

console.log("Diskon yang didapat: Rp " + diskon);
console.log("Total yang harus dibayar: Rp " + totalBayar);
