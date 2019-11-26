// 头部组件
<template>
    <div>
        <div class="header-left">
            <h1 class="header-left-title">企业安全风险分级监控与隐患排查治理监管平台-2.0</h1>
            <p class="header-left-welcome">
                欢迎
                <span class="header-left-status">政府员工</span>
                登录
            </p>
        </div>
        <div class="header-right">
            <ul class="header-right-nav">
                <li class="header-right-nav-item"><a>账户</a></li>
                <li class="header-right-nav-item"><a>关于</a></li>
                <li class="header-right-nav-item"><a>首页</a></li>
                <li class="header-right-nav-item"><a>退出</a></li>
                <li class="header-right-nav-item"><a>授权</a></li>
            </ul>
            <time>2019年11月5日 星期二</time>
        </div>
    </div>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style scoped> 
    .header-left{
        float: left;
    }
    .header-left .header-left-title{
        color:#373d41;
        font-size: 16px;
        margin:10px 0;
    }
    .header-left p{
        margin:0;
        text-align: left;
    }
    .header-left .header-left-welcome{
        color:#666666;
        font-size: 12px;
        margin-left:10px;
    }
    .header-left .header-left-welcome .header-left-status{
        color:#409EFF;
    }
    .header-right{
        float: right;
    }
    .header-right .header-right-nav{
        padding:0;
        margin:0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width:200px;
        margin:10px 0;
    }
    .header-right .header-right-nav .header-right-nav-item{
        list-style: none;
        color:#909399;
        font-size: 14px;
        cursor: pointer;
    }
    .header-right .header-right-nav .header-right-nav-item:hover{
        color:#409EFF;
    }
    .header-right time{
        color:#909399;
        font-size: 13px;
    }
</style>