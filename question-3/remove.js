const fs = require("fs");

if (fs.existsSync("question-3/Logs")) {
  fs.readdirSync("question-3/Logs/").forEach((file) => {
    // delte the files
    fs.unlinkSync(`question-3/Logs/${file}`);

    // print to console
    console.log(`delete files... ${file}`);
  });

  // delete the folder after the loop
  fs.rmdirSync("question-3/Logs");

  // print to console
  console.log("Logs directory deleted");
} else {
  console.log("There's no logs directory");
}
