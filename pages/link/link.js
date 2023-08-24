Page({
    // 接收传来的paperSrc，在本页面中打开这个链接
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