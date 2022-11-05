// import BugSnag from '@bugsnag/react-native'

// BugSnag.start({
//   context: 'context',
//   onBreadcrumb: (breadcrumb) => {
//     console.log('onBreadcrumb', breadcrumb)
//   },
//   onError: (event, cb) => {
//     console.log('onError', event)
//     cb(null, true)
//   },

//   logger: {
//     debug: (...args) => {
//       console.log('debug', args)
//     },
//     info: (...args) => {
//       console.log('info', args)
//     },
//     warn: (...args) => {
//       console.log('warn', args)
//     },
//     error: (...args) => {
//       console.log('error', args)
//     }
//   },
//   metadata: {
//     key: 'value'
//   },
//   featureFlags: [],
//   plugins: [],
//   user: {
//     id: 'id',
//     name: 'name',
//     email: 'email'
//   }
// })

// export default BugSnag

export const logError = (error: any) => {
  console.log(error)
}

export const logInfo = (...info: any[]) => {
  if (info[0] instanceof Error) {
    console.error(info)
  } else {
    console.log(...info)
  }
}
