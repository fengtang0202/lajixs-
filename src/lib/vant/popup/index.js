'use strict';

Component({
  options: {
    addGlobalClass: true
  },

  externalClasses: ['custom-class', 'overlay-class'],

  properties: {
    show: Boolean,
    overlayStyle: String,
    overlay: {
      type: Boolean,
      value: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    },
    position: {
      type: String,
      value: 'center'
    }
  },

  methods: {
    onClickOverlay: function onClickOverlay() {
      this.triggerEvent('click-overlay');

      if (this.data.closeOnClickOverlay) {
        this.triggerEvent('close');
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIm9wdGlvbnMiLCJhZGRHbG9iYWxDbGFzcyIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJzaG93IiwiQm9vbGVhbiIsIm92ZXJsYXlTdHlsZSIsIlN0cmluZyIsIm92ZXJsYXkiLCJ0eXBlIiwidmFsdWUiLCJjbG9zZU9uQ2xpY2tPdmVybGF5IiwicG9zaXRpb24iLCJtZXRob2RzIiwib25DbGlja092ZXJsYXkiLCJ0cmlnZ2VyRXZlbnQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ1JDLFdBQVM7QUFDUEMsb0JBQWdCO0FBRFQsR0FERDs7QUFLUkMsbUJBQWlCLENBQ2YsY0FEZSxFQUVmLGVBRmUsQ0FMVDs7QUFVUkMsY0FBWTtBQUNWQyxVQUFNQyxPQURJO0FBRVZDLGtCQUFjQyxNQUZKO0FBR1ZDLGFBQVM7QUFDUEMsWUFBTUosT0FEQztBQUVQSyxhQUFPO0FBRkEsS0FIQztBQU9WQyx5QkFBcUI7QUFDbkJGLFlBQU1KLE9BRGE7QUFFbkJLLGFBQU87QUFGWSxLQVBYO0FBV1ZFLGNBQVU7QUFDUkgsWUFBTUYsTUFERTtBQUVSRyxhQUFPO0FBRkM7QUFYQSxHQVZKOztBQTJCUkcsV0FBUztBQUNQQyxrQkFETyw0QkFDVTtBQUNmLFdBQUtDLFlBQUwsQ0FBa0IsZUFBbEI7O0FBRUEsVUFBSSxLQUFLQyxJQUFMLENBQVVMLG1CQUFkLEVBQW1DO0FBQ2pDLGFBQUtJLFlBQUwsQ0FBa0IsT0FBbEI7QUFDRDtBQUNGO0FBUE07QUEzQkQsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgb3B0aW9uczoge1xyXG4gICAgYWRkR2xvYmFsQ2xhc3M6IHRydWVcclxuICB9LFxyXG5cclxuICBleHRlcm5hbENsYXNzZXM6IFtcclxuICAgICdjdXN0b20tY2xhc3MnLFxyXG4gICAgJ292ZXJsYXktY2xhc3MnXHJcbiAgXSxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgc2hvdzogQm9vbGVhbixcclxuICAgIG92ZXJsYXlTdHlsZTogU3RyaW5nLFxyXG4gICAgb3ZlcmxheToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGNsb3NlT25DbGlja092ZXJsYXk6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0sXHJcbiAgICBwb3NpdGlvbjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnY2VudGVyJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uQ2xpY2tPdmVybGF5KCkge1xyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2xpY2stb3ZlcmxheScpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZGF0YS5jbG9zZU9uQ2xpY2tPdmVybGF5KSB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2Nsb3NlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXX0=