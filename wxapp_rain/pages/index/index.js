import drawEffect from
'../../lib/effect'

Page({
  data:{
    width:0,
    scale:1
  },
  onLoad(){
    wx.getSystemInfo({
      success:(res)=>{
        let width = res.windowWidth
        this.setData({
          width,
          scale:width/375
        });
      }
    });

    // 初始化canvas
    const canvasId = "effect";
    // canvas绘图 内部的世界 context绘图的上下文环境
    const ctx = wx.createCanvasContext(canvasId);
        // canvas 的绘制大小  下雨效果没啥界面设计，有界面设计则以750设计稿为优先
    let {width,scale}= this.data
    let height = 3000 / 2 * scale
    let rain = drawEffect(ctx,width,height,{amount:100,speedFactor:0.03})
    rain.run();
  }
})