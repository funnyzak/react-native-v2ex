// https://prettier.io/docs/en/options.html
module.exports = {
  // Specify the line length that the printer will wrap on.
  printWidth: 120,
  // Print trailing commas wherever possible in multi-line comma-separated syntactic structures. (A single-line array, for example, never gets trailing commas.)
  trailingComma: 'none',
  // Specify the number of spaces per indentation-level.
  tabWidth: 2,
  useTabs: false,
  // Print semicolons at the ends of statements.
  semi: false,
  // Use single quotes instead of double quotes.
  singleQuote: true,
  // Change when properties in objects are quoted.
  quoteProps: 'consistent',
  // Print spaces between brackets in object literals.
  bracketSpacing: true,
  // Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).
  bracketSameLine: true,
  // Include parentheses around a sole arrow function parameter.
  arrowParens: 'always',

  endOfLine: 'lf'
}
