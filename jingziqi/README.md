1. weapp-adapter
  全局的window canvas对象
  降低了游戏开发的门槛，dom的感觉出来了

2. canvas的比例问题
  宽度是手机宽度，
  设计稿 750  
  设计稿大小 * canvas大小/ 750
  canvas.width 和image 都可以直接设置width

3. 游戏框架已准备好大多数对象 Game State
  cocos-2d  2d
  phaser    2d
  Egret     2d typeScript
  three.js  3d  
  js/libs/
  js/state  场景目录 -> 界面
    preload 加载资源 create 绘制界面
  es6 extends 模块化机制,将其封装。
