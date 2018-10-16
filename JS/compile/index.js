const html = `
  <view>
    <text>{{username}}<text>
  </view>
`;
var username = `gg`;
// let obj = {
//   username:'gg'
// };
// {{}}
// 在模板中，查找{{key}}
// 替换成username 变量的值 replace
function compile(html){
  if( /\{\{(.*)\}\}/gm.test(html))
  {
    let key=RegExp.$1;
    html = html.replace(/\{\{(.*)\}\}/gm,RegExp.$1);
  }
  return html;
}
const compiledHTML = compile(html);
console.log(RegExp.$1)            //变量名
console.log(compiledHTML);