/**
 * 获取侧边栏数据api
 * @type {*[]}
 * @private
 */


const _tabList = [
    {className:"tab-item is-active",labelName:"辖区企业数据"},
    {className:"tab-item",labelName:"风险评级企业"},
    {className:"tab-item",labelName:"行政执法"},
  ]
const _menuTree1 = [
    {
        label:"新建县",
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
        label:"南昌县",
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
    label:"新建县",
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
]
const _menuTree2 = [

{
label:"yy县",
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
  label:"zz县",
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
label:"kk县",
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
        let data = null;
        if(index == 1)
            data = _menuTree1;
        else if(index == 2)
            data = _menuTree2;
        else
            data = _menuTree3;
        setTimeout(() => cb(data),100)
    },
    
  }