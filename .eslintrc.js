module.exports = {
  root: true,
  extends: 'airbnb/base',
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0,
    'no-undef': 0,
    'semi': 0,
    'comma-dangle': 0,
    'object-shorthand': 0,
    'func-names': 0
  }
}
