function Person(){
  this.names = ['kevin','daisy'];
}
// 1 this 永远跟函数运行的方式有关
function Child(){
  Person.call(this);
}
// 子类拥有父类上的属性
var child2 = new Child();
child2.names.push('yuya')
console.log(child2.names);
var child3 = new Child();
console.log(child3.names)
console.log(Person.prototype);