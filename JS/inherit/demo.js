function Parent(){
  this.name='gfy';
}

// 父类，子类，prototype属性，原型式继承
// Person 函数 this指针-> new Object js本没有类,只有对象Object 
// 原型链对象 {} prototype? 任何函数都可以有的属性
Parent.prototype.getName=function(){
  console.log(this.name);
}


// 原型链继承
function Child(){

}
Child.prototype = new Parent();
var child1 = new Child();
// child1.name.push('yayu');
child1.getName();
