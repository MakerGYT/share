// components/share/share.js
Component({
  /**
   * Component properties
   */
  properties: {
    palette: {
      type: Object
    },
    show: {
      type: Boolean,
      value:false
    },
    maskClosable: {
      type: Boolean,
      value: true
    },
    mask: {
      type: Boolean,
      value: true
    },
  },

  /**
   * Component methods
   */
  methods: {
    toMoments: function toMoments() {
      this.setData({
        loading: true
      });
      this.triggerEvent('setPoster');
    },
    tofriends: function tofriends() {
      this.setData({
        show: false,
      })
    },
    onImgOK:function onImgOK(e) {
      this.setData({
        show: false,
        loading: false,
        showPoster: true,
        poster: e.detail.path
      })
    },
    save:function save(){
      let that = this;
      wx.saveImageToPhotosAlbum({
        filePath: that.data.poster,
        success: res=> {
          wx.showToast({
            title: '已保存到相册',
          })
          that.setData({
            showPoster: false
          })
        }
      })
      this.triggerEvent('closePoster');
    },
    onShareCancel: function onShareCandel() {
      this.setData({
        showPoster: false
      });
      this.triggerEvent('closePoster');
    },
    close: function close(e) {
      if (this.data.maskClosable) {
        this.setData({
          show: false
        });
        this.triggerEvent('close');
      }
    }
  }
})
