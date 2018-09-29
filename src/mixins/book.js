import wepy from 'wepy'
import {addBookRack} from '../config/getData'
import Toast from '../lib/vant/toast/index'
export default class TouchMixin extends wepy.mixin {
        async handleAddBookRack() {
          if (!wx.getStorageSync('userInfo')) {
            this.$invoke('Login', 'onClose')
            return;
          }
          var data = await addBookRack(wx.getStorageSync('userInfo').pseudonym, this.bookId, this.bookName)
          if (data) {
            if (this.collectionStatus == 0) {
              this.collectionStatus = 1
              this.type&&(this.rightList[2] = '已在书架')
              Toast('添加成功~')
              this.$apply()
            } else {
              this.collectionStatus = 0
              this.type && (this.rightList[2] = '加入书架')
              Toast('删除成功~')
              this.$apply()
            }
          }
        }
        onShow(){

        }
}