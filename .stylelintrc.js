const { defineStylelintConfig } = require('@ttou/define-config')

module.exports = defineStylelintConfig({
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'block-no-empty': null,
    'unit-no-unknown': null,
    'selector-class-pattern': null
  }
})
