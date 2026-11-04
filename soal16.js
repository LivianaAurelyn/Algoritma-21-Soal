const prompt = require('prompt-sync')();

let juara = parseInt(prompt("Masukkan peringkat juara (1/2/3): "));

switch (juara) {
    case 1:
        console.log("Selamat Anda Juara Utama");
        break;
    case 2:
        console.log("Selamat Anda Runner Up");
        break;
    case 3:
        console.log("Selamat Anda Juara Ketiga");
        break;
    default:
        console.log("Inputan Anda Salah!");
        break;
}
