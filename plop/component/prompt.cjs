const toUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1)

module.exports = {
  description: 'Create tsx component',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: '请输入路径（Please enter a component path）',
      default: 'common'
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入组件名称（Please enter the component name）'
    }
  ],
  actions: (data) => {
    const { name, path } = data
    const upperFirstName = toUpperCase(name)
    const templateData = {
      name,
      dtime: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      upperFirstName
    }

    const actions = []
    if (name) {
      actions.push(
        {
          type: 'add',
          path: `./src/components/${path}/${upperFirstName}.tsx`,
          templateFile: './plop/component/component.hbs',
          data: templateData,
          skipIfExists: true
        },
        {
          type: 'add',
          path: `./src/components/${path}/index.ts`,
          templateFile: './plop/component/index.hbs',
          data: templateData,
          skipIfExists: true
        },
        {
          type: 'append',
          path: `./src/components/${path}/index.ts`,
          templateFile: './plop/component/append.hbs',
          data: templateData
        }
      )
    }

    return actions
  }
}
