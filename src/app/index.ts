import chalk from 'chalk'
import snakeCase from 'lodash.snakecase'
import Generator from 'yeoman-generator'

export default class extends Generator {
  ComponentName: ''
  component_name: ''

  constructor(args: string | string[], options: Generator.GeneratorOptions) {
    super(args, options)
    this.log(`Welcome to the ${chalk.red('Component')} generator!`)
  }

  prompting() {
    return this.prompt({
      type: 'input',
      name: 'ComponentName',
      message: 'ComponentName ?',
      store: true,
    }).then((answers) => {
      this.ComponentName = answers.ComponentName
      this.component_name = snakeCase(answers.ComponentName) as any
    })
  }

  writing() {
    const files = ['index.ts', 'ComponentName.tsx', 'ComponentName.stories.tsx']

    files.map((fileName: string) => {
      this.fs.copyTpl(
        this.templatePath(`../../templates/${fileName}`),
        this.destinationPath(
          `${this.ComponentName}/${fileName.replace(
            'ComponentName',
            this.ComponentName,
          )}`,
        ),
        {
          ComponentName: this.ComponentName,
          component_name: this.component_name,
        },
      )
    })
  }
}
