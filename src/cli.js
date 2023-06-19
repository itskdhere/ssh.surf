#!/usr/bin/env node

// Imports
import figlet from "figlet";
import gradient from "gradient-string";
import { createSpinner } from 'nanospinner'
import chalkAnimation from 'chalk-animation';


// CLI
async function main() {
    await art();
}

async function art() {
    let rainbow;

    const spinner = createSpinner();

    spinner.start({ text: gradient.pastel('SSH.SURF'), color: 'yellow' });

    setTimeout(() => {
        spinner.success({ text: ' ', mark: ' ' });
        spinner.clear();
    }, 1000);

    setTimeout(() => {
        rainbow = chalkAnimation.rainbow(figlet.textSync('SSH.SURF', {
            font: 'Big',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 69,
            whitespaceBreak: true
        }), 2);
    }, 1001);

    setTimeout(() => {
        rainbow.stop();
    }, 4069);

}


main();