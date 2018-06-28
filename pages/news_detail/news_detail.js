// pages/news_detail/news_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);

    this.getDetail(options.id);    
  },

  getDetail(id) {

    var api = "https://news-at.zhihu.com/api/4/news/" + id;
    wx.request({
      url: api, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        // console.log(res.data);

        var detail = res.data;
        // detail.img_url = detail.img_url.replace(/\\/g, '/');
        detail.body = detail.body.replace(/<script.*?>.*?<\/script>/ig, '').replace(/<.*?>/ig, "");





        wx.setNavigationBarTitle({ title: detail.title });

        this.setData({
          detail: detail
        })
      }
    })

  }  
})