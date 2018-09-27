- 手机的尺寸
    px 在手机端有问题 绝对单位
    css 像素 px  retina屏 750px        828px
    硬件物理尺寸 iphone 8 375pt  8 plus 414pt

- 相对单位
    rem 相对于html上设置的font-size
    em 单位，相对于自身的font-size来的
    vh vw 不管任何设备，宽度100vw，高度是100vh
    将设备宽度的十分之一作为html的font-size，10rem就会等于整屏宽度，方便生成一个栅格系统

- inline-block
    非常适合用来做布局，将Block元素变得inline元素，跟兄弟良好相处。
    天生的bug，会有间隙，来自于换行符，
    1. 删除换行符
    2. 父元素上设置font-size:0;

- 自适应网页RWD
rem 相对单位，动态的生成html font-size
结合10rem 方案 flexible
1. dom得到html标签
2. 将设备宽度的1/10给html font-size 