export interface <%= ComponentName %>Props {
  someProp: unknown
}

export const <%= ComponentName %> = ({ someProp }: <%= ComponentName %>Props) => {
  console.log({ someProp })

  return <div>Component: <%= ComponentName %></div>
}
