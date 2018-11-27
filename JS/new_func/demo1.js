// new ? 实例化过程是怎么底层？
// Otaku类 抽象概念 等待被new
function Otaku(name,age){
  this.name = name;
  this.age = age;
  this.habit = 'Games';
}
Otaku.prototype.strenth = 60;
Otaku.prototype.sayYourName = function(){
  console.log('I AM ' + this.name);
}

// new 
// 1. 返回一个实例{} 声明，拥有Otaku函数中加的那些属性
// 2. 实例可以访问到Otaku.prototype中的属性

// new？ js 语言的关键字
function objectFactor(){
  var obj = new Object(),//1.得到一个新的空对象
  Constructor = [].shift.call(arguments)
  Constructor.apply(obj,arguments);// 2.this指向新的对象
  // 3. 让Constructor执行
  obj.__proto__ = Constructor.prototype;  //使对象的__proto__指向构造函数的原型对象
  console.log(obj.__proto__);
  // obj 上拥有Constructor 上所有属性
  // 函数也是对象，
  return obj//一个对象;
}
// 1 构造函数 2 其余是构造函数需要的参数
const didi = objectFactor(Otaku,'kevin',18);
console.log(didi.name);
didi.sayYourName();