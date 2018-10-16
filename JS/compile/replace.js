// var str = 'Visit Microsoft!';
// console.log(str.replace('Microsoft','alibaba'));
// var money = '$asdf$gfy$'
// var reg = new RegExp('$',"g")
// console.log(money.replace(/\$/g,'￥'));

let html = `abc{{username}}edfaxiba`;
let reg = /\{\{(.*)\}\}/gm;
console.log(reg.test(html),RegExp.$1);