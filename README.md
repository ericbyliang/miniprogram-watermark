# 小程序水印用法：
## 1、安装组件
```shell
npm install @ericbyliang/@ericbyliang/miniprogram
```
## 2、在app.json声明组件
```shell
"usingComponents": {
    "watermark": "@ericbyliang/miniprogram/watermark/index"
}
```
## 3、在需要的界面wxml加 
```shell
<watermark />
```
## 4、全局设置/取消 水印内容
```shell
const {setWatermarkText} = require("@ericbyliang/miniprogram");
setWatermarkText('林俊杰 2000022') //加水印
setWatermarkText('') //取消水印
```
## 5、设置水印样式
```shell
 <watermark text='周杰伦 2000021' textSize='14' textColor='rgba(80,80,80,0.08)' rotate='-20' gapX='120' gapY='180'/>
 ```
 ### 说明：<br/>
 text：水印文本<br/>
 textSize：水印字体大小(rpx)<br/>
 textColor：水印字体颜色和透明度<br/>
 rotate：水印旋转角度(deg)<br/>
 gapX：一行每个水印水平间隔(rpx)<br/>
 gapY：每行水印垂直间隔(rpx)<br/>
