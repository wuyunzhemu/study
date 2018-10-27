// require+module.exports js模块化规范，commonJS
// import from    export default es6 模块化  node6以下不支持
const cloud = require('wx-server-sdk');
cloud.init();
const got = require('got');
const db = cloud.database();
// async 同步 是函数修饰符,属于es7，让异步的代码同步化
//云函数的执行是异步的，node环境有一个main函数在index.js内，async表示在这个函数内部将发生耗时事情（如ajax请求、文件上传）
exports.main = async () => {
  // 费时，异步的，但是想保持执行的顺序和阅读的顺序
  // 用户表userInfo photos图片
  // databse photos map查询
  // userInfo 
  const photoInfos = [];
  const photos = await db.collection('photos').get();
  console.log(photos);
  for(let i =0;i<photos.data.length;i++){
    const photo=photos.data[i];
    let openid = photo._openid;
    const user=await db.collection('userInfo')
    .where({
      _openid:openid
    }).get();
    if(user.data.length>0){
      photo.user=user.data[0]
    }
    photoInfos.push(photo)
  }
  return photoInfos;



  
}


  // await 让我们的代码等待以下 只有将函数命名为async才可以用
//   let getResponse = await got('httpbin.org/get')
//   console.log(getResponse);
//   let postResponse = await got('httpbin.org/post', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//       title: '这是标题',
//       value: 123
//     })
//   })
//   console.log(postResponse.body);
//   return postResponse.body
// }

