function Parent(name){
  this.name = name;
}
let p = new Parent('张三'); 
console.log(Parent.prototype.constructor);  //如果prototype未指向，就指向object
console.log(p.__proto__ == Parent.prototype)
console.log(Parent.__proto__);