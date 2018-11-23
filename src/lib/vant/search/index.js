'use strict';

Component({
  externalClasses: ['custom-class', 'cancel-class'],

  options: {
    multipleSlots: true,
    addGlobalClass: true
  },

  properties: {
    disabled: Boolean,
    readonly: Boolean,
    showAction: Boolean,
    useActionSlot: Boolean,
    placeholder: String,
    value: {
      type: String,
      observer: function observer(currentValue) {
        this.setData({ currentValue: currentValue });
      }
    },
    background: {
      type: String,
      value: '#f2f2f2'
    },
    maxlength: {
      type: Number,
      value: -1
    }
  },

  attached: function attached() {
    this.setData({ currentValue: this.data.value });
  },


  methods: {
    onChange: function onChange(event) {
      this.triggerEvent('change', event.detail);
    },
    onCancel: function onCancel() {
      this.setData({ currentValue: '' });
      this.triggerEvent('cancel');
      this.triggerEvent('change', '');
    },
    onSearch: function onSearch() {
      this.triggerEvent('search', this.data.currentValue);
    },
    onFocus: function onFocus() {
      this.triggerEvent('focus');
    },
    onBlur: function onBlur() {
      this.triggerEvent('blur');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwiYWRkR2xvYmFsQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwicmVhZG9ubHkiLCJzaG93QWN0aW9uIiwidXNlQWN0aW9uU2xvdCIsInBsYWNlaG9sZGVyIiwiU3RyaW5nIiwidmFsdWUiLCJ0eXBlIiwib2JzZXJ2ZXIiLCJjdXJyZW50VmFsdWUiLCJzZXREYXRhIiwiYmFja2dyb3VuZCIsIm1heGxlbmd0aCIsIk51bWJlciIsImF0dGFjaGVkIiwiZGF0YSIsIm1ldGhvZHMiLCJvbkNoYW5nZSIsImV2ZW50IiwidHJpZ2dlckV2ZW50IiwiZGV0YWlsIiwib25DYW5jZWwiLCJvblNlYXJjaCIsIm9uRm9jdXMiLCJvbkJsdXIiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDUkMsbUJBQWlCLENBQUMsY0FBRCxFQUFpQixjQUFqQixDQURUOztBQUdSQyxXQUFTO0FBQ1BDLG1CQUFlLElBRFI7QUFFUEMsb0JBQWdCO0FBRlQsR0FIRDs7QUFRUkMsY0FBWTtBQUNWQyxjQUFVQyxPQURBO0FBRVZDLGNBQVVELE9BRkE7QUFHVkUsZ0JBQVlGLE9BSEY7QUFJVkcsbUJBQWVILE9BSkw7QUFLVkksaUJBQWFDLE1BTEg7QUFNVkMsV0FBTztBQUNMQyxZQUFNRixNQUREO0FBRUxHLGNBRkssb0JBRUlDLFlBRkosRUFFa0I7QUFDckIsYUFBS0MsT0FBTCxDQUFhLEVBQUVELDBCQUFGLEVBQWI7QUFDRDtBQUpJLEtBTkc7QUFZVkUsZ0JBQVk7QUFDVkosWUFBTUYsTUFESTtBQUVWQyxhQUFPO0FBRkcsS0FaRjtBQWdCVk0sZUFBVztBQUNUTCxZQUFNTSxNQURHO0FBRVRQLGFBQU8sQ0FBQztBQUZDO0FBaEJELEdBUko7O0FBOEJSUSxVQTlCUSxzQkE4Qkc7QUFDVCxTQUFLSixPQUFMLENBQWEsRUFBRUQsY0FBYyxLQUFLTSxJQUFMLENBQVVULEtBQTFCLEVBQWI7QUFDRCxHQWhDTzs7O0FBa0NSVSxXQUFTO0FBQ1BDLFlBRE8sb0JBQ0VDLEtBREYsRUFDUztBQUNkLFdBQUtDLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEJELE1BQU1FLE1BQWxDO0FBQ0QsS0FITTtBQUtQQyxZQUxPLHNCQUtJO0FBQ1QsV0FBS1gsT0FBTCxDQUFhLEVBQUVELGNBQWMsRUFBaEIsRUFBYjtBQUNBLFdBQUtVLFlBQUwsQ0FBa0IsUUFBbEI7QUFDQSxXQUFLQSxZQUFMLENBQWtCLFFBQWxCLEVBQTRCLEVBQTVCO0FBQ0QsS0FUTTtBQVdQRyxZQVhPLHNCQVdJO0FBQ1QsV0FBS0gsWUFBTCxDQUFrQixRQUFsQixFQUE0QixLQUFLSixJQUFMLENBQVVOLFlBQXRDO0FBQ0QsS0FiTTtBQWVQYyxXQWZPLHFCQWVHO0FBQ1IsV0FBS0osWUFBTCxDQUFrQixPQUFsQjtBQUNELEtBakJNO0FBbUJQSyxVQW5CTyxvQkFtQkU7QUFDUCxXQUFLTCxZQUFMLENBQWtCLE1BQWxCO0FBQ0Q7QUFyQk07QUFsQ0QsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2N1c3RvbS1jbGFzcycsICdjYW5jZWwtY2xhc3MnXSxcclxuXHJcbiAgb3B0aW9uczoge1xyXG4gICAgbXVsdGlwbGVTbG90czogdHJ1ZSxcclxuICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlXHJcbiAgfSxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICByZWFkb25seTogQm9vbGVhbixcclxuICAgIHNob3dBY3Rpb246IEJvb2xlYW4sXHJcbiAgICB1c2VBY3Rpb25TbG90OiBCb29sZWFuLFxyXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgb2JzZXJ2ZXIoY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgY3VycmVudFZhbHVlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnI2YyZjJmMidcclxuICAgIH0sXHJcbiAgICBtYXhsZW5ndGg6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogLTFcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7IGN1cnJlbnRWYWx1ZTogdGhpcy5kYXRhLnZhbHVlIH0pO1xyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjaGFuZ2UnLCBldmVudC5kZXRhaWwpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNhbmNlbCgpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHsgY3VycmVudFZhbHVlOiAnJyB9KTtcclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NhbmNlbCcpO1xyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJywgJycpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblNlYXJjaCgpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ3NlYXJjaCcsIHRoaXMuZGF0YS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZvY3VzKCkge1xyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnZm9jdXMnKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25CbHVyKCkge1xyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnYmx1cicpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiJdfQ==