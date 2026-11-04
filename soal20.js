const prompt = require('prompt-sync')();

let input = prompt("Masukkan satu huruf (A-Z): ");


if (input.length === 1 && input.match(/[a-zA-Z]/)) {
    let huruf = input.toLowerCase();

    if (huruf === 'a' || huruf === 'e' || huruf === 'i' || huruf === 'o' || huruf === 'u') {
        console.log(input + " adalah huruf Vokal");
    } else {
        console.log(input + " adalah huruf Konsonan");
    }
} else {
    console.log("Bukan berupa huruf atau input lebih dari 1 karakter!");
}
