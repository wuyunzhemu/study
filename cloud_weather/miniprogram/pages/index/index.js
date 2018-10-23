wx.cloud.init({
  env:'fy-5ff9cd'
})

const db = wx.cloud.database()   //得到数据库
const productsCollection = db.collection('products')    //得到数据库内名为'product'的集合，即表
const _ = db.command
   
  Page({

    data:{
      products:[]
    },
    onPullDownRefresh:function(){
      productsCollection.get().then(res=>{
        this.setData({
          products:res.data
        },res=>{
          console.log('数据更新完成')
          wx.stopPullDownRefresh();
        })
      })
    },
    onReachBottom:function(){
      console.log('上拉加载更多');
    },
    data:{
      page:1
    },
    onLoad:function(){
      productsCollection
        .get()
        .then(res =>{
         this.setData({
           products:res.data
         })
         console.log(this.data)
        })
    },
    click: function(event) {
      // update view + 1 doc  一条记录
      // database<-collection<-document
      productsCollection.doc(
        event.currentTarget.dataset.id)
        .update({
          data: {
            view: _.inc(1)
          }
        })
    }  
  })