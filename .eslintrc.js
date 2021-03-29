module.exports = () => {
  const SEVERITY = process.env.NODE_ENV === 'development' ? 'warn' : 'error';
  return {
    extends: ['airbnb', 'prettier'],
    plugins: ['prettier'],
    env: {
      browser: true,
      node: true,
      jest: true,
      commonjs: true,
    },
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'prettier/prettier': SEVERITY,
    },
  };
};
