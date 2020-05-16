module.exports = {
  extends: ['airbnb-typescript-prettier'],
  parserOptions: {
    createDefaultProgram: true,
  },

  rules: {
    'sort-imports': 'error',
    'prefer-default-export': 'off',
  },
};
