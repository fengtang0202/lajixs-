// sign

// 签名
import wepy from 'wepy'
function sign(signObj = {}) {
    // 自行加密
    return signObj
}

// GET请求
function GET(requestHandler, isShowLoading) {
    return request('GET', sign(requestHandler), isShowLoading)
}

// POST请求
 function POST(requestHandler, isShowLoading) {
    return  request('POST', sign(requestHandler), isShowLoading)
}

function request(method, requestHandler, isShowLoading = true) {
    // 加密
    let params = requestHandler.params
    isShowLoading && wx.showLoading && wx.showLoading({ title: '加载中...' })
    return new Promise((resolve, reject) => {
        wx.request({
            url: requestHandler.url,
            data: params,
            method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {
                'Content-Type': method === 'POST' ? 'application/x-www-form-urlencoded' : 'application/json'
            },
            success: function (res) {
                isShowLoading && wx.hideLoading && wx.hideLoading()
                // 解密
                if (res.data.returnCode==200) {
                    resolve(res.data.data)
                } else if(res.data.returnCode==400) {
                    if (res.data.data) {
                        resolve(res.data.data)
                    }else{
                        wx.showToast({
                          title: res.data.msg
                        })
                    }
                } else if(res.data.returnCode==1000){
                    wx.showToast({
                      title: '服务器异常',
                      duration:1500
                    })
                } else if (res.data.returnCode==2000) {
                    // wx.showToast({
                    //   title: '书籍已被删除'
                    // })                       
                }else{
                    // reject(res.data.data)
                    throw new Error('Network request success but data state not success')
                }
            },
            fail: function () {
                // 因为hide会让showToast隐藏
                isShowLoading && wx.hideLoading && wx.hideLoading()
                wx.showToast({
                    title: '网络断开',
                    icon: 'success',
                    // image: '../style/images/toast_info.png',
                    duration: 1500
                })
                // reject(new Error('Network request failed'))
                throw new Error('Network request failed')
            },
            complete: function () {
            }
        })
    })

}

module.exports = {
    get: GET,
    post: POST
}
