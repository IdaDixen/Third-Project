const fs = require("fs");

const words = fs.readFileSync("all-words.txt", "utf8").split(/\r?\n/);

const filteredWords = words
  .map((word) => word.trim())
  .filter((word) => word.length === 5 && /^\p{L}+$/u.test(word));

fs.writeFileSync("5-letter-words.txt", filteredWords.join("\n"), "utf8");

console.log(`${filteredWords.length} words saved.`);
