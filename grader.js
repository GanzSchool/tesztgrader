const fs = require("fs");

// Beolvassuk a diák HTML fájlját
const html = fs.readFileSync("index.html", "utf8");

// Alap pontszám
let points = 0;

// Ellenőrzés
if (html.includes("<title>dolgozatproba</title>")) {
    console.log("✅ A <title> pontosan 'dolgozatproba' → 5 pont");
    points = 5;
    process.exit(0); // siker
} else if (html.includes("<title>") && html.includes("</title>")) {
    console.log("➖ Van <title>, de nem megfelelő → 2 pont");
    points = 2;
    process.exit(0); // siker (részpontszám)
} else {
    console.log("❌ Nincs <title> → 0 pont");
    points = 0;
    process.exit(1); // hibás
}
