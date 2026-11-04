const prompt = require('prompt-sync')();

let bilangan = parseInt(prompt("Masukkan bilangan bulat: "));

if (bilangan % 7 === 0) {
    console.log(bilangan + " adalah kelipatan 7");
} else {
    console.log("Anda belum beruntung");
}
