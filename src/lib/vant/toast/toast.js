'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require('./../utils/index.js');

var defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  show: true,
  duration: 3000,
  position: 'middle',
  forbidClick: false,
  loadingType: 'circular',
  selector: '#van-toast'
};
var parseOptions = function parseOptions(message) {
  return (0, _index.isObj)(message) ? message : { message: message };
};

var queue = [];
var currentOptions = _extends({}, defaultOptions);

function Toast() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  options = _extends({}, currentOptions, parseOptions(options));

  var pages = getCurrentPages();
  var ctx = pages[pages.length - 1];

  var toast = ctx.selectComponent(options.selector);
  delete options.selector;

  queue.push(toast);
  toast.setData(options);
  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
      queue = queue.filter(function (item) {
        return item !== toast;
      });
    }, options.duration);
  }

  return toast;
};

var createMethod = function createMethod(type) {
  return function (options) {
    return Toast(_extends({
      type: type }, parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  Toast[method] = createMethod(method);
});

Toast.clear = function (all) {
  queue.forEach(function (toast) {
    toast.clear();
  });
  queue = [];
};

Toast.setDefaultOptions = function (options) {
  Object.assign(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = _extends({}, defaultOptions);
};

exports.default = Toast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRPcHRpb25zIiwidHlwZSIsIm1hc2siLCJtZXNzYWdlIiwic2hvdyIsImR1cmF0aW9uIiwicG9zaXRpb24iLCJmb3JiaWRDbGljayIsImxvYWRpbmdUeXBlIiwic2VsZWN0b3IiLCJwYXJzZU9wdGlvbnMiLCJxdWV1ZSIsImN1cnJlbnRPcHRpb25zIiwiVG9hc3QiLCJvcHRpb25zIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJjdHgiLCJsZW5ndGgiLCJ0b2FzdCIsInNlbGVjdENvbXBvbmVudCIsInB1c2giLCJzZXREYXRhIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXIiLCJmaWx0ZXIiLCJpdGVtIiwiY3JlYXRlTWV0aG9kIiwiZm9yRWFjaCIsIm1ldGhvZCIsInNldERlZmF1bHRPcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwicmVzZXREZWZhdWx0T3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxpQkFBaUI7QUFDckJDLFFBQU0sTUFEZTtBQUVyQkMsUUFBTSxLQUZlO0FBR3JCQyxXQUFTLEVBSFk7QUFJckJDLFFBQU0sSUFKZTtBQUtyQkMsWUFBVSxJQUxXO0FBTXJCQyxZQUFVLFFBTlc7QUFPckJDLGVBQWEsS0FQUTtBQVFyQkMsZUFBYSxVQVJRO0FBU3JCQyxZQUFVO0FBVFcsQ0FBdkI7QUFXQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFXLGtCQUFNUCxPQUFOLElBQWlCQSxPQUFqQixHQUEyQixFQUFFQSxnQkFBRixFQUF0QztBQUFBLENBQXJCOztBQUVBLElBQUlRLFFBQVEsRUFBWjtBQUNBLElBQUlDLDhCQUFzQlosY0FBdEIsQ0FBSjs7QUFFQSxTQUFTYSxLQUFULEdBQTZCO0FBQUEsTUFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUMzQkEseUJBQ0tGLGNBREwsRUFFS0YsYUFBYUksT0FBYixDQUZMOztBQUtBLE1BQU1DLFFBQVFDLGlCQUFkO0FBQ0EsTUFBTUMsTUFBTUYsTUFBTUEsTUFBTUcsTUFBTixHQUFlLENBQXJCLENBQVo7O0FBRUEsTUFBTUMsUUFBUUYsSUFBSUcsZUFBSixDQUFvQk4sUUFBUUwsUUFBNUIsQ0FBZDtBQUNBLFNBQU9LLFFBQVFMLFFBQWY7O0FBRUFFLFFBQU1VLElBQU4sQ0FBV0YsS0FBWDtBQUNBQSxRQUFNRyxPQUFOLENBQWNSLE9BQWQ7QUFDQVMsZUFBYUosTUFBTUssS0FBbkI7O0FBRUEsTUFBSVYsUUFBUVQsUUFBUixHQUFtQixDQUF2QixFQUEwQjtBQUN4QmMsVUFBTUssS0FBTixHQUFjQyxXQUFXLFlBQU07QUFDN0JOLFlBQU1PLEtBQU47QUFDQWYsY0FBUUEsTUFBTWdCLE1BQU4sQ0FBYTtBQUFBLGVBQVFDLFNBQVNULEtBQWpCO0FBQUEsT0FBYixDQUFSO0FBQ0QsS0FIYSxFQUdYTCxRQUFRVCxRQUhHLENBQWQ7QUFJRDs7QUFFRCxTQUFPYyxLQUFQO0FBQ0Q7O0FBRUQsSUFBTVUsZUFBZSxTQUFmQSxZQUFlO0FBQUEsU0FBUTtBQUFBLFdBQVdoQjtBQUN0Q1osZ0JBRHNDLElBQzdCUyxhQUFhSSxPQUFiLENBRDZCLEVBQVg7QUFBQSxHQUFSO0FBQUEsQ0FBckI7O0FBSUEsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixNQUF2QixFQUErQmdCLE9BQS9CLENBQXVDLGtCQUFVO0FBQy9DakIsUUFBTWtCLE1BQU4sSUFBZ0JGLGFBQWFFLE1BQWIsQ0FBaEI7QUFDRCxDQUZEOztBQUlBbEIsTUFBTWEsS0FBTixHQUFjLGVBQU87QUFDbkJmLFFBQU1tQixPQUFOLENBQWMsaUJBQVM7QUFDckJYLFVBQU1PLEtBQU47QUFDRCxHQUZEO0FBR0FmLFVBQVEsRUFBUjtBQUNELENBTEQ7O0FBT0FFLE1BQU1tQixpQkFBTixHQUEwQixtQkFBVztBQUNuQ0MsU0FBT0MsTUFBUCxDQUFjdEIsY0FBZCxFQUE4QkUsT0FBOUI7QUFDRCxDQUZEOztBQUlBRCxNQUFNc0IsbUJBQU4sR0FBNEIsWUFBTTtBQUNoQ3ZCLGdDQUFzQlosY0FBdEI7QUFDRCxDQUZEOztrQkFJZWEsSyIsImZpbGUiOiJ0b2FzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzT2JqIH0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnO1xyXG5cclxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgdHlwZTogJ3RleHQnLFxyXG4gIG1hc2s6IGZhbHNlLFxyXG4gIG1lc3NhZ2U6ICcnLFxyXG4gIHNob3c6IHRydWUsXHJcbiAgZHVyYXRpb246IDMwMDAsXHJcbiAgcG9zaXRpb246ICdtaWRkbGUnLFxyXG4gIGZvcmJpZENsaWNrOiBmYWxzZSxcclxuICBsb2FkaW5nVHlwZTogJ2NpcmN1bGFyJyxcclxuICBzZWxlY3RvcjogJyN2YW4tdG9hc3QnXHJcbn07XHJcbmNvbnN0IHBhcnNlT3B0aW9ucyA9IG1lc3NhZ2UgPT4gaXNPYmoobWVzc2FnZSkgPyBtZXNzYWdlIDogeyBtZXNzYWdlIH07XHJcblxyXG5sZXQgcXVldWUgPSBbXTtcclxubGV0IGN1cnJlbnRPcHRpb25zID0geyAuLi5kZWZhdWx0T3B0aW9ucyB9O1xyXG5cclxuZnVuY3Rpb24gVG9hc3Qob3B0aW9ucyA9IHt9KSB7XHJcbiAgb3B0aW9ucyA9IHtcclxuICAgIC4uLmN1cnJlbnRPcHRpb25zLFxyXG4gICAgLi4ucGFyc2VPcHRpb25zKG9wdGlvbnMpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICBjb25zdCBjdHggPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgY29uc3QgdG9hc3QgPSBjdHguc2VsZWN0Q29tcG9uZW50KG9wdGlvbnMuc2VsZWN0b3IpO1xyXG4gIGRlbGV0ZSBvcHRpb25zLnNlbGVjdG9yO1xyXG5cclxuICBxdWV1ZS5wdXNoKHRvYXN0KTtcclxuICB0b2FzdC5zZXREYXRhKG9wdGlvbnMpO1xyXG4gIGNsZWFyVGltZW91dCh0b2FzdC50aW1lcik7XHJcblxyXG4gIGlmIChvcHRpb25zLmR1cmF0aW9uID4gMCkge1xyXG4gICAgdG9hc3QudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdG9hc3QuY2xlYXIoKTtcclxuICAgICAgcXVldWUgPSBxdWV1ZS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0b2FzdCk7XHJcbiAgICB9LCBvcHRpb25zLmR1cmF0aW9uKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0b2FzdDtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZU1ldGhvZCA9IHR5cGUgPT4gb3B0aW9ucyA9PiBUb2FzdCh7XHJcbiAgdHlwZSwgLi4ucGFyc2VPcHRpb25zKG9wdGlvbnMpXHJcbn0pO1xyXG5cclxuWydsb2FkaW5nJywgJ3N1Y2Nlc3MnLCAnZmFpbCddLmZvckVhY2gobWV0aG9kID0+IHtcclxuICBUb2FzdFttZXRob2RdID0gY3JlYXRlTWV0aG9kKG1ldGhvZCk7XHJcbn0pO1xyXG5cclxuVG9hc3QuY2xlYXIgPSBhbGwgPT4ge1xyXG4gIHF1ZXVlLmZvckVhY2godG9hc3QgPT4ge1xyXG4gICAgdG9hc3QuY2xlYXIoKTtcclxuICB9KTtcclxuICBxdWV1ZSA9IFtdO1xyXG59O1xyXG5cclxuVG9hc3Quc2V0RGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zID0+IHtcclxuICBPYmplY3QuYXNzaWduKGN1cnJlbnRPcHRpb25zLCBvcHRpb25zKTtcclxufTtcclxuXHJcblRvYXN0LnJlc2V0RGVmYXVsdE9wdGlvbnMgPSAoKSA9PiB7XHJcbiAgY3VycmVudE9wdGlvbnMgPSB7IC4uLmRlZmF1bHRPcHRpb25zIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2FzdDtcclxuIl19