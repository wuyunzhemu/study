DOM 构建和渲染是主旋律  快
启动的图片们延迟加载，是在主旋律之外的线程
多线程
JS 是单线程语言
  web workers 启动一个跟主线程隔离开的运行时
  图片的延迟加载，主线程是html，还有很多任务要抢主线程的，页面任务的排队
  将图片的下载，放到单独的线程里做，之后再回来主线程。

  
