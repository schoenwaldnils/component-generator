"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const snakeCase = require("lodash.snakecase");
const Generator = require("yeoman-generator");
class default_1 extends Generator {
    constructor(args, options) {
        super(args, options);
        this.log(`Welcome to the ${chalk.red('Component')} generator!`);
    }
    prompting() {
        return this.prompt({
            type: 'input',
            name: 'ComponentName',
            message: 'ComponentName ?',
            store: true,
        }).then((answers) => {
            this.ComponentName = answers.ComponentName;
            this.component_name = snakeCase(answers.ComponentName);
        });
    }
    writing() {
        const files = ['index.ts', 'ComponentName.tsx', 'ComponentName.stories.tsx'];
        files.map((fileName) => {
            this.fs.copyTpl(this.templatePath(`../../templates/${fileName}`), this.destinationPath(`${this.ComponentName}/${fileName.replace('ComponentName', this.ComponentName)}`), {
                ComponentName: this.ComponentName,
                component_name: this.component_name,
            });
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map