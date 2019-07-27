// pages/stories/stories.js
Page({

  /**
   * Page initial data
   */
  data: {
    
    loggedIn: false
  },

  logIn: function(e) {
    this.setData({loggedIn: !this.data.loggedIn})
  },

  // the function called by the getUserInfo button
  getUserInfo: function(e) {
  
  },

  
  
  /**
   * Lifecycle function--Called when page load
   */

  onLoad: function (options) {
    let page = this // context is the Page
    this.setData({userInfo: getApp().globalData.userInfo})
    wx.request({
      url: 'http://localhost:3000/api/v1/stories',
      success: function(res) {
        console.log(res)
        page.setData({stories: res.data.stories})
      }
    })
  },

  // ***NOTE*** ES6 syntax! You can use any you prefer :)
  goToNew: e => {
    wx.switchTab({
      url: '/pages/new/new',
    })
  },


  goToShow: function (event) {
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
  },
  // OUR LOGIC IN THE SHOW.JS FILE
  // onLoad: function (options) {
  //   let page = this
  //   let id = options.id
  //   wx.request({
  //     url: `http://localhost:3000/api/v1/stories/${id}`,
  //     .....
  // },

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