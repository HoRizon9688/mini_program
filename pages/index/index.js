// index.js
Component({
    data: {
      mytext:"test",
      image: '/source/logo.png',
      imageSrc: '/source/img4.jpg',
    },
    methods:{
        process: function(){
            // wx.navigateTo({
            //   url: '/pages/page1/page1',
            // })
        },
        scanCodeEvent: function(){
            var paperSrc;
            wx.scanCode({
                onlyFromCamera: true,// 只允许从相机扫码
                // 扫码成功后  在此处理接下来的逻辑
                success(res){
                    console.log("扫码成功："+JSON.stringify(res))
                    paperSrc = res.result
                    // 跨页面传值，paperSrc为对应的题库路径，跳转到link页
                    wx.navigateTo({
                    url: '/pages/link/link?paperSrc=' + paperSrc,
                    })
                }
            })
        },
        choose: function() {
            wx.showActionSheet({
              itemList: ['参观人员', '作业人员'],
              success: function (res) {
                console.log(res)
                // console.log(res.tapIndex)
                if (0 == res.tapIndex) {
                  wx.showToast({
                    title: '参观',
                  })
                } else if (1 == res.tapIndex) {
                  wx.navigateTo({
                    url: '/pages/page1/page1',
                  })
                }
              },
              fail: function (res) {
                console.log(res.errMsg)
              }
            })
          }
    }
  })