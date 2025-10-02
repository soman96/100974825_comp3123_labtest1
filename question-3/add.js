const fs = require("fs");

if (!fs.existsSync("Logs")) {
  // create the logs directory
  fs.mkdirSync("question-3/Logs");

  // add 10 log files
  for (let i = 0; i < 10; i++) {
    let file = `question-3/Logs/log${i}.txt`;
    fs.writeFileSync(file, `Log${i}`);
    console.log(`log${i}.txt`);
  }
} else {
  console.log("Logs directory already exists");
}
