#!/usr/bin/evn node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        types: 'number',
        name: 'num1',
        message: 'enter the first number:'
    },
    {
        types: 'number',
        name: 'num2',
        message: 'enter the second number.'
    },
    {
        type: 'list',
        name: 'operator',
        message: 'select operators',
        choices: ['-', '+', '*', '/']
    },
]);
const { num1, num2, operator } = answers;
if (num1 && num2 && operator) {
    let result = 0;
    if (operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }
    if (operator === "*") {
        result = num1 * num2;
    }
    if (operator === "/") {
        result = num1 / num2;
    }
    console.log("your result is :", result);
}
else {
    console.log("kindly enter valid operator");
}
