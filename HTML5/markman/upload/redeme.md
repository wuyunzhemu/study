1. 良好的结构/语义化/功能准确是第一步
  input type=file accpet="image/*" multiple 文件上传控件
  - .hd+.bd.+.ft 不一定要全，
  - .page 
  - 经验，移动端的常用组件
    .weui-uploader
    .weui-cells
  BEM
    weui-uploader__file-content  一般是三层
    Element 不受html层次来限制，主要看作用及任务，业务
    三层半用- 如果搞不定，结构划分不够细。
    modifier 状态用 _ 要善于在元素的结构化类名外，再加状态类名。
    BE 负责结构，modifier 类名，一般是动态加上去的。