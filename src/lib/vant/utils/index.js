'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
  return x !== null && (type === 'object' || type === 'function');
}

module.exports = {
  isObj: isObj,
  isDef: isDef
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImlzRGVmIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJpc09iaiIsIngiLCJ0eXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNwQixTQUFPQSxVQUFVQyxTQUFWLElBQXVCRCxVQUFVLElBQXhDO0FBQ0Q7O0FBRUQsU0FBU0UsS0FBVCxDQUFlQyxDQUFmLEVBQWtCO0FBQ2hCLE1BQU1DLGNBQWNELENBQWQseUNBQWNBLENBQWQsQ0FBTjtBQUNBLFNBQU9BLE1BQU0sSUFBTixLQUFlQyxTQUFTLFFBQVQsSUFBcUJBLFNBQVMsVUFBN0MsQ0FBUDtBQUNEOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZKLGNBRGU7QUFFZkg7QUFGZSxDQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGlzRGVmKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqKHgpIHtcclxuICBjb25zdCB0eXBlID0gdHlwZW9mIHg7XHJcbiAgcmV0dXJuIHggIT09IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBpc09iaixcclxuICBpc0RlZlxyXG59O1xyXG4iXX0=