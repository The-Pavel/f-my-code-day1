// pages/show/show.js
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
      success: function(res) {
        page.setData({story: res.data.story, comments: res.data.comments})
      }
    })
  },

  goToEdit: function(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/edit/edit?id=${id}`,
    })
  },

  deleteStory: function(e) {
    let id = e.currentTarget.dataset.id
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${id}`,
      method: 'DELETE',
      success: (res) => {
        wx.reLaunch({
          url: '/pages/stories/stories',
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