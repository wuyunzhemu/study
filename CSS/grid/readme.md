layout
  css里布局是不能说的秘密，css 里直接表达布局是不完整的
  1. 网页跟平面设计媒体一样，好看。
    不好看时，由table来做布局，tr + td

    天生是用来，展示数据的，现在也只用于这一项，table不适合现代富媒体
  2. 标签的盒模型 比较慢，易出问题 
    如margin的合并、浮动问题，定位问题，
    成熟的float 精确的定位，现代的display:flex  display:table
    标签能力及比表现加CSS属性 布局。
    布局layout = 行row列column的规划

  3. 由2 推出圣杯布局

  4. 圣杯式布局 DIV+CSS 
    兼容性一点问题都没有的三列式布局，主列和两边侧边栏。PC时代，标签DIV，核心即是浮动 block => inline 但是宽度还在
    圣杯式布局和双飞翼布局经典的三栏式布局，效果基本相同，两边两栏宽度固定，中间栏宽度自适应。中间栏放最前面，为的是显示的最优性能，放在前面的html先下载先渲染.兼容性好，PC IE8 -> chrome/Edge,
    margin 负值 float left 主列100% 侧边栏margin 负值
    区别: 圣杯式，position:relative + left/right -200px
          双飞翼: 给main加子元素，main 都是留出位子,但是双飞翼不需要让两侧边栏再移位置了