#! /usr/bin/env node
import inqurer from "inquirer";
const answer = await inqurer.prompt([{ message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the oprators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multipilication", "Division"],
    },
]);
console.log(answer);
//  condintional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multipilication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
