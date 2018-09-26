//男主角
//json object 对象字面量
var xiaoming={
    name:'小明',
    sex:'男',
    single:true,
    classroom:'161',
    hometown:'赣州',
    sendFlower:function(target){
      target.receiveFlower(this);
    }
};

//女主角
var xiaohong={
    name:'小红',
    sex:'女',
    single:true,
    classroom:'161',
    goodMod:false,
    receiveFlower:function(){
       if(this.goodMod==true)
       {
           console.log('看场电影再说');
       }
       else
       {
           console.log('把花扔掉.jpg');
       }
    },
    listenGoodMod:function(){
        setTimeout(()=>{
            this.goodMod=true;
            this.receiveFlower();
        },10000);
    }
};


//代理 小丽 Proxy
var xiaoli={
    name:'小丽',
    sex:'女',
    hometown:'赣州',
    receiveFlower:function(sender) {
        // if(sender.name!='小明')
        // {
        //     console.log('gun');
        // }
        // else{
        //     console.log('还是我们在一起吧');
        // }
        xiaohong.listenGoodMod();
    }
};
xiaoming.sendFlower(xiaohong);
//xiaoming.sendFlower(xiaoli);