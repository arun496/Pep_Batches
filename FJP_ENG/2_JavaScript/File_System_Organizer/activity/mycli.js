let helpFn = require("./commands/help");
let organizeFn = require("./commands/organize");
let viewFn = require("./commands/view");

let arr = process.argv.slice(2);

let command = input[0];

switch(command) {
    case "view":
        viewFn.view();
        break;
    case "organize":
        organizeFn.organize();
        break;
    default: // help
        helpFn.help();
        break;
}