// pages/stories/stories.js
Page({

  /**
   * Page initial data
   */
  data: {
    batch: "#272",
    fav_restos: [
      {name: "Sichuan Citizen", address: "Jing'an"},
      {name: "Bull and Claw", address: "Xuhui"},
      {name: "Mr & Ms Bund", address: "Bund"},
    ],
    loggedIn: false
  },

  logIn: function(e) {
    this.setData({loggedIn: !this.data.loggedIn})
  },

  // the function called by the getUserInfo button
  getUserInfo: function(e) {
    console.log(e)
  },

  

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({userInfo: getApp().globalData.userInfo})
    this.setData({posts: getApp().globalData.posts})
  },

  // ***NOTE*** ES6 syntax! You can use any you prefer :)
  goToNew: e => {
    wx.switchTab({
      url: '/pages/new/new',
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    console.log("Ready")
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    this.setData({batch: "#274"})
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {
    console.log("Hiding")
  },
  testFunction: function () {
   
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