// index.js
Component({
    data: {
      mytext:"test",
      image: 'https://tdesign.gtimg.com/miniprogram/images/logo1.png',
      imageSrc: '/source/img1.jpg'
    },
    methods:{
        process: function(){
            wx.navigateTo({
              url: '/pages/page1/page1',
            })
        }
    }
  })