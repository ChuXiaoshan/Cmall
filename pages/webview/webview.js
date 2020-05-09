Page({

  data: {
    url: ""
  },

  onLoad: function (options) {
    this.setData({
      url: options.url
    })
    console.log(options.url);
  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  }
})