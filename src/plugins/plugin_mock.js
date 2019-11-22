import Mock from 'mockjs'

let Random = Mock.Random;

let menuTreeData3 = function() {
    let treeDataArr = [];
    for(let i = 1; i <= Math.round(Math.random()*5+1); i++){
        let obj1 = {
            label: Random.city(),
            id: Random.id(),
            children:[],
        };
        for(let j = 1; j <= Math.round(Math.random()*5+1); j++){
            let obj2 = {
                label: Random.city(),
                id: Random.id(),
                children:[],
            };
            for(let k = 1; k <= Math.round(Math.random()*5+1); k++){
                let obj3 = {
                    label: Random.city(),
                    id: Random.id(),
                    children:[],
                };
                for(let l = 1; l <= Math.round(Math.random()*5+1); l++){
                    let obj4 = {
                        label: Random.city(),
                        id: Random.id(),
                        type:'3'
                    };
                    obj3.children.push(obj4);
                }
                obj2.children.push(obj3);
            }
            obj1.children.push(obj2);
        }
        treeDataArr.push(obj1);
    }
    return treeDataArr;
};
let menuTreeData1 = function() {
    let treeDataArr = [];
    for(let i = 1; i <= Math.round(Math.random()*5+1); i++){
        let obj1 = {
            label: Random.city(),
            id: Random.id(),
            children:[],
            type:'1'
        };
        for(let j = 1; j <= Math.round(Math.random()*5+1); j++){
            let obj2 = {
                label: Random.city(),
                id: Random.id(),
                children:[],
                type:'1'
            };
            for(let k = 1; k <= Math.round(Math.random()*5+1); k++){
                let obj3 = {
                    label: Random.city(),
                    id: Random.id(),
                    children:[],
                    type:'1'
                };
                for(let l = 1; l <= Math.round(Math.random()*5+1); l++){
                    let obj4 = {
                        label: Random.city(),
                        id: Random.id(),
                        type:'4'
                    };
                    obj3.children.push(obj4);
                }
                obj2.children.push(obj3);
            }
            obj1.children.push(obj2);
        }
        treeDataArr.push(obj1);
    }
    return treeDataArr;
};
let menuTreeData2 = function() {
    let treeDataArr = [];
    for(let i = 1; i <= Math.round(Math.random()*5+1); i++){
        let obj1 = {
            label: Random.city(),
            id: Random.id(),
            children:[],
            type:'2'
        };
        for(let j = 1; j <= Math.round(Math.random()*5+1); j++){
            let obj2 = {
                label: Random.city(),
                id: Random.id(),
                children:[],
                type:'2'
            };
            for(let k = 1; k <= Math.round(Math.random()*5+1); k++){
                let obj3 = {
                    label: Random.city(),
                    id: Random.id(),
                    children:[],
                    type:'2'
                };
                obj2.children.push(obj3);
            }
            obj1.children.push(obj2);
        }
        treeDataArr.push(obj1);
    }
    return treeDataArr;
};
let pie1Data = function(){
    let obj = {
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
                data: []
            }
        ]
    };
    for(let i = 1; i <= Math.round(Math.random()*6+1); i++){
        obj.series[0].data.push({value: Math.round(Math.random() * 1000), name: Random.city()})
    }

    return obj;
};

// url为要拦截的请求地址  请求方式  请求数据（规则） （此处api会被mockjs拦截）
/**
 * 侧边栏数据
 */
Mock.mock('http://route.showapi.com/60-27', 'get', menuTreeData3());
Mock.mock('http://route.showapi.com/60-26', 'get', menuTreeData1());
Mock.mock('http://route.showapi.com/60-25', 'get', menuTreeData2());

/**
 * pie1数据
 */
Mock.mock('http://route.showapi.com/60-24', 'get', pie1Data());