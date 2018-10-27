wx.cloud.init({

})
const db = wx.cloud.database()
Page({
  data:{
    ads:[],
    item:{
      user:{
        avatar:'',
        nickname:'斜',
        summary:'axiba',
      }
    }
  },
  onLoad:function(){
    db.collection("ads").get({
      success:res=>{
        this.setData({
          ads:res.data
        });
        // 什么时候用云函数 小程序的前端搞不定的时候，openid 需要复杂计算
        // async await 三个数据库的综合查询
        // wx.cloud.database()
        // 查询 select  mongodb no-sql 没有select概念  find()取代之
        // where：条件  orderby：排序  Limit：限制条数  skip:忽略
        // 取第2页  skip(page1.count).limit(page2.count)
        // 取第3页 get().skip(page1.count+page2.count).limit(page3.count)
        wx.cloud.callFunction({
          name:"getTravelInfo",
          data:{
            count:5,
            startIndex: 0
          },
          success:res=>{
            console.log(res);
          }
        });
      }
    });
  }
});