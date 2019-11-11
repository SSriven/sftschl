/**
 * 获取主体内容api
 */



export default {
    getEditableTabsByAPI(backFun,title){
        setTimeout(()=>backFun({title}),200);
    }
}