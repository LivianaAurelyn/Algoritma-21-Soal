const prompt = require("prompt-sync")({sigint: true})
console.log("==============================")
console.log(" => RUMUS BOLA")
console.log("==============================")

const PHI = 3.14
let r = Number(prompt("Jari Jari : "))
let V = 4/3 * PHI * r**3 
let L = 4 * PHI * 2**2

console.log(` Volume : ${V.toFixed(0)}`)
console.log(` Luas Permukaan : ${L.toFixed(0)}`)