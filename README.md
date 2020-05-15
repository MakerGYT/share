# Share
微信小程序分享组件,可生成分享海报
## 效果展示
![截图](https://imgkr.cn-bj.ufileos.com/729b480a-bdf1-46bf-be86-5cd17a8d928f.png)
![截图](https://imgkr.cn-bj.ufileos.com/6fa9dfca-8384-4051-a736-e2bbd3f458b7.png)
## 如何使用
1. 获取组件
```sh
git clone https://github.com/MakerGYT/share.git
```
2. 引入组件
```
├─components
  ├─share
  ├─painter
```
将share和painter复制到组件文件夹下
```json
// 页面配置文件
{
  "usingComponents":{
    "share":"../../components/share/share" // 相对定位到share.js所在位置
  }
}
```
3. 使用组件
```html
<!-- index.wxml -->
<view bindtap="toShare">分享</view>
<share show="{{shareShow}}" bind:setPoster="toMoments" palette="{{palette}}"></share>
```
```js
// index.js
import poster from 'poster.js';
Page({
  data: {
    shareShow: false
  },
  toShare: function(e) {
    this.setData({
      shareShow: true
    })
  },
  toMoments: function () {
    this.setData({
      palette: new poster().palette()
    })
  },
})
```
海报模板文件通过[工具](https://github.com/lingxiaoyi/painter-custom-poster)绘制,保存到
```js
// poster.js
export default class Poster{
  palette() {
    return ({
      ...
    })
  }
}
```
## 属性列表
| 属性 |类型| 默认值|必填|说明|
| -- | --|--|--|--|
| show | Boolean | false | 是 |是否显示 |
|palette| Object | | 是　|海报数据源|
|mask | Boolean |true | 否 |是否显示背景蒙层|
| maskClosable | Boolean | false | 否 |点击背景蒙层是否可以关闭 |
|bind:setPoster|eventhandler| | 是 | 点击分享到朋友圈时触发的事件，一般用来生成和传入实例化后的海报数据 |
|bindclose|eventhandler||否| 点击背后的mask关闭掉share后触发的事件|

## 依赖
- [Painter](https://github.com/Kujiale-Mobile/Painter)
- [iconfont](https://www.iconfont.cn/)