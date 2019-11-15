//Tabs标签页
<template>
    <div class="tabs">
        <el-tabs v-model="editableTabsValue"  type="card" closable @tab-remove="removeTab"
        @tab-click='clickTab'>
            <el-tab-pane
                v-for="(item, index) in tabPageArr"
                :key="index"
                :label="item.title"
                :name="index+''">    
                <main-content  v-show="index === Number(editableTabsValue)" :mainType="item.type"></main-content>
            </el-tab-pane>
        </el-tabs>
        
    </div>
</template>

<script>

import MainContent from './comp_MainContent.vue'
import { mapState,mapMutations ,mapGetters ,mapActions} from 'vuex'
export default {
    data() {
      return {

      }
    },
    mounted(){

    },
    computed:{
        ...mapState('mainDataStore',{
            tabPageArr: state => state.editableTabs
        }),
        //对于使用v-model绑定的数据，需要添加set和get方法
        editableTabsValue:{
            get(){
                return this.$store.state.mainDataStore.editableTabsValue
            },
            set(value){
                this.changeEditableTabsValue(value)
            }
        }
    },
    methods: {

        /**
         * 删除tab标签页
         * @param targetName
         */
      removeTab(targetName) {

          let tabs = this.tabPageArr;
          let len = tabs.length;
          let active = Number(this.editableTabsValue);
          let target = Number(targetName);
          if(len === 1 && target ===0){//如果只有一个标签，不能删除
              return;
          }
          console.log(active,target);
          if (active === target) {//要删除的标签页和当前展示的标签页相同
              let nextTab = tabs[active - 1];
              tabs[active].active = false;
              if (nextTab) {
                  active = active-1;
                  this.changeEditableTabsValue(active);
              }else{
                  nextTab = tabs[active + 1];
                  if(nextTab){
                      active = active+1;
                      this.changeEditableTabsValue(active-1);
                  }
              }
              tabs[active].active = true;

          }else if(active < target){
              this.changeEditableTabsValue(active);
          }else{
              this.changeEditableTabsValue(active-1);
          }


          this.changeTabPageArr(tabs.filter((tab,index) => index!== target));

      },
        /**
         * 点击标签页
         * @param target
         */
      clickTab(target){

      },

        ...mapMutations('mainDataStore',{
            changeTabPageArr:'changeEditableTabs',
            changeEditableTabsValue:'changeEditableTabsValue'
        })
    },
    components:{
        MainContent
    }
}
</script>