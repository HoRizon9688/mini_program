Component({
    data: {
        signImage: '',
        html: '<h2 align="center">作业人员安全告知书</h2>'+
              '<br/>'+
              '<p style="text-indent: 2em;margin:0 4px">外来单位全体人员：请认真阅读本告知书，以保证您进入我公司场区升压站内能够保证人身及设备安全行为。</p>'+
              '<ol>'+
                '<li style="margin:10px 3px">进入场区施工现场前，必须持工作票，并经当日值班人员许可，方可进入场区进行施工作业。</li>'+
                '<li style="margin:10px 3px">进入场区施工前，必须由值班负责人告知危险点及安全注意事项，按照指定路线，正常进入场区工作。</li>'+
                '<li style="margin:10px 3px">本站最高电压等级110kV，必须保证与带电设备保持在1.5米及以上的安全距离。凡是场区设备，均默认为有电，请保持1.5米以上距离。</li>'+
                '<li style="margin:10px 3px">未经许可，禁止进入高压间、SVG室、开关底部等。</li>'+
                '<li style="margin:10px 3px">不得未经许可动用本站任何电气设备、设施、器材，不得擅自操作各种电气开关和仪表。</li>'+
                '<li style="margin:10px 3px">恶劣天气（包括雷雨天气）禁止进入场区施工。</li>'+
                '<li style="margin:10px 3px">施工作业中，存在着高空坠落、物体打击、坍塌、机械（交通）伤害、触电等岗位危险。必须遵守相关的规章制度，掌握好必要的安全防范措施。</li>'+
                '<li style="margin:10px 3px">外来人员必须听从风场值班人员指挥，禁止嬉笑打闹。</li>'+
                '<li style="margin:10px 3px">外来人员必须严格遵守风场安全操作规程。现场设置的各种安全防护设施、设备和警告、安全标志标牌等，未经许可，不得挪动或拆除。</li>'+
                '<li style="margin:10px 3px">场内及风机平台草深处有毒蛇出没，如遇毒蛇，切勿触碰、抓捕，及时离开。</li>'+
                '<li style="margin:10px 3px">正确使用佩戴安全防护用品，进入施工现场的人员，必须正确佩带安全帽，穿戴好个人防护用品，着装整齐。严禁赤脚、穿拖鞋，严禁酒后作业。</li>'+
                '<li style="margin:10px 3px">操作人员必须经安全技术培训、考试合格、持证上岗，严禁违章操作。</li>'+
                '<li style="margin:10px 3px">本次作业中由施工方违规作业违章指挥等所造成的一切损失均由施工单位承担，同时我公司保留追究经济损失的权利。</li>'+
              '</ol>'+
              '<hr style="margin:15px 3px">'+
              '<p style="font-weight:bold;text-indent: 2em">本人已清楚了解所从事工作的安全风险，愿意承担此风险，在工作中严格遵守、落实相关措施，关注自身安全。</p>'
    },
    options: {
        styleIsolation: 'apply-shared',
    },
    methods: {
        handleBack() {
            console.log('go back');
        },
        navToSignPage() {
            wx.navigateTo({
                url: '../sign-page/sign-page',
                events: {
                    getSignImage: image => {
                        this.setData({
                            signImage: image
                        })
                    }
                },
            })
        }
    },
});