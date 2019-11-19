import Mock from 'mockjs'

const Random = Mock.Random;

let listData = function() {
    return {
        "array|1-5":[
            {
                label: Random.city(),
                id: Random.id(),
                "treeData|1-3": [{
                    label: Random.city(),
                    id: Random.id(),
                    "children|1-5": [{
                        label: Random.city(),
                        id: Random.id(),
                        "children|1-5": [{
                            id: Random.id(),
                            label: Random.city(),
                            "type|1-4": 100,
                        },]
                    }]
                }]
            }
            ]
    }
};

// url为要拦截的请求地址  请求方式  请求数据（规则） （此处api会被mockjs拦截）
Mock.mock('http://route.showapi.com/60-27', 'post', listData());