/**
 * 获取侧边栏数据api
 * @type {*[]}
 * @private
 */




const _tabList = [
    {className:"tab-item is-active",labelName:"辖区企业数据"},
    {className:"tab-item",labelName:"风险评级企业"},
    {className:"tab-item",labelName:"行政执法"},
    {className:"tab-item",labelName:"用户角色管理"},
  ];
const _menuTree1 = [
    {
        label:"新建县",
        id:"01",
        treeData:[{
            label: '新建中心区',
            id:'11',
            children: [{
              label: '中心镇-社区A新建中心区新建中心区',
              id:'111',
              children: [{
                  id:'1111',
                  label: '企业A新建中心区新建中心区新建中心区',
                type:'3',
              },{
                type:'3',
                  label: '企业B',
                  id:'1112'
              },{
                type:'3',
                  label: '企业C',
                  id:'1113'
              },{
                type:'3',
                  label: '企业D',
                  id:'1114'
              }]
        },{
          label: '中心镇-社区B',
              id:'112',
          children: [{
            type:'3',
            label: '企业A',
            id:'1121'
          },{
            type:'3',
            label: '企业B',
            id:'1122'
          },{
            type:'3',
            label: '企业C',
            id:'1123'
          },{
            type:'3',
            label: '企业D',
            id:'1124'
          }]
        },{
          label: '中心镇-社区C',
              id:'113',
          children: [{
            type:'3',
            label: '企业A',
            id:'1131'
          },{
            type:'3',
            label: '企业B',
            id:'1132'
          },{
            type:'3',
            label: '企业C',
            id:'1133'
          },{
            type:'3',
            label: '企业D',
            id:'1134'
          }]
        }]
      }, {
        label: '红谷滩区',
          id:'12',
        children: [{
          label: '红谷滩区-社区A',
          id:'121',
          children: [{
            type:'3',
            label: '企业A',
            id:'1211'
          },{
            type:'3',
            label: '企业B',
            id:'1212'
          },{
            type:'3',
            label: '企业C',
            id:'1213'
          },{
            type:'3',
            label: '企业D',
            id:'1214'
          }]
        },{
          label: '红谷滩区-社区B',
          id:'122',
          children: [{
            type:'3',
            label: '企业A',
            id:'1221'
          },{
            type:'3',
            label: '企业B',
            id:'1222'
          },{
            type:'3',
            label: '企业C',
            id:'1223'
          },{
            type:'3',
            label: '企业D',
            id:'1224'
          }]
        },{
          label: '红谷滩区-社区C',
          id:'123',
          children: [{
            type:'3',
            label: '企业A',
            id:'1231'
          },{
            type:'3',
            label: '企业B',
            id:'1232'
          },{
            type:'3',
            label: '企业C',
            id:'1233'
          },{
            type:'3',
            label: '企业D',
            id:'1234'
          }]
        }]
      },{
        label: '瑶湖区',
          id:'13',
        children: [{
          label: '瑶湖区-社区A',
          id:'131',
          children: [{
            type:'3',
            label: '企业A',
            id:'1311'
          },{
            type:'3',
            label: '企业B',
            id:'1312'
          },{
            type:'3',
            label: '企业C',
            id:'1313'
          },{
            type:'3',
            label: '企业D',
            id:'1314'
          }]
        },{
          label: '瑶湖区-社区B',
          id:"132",
          children: [{
            type:'3',
            label: '企业A',
            id:'1321'
          },{
            type:'3',
            label: '企业B',
            id:'1322'
          },{
            type:'3',
            label: '企业C',
            id:'1323'
          },{
            type:'3',
            label: '企业D',
            id:'1324'
          }]
        },{
          label: '瑶湖区-社区C',
          id:'133',
          children: [{
            type:'3',
            label: '企业A',
            id:'1331'
          },{
            type:'3',
            label: '企业B',
            id:'1332'
          },{
            type:'3',
            label: '企业C',
            id:'1333'
          },{
            type:'3',
            label: '企业D',
            id:'1334'
          }]
        }]
      }]
    },
    {
        label:"南昌县",
      id:'02',
        treeData:[{
            label: '新建中心区',
          id:'21',
            children: [{
            label: '中心镇-社区A新建中心区新建中心区',
              id:'211',
            children: [{
              type:'3',
                label: '企业A新建中心区新建中心区新建中心区',
              id:'2111'
            },{
              type:'3',
                label: '企业B',
              id:'2112'
            },{
              type:'3',
                label: '企业C',
              id:'2113'
            },{
              type:'3',
                label: '企业D',
              id:'2114'
            }]
        },{
          label: '中心镇-社区B',
              id:'212',
          children: [{
            type:'3',
            label: '企业A',
            id:'2121'
          },{
            type:'3',
            label: '企业B',
            id:'2122'
          },{
            type:'3',
            label: '企业C',
            id:'2123'
          },{
            type:'3',
            label: '企业D',
            id:'2124'
          }]
        },{
              type:'3',
          label: '中心镇-社区C',
              id:'213',
          children: [{
            type:'3',
            label: '企业A',
            id:'2131'
          },{
            type:'3',
            label: '企业B',
            id:'2132'
          },{
            type:'3',
            label: '企业C',
            id:'2133'
          },{
            type:'3',
            label: '企业D',
            id:'2134'
          }]
        }]
      }]
    }
];
const _menuTree2 = [
{
label:"yy县",
  id:'13',
  type:'2',
treeData:[{
  label: '新建中心区',
  id:'31',
  type:'2',
  children: [{
    type:'2',
    label: '中心镇-社区A',
    id:'311'
  },{
    type:'2',
    label: '中心镇-社区B',
    id:'312'
  },{
    type:'2',
    label: '中心镇-社区C',
    id:'313'
  },{
    type:'2',
    label: '中心镇-社区D',
    id:'314'
  },{
    type:'2',
    label: '中心镇-社区E',
    id:'315'
  },{
    type:'2',
    label: '中心镇-社区F',
    id:'316'
  },{
    type:'2',
    label: '中心镇-社区G',
    id:'317'
  },{
    type:'2',
    label: '中心镇-社区H',
    id:'318'
  },{
    type:'2',
    label: '中心镇-社区I',
    id:'319'
  }]
}, {
  label: '红谷滩区',
  id:'32',
  type:'2',
  children: [{
    type:'2',
    label: '红谷滩区-社区A',
    id:'321'
  },{
    type:'2',
    label: '红谷滩区-社区B',
    id:'322'
  },{
    type:'2',
    label: '红谷滩区-社区C',
    id:'323'
  }]
},{
  label: '瑶湖区',
  id:'33',
  type:'2',
  children: [{
    type:'2',
    label: '瑶湖区-社区A',
    id:'331'
  },{
    type:'2',
    label: '瑶湖区-社区B',
    id:'332'
  },{
    type:'2',
    label: '瑶湖区-社区C',
    id:'333'
  }]
}]
}
];
const _menuTree3 = [
{
  label:"zz县",
  id:'24',
  type:'1',
  treeData:[{
    label: '新建中心区',
    id:'41',
    type:'1',
    children: [{
      type:'4',
      label: '中心镇-社区A',
      id:'411'
    },{
      type:'4',
      label: '中心镇-社区B',
      id:'412'
    },{
      type:'4',
      label: '中心镇-社区C',
      id:'413'
    },{
      type:'4',
      label: '中心镇-社区D',
      id:'414'
    },{
      type:'4',
      label: '中心镇-社区E',
      id:'415'
    },{
      type:'4',
      label: '中心镇-社区F',
      id:'416'
    },{
      type:'4',
      label: '中心镇-社区G',
      id:'417'
    },{
      type:'4',
      label: '中心镇-社区H',
      id:'418'
    },{
      type:'4',
      label: '中心镇-社区I',
      id:'419'
    }]
  }, {
    label: '红谷滩区',
    id:'42',
    type:'1',
    children: [{
      type:'4',
      label: '红谷滩区-社区A',
      id:'421'
    },{
      type:'4',
      label: '红谷滩区-社区B',
      id:'422'
    },{
      type:'4',
      label: '红谷滩区-社区C',
      id:'423'
    }]
  },{
    label: '瑶湖区',
    id:'43',
    type:'1',
    children: [{
      type:'4',
      label: '瑶湖区-社区A',
      id:'431',
    },{
      type:'4',
      label: '瑶湖区-社区B',
      id:'432'
    },{
      type:'4',
      label: '瑶湖区-社区C',
      id:'433'
    }]
  }]
},
{
label:"kk县",
  id:'25',
  type:'1',
treeData:[{
  label: '新建中心区',
  id:'51',
  type:'1',
  children: [{
    type:'4',
    label: '中心镇-社区A',
    id:'511'
  },{
    type:'4',
    label: '中心镇-社区B',
    id:'512'
  },{
    type:'4',
    label: '中心镇-社区C',
    id:'513'
  },{
    type:'4',
    label: '中心镇-社区D',
    id:'514'
  },{
    type:'4',
    label: '中心镇-社区E',
    id:'515'
  },{
    type:'4',
    label: '中心镇-社区F',
    id:'516'
  },{
    type:'4',
    label: '中心镇-社区G',
    id:'517'
  },{
    type:'4',
    label: '中心镇-社区H',
    id:'518'
  },{
    type:'4',
    label: '中心镇-社区I',
    id:'519'
  }]
}, {
  label: '红谷滩区',
  id:'52',
  type:'1',
  children: [{
    type:'4',
    label: '红谷滩区-社区A',
    id:'511'
  },{
    type:'4',
    label: '红谷滩区-社区B',
    id:'512'
  },{
    type:'4',
    label: '红谷滩区-社区C',
    id:'513'
  }]
},{
  label: '瑶湖区',
  id:'53',
  type:'1',
  children: [{
    type:'4',
    label: '瑶湖区-社区A',
    id:'531'
  },{
    type:'4',
    label: '瑶湖区-社区B',
    id:'532'
  },{
    type:'4',
    label: '瑶湖区-社区C',
    id:'533'
  }]
}]
}
];
  
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
        switch(index){
          case '0':data = _menuTree3;break;
          case '1':data = _menuTree2;break;
          case '2':data = _menuTree1;break;
          default:data = null;
        }
      cb(data)
        // setTimeout(() => cb(data),100)
    },
    
  }