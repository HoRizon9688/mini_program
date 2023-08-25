Component({
    data: {
        signImage: '',
        html: '<h2 align="center">参观人员安全告知书</h2>'+
              '<br/>'+
              '<p style="text-indent: 2em;margin:0 4px">青岛润莱风力发电有限公司公司（简称“南墅润莱风电场”）成立于2010年12月28日，注册资本1.1亿元,总投资5.2亿元,公司主要经营范围：风力发电项目及光伏发电项目的开发、建设、经营管理及技术咨询；风能、太阳能发电、销售；风能、太阳能发电设备的维修；光伏设备及元器件的销售;本公司是中国三峡新能源（集团）股份有限公司（股票代码：600905）的全资子公司，现装机容量56 MW，2012年11月12日首批并网，2020年12月30日全容量并网，位于山东省青岛市莱西市南墅镇山里吴家村88号，建有110kV升压站1座、35KV送出线路4回。现就本场站的安全风险、注意事项、安全措施及应急措施进行告知：</p>'+
              '<ol>'+
                '<li style="margin:10px 3px">入场后，请在本站工作人员陪同下，按照规定路线参观指导；必须正确佩戴配有电感警报器的白色安全帽。</li>'+
                '<li style="margin:10px 3px">开关站内设备电压为110kV，该区域有涉及GIS室、主变压器；电压为35kV的设备涉及高压配电室、SVG设备、继电保护室、SVG连接变、接地变；该区域内主要危险因素是触电、火灾等危险因素，所有设备均默认为带电，严禁靠近任何设备，请不要随意触摸、操作任何设备；禁止打开各屏柜前、后柜门，参观必须在警示线和围栏外。</li>'+
                '<li style="margin:10px 3px">综合楼内设有厨房1间、食堂1间、会议室1间、宿舍9间、办公室3间，该区域内主要危险因素是触电、火灾、爆炸，请不要随意触摸任何设备，请不要随意丢弃烟头，请勿进入厨房操作间内。</li>'+
                '<li style="margin:10px 3px">风电场区内设有风机、箱变、35kv集电线路等，以上区域均有触电、火灾、坠落、物体打击、车辆伤害、小动物蜇伤等危险因素，该区域内所有设备均默认为带电，请不要随意触摸任何设备并与设备保持1米以上安全距离，该区域严禁酒后进入，严禁吸烟，严禁携带火种及危险物品。</li>'+
                '<li style="margin:10px 3px">本站车辆限速5km/h，车辆在指定位置停放，禁止在站内随意行驶；本站距离医院5.3公里，距离消防大队3公里，紧急集合点在场站中央空白地，值班电话15092028196，站内配有心脏除颤器（AED）、基本药品、医疗物品和应急物资，若遇突发情况，请保持镇静，按照本站人员的指令要求，有序进行应急处置。</li>'+
                '<li style="margin:10px 3px">进站人员必须自觉遵守电站有关安全管理规定，若有违反，工作人员有权制止；对不听劝阻者，工作人员有权要求离站。</li>'+
              '</ol>'+
              '<hr style="margin:15px 3px">'+
              '<p style="font-weight:bold;text-indent: 2em">被告知人承诺：我已知晓电站中的安全风险、注意事项、安全措施及应急措施，我承诺严格遵守贵场站各项安全管理规定。</p>'
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