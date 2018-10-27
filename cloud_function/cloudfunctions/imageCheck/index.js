// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init()
const AppId = '1257917888';
const secretId = 'AKID67DAvPk4e7OUO6oxBIEya4OZYWimabsy';
const secretKey = '5zgCVgeS6XnroaP8h3GvTs56vcbP2Ukp'
const fs = require('fs');  //module.exports
const path = require('path');
const {ImageClient } = require('image-node-sdk');
let imageClient = new ImageClient({AppId,secretId,secretKey});
// 云函数入口函数
exports.main = async (event, context) => {
  return await imageClient.imgPornDetect({
    formData:{
      // node 文件系统 fs rwd+，path 提供路径对象
      image:fs.createReadStream(path.join(__dirname,'./test.jpeg'))
    },
    headers:{
      'content-type':'multipart/form-data'
    }
  })
}