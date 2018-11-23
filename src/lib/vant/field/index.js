'use strict';

Component({
  behaviors: ['wx://form-field'],

  externalClasses: ['input-class'],

  options: {
    multipleSlots: true,
    addGlobalClass: true
  },

  properties: {
    icon: String,
    label: String,
    error: Boolean,
    focus: Boolean,
    center: Boolean,
    isLink: Boolean,
    leftIcon: String,
    disabled: Boolean,
    autosize: Boolean,
    readonly: Boolean,
    required: Boolean,
    iconClass: String,
    clearable: Boolean,
    labelAlign: String,
    inputAlign: String,
    customClass: String,
    confirmType: String,
    errorMessage: String,
    placeholder: String,
    customStyle: String,
    useIconSlot: Boolean,
    useButtonSlot: Boolean,
    placeholderClass: String,
    cursorSpacing: {
      type: Number,
      value: 50
    },
    maxlength: {
      type: Number,
      value: -1
    },
    value: {
      type: null,
      value: ''
    },
    type: {
      type: String,
      value: 'text'
    },
    border: {
      type: Boolean,
      value: true
    }
  },

  data: {
    focused: false,
    showClear: false
  },

  methods: {
    onInput: function onInput(event) {
      var _ref = event.detail || {},
          _ref$value = _ref.value,
          value = _ref$value === undefined ? '' : _ref$value;

      this.triggerEvent('input', value);
      this.triggerEvent('change', value);
      this.setData({
        value: value,
        showClear: this.getShowClear({ value: value })
      });
    },
    onFocus: function onFocus(event) {
      this.triggerEvent('focus', event);
      this.setData({
        focused: true,
        showClear: this.getShowClear({ focused: true })
      });
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.triggerEvent('blur', event);
      this.setData({
        focused: false,
        showClear: this.getShowClear({ focused: false })
      });
    },
    onClickIcon: function onClickIcon() {
      this.triggerEvent('click-icon');
    },
    getShowClear: function getShowClear(options) {
      var _options$focused = options.focused,
          focused = _options$focused === undefined ? this.data.focused : _options$focused,
          _options$value = options.value,
          value = _options$value === undefined ? this.data.value : _options$value;


      return this.data.clearable && focused && value !== '' && !this.data.readonly;
    },
    onClear: function onClear() {
      this.setData({
        value: '',
        showClear: this.getShowClear({ value: '' })
      });
      this.triggerEvent('input', '');
      this.triggerEvent('change', '');
    },
    onConfirm: function onConfirm() {
      this.triggerEvent('confirm', this.data.value);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImJlaGF2aW9ycyIsImV4dGVybmFsQ2xhc3NlcyIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwiYWRkR2xvYmFsQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiaWNvbiIsIlN0cmluZyIsImxhYmVsIiwiZXJyb3IiLCJCb29sZWFuIiwiZm9jdXMiLCJjZW50ZXIiLCJpc0xpbmsiLCJsZWZ0SWNvbiIsImRpc2FibGVkIiwiYXV0b3NpemUiLCJyZWFkb25seSIsInJlcXVpcmVkIiwiaWNvbkNsYXNzIiwiY2xlYXJhYmxlIiwibGFiZWxBbGlnbiIsImlucHV0QWxpZ24iLCJjdXN0b21DbGFzcyIsImNvbmZpcm1UeXBlIiwiZXJyb3JNZXNzYWdlIiwicGxhY2Vob2xkZXIiLCJjdXN0b21TdHlsZSIsInVzZUljb25TbG90IiwidXNlQnV0dG9uU2xvdCIsInBsYWNlaG9sZGVyQ2xhc3MiLCJjdXJzb3JTcGFjaW5nIiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwibWF4bGVuZ3RoIiwiYm9yZGVyIiwiZGF0YSIsImZvY3VzZWQiLCJzaG93Q2xlYXIiLCJtZXRob2RzIiwib25JbnB1dCIsImV2ZW50IiwiZGV0YWlsIiwidHJpZ2dlckV2ZW50Iiwic2V0RGF0YSIsImdldFNob3dDbGVhciIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkNsaWNrSWNvbiIsIm9uQ2xlYXIiLCJvbkNvbmZpcm0iXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDUkMsYUFBVyxDQUFDLGlCQUFELENBREg7O0FBR1JDLG1CQUFpQixDQUNmLGFBRGUsQ0FIVDs7QUFPUkMsV0FBUztBQUNQQyxtQkFBZSxJQURSO0FBRVBDLG9CQUFnQjtBQUZULEdBUEQ7O0FBWVJDLGNBQVk7QUFDVkMsVUFBTUMsTUFESTtBQUVWQyxXQUFPRCxNQUZHO0FBR1ZFLFdBQU9DLE9BSEc7QUFJVkMsV0FBT0QsT0FKRztBQUtWRSxZQUFRRixPQUxFO0FBTVZHLFlBQVFI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QWtCLEVBQUVaLE9BQU8sRUFBVCxFQUFsQjtBQUZBLE9BQWI7QUFJQSxXQUFLVSxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLEVBQTNCO0FBQ0EsV0FBS0EsWUFBTCxDQUFrQixRQUFsQixFQUE0QixFQUE1QjtBQUNELEtBaERNO0FBa0RQTyxhQWxETyx1QkFrREs7QUFDVixXQUFLUCxZQUFMLENBQWtCLFNBQWxCLEVBQTZCLEtBQUtQLElBQUwsQ0FBVUgsS0FBdkM7QUFDRDtBQXBETTtBQS9ERCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICBiZWhhdmlvcnM6IFsnd3g6Ly9mb3JtLWZpZWxkJ10sXHJcblxyXG4gIGV4dGVybmFsQ2xhc3NlczogW1xyXG4gICAgJ2lucHV0LWNsYXNzJ1xyXG4gIF0sXHJcblxyXG4gIG9wdGlvbnM6IHtcclxuICAgIG11bHRpcGxlU2xvdHM6IHRydWUsXHJcbiAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZVxyXG4gIH0sXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIGljb246IFN0cmluZyxcclxuICAgIGxhYmVsOiBTdHJpbmcsXHJcbiAgICBlcnJvcjogQm9vbGVhbixcclxuICAgIGZvY3VzOiBCb29sZWFuLFxyXG4gICAgY2VudGVyOiBCb29sZWFuLFxyXG4gICAgaXNMaW5rOiBCb29sZWFuLFxyXG4gICAgbGVmdEljb246IFN0cmluZyxcclxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxyXG4gICAgYXV0b3NpemU6IEJvb2xlYW4sXHJcbiAgICByZWFkb25seTogQm9vbGVhbixcclxuICAgIHJlcXVpcmVkOiBCb29sZWFuLFxyXG4gICAgaWNvbkNsYXNzOiBTdHJpbmcsXHJcbiAgICBjbGVhcmFibGU6IEJvb2xlYW4sXHJcbiAgICBsYWJlbEFsaWduOiBTdHJpbmcsXHJcbiAgICBpbnB1dEFsaWduOiBTdHJpbmcsXHJcbiAgICBjdXN0b21DbGFzczogU3RyaW5nLFxyXG4gICAgY29uZmlybVR5cGU6IFN0cmluZyxcclxuICAgIGVycm9yTWVzc2FnZTogU3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcclxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXHJcbiAgICB1c2VJY29uU2xvdDogQm9vbGVhbixcclxuICAgIHVzZUJ1dHRvblNsb3Q6IEJvb2xlYW4sXHJcbiAgICBwbGFjZWhvbGRlckNsYXNzOiBTdHJpbmcsXHJcbiAgICBjdXJzb3JTcGFjaW5nOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDUwXHJcbiAgICB9LFxyXG4gICAgbWF4bGVuZ3RoOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IC0xXHJcbiAgICB9LFxyXG4gICAgdmFsdWU6IHtcclxuICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgdmFsdWU6ICcnXHJcbiAgICB9LFxyXG4gICAgdHlwZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAndGV4dCdcclxuICAgIH0sXHJcbiAgICBib3JkZXI6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IHRydWVcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBkYXRhOiB7XHJcbiAgICBmb2N1c2VkOiBmYWxzZSxcclxuICAgIHNob3dDbGVhcjogZmFsc2VcclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBvbklucHV0KGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgdmFsdWUgPSAnJyB9ID0gZXZlbnQuZGV0YWlsIHx8IHt9O1xyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnaW5wdXQnLCB2YWx1ZSk7XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjaGFuZ2UnLCB2YWx1ZSk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgc2hvd0NsZWFyOiB0aGlzLmdldFNob3dDbGVhcih7IHZhbHVlIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZvY3VzKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdmb2N1cycsIGV2ZW50KTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmb2N1c2VkOiB0cnVlLFxyXG4gICAgICAgIHNob3dDbGVhcjogdGhpcy5nZXRTaG93Q2xlYXIoeyBmb2N1c2VkOiB0cnVlIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkJsdXIoZXZlbnQpIHtcclxuICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdibHVyJywgZXZlbnQpO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNob3dDbGVhcjogdGhpcy5nZXRTaG93Q2xlYXIoeyBmb2N1c2VkOiBmYWxzZSB9KVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25DbGlja0ljb24oKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjbGljay1pY29uJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFNob3dDbGVhcihvcHRpb25zKSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBmb2N1c2VkID0gdGhpcy5kYXRhLmZvY3VzZWQsXHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLmRhdGEudmFsdWVcclxuICAgICAgfSA9IG9wdGlvbnM7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5kYXRhLmNsZWFyYWJsZSAmJiBmb2N1c2VkICYmIHZhbHVlICE9PSAnJyAmJiAhdGhpcy5kYXRhLnJlYWRvbmx5O1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNsZWFyKCkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICBzaG93Q2xlYXI6IHRoaXMuZ2V0U2hvd0NsZWFyKHsgdmFsdWU6ICcnIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnaW5wdXQnLCAnJyk7XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjaGFuZ2UnLCAnJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29uZmlybSgpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NvbmZpcm0nLCB0aGlzLmRhdGEudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiJdfQ==