const fs = require('fs');
// 遍历目录及子目录，把文件输出
const path = require('path');
const getFilesInDir = function(dir){
  var results = [path.resolve(dir)];
  var files = fs.readdirSync(dir,'utf8');
  console.log(files);
  files.forEach(file=>{
    file = path.resolve(dir,file);
    //文件的信息
    const stats = fs.statSync(file)
    // console.log(stats)
    if(stats.isFile()){
      results.push(file);
    }else{
      results = results.concat(getFilesInDir(file))
    }
  })
  console.log(results)
  return results;
}
 const files = getFilesInDir('./src');
// console.log(files);