function es6require(...filenames) {
  const passedOpts = typeof(filenames.slice(-1)[0]) === 'string'
    ? {}
    : filenames.pop();

  const opts = {
    ...passedOpts,
    ignoreModuleNotFound: false
  };

  let filename;

  try {
    filename = require.resolve(...filenames);
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

export default es6require;
