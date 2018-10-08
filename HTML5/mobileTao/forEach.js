Array.prototype.forEach = function(fn){
  if(typeof fn !== 'function'){
    throw new Error('参数必须为函数');
  }
  // 方法作为对象的方法调用时，this指向当前对象
  let arr = this ;
  if(!Array.isArray(arr)){
    throw new Error('只能对数组用forEach方法');
  }

  //forEach功能
  for(let index=0;index<arr.length;index++)
  {
    fn(arr[index],index,arr);
  }
}

const arr =new Array(1,2,3);
arr.forEach(function(i,index){
  console.log(`第${index}当前遍历值为${i}`);
});

// [1,2,3].forEach(function(i,index){
//   console.log(`第${index}当前遍历值为${i}`);
//   console.log(arguments[0] == i);
// })