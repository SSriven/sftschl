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
            data:[320, 332, 301, 334, 390, 330, 320,299,233],
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
            data:[862, 1018, 964, 1026, 1679, 1600, 1570,1111,1346],
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
            data:[220, 182, 191, 234, 290, 330, 310,420,320],
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

export default {
    getEditableTabsByAPI(backFun,obj){
        setTimeout(() => backFun(obj),200);
    },

    getTabContentBarDataByAPI(backFun){
        // setTimeout(()=>backFun(optionBar),200);
        backFun(optionBar);
    },

    getTabContentPie1DataByAPI(backFun){
        // setTimeout(()=>backFun(optionPie1),200);
        backFun(optionPie1);
    },

    getTabContentPie2DataByAPI(backFun){
        // setTimeout(()=>backFun(optionPie2),200);
        backFun(optionPie2)
    },

    getTabContentPie3DataByAPI(backFun){
        // setTimeout(()=>backFun(optionPie3),200);
        backFun(optionPie3)
    }

}