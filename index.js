import fs, { writeFileSync } from "fs" 
let ordentexto =fs.readFileSync("Cuento/orden.txt", "utf-8")
let partes = ordentexto.split("\r\n")
let orden = [71, 1, 2, 116, 3, 84, 4, 5, 81, 74, 6, 7, 8, 93, 68, 9, 104, 10, 65, 11, 136];
let texto = "";

for (let i = 0; i < partes.length; i++){
    texto = texto + fs.readFileSync("Cuento/parte" + partes[i] + ".txt", "utf8") + "\n";
}
fs.writeFileSync("Cuento/La autopista del sur.txt", texto, "utf-8");