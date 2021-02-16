const child_process = require("child_process");

// commands list
const commands = [
  {
    name: "product-service",
    command: "cd ./product-service && npm run server",
  },
  {
    name: "order-service",
    command: "cd ./order-service && npm run server",
  },
  {
    name: "front-end",
    command: "cd ./front-end && npm start",
  },
];

// run command
function runCommand(command, name, callback) {
  child_process.exec(command, function (error, stdout, stderr) {
    if (stderr) {
      callback(stderr, null);
    } else {
      callback(null, `Successfully executed ${name} ...`);
    }
  });
}

// main calling function
function main() {
  commands.forEach((element) => {
    runCommand(element.command, element.name, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log(res);
      }
    });
  });
}

// call main
main();
