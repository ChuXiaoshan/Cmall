const homeUrl = 'https://www.wanandroid.com/article/list/0/json'
const duration = 2000

Page({

  onLoad: function (options) {
    this.makeRequest()
  },

  makeRequest() {
    const self = this

    self.setData({
      loading: true
    })

    wx.request({
      url: homeUrl,
      success(result) {
        const list = result.data.data.datas
        self.setData({
          list
        })
        self.setData({
          loading: false
        })
        console.log('request success', result.data.data.datas);
      },

      fail({
        errMsg
      }) {
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  }
})