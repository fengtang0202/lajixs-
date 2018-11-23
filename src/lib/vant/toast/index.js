'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toast = require('./toast.js');

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  options: {
    addGlobalClass: true
  },

  properties: {
    show: Boolean,
    mask: Boolean,
    message: String,
    forbidClick: Boolean,
    type: {
      type: String,
      value: 'text'
    },
    loadingType: {
      type: String,
      value: 'circular'
    },
    position: {
      type: String,
      value: 'middle'
    }
  },

  methods: {
    clear: function clear() {
      this.setData({
        show: false
      });
    }
  }
});

exports.default = _toast2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIm9wdGlvbnMiLCJhZGRHbG9iYWxDbGFzcyIsInByb3BlcnRpZXMiLCJzaG93IiwiQm9vbGVhbiIsIm1hc2siLCJtZXNzYWdlIiwiU3RyaW5nIiwiZm9yYmlkQ2xpY2siLCJ0eXBlIiwidmFsdWUiLCJsb2FkaW5nVHlwZSIsInBvc2l0aW9uIiwibWV0aG9kcyIsImNsZWFyIiwic2V0RGF0YSIsIlRvYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUFBLFVBQVU7QUFDUkMsV0FBUztBQUNQQyxvQkFBZ0I7QUFEVCxHQUREOztBQUtSQyxjQUFZO0FBQ1ZDLFVBQU1DLE9BREk7QUFFVkMsVUFBTUQsT0FGSTtBQUdWRSxhQUFTQyxNQUhDO0FBSVZDLGlCQUFhSixPQUpIO0FBS1ZLLFVBQU07QUFDSkEsWUFBTUYsTUFERjtBQUVKRyxhQUFPO0FBRkgsS0FMSTtBQVNWQyxpQkFBYTtBQUNYRixZQUFNRixNQURLO0FBRVhHLGFBQU87QUFGSSxLQVRIO0FBYVZFLGNBQVU7QUFDUkgsWUFBTUYsTUFERTtBQUVSRyxhQUFPO0FBRkM7QUFiQSxHQUxKOztBQXdCUkcsV0FBUztBQUNQQyxTQURPLG1CQUNDO0FBQ04sV0FBS0MsT0FBTCxDQUFhO0FBQ1haLGNBQU07QUFESyxPQUFiO0FBR0Q7QUFMTTtBQXhCRCxDQUFWOztrQkFpQ2VhLGUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9hc3QgZnJvbSAnLi90b2FzdCc7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gIG9wdGlvbnM6IHtcclxuICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlXHJcbiAgfSxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgc2hvdzogQm9vbGVhbixcclxuICAgIG1hc2s6IEJvb2xlYW4sXHJcbiAgICBtZXNzYWdlOiBTdHJpbmcsXHJcbiAgICBmb3JiaWRDbGljazogQm9vbGVhbixcclxuICAgIHR5cGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ3RleHQnXHJcbiAgICB9LFxyXG4gICAgbG9hZGluZ1R5cGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ2NpcmN1bGFyJ1xyXG4gICAgfSxcclxuICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICdtaWRkbGUnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvYXN0O1xyXG4iXX0=