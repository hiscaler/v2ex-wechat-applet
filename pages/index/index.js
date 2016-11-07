//index.js
//获取应用实例
var app = getApp(),
  requests = require('../../utils/request.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    nodes: {},
    topics: []
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 最热主题
  getHots: function () {
    var _this = this;
    requests.requestHots({}, (data) => {
      console.info
      _this.setData({ topics: data });
    }, () => {
      _this.setData({ topics: [] });
    }, () => {
      console.info('Call completed.');
    });
  },
  getLatest: function () {
    var _this = this;
    requests.requestLatest({}, (data) => {
      console.info
      _this.setData({ topics: data });
    }, () => {
      _this.setData({ topics: [] });
    }, () => {
      console.info('Call completed.');
    });
  },
  // 查看详情
  toDetailPage: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
