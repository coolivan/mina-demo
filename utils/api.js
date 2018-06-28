// var API_URI = 'https://api.douban.com/v2/movie';
var API_URI = 'https://douban.uieee.com/v2/movie';

function fetchApi(type,params){
  return new Promise((resolve,reject) => {
    wx.request({
      url: `${API_URI}/${type}`,
      data:params,
      header:{
        'content-type':'json'
      },
      success:resolve,
      fail:reject
    })
  })
}

//电影列表数据转换
function convertJson(items) {
  var newItems = [];
  items.forEach(function (item) {
    var genres = item.genres.toString().replace(/,/g, ' / ');
    var directors = '';
    for (var i = 0; i < item.directors.length; i++) {
      directors += item.directors[i].name;
      if (i != item.directors.length - 1) {
        directors += ' / '
      }
    }
    var casts = '';
    for (var i = 0; i < item.casts.length; i++) {
      casts += item.casts[i].name;
      if (i != item.casts.length - 1) {
        casts += ' / '
      }
    }
    newItems.push({
      id: item.id,
      title: item.title,
      cover: item.images.large,
      score: item.rating.average,
      genres: genres,
      directors: directors,
      casts: casts,
      year:item.year

    })
  });
  return newItems;
}


module.exports = {
  getList:function(type,page=0,count=20){
    return fetchApi(type,{"start":page*count,"count":count})
          .then(res=>res.data)
  },
  getDetail:function(id){
    return fetchApi('/subject/'+id)
          .then(res=>res.data)
  },
  convertJson: convertJson
}