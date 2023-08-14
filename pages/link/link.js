Page({
    data:{
        paperSrc:''
    },
    onLoad: function (options) {
        this.setData({
          paperSrc:options.paperSrc
        })
        console.log(this.data.paperSrc)
      },
})