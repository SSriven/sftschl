const _products = [
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
  ]
const _tabList = [
    {className:"tab-item is-active",labelName:"辖区企业数据"},
    {className:"tab-item",labelName:"风险评级企业"},
    {className:"tab-item",labelName:"行政执法"},
  ]
const _menuTree1 = [
    {
        title:"新建县",
        treeData:[{
            label: '新建中心区',
            children: [{
            label: '中心镇-社区A新建中心区新建中心区',
            children: [{
                label: '企业A新建中心区新建中心区新建中心区'
            },{
                label: '企业B'
            },{
                label: '企业C'
            },{
                label: '企业D'
            }]
        },{
          label: '中心镇-社区B',
          children: [{
            label: '企业A'
          },{
            label: '企业B'
          },{
            label: '企业C'
          },{
            label: '企业D'
          }]
        },{
          label: '中心镇-社区C',
          children: [{
            label: '企业A'
          },{
            label: '企业B'
          },{
            label: '企业C'
          },{
            label: '企业D'
          }]
        }]
      }, {
        label: '红谷滩区',
        children: [{
          label: '红谷滩区-社区A',
          children: [{
            label: '企业A'
          },{
            label: '企业B'
          },{
            label: '企业C'
          },{
            label: '企业D'
          }]
        },{
          label: '红谷滩区-社区B',
          children: [{
            label: '企业A'
          },{
            label: '企业B'
          },{
            label: '企业C'
          },{
            label: '企业D'
          }]
        },{
          label: '红谷滩区-社区C',
          children: [{
            label: '企业A'
          },{
            label: '企业B'
          },{
            label: '企业C'
          },{
            label: '企业D'
          }]
        }]
      },{
        label: '瑶湖区',
        children: [{
          label: '瑶湖区-社区A',
          children: [{
            label: '企业A'
          },{
            label: '企业B'
          },{
            label: '企业C'
          },{
            label: '企业D'
          }]
        },{
          label: '瑶湖区-社区B',
          children: [{
            label: '企业A'
          },{
            label: '企业B'
          },{
            label: '企业C'
          },{
            label: '企业D'
          }]
        },{
          label: '瑶湖区-社区C',
          children: [{
            label: '企业A'
          },{
            label: '企业B'
          },{
            label: '企业C'
          },{
            label: '企业D'
          }]
        }]
      }]
    },
    {
        title:"南昌县",
        treeData:[{
            label: '新建中心区',
            children: [{
            label: '中心镇-社区A新建中心区新建中心区',
            children: [{
                label: '企业A新建中心区新建中心区新建中心区'
            },{
                label: '企业B'
            },{
                label: '企业C'
            },{
                label: '企业D'
            }]
        },{
          label: '中心镇-社区B',
          children: [{
            label: '企业A'
          },{
            label: '企业B'
          },{
            label: '企业C'
          },{
            label: '企业D'
          }]
        },{
          label: '中心镇-社区C',
          children: [{
            label: '企业A'
          },{
            label: '企业B'
          },{
            label: '企业C'
          },{
            label: '企业D'
          }]
        }]
      }, {
        label: '红谷滩区',
        children: [{
          label: '红谷滩区-社区A',
          children: [{
            label: '企业A'
          },{
            label: '企业B'
          },{
            label: '企业C'
          },{
            label: '企业D'
          }]
        },{
          label: '红谷滩区-社区B',
          children: [{
            label: '企业A'
          },{
            label: '企业B'
          },{
            label: '企业C'
          },{
            label: '企业D'
          }]
        },{
          label: '红谷滩区-社区C',
          children: [{
            label: '企业A'
          },{
            label: '企业B'
          },{
            label: '企业C'
          },{
            label: '企业D'
          }]
        }]
      },{
        label: '瑶湖区',
        children: [{
          label: '瑶湖区-社区A',
          children: [{
            label: '企业A'
          },{
            label: '企业B'
          },{
            label: '企业C'
          },{
            label: '企业D'
          }]
        },{
          label: '瑶湖区-社区B',
          children: [{
            label: '企业A'
          },{
            label: '企业B'
          },{
            label: '企业C'
          },{
            label: '企业D'
          }]
        },{
          label: '瑶湖区-社区C',
          children: [{
            label: '企业A'
          },{
            label: '企业B'
          },{
            label: '企业C'
          },{
            label: '企业D'
          }]
        }]
      }]
    }
]
const _menuTree2 = [

{
title:"yy县",
treeData:[{
  label: '新建中心区',
  children: [{
    label: '中心镇-社区A',
  },{
    label: '中心镇-社区B',
  },{
    label: '中心镇-社区C',
  },{
    label: '中心镇-社区D',
  },{
    label: '中心镇-社区E',
  },{
    label: '中心镇-社区F',
  },{
    label: '中心镇-社区G',
  },{
    label: '中心镇-社区H',
  },{
    label: '中心镇-社区I',
  }]
}, {
  label: '红谷滩区',
  children: [{
    label: '红谷滩区-社区A',
  },{
    label: '红谷滩区-社区B',
  },{
    label: '红谷滩区-社区C',
  }]
},{
  label: '瑶湖区',
  children: [{
    label: '瑶湖区-社区A',
  },{
    label: '瑶湖区-社区B',
  },{
    label: '瑶湖区-社区C',
  }]
}]
}
]
const _menuTree3 = [
{
  title:"zz县",
  treeData:[{
    label: '新建中心区',
    children: [{
      label: '中心镇-社区A',
    },{
      label: '中心镇-社区B',
    },{
      label: '中心镇-社区C',
    },{
      label: '中心镇-社区D',
    },{
      label: '中心镇-社区E',
    },{
      label: '中心镇-社区F',
    },{
      label: '中心镇-社区G',
    },{
      label: '中心镇-社区H',
    },{
      label: '中心镇-社区I',
    }]
  }, {
    label: '红谷滩区',
    children: [{
      label: '红谷滩区-社区A',
    },{
      label: '红谷滩区-社区B',
    },{
      label: '红谷滩区-社区C',
    }]
  },{
    label: '瑶湖区',
    children: [{
      label: '瑶湖区-社区A',
    },{
      label: '瑶湖区-社区B',
    },{
      label: '瑶湖区-社区C',
    }]
  }]
},
{
title:"kk县",
treeData:[{
  label: '新建中心区',
  children: [{
    label: '中心镇-社区A',
  },{
    label: '中心镇-社区B',
  },{
    label: '中心镇-社区C',
  },{
    label: '中心镇-社区D',
  },{
    label: '中心镇-社区E',
  },{
    label: '中心镇-社区F',
  },{
    label: '中心镇-社区G',
  },{
    label: '中心镇-社区H',
  },{
    label: '中心镇-社区I',
  }]
}, {
  label: '红谷滩区',
  children: [{
    label: '红谷滩区-社区A',
  },{
    label: '红谷滩区-社区B',
  },{
    label: '红谷滩区-社区C',
  }]
},{
  label: '瑶湖区',
  children: [{
    label: '瑶湖区-社区A',
  },{
    label: '瑶湖区-社区B',
  },{
    label: '瑶湖区-社区C',
  }]
}]
}
]
  
  export default {
    /**
     * 获取侧边栏tab栏数据
     * @param {*} cb 
     */
    getTabList (cb) {
      setTimeout(() => cb(_tabList), 100)
    },
  
    /**
     * 获取侧边栏折叠菜单栏数据1
     * @param {*} cb 
     */
    getMenuTree(cb,index){
        var data = null;
        if(index == 1)
            data = _menuTree1;
        else if(index == 2)
            data = _menuTree2;
        else
            data = _menuTree3;
        setTimeout(() => cb(data),100)
    },
    
  }