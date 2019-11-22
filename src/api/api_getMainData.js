/**
 * 获取主体内容api
 */

import '../plugins/plugin_mock.js';
import request from '../http/request.js';

let optionBar = {
    color: ['#E062AE', '#67E0E3', '#FFDB5C', '#32C5E9', '#37A2DA', '#E690D1', '#ff9f7f', '#9FE6B8',],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    //   legend: {
    //       data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
    //   },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['中心镇-社区A', '中心镇-社区B', '中心镇-社区C', '中心镇-社区D', '中心镇-社区E', '中心镇-社区F', '中心镇-社区G',
                '中心镇-社区H', '中心镇-社区I'],
            axisLabel: {
                rotate: 30
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '隐患数量',
            type: 'bar',
            data: [Math.random() * 500, Math.random() * 500,
                Math.random() * 500, Math.random() * 500, Math.random() * 500,
                Math.random() * 500, Math.random() * 500, Math.random() * 500, Math.random() * 500],
            markLine: {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data: [
                    [{type: 'min'}, {type: 'max'}]
                ]
            }
        },
        {
            name: '隐患分值',
            type: 'bar',
            data: [Math.random() * 2000, Math.random() * 2000, Math.random() * 2000, Math.random() * 2000,
                Math.random() * 2000, Math.random() * 2000, Math.random() * 2000, Math.random() * 2000, Math.random() * 2000],
            markLine: {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data: [
                    [{type: 'min'}, {type: 'max'}]
                ]
            }
        },
        //   {
        //       name:'邮件营销',
        //       type:'bar',
        //       stack: '广告',
        //       data:[120, 132, 101, 134, 90, 230, 210]
        //   },
        {
            name: '企业数量',
            type: 'bar',
            //   stack: '广告',
            data: [Math.random() * 500, Math.random() * 500, Math.random() * 500, Math.random() * 500, Math.random() * 500,
                Math.random() * 500, Math.random() * 500, Math.random() * 500, Math.random() * 500],
            markLine: {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data: [
                    [{type: 'min'}, {type: 'max'}]
                ]
            }
        },
        //   {
        //       name:'视频广告',
        //       type:'bar',
        //       stack: '广告',
        //       data:[150, 232, 201, 154, 190, 330, 410]
        //   },

        //   {
        //       name:'百度',
        //       type:'bar',
        //       barWidth : 5,
        //       stack: '搜索引擎',
        //       data:[620, 732, 701, 734, 1090, 1130, 1120]
        //   },
        //   {
        //       name:'谷歌',
        //       type:'bar',
        //       stack: '搜索引擎',
        //       data:[120, 132, 101, 134, 290, 230, 220]
        //   },
        //   {
        //       name:'必应',
        //       type:'bar',
        //       stack: '搜索引擎',
        //       data:[60, 72, 71, 74, 190, 130, 110]
        //   },
        //   {
        //       name:'其他',
        //       type:'bar',
        //       stack: '搜索引擎',
        //       data:[62, 82, 91, 84, 109, 110, 120]
        //   }
    ],

};
let optionPie1 = {
    color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C', '#ff9f7f', '#fb7293', '#E062AE', '#E690D1'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [

        {
            name: '访问来源',
            type: 'pie',
            radius: [0, "50%"],
            label: {
                normal: {
                    formatter: '{b|{b}\n}{d}%  ',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 16
                        },
                        per: {
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data: [
                {value: 335, name: '直达'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1048, name: '百度'},
                {value: 251, name: '谷歌'},
                {value: 147, name: '必应'},
                {value: 102, name: '其他'}
            ]
        }
    ]
};
let optionPie2 = {
    color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C', '#ff9f7f', '#fb7293', '#E062AE', '#E690D1'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [

        {
            name: '访问来源',
            type: 'pie',
            radius: [0, "50%"],
            label: {
                normal: {
                    formatter: '{b|{b}\n}{d}%  ',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 16
                        },
                        per: {
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data: [
                {value: 1048, name: '百度'},
                {value: 251, name: '谷歌'},
                {value: 102, name: '其他'}
            ]
        }
    ]
};
let optionPie3 = {
    color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C', '#ff9f7f', '#fb7293', '#E062AE', '#E690D1'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [

        {
            name: '访问来源',
            type: 'pie',
            radius: [0, "50%"],
            label: {
                normal: {
                    formatter: '{b|{b}\n}{d}%  ',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 16
                        },
                        per: {
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data: [
                {value: 335, name: '直达'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'}
            ]
        }
    ]
};
let tableData = {
    column: [
        {prop: "riskValue", label: '风险值'},
        {prop: "enterprise", label: '企业'},
        {prop: "thirdParty", label: '第三方'},
    ],
    row: [{
        enterprise: '企业A',
        riskValue: 120,
        thirdParty: '上海市普陀区金沙江路 1518 弄'
    }, {
        enterprise: '企业B',
        riskValue: '230',
        thirdParty: '上海市普陀区金沙江路 1518 弄'
    }, {
        enterprise: '企业C',
        riskValue: '562',
        thirdParty: '上海市普陀区金沙江路 1518 弄'
    }, {
        enterprise: '企业D',
        riskValue: '562',
        thirdParty: '上海市普陀区金沙江路 1518 弄'
    }, {
        enterprise: '企业E',
        riskValue: '201',
        thirdParty: '上海市普陀区金沙江路 1518 弄'
    }, {
        enterprise: '企业F',
        riskValue: '530',
        thirdParty: '上海市普陀区金沙江路 1518 弄'
    }, {
        enterprise: '企业G',
        riskValue: '321',
        thirdParty: '上海市普陀区金沙江路 1518 弄'
    }, {
        enterprise: '企业H',
        riskValue: '123',
        thirdParty: '上海市普陀区金沙江路 1518 弄'
    },]
};
let tableData2 = {
    row: [{
        enterpriseName: '企业A',
        industry: '餐饮业',
        township: '新建中心区',
        riskLevel: 1,
        risk: '一般风险级',
        dangerNum: 20,
        seriousDangerNum: 1,
        seriouseDangerSourse: '否',
        involveDangerEnterprise: '否',
        hazardousChemicalProcess: '否',
        lawEnforcement: '否',
        confinedSpace: '无',
        dustExplosion: '无'
    }, {
        enterpriseName: '企业B',
        industry: '餐饮业',
        township: '新建中心区',
        riskLevel: 1,
        risk: '一般风险级',
        dangerNum: 20,
        seriousDangerNum: 1,
        seriouseDangerSourse: '否',
        involveDangerEnterprise: '否',
        hazardousChemicalProcess: '否',
        lawEnforcement: '否',
        confinedSpace: '无',
        dustExplosion: '无'
    }, {
        enterpriseName: '企业C',
        industry: '餐饮业',
        township: '新建中心区',
        riskLevel: 1,
        risk: '一般风险级',
        dangerNum: 20,
        seriousDangerNum: 1,
        seriouseDangerSourse: '否',
        involveDangerEnterprise: '否',
        hazardousChemicalProcess: '否',
        lawEnforcement: '否',
        confinedSpace: '无',
        dustExplosion: '无'
    }, {
        enterpriseName: '企业D',
        industry: '餐饮业',
        township: '新建中心区',
        riskLevel: 1,
        risk: '一般风险级',
        dangerNum: 20,
        seriousDangerNum: 1,
        seriouseDangerSourse: '否',
        involveDangerEnterprise: '否',
        hazardousChemicalProcess: '否',
        lawEnforcement: '否',
        confinedSpace: '无',
        dustExplosion: '无'
    }, {
        enterpriseName: '企业E',
        industry: '餐饮业',
        township: '新建中心区',
        riskLevel: 1,
        risk: '一般风险级',
        dangerNum: 20,
        seriousDangerNum: 1,
        seriouseDangerSourse: '否',
        involveDangerEnterprise: '否',
        hazardousChemicalProcess: '否',
        lawEnforcement: '否',
        confinedSpace: '无',
        dustExplosion: '无'
    }, {
        enterpriseName: '企业F',
        industry: '餐饮业',
        township: '新建中心区',
        riskLevel: 1,
        risk: '一般风险级',
        dangerNum: 20,
        seriousDangerNum: 1,
        seriouseDangerSourse: '否',
        involveDangerEnterprise: '否',
        hazardousChemicalProcess: '否',
        lawEnforcement: '否',
        confinedSpace: '无',
        dustExplosion: '无'
    }, {
        enterpriseName: '企业G',
        industry: '餐饮业',
        township: '新建中心区',
        riskLevel: 1,
        risk: '一般风险级',
        dangerNum: 20,
        seriousDangerNum: 1,
        seriouseDangerSourse: '否',
        involveDangerEnterprise: '否',
        hazardousChemicalProcess: '否',
        lawEnforcement: '否',
        confinedSpace: '无',
        dustExplosion: '无'
    }, {
        enterpriseName: '企业G',
        industry: '餐饮业',
        township: '新建中心区',
        riskLevel: 1,
        risk: '一般风险级',
        dangerNum: 20,
        seriousDangerNum: 1,
        seriouseDangerSourse: '否',
        involveDangerEnterprise: '否',
        hazardousChemicalProcess: '否',
        lawEnforcement: '否',
        confinedSpace: '无',
        dustExplosion: '无'
    }, {
        enterpriseName: '企业H',
        industry: '餐饮业',
        township: '新建中心区',
        riskLevel: 1,
        risk: '一般风险级',
        dangerNum: 20,
        seriousDangerNum: 1,
        seriouseDangerSourse: '否',
        involveDangerEnterprise: '否',
        hazardousChemicalProcess: '否',
        lawEnforcement: '否',
        confinedSpace: '无',
        dustExplosion: '无'
    }, {
        enterpriseName: '企业I',
        industry: '餐饮业',
        township: '新建中心区',
        riskLevel: 1,
        risk: '一般风险级',
        dangerNum: 20,
        seriousDangerNum: 1,
        seriouseDangerSourse: '否',
        involveDangerEnterprise: '否',
        hazardousChemicalProcess: '否',
        lawEnforcement: '否',
        confinedSpace: '无',
        dustExplosion: '无'
    },]
};

let hy = [{"idsnm": "机械业", "iid": "Ib36de3df70314a5caa684f34b45f71c6"}, {
    "idsnm": "化工业",
    "iid": "I8D50F7925FF44d56B19556F5EA6E47D1"
}, {"idsnm": "纺织业", "iid": "I8D50F7925FF44d56B19556F5EA6E47D2"}, {
    "idsnm": "餐饮业",
    "iid": "I8D50F7925FF44d56B19556F5EA6E47D3"
}, {"idsnm": "娱乐业", "iid": "I8D50F7925FF44d56B19556F5EA6E47D4"}, {
    "idsnm": "特殊",
    "iid": "Ic606396cc0b44665884e114aea129f1f"
}, {"idsnm": "冶金业", "iid": "I4c88899f083e45f9bcdf384526c36a4b"}, {
    "idsnm": "有色业",
    "iid": "I4edd60654bf44063ba866cb03b3d0f08"
}, {"idsnm": "建材业", "iid": "I9ace54270db4443d9cdc16df0207d0ce"}, {
    "idsnm": "烟草业",
    "iid": "Icfe2890148f748e9b680682518c9af72"
}, {"idsnm": "商贸业,农、林、牧、渔业", "iid": "I5e4a8e00f7c7491982d472b279d825f3"}, {
    "idsnm": "电力、热力、燃气及水生产和供应业",
    "iid": "I5dd1edf97ac84fbea31b666a02660e08"
}, {"idsnm": "交通运输", "iid": "I8e2bb0c3cbe24000a94e83764b30ede8"}, {
    "idsnm": "信息传输、软件和信息技术服务业",
    "iid": "I83b6809d893e4bc19d6cc02023baa2b1"
}, {"idsnm": "房地产业", "iid": "Ie46bb1ceab3e42b49b0d487feb693efe"}, {
    "idsnm": "科学研究和技术服务业",
    "iid": "I3e3d51716c4f4fe780509fc470197258"
}, {"idsnm": "居民服务、修理和其他服务业", "iid": "I07ab094085e34ef19466ecff5f3622b5"}, {
    "idsnm": "卫生和社会工作",
    "iid": "Ia4748dbbf84e434bb682cb46460f9445"
}, {"idsnm": "公共管理、社会保障和社会组织", "iid": "I374269d19b8a43648203ea78e0c5c471"}, {
    "idsnm": "轻工业",
    "iid": "Id0178efeddfe4ca299146083843e8edd"
}, {"idsnm": "采矿业", "iid": "Idc1feb2405cf441a9e20362351a41a3d"}, {
    "idsnm": "建筑业",
    "iid": "Id7bf82ce268b428389dce219a4f2d96b"
}, {"idsnm": "仓储和邮政业", "iid": "I8dd45e07e36c47c090881b31b9af8892"}, {
    "idsnm": "金融业",
    "iid": "Ib44c98e028b541c78cebfc1650a393a0"
}, {"idsnm": "租赁和商务服务业", "iid": "I670a06989cd745ceb83ccc0d0732fc32"}, {
    "idsnm": "水利、环境和公共设施管理业",
    "iid": "Ia53fc8c614394566be997d92b85828aa"
}, {"idsnm": "教育", "iid": "I694ea887582a4c2589c73f9bada4571c"}, {
    "idsnm": "文化、体育和娱乐业",
    "iid": "I3c3efcb5c50541f58bb5f09eb765f53a"
}, {"idsnm": "国际组织", "iid": "Iab1d2fe18a644c2b865014f738dd8c65"}];

import Mock from 'mockjs'

let Random = Mock.Random;

export default {
    getEditableTabsByAPI(backFun, obj) {
        setTimeout(() => backFun(obj), 200);
        // backFun(obj);

    },

    /**
     * 获取type1界面下的柱状图数据
     * @param backFun
     */
    getTabContentBarDataByAPI(backFun) {
        // setTimeout(()=>backFun(optionBar),200);

        backFun({
            id: 'echarts_bar' + Math.round(Math.random() * 10000) + new Date().getTime(),
            color: ['#E062AE', '#67E0E3', '#FFDB5C', '#32C5E9', '#37A2DA', '#E690D1', '#ff9f7f', '#9FE6B8',],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['中心镇-社区A', '中心镇-社区B', '中心镇-社区C', '中心镇-社区D', '中心镇-社区E', '中心镇-社区F', '中心镇-社区G',
                        '中心镇-社区H', '中心镇-社区I'],
                    axisLabel: {
                        rotate: 30
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '隐患数量',
                    type: 'bar',
                    data: [Math.round(Math.random() * 500), Math.round(Math.random() * 500),
                        Math.round(Math.random() * 500), Math.round(Math.random() * 500), Math.round(Math.random() * 500),
                        Math.round(Math.random() * 500), Math.round(Math.random() * 500), Math.round(Math.random() * 500),
                        Math.round(Math.random() * 500)],
                    markLine: {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data: [
                            [{type: 'min'}, {type: 'max'}]
                        ]
                    }
                },
                {
                    name: '隐患分值',
                    type: 'bar',
                    data: [Math.round(Math.random() * 2000), Math.round(Math.random() * 2000), Math.round(Math.random() * 2000),
                        Math.round(Math.random() * 2000),
                        Math.round(Math.random() * 2000),
                        Math.round(Math.random() * 2000), Math.round(Math.random() * 2000),
                        Math.round(Math.random() * 2000), Math.round(Math.random() * 2000)],
                    markLine: {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data: [
                            [{type: 'min'}, {type: 'max'}]
                        ]
                    }
                },
                {
                    name: '企业数量',
                    type: 'bar',
                    //   stack: '广告',
                    data: [Math.round(Math.random() * 500), Math.round(Math.random() * 500),
                        Math.round(Math.random() * 500), Math.round(Math.random() * 500), Math.round(Math.random() * 500),
                        Math.round(Math.random() * 500), Math.round(Math.random() * 500), Math.round(Math.random() * 500),
                        Math.round(Math.random() * 500)],
                    markLine: {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data: [
                            [{type: 'min'}, {type: 'max'}]
                        ]
                    }
                }
            ],

        });
    },

    /**
     * 获取type1界面下的圆饼图数据
     * @param backFun
     */
    getTabContentPie1_type1DataByAPI(backFun) {
        setTimeout(() => backFun({
            id: 'echarts_pie1' + Math.round(Math.random() * 10000) + new Date().getTime(),
            color: ['#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [

                {
                    name: '访问来源',
                    type: 'pie',
                    radius: [0, "50%"],
                    label: {
                        normal: {
                            formatter: '{b|{b}\n}{d}%  ',
                            rich: {
                                b: {
                                    fontSize: 13,
                                    lineHeight: 16
                                },
                                per: {
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        {value: Math.round(Math.random() * 1000), name: '直达'},
                        {value: Math.round(Math.random() * 1000), name: '邮件营销'},
                        {value: Math.round(Math.random() * 1000), name: '联盟广告'},
                        {value: Math.round(Math.random() * 1000), name: '视频广告'},
                        {value: Math.round(Math.random() * 1000), name: '百度'},
                        {value: Math.round(Math.random() * 1000), name: '谷歌'},
                        {value: Math.round(Math.random() * 1000), name: '必应'},
                        {value: Math.round(Math.random() * 1000), name: '其他'}
                    ]
                }
            ]
        }), 200);
    },

    getTabContentPie2_type1DataByAPI(backFun) {
        setTimeout(() => backFun({
            id: 'echarts_pie2' + Math.round(Math.random() * 10000) + new Date().getTime(),
            color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C', '#ff9f7f', '#fb7293', '#E062AE', '#E690D1'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [

                {
                    name: '访问来源',
                    type: 'pie',
                    radius: [0, "50%"],
                    label: {
                        normal: {
                            formatter: '{b|{b}\n}{d}%  ',
                            rich: {
                                b: {
                                    fontSize: 13,
                                    lineHeight: 16
                                },
                                per: {
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        {value: Math.round(Math.random() * 500), name: '百度'},
                        {value: Math.round(Math.random() * 500), name: '谷歌'},
                        {value: Math.round(Math.random() * 500), name: '其他'}
                    ]
                }
            ]
        }), 200);

    },

    getTabContentPie3_type1DataByAPI(backFun) {
        setTimeout(() => backFun({
            id: 'echarts_pie3' + Math.round(Math.random() * 10000) + new Date().getTime(),
            color: ['#fb7293', '#E062AE', '#E690D1', '#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C', '#ff9f7f',],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [

                {
                    name: '访问来源',
                    type: 'pie',
                    radius: [0, "50%"],
                    label: {
                        normal: {
                            formatter: '{b|{b}\n}{d}%  ',
                            rich: {
                                b: {
                                    fontSize: 13,
                                    lineHeight: 16
                                },
                                per: {
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        {value: Math.round(Math.random() * 500), name: '直达'},
                        {value: Math.round(Math.random() * 500), name: '邮件营销'},
                        {value: Math.round(Math.random() * 500), name: '联盟广告'}
                    ]
                }
            ]
        }), 200);

    },

    getTabContentPie_type1DataByAPI(backFun, index) {
        switch (index) {
            case 1:
                this.getTabContentPie1_type1DataByAPI(backFun);
                break;
            case 2:
                this.getTabContentPie2_type1DataByAPI(backFun);
                break;
            case 3:
                this.getTabContentPie3_type1DataByAPI(backFun);
                break;
        }
    },

    /**
     * 获取type1界面下的表格数据
     * @param callBack
     */
    getTabContentTable_type1DataByAPI(callBack) {
        // setTimeout(() => callBack(), 200);
        Mock.mock('http://route.showapi.com/60-23',{
            "tableData|5-20": [{   // 随机生成5到10个数组元素
                'enterprise': '@cname',  // 中文名称
                "riskValue|+10":10
            }]
        });
        request.http_mock_get('http://route.showapi.com/60-23','api_id=63114&api_sign=3847b0').then(response => {
            callBack(response.tableData);
        });
    },


    getTabContentTable_type2DataByAPI(callBack) {
        Mock.mock('http://route.showapi.com/60-22',{
            "tableData|10-20": [{   // 随机生成5到10个数组元素
                'enterpriseName': '@cname',  // 中文名称
                "industry":'@cname',
                'township': '@city',
                'riskLevel|1-4':0,
                'dangerNum|10-100':0,
                'seriousDangerNum|10-100':0,
                seriouseDangerSourse: Math.random() < 0.5 ? "否" : "是",
                involveDangerEnterprise: Math.random() < 0.5 ? "否" : "是",
                hazardousChemicalProcess: Math.random() < 0.5 ? "否" : "是",
                lawEnforcement: Math.random() < 0.5 ? "否" : "是",
                confinedSpace: Math.random() < 0.5 ? "有" : "无",
                dustExplosion: Math.random() < 0.5 ? "有" : "无"
            }]
        });
        request.http_mock_get('http://route.showapi.com/60-22','api_id=63114&api_sign=3847b0').then(response => {
            callBack(response.tableData);
        });
        // setTimeout(() => callBack(), 200);
    }

}