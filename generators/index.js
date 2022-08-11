"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const lodash_snakecase_1 = __importDefault(require("lodash.snakecase"));
const yeoman_generator_1 = __importDefault(require("yeoman-generator"));
class default_1 extends yeoman_generator_1.default {
    constructor(args, options) {
        super(args, options);
        this.log(`Welcome to the ${chalk_1.default.red('Component')} generator!`);
    }
    prompting() {
        return this.prompt({
            type: 'input',
            name: 'ComponentName',
            message: 'ComponentName ?',
            store: true,
        }).then((answers) => {
            this.ComponentName = answers.ComponentName;
            this.component_name = (0, lodash_snakecase_1.default)(answers.ComponentName);
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