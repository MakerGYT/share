# Share
[![](https://img.shields.io/badge/basicLib-%3E=2.2.3-brightgreen?logo=wechat)](https://github.com/MakerGYT/share)
[![GitHub stars](https://img.shields.io/github/stars/MakerGYT/share?style=social)](https://github.com/MakerGYT/share/stargazers)
> 微信小程序分享组件,可生成分享海报

## 效果展示
![截图](https://imgkr.cn-bj.ufileos.com/729b480a-bdf1-46bf-be86-5cd17a8d928f.png)
![截图](https://imgkr.cn-bj.ufileos.com/6fa9dfca-8384-4051-a736-e2bbd3f458b7.png)
![使用案例](https://cdn.blog.makergyt.com/mini/assets/poster-H.png)
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
    "share":"/components/share/share"
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

*Tips*
如果是在Tab页调用组件，由于底部Tabbar层级较高，海报尺寸较长时会被其遮挡操作，可以通过`showPoster`和`closePoster`两个事件状态控制Tabbar的显隐。

## 属性列表
| 属性 |类型| 默认值|必填|说明|
| -- | --|--|--|--|
| show | Boolean | false | 是 |是否显示 |
|palette| Object | | 是　|海报数据源|
|mask | Boolean |true | 否 |是否显示背景蒙层|
| maskClosable | Boolean | false | 否 |点击背景蒙层是否可以关闭 |
|bind:setPoster|eventhandler| | 是 | 点击分享到朋友圈时触发的事件，一般用来生成和传入实例化后的海报数据 |
|bind:showPoster|eventhandler| | 否 | 海报生成后触发的事件，,event.detail = {path} |
|bind:closePoster|eventhandler||否| 关闭海报后触发的事件,event.detail = {saved} |

## 依赖
- [Painter](https://github.com/Kujiale-Mobile/Painter)