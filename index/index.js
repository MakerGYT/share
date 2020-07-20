import Poster from 'poster.js';
Page({
  data: {
    shareShow: false
  },
  toShare: function(e) {
    this.setData({
      shareShow: true
    })
  },
  toMoments: function () {
    this.setData({
      palette: new Poster().palette()
    })
  },
})