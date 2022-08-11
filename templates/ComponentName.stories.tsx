import { <%= ComponentName %>, <%= ComponentName %>Props } from './<%= ComponentName %>'

export default {
  title: '<%= ComponentName %>',
  component: <%= ComponentName %>,
}

export const <%= component_name %> = (props: <%= ComponentName %>Props) => (
  <<%= ComponentName %> {...props} />
)
