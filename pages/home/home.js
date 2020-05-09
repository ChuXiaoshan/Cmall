const homeUrl = 'https://www.wanandroid.com/article/list'
const duration = 2000

Page({

  data: {
    page: 0,
    list: []
  },

  onLoad: function (options) {
    this.makeRequest(this.data.page)
  },

  onReachBottom: function () {
    console.log('reach bottom');
  },

  goToWebView: function (e) {
    const i = parseInt(e.currentTarget.dataset.index)
    wx.navigateTo({
      url: '../webview/webview?url='+ this.data.list[i].link,
    })
  },

  makeRequest(page) {
    const self = this

    self.setData({
      loading: true
    })

    wx.request({
      url: homeUrl + '/' + page + '/json',
      success(result) {
        const list = result.data.data.datas
        self.setData({
          list : list
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