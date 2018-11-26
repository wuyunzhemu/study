function Person(name){
  this.name = name;
}

let p =new Person('张三');
console.log(typeof Person);
console.log(typeof p);
console.log(Person.prototype);
console.log(p.prototype); //prototype只在构造函数上，对象上没有
console.log(Person.prototype.constructor === Person);
console.log(Person.__proto__);
console.log(p.__proto__);