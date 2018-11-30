var obj = {
  value:1
}
Function.prototype.bind2 = function(context){
  // 1. 如何返回被绑的函数
  // 2. 如何让新函数在运行时 this指向context
  // 调用bind2的函数foo
  var self = this;
  var args = Array.prototype.slice.call(arguments,1);
  return function(){
    // this
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(context,args.concat(bindArgs));
  }
}
const foo = function(name,age){
  console.log(this.value)
  console.log(name);
  console.log(age);
}
const fooBar = foo.bind2(obj,'daisy');
fooBar(18);