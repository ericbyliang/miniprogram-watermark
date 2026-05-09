1、npm install @ericbyliang/@ericbyliang/miniprogram
2、在app.json声明组件
"usingComponents": {
    "watermark": "./src/watermark/index"
}
3、在需要的界面wxml加 <watermark />
4、全局设置/取消 水印内容
const {setWatermarkText} = require("@ericbyliang/miniprogram");
setWatermarkText('林俊杰 2000022') //加水印
setWatermarkText('') //取消水印
5、设置水印样式
 <watermark text='周杰伦 2000021' textSize='14' textColor='rgba(80,80,80,0.08)' rotate='-20' gapX='120' gapY='180'/>
 说明：
 text：水印文本
 textSize：水印字体大小(rpx)
 textColor：水印字体颜色和透明度
 rotate：水印旋转角度(deg)
 gapX：一行每个水印水平间隔(rpx)
 gapY：每行水印垂直间隔(rpx)