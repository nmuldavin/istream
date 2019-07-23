module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { useBuiltIns: 'usage', corejs: 3, targets: 'last 3 years' },
    ],
  ],
};
