//接受任务
self.addEventListener('message',function(e){
  var data = e.deta;
  console.log(e)
  switch(e.data.cmd){
    case 'start':
    self.postMessage('WORKER STARTED:'+data.msg);
    break;
    case 'stop':
    self.postMessage('WORKER STOPPED'+data.msg);
    break;
  }
})