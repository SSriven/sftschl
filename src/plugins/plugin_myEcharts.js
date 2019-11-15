const echarts = require('echarts')
import Vue from 'vue'

// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
//引入圆饼图
require('echarts/lib/chart/pie');

Vue.prototype.$echarts = echarts