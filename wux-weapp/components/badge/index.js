// components/badge/index.js
Component({
  // externalClasses:[''],
  /**
   * 组件的属性列表
   */
  data:{
    count:{
      finalCount:0
      // count 外来
      // overflowCount 外来
    }
    // 内部数据
  },
  properties: {
    count:{
      type:Number,
      value:0,
      observer(newVal){
        console.log(newVal)      
        const{overflowCount}= this.data;
        const finalCount = newVal>=overflowCount?`${overflowCount}+`:newVal
        this.setData({
          finalCount
        })
      }
    },
    overflowCount:{
      type:Number,
      value:99
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
