
Page({

  data:{
    list:[],
    top:[]
  },


  onLoad: function () {

    this.getData();

  },



  //请求数据
  getData(){
    //var that = this;
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data);

        this.setData({
          list: res.data.stories,
          top:res.data.top_stories
        })
      }
    })

  },


  //去详情页
  goDetail(event){
    var id = event.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../news_detail/news_detail?id=' + id
    })    
  }




})


