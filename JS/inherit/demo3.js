function Parent (name){
  this.name = name;  //必须穿
  this.colors = ['red','blue','green'];
}

Parent.prototype.getName = function()
{
  return this.name;
}

function Child(name,age){
  Parent.call(this,name)
  this.age = age;
}
Child.prototype = new Parent()
Child.prototype.constructor = Child;
var child4 = new Child('gfy',16);
Child.prototype.sayHello = function(){
  console.log(`Hi,I am ${this.getName()}, I am ${this.age} years old`);
}

child4.sayHello();
console.log(Child.prototype.constructor)