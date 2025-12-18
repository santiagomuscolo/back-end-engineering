const fs = require("fs");

console.log("1");
fs.readFile("test.txt", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File:" + data);
  }
});
console.log("2");
