import * as readline from 'readline';
const {createInterface} = require("readline");
let rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter variable: ",
    (input) => {
        console.log("Variable: "+input);
        rl.close();
    }
)