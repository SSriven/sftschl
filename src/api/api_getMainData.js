/**
 * 获取主体内容api
 */

let optionBar = {
    color:['#E062AE','#67E0E3','#FFDB5C','#32C5E9','#37A2DA','#E690D1','#ff9f7f','#9FE6B8',],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
    xAxis : [
        {
            type : 'category',
            data : ['中心镇-社区A','中心镇-社区B','中心镇-社区C','中心镇-社区D','中心镇-社区E','中心镇-社区F','中心镇-社区G',
                '中心镇-社区H','中心镇-社区I'],
            axisLabel:{
                rotate:30
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'隐患数量',
            type:'bar',
            data:[Math.random()*500, Math.random()*500,
                Math.random()*500, Math.random()*500, Math.random()*500,
                Math.random()*500, Math.random()*500,Math.random()*500,Math.random()*500],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        },
        {
            name:'隐患分值',
            type:'bar',
            data:[Math.random()*2000, Math.random()*2000, Math.random()*2000, Math.random()*2000,
                Math.random()*2000, Math.random()*2000, Math.random()*2000,Math.random()*2000,Math.random()*2000],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
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
            name:'企业数量',
            type:'bar',
            //   stack: '广告',
            data:[Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500, Math.random()*500,
                Math.random()*500, Math.random()*500,Math.random()*500,Math.random()*500],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
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
    color:['#37A2DA','#32C5E9','#67E0E3','#9FE6B8','#FFDB5C','#ff9f7f','#fb7293','#E062AE','#E690D1'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [

        {
            name:'访问来源',
            type:'pie',
            radius : [0, "50%"],
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
            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    ]
};
let optionPie2 = {
    color:['#37A2DA','#32C5E9','#67E0E3','#9FE6B8','#FFDB5C','#ff9f7f','#fb7293','#E062AE','#E690D1'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [

        {
            name:'访问来源',
            type:'pie',
            radius : [0, "50%"],
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
            data:[
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:102, name:'其他'}
            ]
        }
    ]
};
let optionPie3 = {
    color:['#37A2DA','#32C5E9','#67E0E3','#9FE6B8','#FFDB5C','#ff9f7f','#fb7293','#E062AE','#E690D1'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [

        {
            name:'访问来源',
            type:'pie',
            radius : [0, "50%"],
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
            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'}
            ]
        }
    ]
};
let tableData = {
    column:[
        {prop:"riskValue",label:'风险值'},
        {prop:"enterprise",label:'企业'},
        {prop:"thirdParty",label:'第三方'},
    ],
    row:[{
        enterprise: '企业A',
        riskValue: 120,
        thirdParty: '上海市普陀区金沙江路 1518 弄'
    },{
        enterprise: '企业B',
        riskValue: '230',
        thirdParty: '上海市普陀区金沙江路 1518 弄'
    },  {
        enterprise: '企业C',
        riskValue: '562',
        thirdParty: '上海市普陀区金沙江路 1518 弄'
    }, {
        enterprise: '企业D',
        riskValue: '562',
        thirdParty: '上海市普陀区金沙江路 1518 弄'
    },{
        enterprise: '企业E',
        riskValue: '201',
        thirdParty: '上海市普陀区金沙江路 1518 弄'
    }, {
        enterprise: '企业F',
        riskValue: '530',
        thirdParty: '上海市普陀区金沙江路 1518 弄'
    },  {
        enterprise: '企业G',
        riskValue: '321',
        thirdParty: '上海市普陀区金沙江路 1518 弄'
    },{
        enterprise: '企业H',
        riskValue: '123',
        thirdParty: '上海市普陀区金沙江路 1518 弄'
    },  ]
};

export default {
    getEditableTabsByAPI(backFun,obj){
        setTimeout(() => backFun(obj),200);
        // backFun(obj);
    },

    /**
     * 获取type1界面下的柱状图数据
     * @param backFun
     */
    getTabContentBarDataByAPI(backFun){
        // setTimeout(()=>backFun(optionBar),200);

        backFun({
            id:'echarts_bar'+Math.round(Math.random()*10000) + new Date().getTime() ,
            color:['#E062AE','#67E0E3','#FFDB5C','#32C5E9','#37A2DA','#E690D1','#ff9f7f','#9FE6B8',],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['中心镇-社区A','中心镇-社区B','中心镇-社区C','中心镇-社区D','中心镇-社区E','中心镇-社区F','中心镇-社区G',
                        '中心镇-社区H','中心镇-社区I'],
                    axisLabel:{
                        rotate:30
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'隐患数量',
                    type:'bar',
                    data:[Math.round(Math.random()*500), Math.round(Math.random()*500),
                        Math.round(Math.random()*500), Math.round(Math.random()*500), Math.round(Math.random()*500),
                        Math.round(Math.random()*500), Math.round(Math.random()*500),Math.round(Math.random()*500),
                        Math.round(Math.random()*500)],
                    markLine : {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data : [
                            [{type : 'min'}, {type : 'max'}]
                        ]
                    }
                },
                {
                    name:'隐患分值',
                    type:'bar',
                    data:[Math.round(Math.random()*2000), Math.round(Math.random()*2000), Math.round(Math.random()*2000),
                        Math.round(Math.random()*2000),
                        Math.round(Math.random()*2000),
                        Math.round(Math.random()*2000),Math.round(Math.random()*2000),
                        Math.round(Math.random()*2000),Math.round(Math.random()*2000)],
                    markLine : {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data : [
                            [{type : 'min'}, {type : 'max'}]
                        ]
                    }
                },
                {
                    name:'企业数量',
                    type:'bar',
                    //   stack: '广告',
                    data:[Math.round(Math.random()*500), Math.round(Math.random()*500),
                        Math.round(Math.random()*500), Math.round(Math.random()*500), Math.round(Math.random()*500),
                        Math.round(Math.random()*500), Math.round(Math.random()*500),Math.round(Math.random()*500),
                        Math.round(Math.random()*500)],
                    markLine : {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data : [
                            [{type : 'min'}, {type : 'max'}]
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
    getTabContentPie1_type1DataByAPI(backFun){
        setTimeout(()=>backFun({
            id:'echarts_pie1'+Math.round(Math.random()*10000) + new Date().getTime() ,
            color:['#ff9f7f','#fb7293','#E062AE','#E690D1','#37A2DA','#32C5E9','#67E0E3','#9FE6B8','#FFDB5C'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [

                {
                    name:'访问来源',
                    type:'pie',
                    radius : [0, "50%"],
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
                    data:[
                        {value:Math.round(Math.random()*1000), name:'直达'},
                        {value:Math.round(Math.random()*1000), name:'邮件营销'},
                        {value:Math.round(Math.random()*1000), name:'联盟广告'},
                        {value:Math.round(Math.random()*1000), name:'视频广告'},
                        {value:Math.round(Math.random()*1000), name:'百度'},
                        {value:Math.round(Math.random()*1000), name:'谷歌'},
                        {value:Math.round(Math.random()*1000), name:'必应'},
                        {value:Math.round(Math.random()*1000), name:'其他'}
                    ]
                }
            ]
        }),200);
    },

    getTabContentPie2_type1DataByAPI(backFun){
        setTimeout(()=>backFun({
            id:'echarts_pie2'+Math.round(Math.random()*10000) + new Date().getTime() ,
            color:['#37A2DA','#32C5E9','#67E0E3','#9FE6B8','#FFDB5C','#ff9f7f','#fb7293','#E062AE','#E690D1'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [

                {
                    name:'访问来源',
                    type:'pie',
                    radius : [0, "50%"],
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
                    data:[
                        {value:Math.round(Math.random()*500), name:'百度'},
                        {value:Math.round(Math.random()*500), name:'谷歌'},
                        {value:Math.round(Math.random()*500), name:'其他'}
                    ]
                }
            ]
        }),200);

    },

    getTabContentPie3_type1DataByAPI(backFun){
        setTimeout(()=>backFun({
            id:'echarts_pie3'+Math.round(Math.random()*10000) + new Date().getTime() ,
            color:['#fb7293','#E062AE','#E690D1','#37A2DA','#32C5E9','#67E0E3','#9FE6B8','#FFDB5C','#ff9f7f',],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [

                {
                    name:'访问来源',
                    type:'pie',
                    radius : [0, "50%"],
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
                    data:[
                        {value:Math.round(Math.random()*500), name:'直达'},
                        {value:Math.round(Math.random()*500), name:'邮件营销'},
                        {value:Math.round(Math.random()*500), name:'联盟广告'}
                    ]
                }
            ]
        }),200);

    },

    getTabContentPie_type1DataByAPI(backFun,index){
        switch(index){
            case 1:this.getTabContentPie1_type1DataByAPI(backFun);break;
            case 2:this.getTabContentPie2_type1DataByAPI(backFun);break;
            case 3:this.getTabContentPie3_type1DataByAPI(backFun);break;
        }
    },

    /**
     * 获取type1界面下的表格数据
     * @param callBack
     */
    getTabContentTable_type1DataByAPI(callBack){
        setTimeout(()=>callBack({
            column:[
                {prop:"riskValue",label:'风险值'},
                {prop:"enterprise",label:'企业'},
                {prop:"thirdParty",label:'第三方'},
            ],
            row:[{
                enterprise: '企业A',
                riskValue: Math.round(Math.random()*1000),
                thirdParty: '上海市普陀区金沙江路 1518 弄'
            },{
                enterprise: '企业B',
                riskValue: Math.round(Math.random()*1000),
                thirdParty: '上海市普陀区金沙江路 1518 弄'
            },  {
                enterprise: '企业C',
                riskValue: Math.round(Math.random()*1000),
                thirdParty: '上海市普陀区金沙江路 1518 弄'
            }, {
                enterprise: '企业D',
                riskValue: Math.round(Math.random()*1000),
                thirdParty: '上海市普陀区金沙江路 1518 弄'
            },{
                enterprise: '企业E',
                riskValue: Math.round(Math.random()*1000),
                thirdParty: '上海市普陀区金沙江路 1518 弄'
            }, {
                enterprise: '企业F',
                riskValue: Math.round(Math.random()*1000),
                thirdParty: '上海市普陀区金沙江路 1518 弄'
            },  {
                enterprise: '企业G',
                riskValue: Math.round(Math.random()*1000),
                thirdParty: '上海市普陀区金沙江路 1518 弄'
            },{
                enterprise: '企业H',
                riskValue: Math.round(Math.random()*1000),
                thirdParty: '上海市普陀区金沙江路 1518 弄'
            },  ]
        }),200);
    }

}