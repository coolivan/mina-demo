// pages/news_detail/news_detail.js

var api = require('../../utils/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);

    this.getData(options.id);


  },

  getData(id) {
    api.getDetail(id)
      .then(res => {
        console.log(res);

        var detail = {
          title: res.title,
          cover: res.images.large,
          score: res.rating.average,
          reviews: res.reviews_count,
          summary: res.summary,
          countries: res.countries.toString('/,/g', '/'),
          year: res.year,
          genres: res.genres.toString('/,/g', '/'),
          casts: res.casts[0].name,
          directors: res.directors[0].name
        }

        wx.setNavigationBarTitle({ title: detail.title });

        this.setData({
          detail:detail
        })
      })



  }



})