// 首字母大写，构造函数
var BicycleShop;
console.log(BicycleShop);
BicycleShop = null;
console.log(BicycleShop);
BicycleShop = function(name){
  this.name = name;
}

var BicycleFactory = function(){

}
BicycleFactory.creatBicycle = function(model){
  let bicycle;
  switch(model){
    case 'The Speedster':
      bicycle = new Speedster();
      break;
    case 'The Lowrider':
      bicycle = new Lowrider();
      break;
    case 'The Comfort Cruiser':
      bicycle = new ComfortCruiser();
      break;
    case 'UC':
       bicycle = new UC();
       break;
    default:
      bicycle = new Giant();
  }
  return bicycle;  
}

var Bicycle = function(){

}

Bicycle.prototype = {
  assemble:function(){
    console.log('assemble ok!');
  },
  wash:function(){
    console.log('wash ok!');
  },
  getName:function(){
    return this.name;
  }
};

var Speedster = function(){
  this.name = 'Speedster';
}
Speedster.prototype = new Bicycle();
var Lowrider = function(){
  this.name = 'Lowrider';
}
Lowrider.prototype = new Bicycle();
var ComfortCruiser = function(){
  this.name = 'ComfortCruiser';
}
ComfortCruiser.prototype=new Bicycle();
var Giant = function(){
  this.name = 'Giant';
}
Giant.prototype = new Bicycle();
BicycleShop.prototype = {
  sellBicycle:function(model){
    // 有很多的车型
    let bicycle = BicycleFactory.creatBicycle(model);
    bicycle.assemble();
    bicycle.wash();
    console.log(bicycle.getName());
  }
}
// BicycleShop = 1;
// console.log(typeof BicycleShop);
// js BicycleShop 变量名 值 动态类型的语言
//  变量 = 变量名 + 值 + 类型
// 变量在赋值前，undefined ,变量的类型由值决定，类型决定变量的职责和功能
var bicycleShop1 = new BicycleShop('要啥自行车');
console.log(bicycleShop1);
bicycleShop1.sellBicycle('Giant');
bicycleShop1.sellBicycle('The Speedster');

