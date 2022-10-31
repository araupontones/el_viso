console.log("hello world");
const fs = require('fs');
const { parse } = require("csv-parse");



fs.createReadStream("../data/colaboradores.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    console.log(row);
  })
