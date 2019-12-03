Function.prototype.apply2 = function(context){
  if (typeof context === 'undefined' || context === null) {
    context = {}
  }
  console.log(this);
  context.fn = this
  let args = arguments[1]
  let result
  if (args) {
    result = context.fn(...args)
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

let testJson = {
  a:1
}
let testJson2 = {
  a:5
};
function getData(){
  return this.a;
}

console.log(getData.apply2(testJson));
console.log(getData.apply2(testJson2));