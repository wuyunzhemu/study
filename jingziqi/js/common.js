const common = {
  curState:()=>go.game.state.getCurrentState(),
  addBtn:({x,y,callBack,context,text})=>{
    const btn = common.curState().add.button(x,y,'btn',callBack,context,0);
    const label = common.curState().make.text(btn.width/2,btn.height/2,text,{
      font:"36px",
      fill:"#ff5420"
    });
    label.anchor = {x:0.5,y:0.5}
    btn.addChild(label);
  }
}
module.exports = common