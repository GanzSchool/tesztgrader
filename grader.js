const fs = require("fs");

// Beolvassuk a diák HTML fájlját
const html = fs.readFileSync("index.html", "utf8");

// Ellenőrizzük, hogy a <title> dolgozatproba </title> benne van-e
if (html.includes("<title>dolgozatproba</title>")) {
  console.log("✅ Helyes: a <title> jó → Ötös!");
  process.exit(0); // siker
} else {
  console.log("❌ Hibás: a <title> nincs jól beállítva → Egyes.");
  process.exit(1); // hiba
}