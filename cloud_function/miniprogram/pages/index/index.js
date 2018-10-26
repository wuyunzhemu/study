

Page({
  data:{

  },
  // 云函数是独立的node环境，需经过新建，安装依赖，上传等步骤
  // 云开发能力，
  http:function(){
    wx.cloud.callFunction({
      name:'http',
    }).then(res=>{  
      console.log(res.result);
    })
  }
})