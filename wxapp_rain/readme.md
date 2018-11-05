canvas 游戏及特效
小程序里canvas 大小是px 需要scale
绘图API 跟web中有区别


ctx + 绘图API  将绘制的细节封装出去
画布 wx.createCanvasContext() 跟web不一样的地方 canvas的实现使用了IOS/Android的一套
封装？ 绘图这块，封装到utils 里
canvas-id = "effect"
ctx,
画布的大小 解构 width scale height
drawEffect(this.data.width,height,this.data.scale,...)

utils 
  小程序里canvas 特效只是一部分,将它抽象封装吧，有利于将复杂部分隐去，适合多人合作