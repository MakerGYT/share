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
			let path = e.detail.path;
      this.setData({
        show: false,
        loading: false,
				poster: path
      },()=> {
        this.triggerEvent('showPoster',{
          path: path
        });
        this.setData({
          showPoster: true,
        })
      })

    },
    save:function save(){
      let that = this;
      wx.saveImageToPhotosAlbum({
        filePath: that.data.poster,
        success: res=> {
          that.setData({
            showPoster: false
          })
					that.triggerEvent('closePoster',{
						saved:true
					});
        }
      })
      
    },
    onShareCancel: function onShareCandel() {
      this.setData({
        showPoster: false
      });
			
      this.triggerEvent('closePoster',{
				saved:false
			});
    },
    close: function close(e) {
      if (this.data.maskClosable) {
        this.setData({
          show: false,
          loading: false,
        });
        this.triggerEvent('close')
      }
    },
    preventdefault:function() {
      
    },
  }
})
