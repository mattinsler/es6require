'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function es6require() {
  for (var _len = arguments.length, filenames = Array(_len), _key = 0; _key < _len; _key++) {
    filenames[_key] = arguments[_key];
  }

  var passedOpts = typeof filenames.slice(-1)[0] === 'string' ? {} : filenames.pop();

  var opts = _extends({}, passedOpts, {
    ignoreModuleNotFound: false
  });

  var filename = void 0;

  try {
    filename = require.resolve(_path2.default.resolve.apply(_path2.default, filenames));
  } catch (err) {
    if (opts.ignoreModuleNotFound === true && err.code === 'MODULE_NOT_FOUND') {
      return;
    } else {
      throw err;
    }
  }

  if (!filename) {
    return;
  }

  var requiredModule = require(filename);

  if (requiredModule && requiredModule.default) {
    return requiredModule.default;
  }

  return requiredModule;
}

exports.default = es6require;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lczZyZXF1aXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLFNBQVMsVUFBVCxHQUFrQztBQUFBLG9DQUFYLFNBQVc7QUFBWCxhQUFXO0FBQUE7O0FBQ2hDLE1BQU0sYUFBYSxPQUFPLFVBQVUsS0FBVixDQUFnQixDQUFDLENBQWpCLEVBQW9CLENBQXBCLENBQVAsS0FBbUMsUUFBbkMsR0FDZixFQURlLEdBRWYsVUFBVSxHQUFWLEVBRko7O0FBSUEsTUFBTSxvQkFDRCxVQURDO0FBRUosMEJBQXNCO0FBRmxCLElBQU47O0FBS0EsTUFBSSxpQkFBSjs7QUFFQSxNQUFJO0FBQ0YsZUFBVyxRQUFRLE9BQVIsQ0FBZ0IsZUFBSyxPQUFMLHVCQUFnQixTQUFoQixDQUFoQixDQUFYO0FBQ0QsR0FGRCxDQUVFLE9BQU8sR0FBUCxFQUFZO0FBQ1osUUFBSSxLQUFLLG9CQUFMLEtBQThCLElBQTlCLElBQXNDLElBQUksSUFBSixLQUFhLGtCQUF2RCxFQUEyRTtBQUN6RTtBQUNELEtBRkQsTUFFTztBQUNMLFlBQU0sR0FBTjtBQUNEO0FBQ0Y7O0FBRUQsTUFBSSxDQUFDLFFBQUwsRUFBZTtBQUFFO0FBQVM7O0FBRTFCLE1BQU0saUJBQWlCLFFBQVEsUUFBUixDQUF2Qjs7QUFFQSxNQUFJLGtCQUFrQixlQUFlLE9BQXJDLEVBQThDO0FBQzVDLFdBQU8sZUFBZSxPQUF0QjtBQUNEOztBQUVELFNBQU8sY0FBUDtBQUNEOztrQkFFYyxVIiwiZmlsZSI6ImVzNnJlcXVpcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZnVuY3Rpb24gZXM2cmVxdWlyZSguLi5maWxlbmFtZXMpIHtcbiAgY29uc3QgcGFzc2VkT3B0cyA9IHR5cGVvZihmaWxlbmFtZXMuc2xpY2UoLTEpWzBdKSA9PT0gJ3N0cmluZydcbiAgICA/IHt9XG4gICAgOiBmaWxlbmFtZXMucG9wKCk7XG5cbiAgY29uc3Qgb3B0cyA9IHtcbiAgICAuLi5wYXNzZWRPcHRzLFxuICAgIGlnbm9yZU1vZHVsZU5vdEZvdW5kOiBmYWxzZVxuICB9O1xuXG4gIGxldCBmaWxlbmFtZTtcblxuICB0cnkge1xuICAgIGZpbGVuYW1lID0gcmVxdWlyZS5yZXNvbHZlKHBhdGgucmVzb2x2ZSguLi5maWxlbmFtZXMpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKG9wdHMuaWdub3JlTW9kdWxlTm90Rm91bmQgPT09IHRydWUgJiYgZXJyLmNvZGUgPT09ICdNT0RVTEVfTk9UX0ZPVU5EJykge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFmaWxlbmFtZSkgeyByZXR1cm47IH1cblxuICBjb25zdCByZXF1aXJlZE1vZHVsZSA9IHJlcXVpcmUoZmlsZW5hbWUpO1xuXG4gIGlmIChyZXF1aXJlZE1vZHVsZSAmJiByZXF1aXJlZE1vZHVsZS5kZWZhdWx0KSB7XG4gICAgcmV0dXJuIHJlcXVpcmVkTW9kdWxlLmRlZmF1bHQ7XG4gIH1cblxuICByZXR1cm4gcmVxdWlyZWRNb2R1bGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVzNnJlcXVpcmU7XG4iXX0=