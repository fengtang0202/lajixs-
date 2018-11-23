'use strict';

Component({
  externalClasses: ['custom-class', 'title-class', 'label-class', 'value-class', 'left-icon-class', 'right-icon-class'],

  options: {
    multipleSlots: true,
    addGlobalClass: true
  },

  properties: {
    title: null,
    value: null,
    url: String,
    icon: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    titleWidth: String,
    customStyle: String,
    arrowDirection: String,
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    border: {
      type: Boolean,
      value: true
    }
  },

  methods: {
    onClick: function onClick() {
      var url = this.data.url;

      if (url) {
        wx[this.data.linkType]({ url: url });
      }
      this.triggerEvent('click');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwiYWRkR2xvYmFsQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJ2YWx1ZSIsInVybCIsIlN0cmluZyIsImljb24iLCJsYWJlbCIsImNlbnRlciIsIkJvb2xlYW4iLCJpc0xpbmsiLCJyZXF1aXJlZCIsImNsaWNrYWJsZSIsInRpdGxlV2lkdGgiLCJjdXN0b21TdHlsZSIsImFycm93RGlyZWN0aW9uIiwibGlua1R5cGUiLCJ0eXBlIiwiYm9yZGVyIiwibWV0aG9kcyIsIm9uQ2xpY2siLCJkYXRhIiwid3giLCJ0cmlnZ2VyRXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDUkMsbUJBQWlCLENBQ2YsY0FEZSxFQUVmLGFBRmUsRUFHZixhQUhlLEVBSWYsYUFKZSxFQUtmLGlCQUxlLEVBTWYsa0JBTmUsQ0FEVDs7QUFVUkMsV0FBUztBQUNQQyxtQkFBZSxJQURSO0FBRVBDLG9CQUFnQjtBQUZULEdBVkQ7O0FBZVJDLGNBQVk7QUFDVkMsV0FBTyxJQURHO0FBRVZDLFdBQU8sSUFGRztBQUdWQyxTQUFLQyxNQUhLO0FBSVZDLFVBQU1ELE1BSkk7QUFLVkUsV0FBT0YsTUFMRztBQU1WRyxZQUFRQyxPQU5FO0FBT1ZDLFlBQVFELE9BUEU7QUFRVkUsY0FBVUYsT0FSQTtBQVNWRyxlQUFXSCxPQVREO0FBVVZJLGdCQUFZUixNQVZGO0FBV1ZTLGlCQUFhVCxNQVhIO0FBWVZVLG9CQUFnQlYsTUFaTjtBQWFWVyxjQUFVO0FBQ1JDLFlBQU1aLE1BREU7QUFFUkYsYUFBTztBQUZDLEtBYkE7QUFpQlZlLFlBQVE7QUFDTkQsWUFBTVIsT0FEQTtBQUVOTixhQUFPO0FBRkQ7QUFqQkUsR0FmSjs7QUFzQ1JnQixXQUFTO0FBQ1BDLFdBRE8scUJBQ0c7QUFBQSxVQUNBaEIsR0FEQSxHQUNRLEtBQUtpQixJQURiLENBQ0FqQixHQURBOztBQUVSLFVBQUlBLEdBQUosRUFBUztBQUNQa0IsV0FBRyxLQUFLRCxJQUFMLENBQVVMLFFBQWIsRUFBdUIsRUFBRVosUUFBRixFQUF2QjtBQUNEO0FBQ0QsV0FBS21CLFlBQUwsQ0FBa0IsT0FBbEI7QUFDRDtBQVBNO0FBdENELENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gIGV4dGVybmFsQ2xhc3NlczogW1xyXG4gICAgJ2N1c3RvbS1jbGFzcycsXHJcbiAgICAndGl0bGUtY2xhc3MnLFxyXG4gICAgJ2xhYmVsLWNsYXNzJyxcclxuICAgICd2YWx1ZS1jbGFzcycsXHJcbiAgICAnbGVmdC1pY29uLWNsYXNzJyxcclxuICAgICdyaWdodC1pY29uLWNsYXNzJ1xyXG4gIF0sXHJcblxyXG4gIG9wdGlvbnM6IHtcclxuICAgIG11bHRpcGxlU2xvdHM6IHRydWUsXHJcbiAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZVxyXG4gIH0sXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIHRpdGxlOiBudWxsLFxyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB1cmw6IFN0cmluZyxcclxuICAgIGljb246IFN0cmluZyxcclxuICAgIGxhYmVsOiBTdHJpbmcsXHJcbiAgICBjZW50ZXI6IEJvb2xlYW4sXHJcbiAgICBpc0xpbms6IEJvb2xlYW4sXHJcbiAgICByZXF1aXJlZDogQm9vbGVhbixcclxuICAgIGNsaWNrYWJsZTogQm9vbGVhbixcclxuICAgIHRpdGxlV2lkdGg6IFN0cmluZyxcclxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXHJcbiAgICBhcnJvd0RpcmVjdGlvbjogU3RyaW5nLFxyXG4gICAgbGlua1R5cGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ25hdmlnYXRlVG8nXHJcbiAgICB9LFxyXG4gICAgYm9yZGVyOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25DbGljaygpIHtcclxuICAgICAgY29uc3QgeyB1cmwgfSA9IHRoaXMuZGF0YTtcclxuICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgIHd4W3RoaXMuZGF0YS5saW5rVHlwZV0oeyB1cmwgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NsaWNrJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl19