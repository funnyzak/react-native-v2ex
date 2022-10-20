const toUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1)

module.exports = {
  description: 'Create screen',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: '请输入路径（Please enter a screen path）',
      default: 'common'
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入视图名称（Please enter screen name）'
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
    let actions = []

    if (name) {
      actions.push(
        {
          type: 'add',
          path: `./src/screens/${path}/${upperFirstName}.tsx`,
          templateFile: './plop/screen/screen.hbs',
          data: templateData,
          skipIfExists: true
        },
        {
          type: 'add',
          path: `./src/screens/${path}/index.ts`,
          templateFile: './plop/screen/index.hbs',
          data: templateData,
          skipIfExists: true
        },
        {
          type: 'append',
          path: `./src/screens/${path}/index.ts`,
          templateFile: './plop/screen/append.hbs',
          data: templateData
        }
      )
    }

    return actions
  }
}
