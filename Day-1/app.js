const fs = require("fs");
const depths = fs.readFileSync("input.txt").toString().split("\n");
let counter = 0;
for (let i = 0; i < depths.length; i++) {
  let j = parseInt(depths[i + 1]);
  if (parseInt(depths[i]) < j) {
    counter++;
  }
}
console.log(counter);
