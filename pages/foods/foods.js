const config = require('../../utils/config');


// console.log(config);

Page({

  data: {
    list: [],
    host: config.host
  },


  onLoad: function () {

    this.getData();

  },



  //请求数据
  getData() {
    //var that = this;
    wx.request({
      url: this.data.host + 'api/productlist', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data);

        var arr = res.data.result;
        for (var i = 0; i < arr.length; i++) {
          for (var j = 0; j < arr[i].list.length; j++) {
            arr[i].list[j].img_url = arr[i].list[j].img_url.replace(/\\/g, '/')
          }
        }

        this.setData({
          list: arr
        })
      }
    })

  },
  //去详情页
  goDetail(event) {
    var id = event.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../foods_detail/foods_detail?id=' + id
    })
  }




})



