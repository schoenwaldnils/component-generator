import * as chalk from 'chalk'
import * as Generator from 'yeoman-generator'

export default class extends Generator {
  ComponentName: ''

  constructor(args: any, options: any) {
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
        },
      )
    })
  }
}
