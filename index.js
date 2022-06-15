/**
 * Read a csv file line by line using nodejs
 */
const readLine = () => {
  const fs = require("fs");
  const csv = require("csv-parser");
  const results = [];
  fs.createReadStream("data.csv")
    .pipe(csv())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      console.log(results);
      const header = Object.keys(results[0]);
      console.log(header); // [ '"down"', 'guard', 'production', 'ought', 'vapor' ]
    });
};

readLine();
