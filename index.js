const path = require('path')

module.exports = function es6require(...filenames) {
  const passedOpts = typeof(filenames.slice(-1)[0]) === 'string'
    ? {}
    : filenames.pop();

  const opts = Object.assign({
    ignoreModuleNotFound: false,
  }, passedOpts);

  let filename;

  try {
    filename = require.resolve(path.resolve.apply(path, filenames));
  } catch (err) {
    if (opts.ignoreModuleNotFound === true && err.code === 'MODULE_NOT_FOUND') {
      return;
    } else {
      throw err;
    }
  }

  if (!filename) { return; }

  const requiredModule = require(filename);

  if (requiredModule && requiredModule.default) {
    return requiredModule.default;
  }

  return requiredModule;
}

