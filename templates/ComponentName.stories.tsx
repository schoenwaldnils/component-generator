import { FC } from 'react'

import { <%= ComponentName %> as <%= ComponentName %>Component } from './<%= ComponentName %>'

export default {
  title: '<%= ComponentName %>',
  component: <%= ComponentName %>Component,
}

export const <%= ComponentName %>: FC = () => (
  <<%= ComponentName %>Component />
)
