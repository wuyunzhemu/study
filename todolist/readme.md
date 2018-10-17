- 模板里要有if else for 指令
  模板里存在着业务逻辑 wx:if   wx:else  wx:for

  界面有状态 登录前，登陆后状态

  数据驱动界面状态
  hasUserInfo 决定了界面有两种 wx:if wx:else

- 微信的生态及机制
  小程序的优势:获取用户信任和信息，在微信里，小程序可分享到讨论组

  用户信息为个人隐私，如要使用要获取用户的授权

  button 询问  特殊按钮 open-type="getUserInfo"
  bindgetuserinfo='getUserInfo'
  block 显示的过程

- setData()
  改变data里的数据的值
  并且拥有让界面里相关的部分热更新的能力

- wx:key 
  循环一定要加唯一性的key
  列表值发生改变，如果直接替换整个列表的wxml，太浪费了，
  有key之后，便会找到相应的那个key，进行更新.

  