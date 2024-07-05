module.exports = {
  apps: [
    {
      name: 'math-be',
      script: './dist/main.js',
      instances: '1',
      exec_mode: 'cluster',
    },
  ],
};
