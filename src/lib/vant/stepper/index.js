'use strict';

// Note that the bitwise operators and shift operators operate on 32-bit ints
// so in that case, the max safe integer is 2^31-1, or 2147483647
var MAX = 2147483647;

Component({
  options: {
    addGlobalClass: true
  },

  externalClasses: ['custom-class', 'input-class', 'plus-class', 'minus-class'],

  properties: {
    value: {
      type: null,
      observer: function observer(val) {
        if (val !== this.currentValue) {
          this.setData({ currentValue: this.range(val) });
        }
      }
    },
    integer: Boolean,
    disabled: Boolean,
    disableInput: Boolean,
    min: {
      type: null,
      value: 1
    },
    max: {
      type: null,
      value: MAX
    },
    step: {
      type: null,
      value: 1
    }
  },

  attached: function attached() {
    this.setData({
      currentValue: this.range(this.data.value)
    });
  },


  methods: {
    // limit value range
    range: function range(value) {
      return Math.max(Math.min(this.data.max, value), this.data.min);
    },
    onInput: function onInput(event) {
      var _ref = event.detail || {},
          _ref$value = _ref.value,
          value = _ref$value === undefined ? '' : _ref$value;

      this.triggerInput(value);
    },
    onChange: function onChange(type) {
      if (this[type + 'Disabled']) {
        this.triggerEvent('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.data.step : +this.data.step;
      var value = Math.round((this.data.currentValue + diff) * 100) / 100;
      this.triggerInput(this.range(value));
      this.triggerEvent(type);
    },
    onBlur: function onBlur(event) {
      var currentValue = this.range(this.data.currentValue);
      this.triggerInput(currentValue);
      this.triggerEvent('blur', event);
    },
    onMinus: function onMinus() {
      this.onChange('minus');
    },
    onPlus: function onPlus() {
      this.onChange('plus');
    },
    triggerInput: function triggerInput(currentValue) {
      this.setData({ currentValue: currentValue });
      this.triggerEvent('input', currentValue);
      this.triggerEvent('change', currentValue);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1BWCIsIkNvbXBvbmVudCIsIm9wdGlvbnMiLCJhZGRHbG9iYWxDbGFzcyIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsInR5cGUiLCJvYnNlcnZlciIsInZhbCIsImN1cnJlbnRWYWx1ZSIsInNldERhdGEiLCJyYW5nZSIsImludGVnZXIiLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJkaXNhYmxlSW5wdXQiLCJtaW4iLCJtYXgiLCJzdGVwIiwiYXR0YWNoZWQiLCJkYXRhIiwibWV0aG9kcyIsIk1hdGgiLCJvbklucHV0IiwiZXZlbnQiLCJkZXRhaWwiLCJ0cmlnZ2VySW5wdXQiLCJvbkNoYW5nZSIsInRyaWdnZXJFdmVudCIsImRpZmYiLCJyb3VuZCIsIm9uQmx1ciIsIm9uTWludXMiLCJvblBsdXMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBLElBQU1BLE1BQU0sVUFBWjs7QUFFQUMsVUFBVTtBQUNSQyxXQUFTO0FBQ1BDLG9CQUFnQjtBQURULEdBREQ7O0FBS1JDLG1CQUFpQixDQUNmLGNBRGUsRUFFZixhQUZlLEVBR2YsWUFIZSxFQUlmLGFBSmUsQ0FMVDs7QUFZUkMsY0FBWTtBQUNWQyxXQUFPO0FBQ0xDLFlBQU0sSUFERDtBQUVMQyxjQUZLLG9CQUVJQyxHQUZKLEVBRVM7QUFDWixZQUFJQSxRQUFRLEtBQUtDLFlBQWpCLEVBQStCO0FBQzdCLGVBQUtDLE9BQUwsQ0FBYSxFQUFFRCxjQUFjLEtBQUtFLEtBQUwsQ0FBV0gsR0FBWCxDQUFoQixFQUFiO0FBQ0Q7QUFDRjtBQU5JLEtBREc7QUFTVkksYUFBU0MsT0FUQztBQVVWQyxjQUFVRCxPQVZBO0FBV1ZFLGtCQUFjRixPQVhKO0FBWVZHLFNBQUs7QUFDSFYsWUFBTSxJQURIO0FBRUhELGFBQU87QUFGSixLQVpLO0FBZ0JWWSxTQUFLO0FBQ0hYLFlBQU0sSUFESDtBQUVIRCxhQUFPTjtBQUZKLEtBaEJLO0FBb0JWbUIsVUFBTTtBQUNKWixZQUFNLElBREY7QUFFSkQsYUFBTztBQUZIO0FBcEJJLEdBWko7O0FBc0NSYyxVQXRDUSxzQkFzQ0c7QUFDVCxTQUFLVCxPQUFMLENBQWE7QUFDWEQsb0JBQWMsS0FBS0UsS0FBTCxDQUFXLEtBQUtTLElBQUwsQ0FBVWYsS0FBckI7QUFESCxLQUFiO0FBR0QsR0ExQ087OztBQTRDUmdCLFdBQVM7QUFDUDtBQUNBVixTQUZPLGlCQUVETixLQUZDLEVBRU07QUFDWCxhQUFPaUIsS0FBS0wsR0FBTCxDQUFTSyxLQUFLTixHQUFMLENBQVMsS0FBS0ksSUFBTCxDQUFVSCxHQUFuQixFQUF3QlosS0FBeEIsQ0FBVCxFQUF5QyxLQUFLZSxJQUFMLENBQVVKLEdBQW5ELENBQVA7QUFDRCxLQUpNO0FBTVBPLFdBTk8sbUJBTUNDLEtBTkQsRUFNUTtBQUFBLGlCQUNVQSxNQUFNQyxNQUFOLElBQWdCLEVBRDFCO0FBQUEsNEJBQ0xwQixLQURLO0FBQUEsVUFDTEEsS0FESyw4QkFDRyxFQURIOztBQUViLFdBQUtxQixZQUFMLENBQWtCckIsS0FBbEI7QUFDRCxLQVRNO0FBV1BzQixZQVhPLG9CQVdFckIsSUFYRixFQVdRO0FBQ2IsVUFBSSxLQUFRQSxJQUFSLGNBQUosRUFBNkI7QUFDM0IsYUFBS3NCLFlBQUwsQ0FBa0IsV0FBbEIsRUFBK0J0QixJQUEvQjtBQUNBO0FBQ0Q7O0FBRUQsVUFBTXVCLE9BQU92QixTQUFTLE9BQVQsR0FBbUIsQ0FBQyxLQUFLYyxJQUFMLENBQVVGLElBQTlCLEdBQXFDLENBQUMsS0FBS0UsSUFBTCxDQUFVRixJQUE3RDtBQUNBLFVBQU1iLFFBQVFpQixLQUFLUSxLQUFMLENBQVcsQ0FBQyxLQUFLVixJQUFMLENBQVVYLFlBQVYsR0FBeUJvQixJQUExQixJQUFrQyxHQUE3QyxJQUFvRCxHQUFsRTtBQUNBLFdBQUtILFlBQUwsQ0FBa0IsS0FBS2YsS0FBTCxDQUFXTixLQUFYLENBQWxCO0FBQ0EsV0FBS3VCLFlBQUwsQ0FBa0J0QixJQUFsQjtBQUNELEtBckJNO0FBdUJQeUIsVUF2Qk8sa0JBdUJBUCxLQXZCQSxFQXVCTztBQUNaLFVBQU1mLGVBQWUsS0FBS0UsS0FBTCxDQUFXLEtBQUtTLElBQUwsQ0FBVVgsWUFBckIsQ0FBckI7QUFDQSxXQUFLaUIsWUFBTCxDQUFrQmpCLFlBQWxCO0FBQ0EsV0FBS21CLFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEJKLEtBQTFCO0FBQ0QsS0EzQk07QUE2QlBRLFdBN0JPLHFCQTZCRztBQUNSLFdBQUtMLFFBQUwsQ0FBYyxPQUFkO0FBQ0QsS0EvQk07QUFpQ1BNLFVBakNPLG9CQWlDRTtBQUNQLFdBQUtOLFFBQUwsQ0FBYyxNQUFkO0FBQ0QsS0FuQ007QUFxQ1BELGdCQXJDTyx3QkFxQ01qQixZQXJDTixFQXFDb0I7QUFDekIsV0FBS0MsT0FBTCxDQUFhLEVBQUVELDBCQUFGLEVBQWI7QUFDQSxXQUFLbUIsWUFBTCxDQUFrQixPQUFsQixFQUEyQm5CLFlBQTNCO0FBQ0EsV0FBS21CLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEJuQixZQUE1QjtBQUNEO0FBekNNO0FBNUNELENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOb3RlIHRoYXQgdGhlIGJpdHdpc2Ugb3BlcmF0b3JzIGFuZCBzaGlmdCBvcGVyYXRvcnMgb3BlcmF0ZSBvbiAzMi1iaXQgaW50c1xyXG4vLyBzbyBpbiB0aGF0IGNhc2UsIHRoZSBtYXggc2FmZSBpbnRlZ2VyIGlzIDJeMzEtMSwgb3IgMjE0NzQ4MzY0N1xyXG5jb25zdCBNQVggPSAyMTQ3NDgzNjQ3O1xyXG5cclxuQ29tcG9uZW50KHtcclxuICBvcHRpb25zOiB7XHJcbiAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZVxyXG4gIH0sXHJcblxyXG4gIGV4dGVybmFsQ2xhc3NlczogW1xyXG4gICAgJ2N1c3RvbS1jbGFzcycsXHJcbiAgICAnaW5wdXQtY2xhc3MnLFxyXG4gICAgJ3BsdXMtY2xhc3MnLFxyXG4gICAgJ21pbnVzLWNsYXNzJ1xyXG4gIF0sXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgIG9ic2VydmVyKHZhbCkge1xyXG4gICAgICAgIGlmICh2YWwgIT09IHRoaXMuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoeyBjdXJyZW50VmFsdWU6IHRoaXMucmFuZ2UodmFsKSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbnRlZ2VyOiBCb29sZWFuLFxyXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICBkaXNhYmxlSW5wdXQ6IEJvb2xlYW4sXHJcbiAgICBtaW46IHtcclxuICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgdmFsdWU6IDFcclxuICAgIH0sXHJcbiAgICBtYXg6IHtcclxuICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgdmFsdWU6IE1BWFxyXG4gICAgfSxcclxuICAgIHN0ZXA6IHtcclxuICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgdmFsdWU6IDFcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGN1cnJlbnRWYWx1ZTogdGhpcy5yYW5nZSh0aGlzLmRhdGEudmFsdWUpXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICAvLyBsaW1pdCB2YWx1ZSByYW5nZVxyXG4gICAgcmFuZ2UodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHRoaXMuZGF0YS5tYXgsIHZhbHVlKSwgdGhpcy5kYXRhLm1pbik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW5wdXQoZXZlbnQpIHtcclxuICAgICAgY29uc3QgeyB2YWx1ZSA9ICcnIH0gPSBldmVudC5kZXRhaWwgfHwge307XHJcbiAgICAgIHRoaXMudHJpZ2dlcklucHV0KHZhbHVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25DaGFuZ2UodHlwZSkge1xyXG4gICAgICBpZiAodGhpc1tgJHt0eXBlfURpc2FibGVkYF0pIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnb3ZlcmxpbWl0JywgdHlwZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkaWZmID0gdHlwZSA9PT0gJ21pbnVzJyA/IC10aGlzLmRhdGEuc3RlcCA6ICt0aGlzLmRhdGEuc3RlcDtcclxuICAgICAgY29uc3QgdmFsdWUgPSBNYXRoLnJvdW5kKCh0aGlzLmRhdGEuY3VycmVudFZhbHVlICsgZGlmZikgKiAxMDApIC8gMTAwO1xyXG4gICAgICB0aGlzLnRyaWdnZXJJbnB1dCh0aGlzLnJhbmdlKHZhbHVlKSk7XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHR5cGUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkJsdXIoZXZlbnQpIHtcclxuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5yYW5nZSh0aGlzLmRhdGEuY3VycmVudFZhbHVlKTtcclxuICAgICAgdGhpcy50cmlnZ2VySW5wdXQoY3VycmVudFZhbHVlKTtcclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2JsdXInLCBldmVudCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTWludXMoKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UoJ21pbnVzJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uUGx1cygpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZSgncGx1cycpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0cmlnZ2VySW5wdXQoY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGN1cnJlbnRWYWx1ZSB9KTtcclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2lucHV0JywgY3VycmVudFZhbHVlKTtcclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NoYW5nZScsIGN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl19