/**
 * v2ex Settings for the app,
 *
 * url                     : Base url of the v2ex website
 * token            : Token to access v2ex API, without it
 *                           app won't work
 */
export const v2exOptions = {
  url: 'http://mage2.local/', // make sure you have trail slash in the end
  store: 'default', // store code // Stores > All Stores > Store View > Code
  authentication: {
    token: 'hello world'
  }
}
