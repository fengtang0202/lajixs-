'use strict';

Component({
  options: {
    addGlobalClass: true
  },

  properties: {
    show: Boolean,
    mask: Boolean,
    customStyle: String,
    zIndex: {
      type: Number,
      value: 1
    }
  },

  methods: {
    onClick: function onClick() {
      this.triggerEvent('click');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIm9wdGlvbnMiLCJhZGRHbG9iYWxDbGFzcyIsInByb3BlcnRpZXMiLCJzaG93IiwiQm9vbGVhbiIsIm1hc2siLCJjdXN0b21TdHlsZSIsIlN0cmluZyIsInpJbmRleCIsInR5cGUiLCJOdW1iZXIiLCJ2YWx1ZSIsIm1ldGhvZHMiLCJvbkNsaWNrIiwidHJpZ2dlckV2ZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ1JDLFdBQVM7QUFDUEMsb0JBQWdCO0FBRFQsR0FERDs7QUFLUkMsY0FBWTtBQUNWQyxVQUFNQyxPQURJO0FBRVZDLFVBQU1ELE9BRkk7QUFHVkUsaUJBQWFDLE1BSEg7QUFJVkMsWUFBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRDtBQUpFLEdBTEo7O0FBZVJDLFdBQVM7QUFDUEMsV0FETyxxQkFDRztBQUNSLFdBQUtDLFlBQUwsQ0FBa0IsT0FBbEI7QUFDRDtBQUhNO0FBZkQsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgb3B0aW9uczoge1xyXG4gICAgYWRkR2xvYmFsQ2xhc3M6IHRydWVcclxuICB9LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBzaG93OiBCb29sZWFuLFxyXG4gICAgbWFzazogQm9vbGVhbixcclxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXHJcbiAgICB6SW5kZXg6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjbGljaycpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiJdfQ==