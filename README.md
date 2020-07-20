# Mini-share
[![](https://img.shields.io/badge/basicLib-%3E=2.2.3-brightgreen?logo=wechat)](https://github.com/MakerGYT/share)
[![GitHub stars](https://img.shields.io/github/stars/MakerGYT/share?style=social)](https://github.com/MakerGYT/share/stargazers)
> 微信小程序分享组件,可通过可视化设计并导出json，生成分享海报模板

虽然目前提供了监听右上角菜单[“分享到朋友圈”](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share-timeline.html)按钮行为的接口(beta版，暂仅在Android平台支持)，但是限制众多。图片式分享仍然是目前可以跨越朋友关系，跨越平台的较好方式。

## 效果展示
![截图](https://imgkr.cn-bj.ufileos.com/757f3399-a7c9-44c8-9f7a-20c83aac7387.gif)
![截图](https://imgkr.cn-bj.ufileos.com/a5680f01-8791-407c-a3cd-ab362bbc3330.png)
![使用案例](https://cdn.blog.makergyt.com/mini/assets/poster-H.png)
## 如何使用
1. 获取组件
```git
git clone https://github.com/MakerGYT/share.git
```
2. 引入组件
```sh
└── components
    ├── painter
    └── share
```
将share和painter复制到组件文件夹下，并通过配置文件引入本组件:
```json
{
  "usingComponents":{
    "share":"/components/share/share"
  }
}
```
3. 使用组件
```html
<!-- index.wxml -->
<button bindtap="toShare" type="primary">分享</button>
<share show="{{shareShow}}" bind:setPoster="toMoments" palette="{{palette}}"></share>
```
```js
// index.js
import Poster from 'poster.js';
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
      palette: new Poster(params).palette()
    })
  },
})
```
海报模板文件通过[工具](https://lingxiaoyi.github.io/painter-custom-poster/)绘制,保存到`poster.js`
```js
// poster.js
export default class Poster{
  constructor(params) {
    this.params = params;
  }
  palette() {
    return ({
      ...
    })
  }
}
```

*Tips*:
- 如果是在Tab页调用组件，由于底部Tabbar层级较高，海报尺寸较长时会被其遮挡操作，可以通过`showPoster`和`closePoster`两个事件状态控制Tabbar的显隐。
- 尺寸单位支持rpx
- 可通过提取公共样式来简化和压缩海报模板文件

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
**[Painter](https://github.com/Kujiale-Mobile/Painter)**,修复了一些问题,[pull257](https://github.com/Kujiale-Mobile/Painter/pull/257#issuecomment-658105269):
- 支持canvas2D
- 修复保存图片出错
- 修复真机自定义字体无法显示
- 修复画布尺寸较大导致的出错
- 修复真机图片模糊
- 规范部分语法

## License
[Apache-2.0](https://github.com/MakerGYT/share/blob/master/LICENSE) © MakerGYT