// pages/movies/movies.js
var api = require('../../utils/api.js');

console.log(api);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:0,
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(this.data.page)

  },

  //拉取数据
  getData:function(page){
    api.getList('in_theaters',page)
      .then(res=>{
        // console.log(res.subjects);

        this.setData({
          list: api.convertJson(res.subjects),

        })
      })
  },

  //去详情页
  goDetail(event) {
    
    var id = event.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../movies_detail/movies_detail?id=' + id
    })
  }







})