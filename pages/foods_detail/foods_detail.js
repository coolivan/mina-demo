// pages/detail/detail.js

const config = require('../../utils/config');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:[],
    host: config.host
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);

    this.getDetail(options.id);
  },

  getDetail(id){

    var api = this.data.host + "api/productcontent?id=" + id;
    wx.request({
      url: api, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res =>{
        console.log(res.data);

        var detail = res.data.result[0];
        detail.img_url = detail.img_url.replace(/\\/g,'/');
        detail.content = detail.content.replace(/<.*?>/ig, "");

        //var title = detail.title;

        wx.setNavigationBarTitle({ title: detail.title });

        this.setData({
          detail: detail
        })
      }
    })

  }

})