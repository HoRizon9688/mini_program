const imageCdn = 'https://pic.ziyuan.wang/user/guest/2023/12/';
const swiperList = [
  `${imageCdn}/_20210517131836_d03dbab3fc7b7.jpg`,
  `${imageCdn}/f1794c14a75baf8fe4b807df41ad80c_342823224d113.jpg`,
  `${imageCdn}/_20221112133208_b446568da4798.jpg`,
  `${imageCdn}/IMG_20201227_083921_74ed29a4b7080.jpg`
];

Component({
    data: {
        current: 0,
        autoplay: false,
        duration: 500,
        interval: 5000,
        swiperList,
        html:
        '<br/>'+
        '<h3>一、公司基本情况</h3>'+
        '<p style="text-indent: 2em;margin:0 4px">青岛润莱风力发电有限公司（以下简称润莱公司）是中国三峡新能源有限公司（以下简称三峡新能源公司）投资成立的风力发电项目公司，成立于2010年12月，现已是三峡新能源公司全资子公司，属国有企业性质，注册地点在山东省青岛市莱西市南墅镇，注册资本金11100万元，经营范围包括风能、太阳能的投资与开发；发电与设备维修；相关技术与咨询服务，主要在莱西地区规划开发建设风力发电、太阳能发电的项目开发建设和并网运行管理。</p>'+
        '<h3>二、项目建设及运行情况</h3>'+
        '<p style="text-indent: 2em;margin:0 4px">润莱公司负责新建的南墅润莱风电场共36兆瓦，该项目设计单位为中水北方勘测设计研究有限责任公司，中标施工单位为山东电力建设第二工程公司。在山东省、青岛市市、莱西市三级政府的大力支持下，在电力部门的指导与配合下，该项目自2011年9月开工以来，在不足一年的时间里，完成了全部的建设工程、电气安装工程，顺利实现了并网发电运营。</p>'+
        '<hr style="margin:15px 3px">'
    },
    options: {
        styleIsolation: 'apply-shared',
    },
    methods: {
        handleBack() {
            console.log('go back');
        },
        onChange(e) {
            const {
              detail: { current, source },
            } = e;
            console.log(current, source);
          }
    },
});