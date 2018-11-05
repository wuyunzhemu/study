// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList:false,
    carts:[],
    totalPrice:0,
    selectAllStatus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    setTimeout(()=>{
      
      this.setData({
        
        carts:[
          {
            id:1,title:'Iphone MX',
            num:1,
            image:'/image/s5.png',
            price:867.54,
            selected:true
          },
          {
            id:2,title:'球形ipad',
            num:1,
            image: '/image/s6.png',
            price:450.25,
            selected:true
          },{
            id:3,title:'一盘刀',
            image: '/image/s4.png',
            num:1,
            price:4.44,
            selected:false
          }
        ],
        hasList: true,
      })
      this.getTotalPrice();
    },1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getTotalPrice:function(){
    let carts = this.data.carts;
    let total = 0;
    // for(let i = 0;i<carts.length;i++){
    //   if(carts[i].selected){
    //     total+=carts[i].num*carts[i].price;
    //   }
    // }
    carts.forEach((item,index)=>{
      if(item.selected){
        total+=item.price * item.num;
      }
    })
    this.setData({
      totalPrice: total.toFixed(2)
    })
  },
  selectedList:function(e){
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts[index].selected=!carts[index].selected;
    let selectedcount = 0;
    for(let cart of carts){
      if(cart.selected == true){
        selectedcount++;
      }
    }
    let isAllSelected =false;
    if(selectedcount == carts.length){
      isAllSelected = true
    }
    this.setData({
      carts,
      selectAllStatus:isAllSelected
    })
    this.getTotalPrice();
  },
  deleteList:function(e){
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts = carts.filter((cart,i)=>{
      return index !=i;
    })
    this.setData({
      carts
    })
    if(!carts.length){
      this.setData({
        hasList:false
      })
    }
    this.getTotalPrice();
  },
  selectAll:function() {
    let carts = this.data.carts
    let selectAllStatus = this.data.selectAllStatus
    selectAllStatus = !selectAllStatus
    carts.forEach((item, index) => {
      item.selected = selectAllStatus
    })
    this.setData({
      carts,
      selectAllStatus
    })
    this.getTotalPrice()
  },
  addCount:function(e){
    console.log('addCount');
    let carts = this.data.carts;
    let index = e.currentTarget.dataset.index;
    carts[index].num++;
    this.setData({
      carts
    })
    this.getTotalPrice()
  },
  minusCount:function(e){
    console.log('minusCount');
    let carts = this.data.carts;
    let index = e.currentTarget.dataset.index;
    carts[index].num--;
    if(carts[index].num<=0)
    {
      carts[index].num=1;
    }
    this.setData({
      carts
    })
    this.getTotalPrice()
  },
  toPay:function(e){
    let price = e.currentTarget.dataset.price;
    console.log('支付'+price+'元')
  }
})
