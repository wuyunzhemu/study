// 云开发的时代，服务器没有实指，动态分配，动态扩容
// 数据库是MongoDB database sdk get() where() update() database->collection->doc json

const db = wx.cloud.database()
const book = db.collection('mybook')
const _ = db.command
const app = getApp()

Page({
  data:{
    book_list:[]
  },
  onLoad:function(){
    // 数据库sql select * from mybook 关系型数据库 
    // mongodb 为nosql 非查询语句查询 db.find({})
    db.collection('mybook').get({
      success:res=>{
        console.log(res.data);
        this.setData({
          book_list:res.data
        })
      }
    })
  },
  onPullDownRefresh:function(){
    db.collection('mybook').get().then(res=>{
      this.setData({
        book_list:res.data
      },res=>{
        console.log('数据更新完成')
        wx.stopPullDownRefresh();
      })
    })
  }
})