// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          app: '.',
          test: './test',
          auth: './auth',
          api: './api',
          styles: './styles',
          components: './components',
          utils: './utils',
          config: './config',
          navigation: './navigation',
          screens: './screens',
        }
      }]
    ]
  };
};
