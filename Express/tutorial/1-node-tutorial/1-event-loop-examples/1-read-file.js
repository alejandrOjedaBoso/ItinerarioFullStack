const { readFile } = require("fs");

console.log("Started a first task");
CHECK FILE PATH!!!
readFile("./package.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  console.log("Comeplete the first task");
});
console.log("Started a next task");