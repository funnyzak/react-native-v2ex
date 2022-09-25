const toUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1)

module.exports = {
  description: 'Create tsx component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入组件名称（Please enter the component name）'
    }
  ],
  actions: (data) => {
    const { name } = data
    const upperFirstName = toUpperCase(name)
    const lowerName = name.toLowerCase()
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
          path: `./src/components/${lowerName}/${upperFirstName}.tsx`,
          templateFile: './plop/component/component.hbs',
          data: templateData
        },
        {
          type: 'add',
          path: `./src/components/${lowerName}/index.ts`,
          templateFile: './plop/component/index.hbs',
          data: templateData
        }
      )
    }

    return actions
  }
}
