const url = require("url");
let fileObj = {
    reqType: '', // 接口请求类型：必传项，传入"POST"或者"GET"
    fileName: '', // 文件名称：下载文件时必传,其他情况下可不传，若传时 ".pdf"， ".png"， ".zip" 等类型后缀需要拼接上：例如：'word测试文档' + ".pdf"
    dealType: '', // 文件处理类型：必传项，传入下载文件：'downLoad' 或者 预览时处理blob流为浏览器识别的地址: 'blobUrl'
    paramObj: {}, // 入参对象值：非必传项，根据业务场景处理
};
const hide = message.loading('下载中..', 0); // 处理加载提示：下载中.. 加载中.. 等，自己根据需要场景修改
filesBlobDeal(url, fileObj, (code, msg, blobUrl) => {
    if (code == 200) {
        if(msg){message.success(msg);};
        // 下面处理回调成功后业务逻辑

    } else if (code == 30001) {
        message.info(msg);
    } else {
        message.error('请求异常！');
    }
    hide(); // 关闭加载提示
});
