'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
    var _require;

    filename = (_require = require).resolve.apply(_require, filenames);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lczZyZXF1aXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsU0FBUyxVQUFULEdBQWtDO0FBQUEsb0NBQVgsU0FBVztBQUFYLGFBQVc7QUFBQTs7QUFDaEMsTUFBTSxhQUFhLE9BQU8sVUFBVSxLQUFWLENBQWdCLENBQUMsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBUCxLQUFtQyxRQUFuQyxHQUNmLEVBRGUsR0FFZixVQUFVLEdBQVYsRUFGSjs7QUFJQSxNQUFNLG9CQUNELFVBREM7QUFFSiwwQkFBc0I7QUFGbEIsSUFBTjs7QUFLQSxNQUFJLGlCQUFKOztBQUVBLE1BQUk7QUFBQTs7QUFDRixlQUFXLHFCQUFRLE9BQVIsaUJBQW1CLFNBQW5CLENBQVg7QUFDRCxHQUZELENBRUUsT0FBTyxHQUFQLEVBQVk7QUFDWixRQUFJLEtBQUssb0JBQUwsS0FBOEIsSUFBOUIsSUFBc0MsSUFBSSxJQUFKLEtBQWEsa0JBQXZELEVBQTJFO0FBQ3pFO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTSxHQUFOO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJLENBQUMsUUFBTCxFQUFlO0FBQUU7QUFBUzs7QUFFMUIsTUFBTSxpQkFBaUIsUUFBUSxRQUFSLENBQXZCOztBQUVBLE1BQUksa0JBQWtCLGVBQWUsT0FBckMsRUFBOEM7QUFDNUMsV0FBTyxlQUFlLE9BQXRCO0FBQ0Q7O0FBRUQsU0FBTyxjQUFQO0FBQ0Q7O2tCQUVjLFUiLCJmaWxlIjoiZXM2cmVxdWlyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGVzNnJlcXVpcmUoLi4uZmlsZW5hbWVzKSB7XG4gIGNvbnN0IHBhc3NlZE9wdHMgPSB0eXBlb2YoZmlsZW5hbWVzLnNsaWNlKC0xKVswXSkgPT09ICdzdHJpbmcnXG4gICAgPyB7fVxuICAgIDogZmlsZW5hbWVzLnBvcCgpO1xuXG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgLi4ucGFzc2VkT3B0cyxcbiAgICBpZ25vcmVNb2R1bGVOb3RGb3VuZDogZmFsc2VcbiAgfTtcblxuICBsZXQgZmlsZW5hbWU7XG5cbiAgdHJ5IHtcbiAgICBmaWxlbmFtZSA9IHJlcXVpcmUucmVzb2x2ZSguLi5maWxlbmFtZXMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAob3B0cy5pZ25vcmVNb2R1bGVOb3RGb3VuZCA9PT0gdHJ1ZSAmJiBlcnIuY29kZSA9PT0gJ01PRFVMRV9OT1RfRk9VTkQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICBpZiAoIWZpbGVuYW1lKSB7IHJldHVybjsgfVxuXG4gIGNvbnN0IHJlcXVpcmVkTW9kdWxlID0gcmVxdWlyZShmaWxlbmFtZSk7XG5cbiAgaWYgKHJlcXVpcmVkTW9kdWxlICYmIHJlcXVpcmVkTW9kdWxlLmRlZmF1bHQpIHtcbiAgICByZXR1cm4gcmVxdWlyZWRNb2R1bGUuZGVmYXVsdDtcbiAgfVxuXG4gIHJldHVybiByZXF1aXJlZE1vZHVsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXM2cmVxdWlyZTtcbiJdfQ==