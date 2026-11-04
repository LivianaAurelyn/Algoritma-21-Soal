const prompt = require("prompt-sync")({sigint: true})
let hargaMakanan = Number(prompt("Masukan Harga Makanan : "))

let P = hargaMakanan*0.10
let F = hargaMakanan*0.05
let T = hargaMakanan+P+F

console.log(` Harga Makanan : ${hargaMakanan}`)
console.log(` Pajak : ${P}`)
console.log(` Fee : ${F}`)
console.log(` Total harga yang harus di bayar : ${T}`)