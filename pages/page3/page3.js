import Message from 'tdesign-miniprogram/message/index';
Page({
    data: {
      flag: false,
      inputProject:'',
      inputCompany:'',
      inputLeader:'',
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
        let user_project = wx.getStorageSync('project')
        let user_company = wx.getStorageSync('company')
        let user_leader = wx.getStorageSync('leader')
        let user_date = wx.getStorageSync('date')
        let user_person = wx.getStorageSync('person')
        let user_flag = wx.getStorageSync('flag')
        // console.log(user_project)
        // console.log(user_company)
        // console.log(user_leader)
        // console.log(user_date)
        if (user_project){
            this.setData({
                inputProject: user_project
            })
        }
        if (user_company){
            this.setData({
                inputCompany: user_company
            })
        }
        if (user_leader){
            this.setData({
                inputLeader: user_leader
            })
        }
        if (user_date){
            this.setData({
                dateText: user_date
            })
        }
        if (user_person){
            this.setData({
                personText: user_person
            })
        }
        if (user_flag){
            this.setData({
                flag: user_flag
            })
        }
    },
    showPersonPicker() {
        if(this.data.flag == true){
            console.log("交底人不允许修改")
        }
        else{
            this.setData({ personVisible: true });
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
        console.log(this.data.personText)
        wx.setStorageSync('person', this.data.personText)
      },
    onPickerCancel(e) {
        const { key } = e.currentTarget.dataset;
        console.log(e, '取消');
        console.log('picker1 cancel:');
        this.setData({
            [`${key}Visible`]: false,
        });
        },
    Project_inputChange(e){
        wx.setStorageSync('project',this.data.inputProject)
    },
    Company_inputChange(e){
        // console.log(e)
        wx.setStorageSync('company', this.data.inputCompany)
    },
    Leader_inputChange(e){
        // console.log(e)
        wx.setStorageSync('leader', this.data.inputLeader)
    },
    showWarnMessage() {
        Message.warning({
          context: this,
          offset: [20, 32],
          duration: 3000,
          content: '信息填写不完整，请检查！',
        });
      },
    submit(){
        if(this.data.inputProject&&this.data.inputCompany&&this.data.inputLeader&&this.data.personText&&this.data.dateText){
            this.setData({
                flag: true
            })
            wx.setStorageSync('flag', this.data.flag)
        }
        else{
            this.showWarnMessage()
        }
    },
    clear(){
        this.setData({
            inputProject: '',
            inputCompany:'',
            inputLeader:'',
            dateText:'',
            personText:''
        })
        wx.removeStorageSync('project')
        wx.removeStorageSync('company')
        wx.removeStorageSync('leader')
        wx.removeStorageSync('date')
        wx.removeStorageSync('person')
        this.setData({
            flag: false
        })
    },
    // 导航栏回退处理逻辑
    handleBack() {
        console.log('go back');
    },
    // 日期选择器处理逻辑
    showPicker(e) {
        if (this.data.flag == true){
            console.log("交底时间不允许修改")
        }
        else{
            const { mode } = e.currentTarget.dataset;
            this.setData({
                mode,
                [`${mode}Visible`]: true,
            });
        }
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
  