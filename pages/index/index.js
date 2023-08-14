// index.js
Component({
    data: {
      mytext:"test",
      image: 'https://tdesign.gtimg.com/miniprogram/images/logo1.png',
      imageSrc: '/source/img1.jpg',
    },
    methods:{
        process: function(){
            wx.navigateTo({
              url: '/pages/page1/page1',
            })
        },
        scanCodeEvent: function(){
            var paperSrc;
            wx.scanCode({
                onlyFromCamera: true,// 只允许从相机扫码
                // 扫码成功后  在此处理接下来的逻辑
                success(res){
                    console.log("扫码成功："+JSON.stringify(res))
                    paperSrc = res.result
                wx.navigateTo({
                  url: '/pages/link/link?paperSrc=' + paperSrc,
                })
                }
            })
        }
    }
  })