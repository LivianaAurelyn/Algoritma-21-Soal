const prompt = require("prompt-sync")({sigint : true})

let kode = prompt("Masukkan 5 digit kode:");

if (kode === "78821") {
    console.log("You are authenticated");
} else {
    console.log("You have no access");
}
