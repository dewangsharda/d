import chalk from "chalk";

const logger = {
    info: (message) => {
        console.log(chalk.blue(message));
    },
    error: (message) => {
        console.log(chalk.red(message));
    },
    success: (message) => {
        console.log(chalk.green(message));
    },
    warning: (message) => {
        console.log(chalk.yellow(message));
    },
};

export default logger;
