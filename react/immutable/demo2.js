var arr = ['old',1,true,null,undefined];
var new_arr = arr.slice();
new_arr[0] = 'new';
console.log(arr,new_arr);
// slice concat 数组少数返回新数组的方法 浅拷贝
// 未来未为可知 new_arr arr 一方修改,不要用js bad parts
// Immutable 让未来可知
// reducer 纯函数