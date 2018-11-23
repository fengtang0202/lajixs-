'use strict';

Component({
  options: {
    addGlobalClass: true
  },

  externalClasses: ['custom-class'],

  properties: {
    customStyle: String,
    show: {
      value: true,
      type: Boolean,
      observer: function observer(value) {
        if (value) {
          this.show();
        } else {
          this.setData({
            type: 'leave'
          });
        }
      }
    },
    name: {
      type: String,
      value: 'fade'
    },
    duration: {
      type: Number,
      value: 300
    }
  },

  data: {
    type: '',
    inited: false,
    display: false
  },

  attached: function attached() {
    if (this.data.show) {
      this.show();
    }
  },


  methods: {
    show: function show() {
      this.setData({
        inited: true,
        display: true,
        type: 'enter'
      });
    },
    onAnimationEnd: function onAnimationEnd() {
      if (!this.data.show) {
        this.setData({
          display: false
        });
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIm9wdGlvbnMiLCJhZGRHbG9iYWxDbGFzcyIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJjdXN0b21TdHlsZSIsIlN0cmluZyIsInNob3ciLCJ2YWx1ZSIsInR5cGUiLCJCb29sZWFuIiwib2JzZXJ2ZXIiLCJzZXREYXRhIiwibmFtZSIsImR1cmF0aW9uIiwiTnVtYmVyIiwiZGF0YSIsImluaXRlZCIsImRpc3BsYXkiLCJhdHRhY2hlZCIsIm1ldGhvZHMiLCJvbkFuaW1hdGlvbkVuZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFBVTtBQUNSQyxXQUFTO0FBQ1BDLG9CQUFnQjtBQURULEdBREQ7O0FBS1JDLG1CQUFpQixDQUFDLGNBQUQsQ0FMVDs7QUFPUkMsY0FBWTtBQUNWQyxpQkFBYUMsTUFESDtBQUVWQyxVQUFNO0FBQ0pDLGFBQU8sSUFESDtBQUVKQyxZQUFNQyxPQUZGO0FBR0pDLGNBSEksb0JBR0tILEtBSEwsRUFHWTtBQUNkLFlBQUlBLEtBQUosRUFBVztBQUNULGVBQUtELElBQUw7QUFDRCxTQUZELE1BRU87QUFDTCxlQUFLSyxPQUFMLENBQWE7QUFDWEgsa0JBQU07QUFESyxXQUFiO0FBR0Q7QUFDRjtBQVhHLEtBRkk7QUFlVkksVUFBTTtBQUNKSixZQUFNSCxNQURGO0FBRUpFLGFBQU87QUFGSCxLQWZJO0FBbUJWTSxjQUFVO0FBQ1JMLFlBQU1NLE1BREU7QUFFUlAsYUFBTztBQUZDO0FBbkJBLEdBUEo7O0FBZ0NSUSxRQUFNO0FBQ0pQLFVBQU0sRUFERjtBQUVKUSxZQUFRLEtBRko7QUFHSkMsYUFBUztBQUhMLEdBaENFOztBQXNDUkMsVUF0Q1Esc0JBc0NHO0FBQ1QsUUFBSSxLQUFLSCxJQUFMLENBQVVULElBQWQsRUFBb0I7QUFDbEIsV0FBS0EsSUFBTDtBQUNEO0FBQ0YsR0ExQ087OztBQTRDUmEsV0FBUztBQUNQYixRQURPLGtCQUNBO0FBQ0wsV0FBS0ssT0FBTCxDQUFhO0FBQ1hLLGdCQUFRLElBREc7QUFFWEMsaUJBQVMsSUFGRTtBQUdYVCxjQUFNO0FBSEssT0FBYjtBQUtELEtBUE07QUFTUFksa0JBVE8sNEJBU1U7QUFDZixVQUFJLENBQUMsS0FBS0wsSUFBTCxDQUFVVCxJQUFmLEVBQXFCO0FBQ25CLGFBQUtLLE9BQUwsQ0FBYTtBQUNYTSxtQkFBUztBQURFLFNBQWI7QUFHRDtBQUNGO0FBZk07QUE1Q0QsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgb3B0aW9uczoge1xyXG4gICAgYWRkR2xvYmFsQ2xhc3M6IHRydWVcclxuICB9LFxyXG5cclxuICBleHRlcm5hbENsYXNzZXM6IFsnY3VzdG9tLWNsYXNzJ10sXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXHJcbiAgICBzaG93OiB7XHJcbiAgICAgIHZhbHVlOiB0cnVlLFxyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBvYnNlcnZlcih2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdsZWF2ZSdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ2ZhZGUnXHJcbiAgICB9LFxyXG4gICAgZHVyYXRpb246IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMzAwXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZGF0YToge1xyXG4gICAgdHlwZTogJycsXHJcbiAgICBpbml0ZWQ6IGZhbHNlLFxyXG4gICAgZGlzcGxheTogZmFsc2VcclxuICB9LFxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuc2hvdykge1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBzaG93KCkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGluaXRlZDogdHJ1ZSxcclxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgIHR5cGU6ICdlbnRlcidcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQW5pbWF0aW9uRW5kKCkge1xyXG4gICAgICBpZiAoIXRoaXMuZGF0YS5zaG93KSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXX0=