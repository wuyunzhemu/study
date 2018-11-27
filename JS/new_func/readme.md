<!-- new 到底做了什么？ -->
let p = new Person();
p 是 Object类型,Person 函数类型 typeof 
1. Parent 被执行，加了new 后，Parent 函数会在new的作用域下执行，this指向p 构造函数里的属性被当做P的属性被创建

2. p.__proto__ 指向Person.prototype  p继承了Person.prototype中的属性和方法