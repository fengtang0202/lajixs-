import wepy from 'wepy'
export default class TouchMixin  extends wepy.mixin{
    data = {
      items: [],  
      startX: 0, 
      startY: 0
    }
    initItems(items) {
     if(items){
         items.forEach(el => {
           el.isTouchMove = false
         });
     }
    }
    angle(start, end) {
    var _X = end.X - start.X,
        _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
    }
    methods = {
      touchstart: function (e) {
        //开始触摸时 重置所有删除
        this.initItems(this.items)
        this.startX = e.changedTouches[0].clientX
        this.startY = e.changedTouches[0].clientY
      },
      touchmove(e) {
        var that = this,
          index = e.currentTarget.dataset.index, //当前索引
          startX = that.data.startX, //开始X坐标
          startY = that.data.startY, //开始Y坐标
          touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
          touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
          //获取滑动角度
          angle = that.angle({
            X: startX,
            Y: startY
          }, {
            X: touchMoveX,
            Y: touchMoveY
          });
        that.data.items.forEach(function (v, i) {
          v.isTouchMove = false
          //滑动超过30度角 return
          if (Math.abs(angle) > 30) return;
          if (i == index) {
            if (touchMoveX > startX) //右滑
              v.isTouchMove = false
            else //左滑
              v.isTouchMove = true
          }
        })
        //更新数据
        that.setData({
          items: that.items
        })
      }
      //删除事件
     
    }
}
