// pages/edit/edit.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this
    let id = options.id
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${id}`,
      success: function (res) {
        page.setData({ story: res.data.story })
      }
    })
  },

  submitForm: function (e) {
    let id =  this.data.story.id
    let name = e.detail.value.name
    let text = e.detail.value.text
    let story = { name: name, text: text }
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${id}`,
      method: 'PUT',
      data: story,
      success: function (res) {
        console.log(res)
        wx.redirectTo({
          url: `/pages/show/show?id=${id}`,
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})