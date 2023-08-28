Page({
    data: {
      flag: false,
      inputValue:'',
      mode: '',
      dateVisible: false,
      date: new Date('2023-01-01').getTime(), // 支持时间戳传入
      dateText: '',
      personText: '',
      personValue: [],
      persons:[
          {label:'李泽英', value:'李泽英'},
          {label:'于耀钧', value:'于耀钧'},
          {label:'李栋才', value:'李栋才'},
          {label:'王星跃', value:'王星跃'},
          {label:'王晓雪', value:'王晓雪'},
          {label:'陈泓宇', value:'陈泓宇'}
      ],
      // 指定选择区间起始值
      start: '2000-01-01 00:00:00',
      end: '2030-09-09 12:12:12',
    },
      // 读取并载入缓存
    onShow: function(){
        let userInput = wx.getStorageSync('key')
        let date = wx.getStorageSync('date')
        console.log(userInput)
        console.log(date)
        if (userInput){
            this.setData({
                inputValue: userInput
            })
        }
        if (date){
            this.setData({
                dateText: date
            })
        }
    },
    onPickerConfirm(e){
        const { key } = e.currentTarget.dataset;
        const { value } = e.detail;
        // console.log('picker change:', e.detail.value);
        this.setData({
          [`${key}Visible`]: false,
          [`${key}Value`]: value,
          [`${key}Text`]: value.join(' '),
        });
        console.log(value.toString())
      },
    onPickerCancel(e) {
        const { key } = e.currentTarget.dataset;
        console.log(e, '取消');
        console.log('picker1 cancel:');
        this.setData({
            [`${key}Visible`]: false,
        });
        },
    onPersonPicker() {
        this.setData({ personVisible: true });
        },

    inputChange(e){
        console.log(e)
        console.log(this.data)
        wx.setStorageSync('key',this.data.inputValue)
    },
    submit(){
        console.log(this.data.inputValue)
        console.log(this.data.dateText)
    },
    clear(){
        this.setData({
            inputValue: '',
            dateText:''
        })
        wx.removeStorageSync('key')
        wx.removeStorageSync('date')
    },
    // 导航栏回退处理逻辑
    handleBack() {
        console.log('go back');
    },
    // 日期选择器处理逻辑
    showPicker(e) {
      const { mode } = e.currentTarget.dataset;
      this.setData({
        mode,
        [`${mode}Visible`]: true,
      });
    },
    hidePicker() {
      const { mode } = this.data;
      this.setData({
        [`${mode}Visible`]: false,
      });
    },
    onConfirm(e) {
      const { value } = e.detail;
      const { mode } = this.data;
      console.log('confirm', value);
      this.setData({
        [mode]: value,
        [`${mode}Text`]: value,
      });
      this.hidePicker();
      wx.setStorageSync('date', this.data.dateText)
    },
    onColumnChange(e) {
      console.log('pick', e.detail.value);
    },
  });
  