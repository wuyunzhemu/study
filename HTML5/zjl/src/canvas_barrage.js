import Barrage from './barrage.js'

class CanvasBarrage {
  constructor(canvas, video, opts = {}) {
    if(!canvas||!video) return;
    this.canvas = canvas;
    this.video = video;
    this.canvas.width = video.width;
    this.canvas.height = video.height;
    this.ctx = canvas.getContext('2d');
    let defOpts = { 
      //默认属性，安全的data 初始化
      color:'#e91e63',
      speed:1.5,
      opacity:0.5,
      fontSize:20,
      data:[]
    }
    Object.assign(this,defOpts,opts);
    this.isPaused = true;
    this.barrages = this.data.map(item=>new Barrage(item,this));
    // console.log(this);
    // 如何将上述属性直接挂载到对象上，opts
    // {data:[]}
  }
  render(){
    this.clear();
    this.renderBarage();
    if(!this.isPaused){
      requestAnimationFrame(this.render.bind(this));
    }
  }
  clear(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  }
  renderBarage(){
    let time = this.video.currentTime;
    console.log(time);
    this.barrages.forEach(barrage=>{
      // console.log(barrage, barrage.flag, time >= barrage.time);
      if(!barrage.flag && time >= barrage.time){
        // console.log('----------')
        if(!barrage.isInit){
          barrage.init();
        }
        console.log(barrage.speed);
        barrage.x -= barrage.speed;
        console.log(barrage.x);
        barrage.render();
      }
      // barrage 超出了屏幕 当时见到了，出现在屏幕最右边，生存canvas.width/speed，超过了width 消失
      if(barrage.x< - barrage.width){
        barrage.flag = true;
      }
    })
  };

}

export default CanvasBarrage;