#! /usr/bin/env node
import inquirer from "inquirer";
// FRIEND CHECKER GAME !!!
let isFriend = await inquirer.prompt([{
        name: "name",
        type: "string",
        message: "Enter your Friend Name:"
    }]);
if (isFriend.name === "Ali" || isFriend.name === "Saad") {
    console.log(`${isFriend.name} is your Friend`);
}
else {
    console.log(`${isFriend.name} is not your Friend`);
}
