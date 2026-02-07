// 知识库数据
const knowledgeData = {
  // 分类数据
  categories: {
    scratch: {
      name: "Scratch",
      icon: "fa-puzzle-piece",
    },
    python: {
      name: "Python",
      icon: "fa-code",
    },
    cpp: {
      name: "C++",
      icon: "fa-cogs",
    },
    csp: {
      name: "CSP",
      icon: "fa-laptop-code",
    },
    photoshop: {
      name: "Photoshop",
      icon: "fa-image",
    },
    ai: {
      name: "AI",
      icon: "fa-brain",
    },
    basics: {
      name: "编程基础",
      icon: "fa-book",
    }
  },

  // 各分类的目录结构
  directories: {
    scratch: [
      {
        id: "scratch-section1",
        title: "Scratch基础",
        icon: "fa-folder",
        subItems: [
          {
            id: "scratch-section1-1",
            title: "了解Scratch",
            icon: "fa-file-text-o",
          },
          {
            id: "scratch-section1-2",
            title: "Scratch界面介绍",
            icon: "fa-file-text-o",
          },
          {
            id: "scratch-section1-3",
            title: "基本操作",
            icon: "fa-file-text-o",
          },
        ],
      },
      {
        id: "scratch-section2",
        title: "角色与背景",
        icon: "fa-folder",
        subItems: [
          {
            id: "scratch-section2-1",
            title: "创建角色",
            icon: "fa-file-text-o",
          },
          {
            id: "scratch-section2-2",
            title: "编辑背景",
            icon: "fa-file-text-o",
          },
        ],
      },
    ],
    python: [
      {
        id: "python-section1",
        title: "变量",
        icon: "fa-folder",
        subItems: [
          {
            id: "python-section1-1",
            title: "了解变量",
            icon: "fa-file-text-o",
          },
          {
            id: "python-section1-2",
            title: "变量的命名",
            icon: "fa-file-text-o",
          },
          {
            id: "python-section1-3",
            title: "变量的使用",
            icon: "fa-file-text-o",
          },
        ],
      },
      {
        id: "python-section2",
        title: "数据类型",
        icon: "fa-folder",
        subItems: [
          {
            id: "python-section2-1",
            title: "整数 int",
            icon: "fa-file-text-o",
          },
          {
            id: "python-section2-2",
            title: "浮点数 float",
            icon: "fa-file-text-o",
          },
          {
            id: "python-section2-3",
            title: "布尔值 bool",
            icon: "fa-file-text-o",
          },
          {
            id: "python-section2-4",
            title: "字符串 str",
            icon: "fa-file-text-o",
          },
          {
            id: "python-section2-5",
            title: "列表 list",
            icon: "fa-file-text-o",
          },
          {
            id: "python-section2-6",
            title: "元组 tuple",
            icon: "fa-file-text-o",
          },
          {
            id: "python-section2-7",
            title: "字典 dict",
            icon: "fa-file-text-o",
          },
        ],
      },
    ],
    cpp: [
      {
        id: "cpp-section1",
        title: "C++基础",
        icon: "fa-folder",
        subItems: [
          {
            id: "cpp-section1-1",
            title: "C++简介",
            icon: "fa-file-text-o",
          },
          {
            id: "cpp-section1-2",
            title: "C++环境搭建",
            icon: "fa-file-text-o",
          },
          {
            id: "cpp-section1-3",
            title: "第一个C++程序",
            icon: "fa-file-text-o",
          },
        ],
      },
      {
        id: "cpp-section2",
        title: "C++语法",
        icon: "fa-folder",
        subItems: [
          {
            id: "cpp-section2-1",
            title: "变量与数据类型",
            icon: "fa-file-text-o",
          },
          {
            id: "cpp-section2-2",
            title: "运算符",
            icon: "fa-file-text-o",
          },
          {
            id: "cpp-section2-3",
            title: "控制流",
            icon: "fa-file-text-o",
          },
        ],
      },
    ],
    csp: [
      {
        id: "csp-section1",
        title: "CSP简介",
        icon: "fa-folder",
        subItems: [
          {
            id: "csp-section1-1",
            title: "什么是CSP",
            icon: "fa-file-text-o",
          },
          {
            id: "csp-section1-2",
            title: "CSP考试形式",
            icon: "fa-file-text-o",
          },
        ],
      },
      {
        id: "csp-section2",
        title: "CSP备考",
        icon: "fa-folder",
        subItems: [
          {
            id: "csp-section2-1",
            title: "考试大纲",
            icon: "fa-file-text-o",
          },
          {
            id: "csp-section2-2",
            title: "备考策略",
            icon: "fa-file-text-o",
          },
        ],
      },
    ],
    photoshop: [
      {
        id: "ps-section1",
        title: "Photoshop基础",
        icon: "fa-folder",
        subItems: [
          {
            id: "ps-section1-1",
            title: "Photoshop界面介绍",
            icon: "fa-file-text-o",
          },
          {
            id: "ps-section1-2",
            title: "基本工具使用",
            icon: "fa-file-text-o",
          },
        ],
      },
      {
        id: "ps-section2",
        title: "图像编辑",
        icon: "fa-folder",
        subItems: [
          {
            id: "ps-section2-1",
            title: "图层操作",
            icon: "fa-file-text-o",
          },
          {
            id: "ps-section2-2",
            title: "色彩调整",
            icon: "fa-file-text-o",
          },
        ],
      },
    ],
    ai: [
      {
        id: "ai-section1",
        title: "AI基础",
        icon: "fa-folder",
        subItems: [
          {
            id: "ai-section1-1",
            title: "什么是AI",
            icon: "fa-file-text-o",
          },
          {
            id: "ai-section1-2",
            title: "AI的应用领域",
            icon: "fa-file-text-o",
          },
        ],
      },
      {
        id: "ai-section2",
        title: "机器学习",
        icon: "fa-folder",
        subItems: [
          {
            id: "ai-section2-1",
            title: "机器学习基础",
            icon: "fa-file-text-o",
          },
          {
            id: "ai-section2-2",
            title: "常见算法",
            icon: "fa-file-text-o",
          },
        ],
      },
    ],
    basics: [
      {
        id: "section1",
        title: "变量",
        icon: "fa-folder",
        subItems: [
          {
            id: "section1-1",
            title: "了解变量",
            icon: "fa-file-text-o",
          },
          {
            id: "section1-2",
            title: "变量的命名",
            icon: "fa-file-text-o",
          },
          {
            id: "section1-3",
            title: "变量的使用",
            icon: "fa-file-text-o",
          },
        ],
      },
      {
        id: "section2",
        title: "数据类型",
        icon: "fa-folder",
        subItems: [
          {
            id: "section2-1",
            title: "整数 int",
            icon: "fa-file-text-o",
          },
          {
            id: "section2-2",
            title: "浮点数 float",
            icon: "fa-file-text-o",
          },
          {
            id: "section2-3",
            title: "布尔值 bool",
            icon: "fa-file-text-o",
          },
          {
            id: "section2-4",
            title: "字符串 str",
            icon: "fa-file-text-o",
          },
          {
            id: "section2-5",
            title: "列表 list",
            icon: "fa-file-text-o",
          },
          {
            id: "section2-6",
            title: "元组 tuple",
            icon: "fa-file-text-o",
          },
          {
            id: "section2-7",
            title: "字典 dict",
            icon: "fa-file-text-o",
          },
        ],
      },
      {
        id: "section3",
        title: "运算符",
        icon: "fa-folder",
        subItems: [
          {
            id: "section3-1",
            title: "赋值运算符 =",
            icon: "fa-file-text-o",
          },
          {
            id: "section3-2",
            title: "算术运算符 +, -, *, /, //, %",
            icon: "fa-file-text-o",
          },
          {
            id: "section3-4",
            title: "逻辑运算符 and, or, not",
            icon: "fa-file-text-o",
          },
        ],
      },
      {
        id: "section4",
        title: "流程控制结构",
        icon: "fa-folder",
        subItems: [
          {
            id: "section4-1",
            title: "条件判断 if",
            icon: "fa-file-text-o",
          },
          {
            id: "section4-2",
            title: "循环结构",
            icon: "fa-folder-o",
            subItems: [
              {
                id: "section4-2-1",
                title: "while循环",
                icon: "fa-file-text-o",
              },
              {
                id: "section4-2-2",
                title: "for循环",
                icon: "fa-file-text-o",
              },
            ],
          },
        ],
      },
      {
        id: "section5",
        title: "跳转语句",
        icon: "fa-folder",
        subItems: [
          {
            id: "section5-1",
            title: "break结束",
            icon: "fa-file-text-o",
          },
          {
            id: "section5-2",
            title: "continue语句",
            icon: "fa-file-text-o",
          },
          {
            id: "section5-3",
            title: "pass语句",
            icon: "fa-file-text-o",
          },
        ],
      },
      {
        id: "section6",
        title: "文件读写",
        icon: "fa-folder",
        subItems: [
          {
            id: "section6-1",
            title: "读取",
            icon: "fa-file-text-o",
          },
          {
            id: "section6-2",
            title: "写入",
            icon: "fa-file-text-o",
          },
          {
            id: "section6-3",
            title: "追加",
            icon: "fa-file-text-o",
          },
          {
            id: "section6-4",
            title: "逐行读取",
            icon: "fa-file-text-o",
          },
          {
            id: "section6-5",
            title: "路径",
            icon: "fa-file-text-o",
          },
          {
            id: "section6-6",
            title: "进行读取",
            icon: "fa-file-text-o",
          },
        ],
      },
      {
        id: "section7",
        title: "函数",
        icon: "fa-folder",
        subItems: [
          {
            id: "section7-1",
            title: "函数定义",
            icon: "fa-file-text-o",
          },
          {
            id: "section7-2",
            title: "内置功能",
            icon: "fa-file-text-o",
          },
        ],
      },
      {
        id: "section8",
        title: "模块",
        icon: "fa-folder",
        subItems: [
          {
            id: "section8-1",
            title: "python模块",
            icon: "fa-file-text-o",
          },
          {
            id: "section8-2",
            title: "海龟模块",
            icon: "fa-file-text-o",
          },
          {
            id: "section8-3",
            title: "Turtle常用操作",
            icon: "fa-file-text-o",
          },
        ],
      },
      {
        id: "section9",
        title: "内置模块（未分类）",
        icon: "fa-folder",
        subItems: [],
      },
      {
        id: "section10",
        title: "os模块",
        icon: "fa-folder",
        subItems: [],
      },
    ],
  },

  // 各分类的内容
  content: {
    scratch: {
      "scratch-section1": {
        title: "Scratch基础",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">Scratch基础</h3>
          <p class="text-neutral-600 mb-4">Scratch是一款由麻省理工学院设计开发的少儿编程工具，适合8-16岁的青少年使用。</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">Scratch的特点</h4>
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>图形化编程界面，无需学习复杂的语法</li>
              <li>通过拖拽积木的方式创建程序</li>
              <li>支持动画、游戏、故事等多种创作形式</li>
              <li>丰富的角色和背景素材</li>
            </ul>
          </div>
        </div>`
      },
      "scratch-section1-1": {
        title: "了解Scratch",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">了解Scratch</h3>
          <p class="text-neutral-600 mb-4">Scratch是一款为青少年设计的编程工具，旨在通过可视化的方式教授编程概念。</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">Scratch的历史</h4>
            <p class="text-neutral-600 mb-4">Scratch由麻省理工学院媒体实验室的终身幼儿园团队开发，首次发布于2007年。</p>
          </div>
        </div>`
      },
      "scratch-section1-2": {
        title: "Scratch界面介绍",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">Scratch界面介绍</h3>
          <p class="text-neutral-600 mb-4">Scratch的界面主要分为以下几个部分：</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">界面组成</h4>
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>积木区：存放各种编程积木</li>
              <li>脚本区：拼接编程积木的地方</li>
              <li>舞台区：展示程序运行效果的地方</li>
              <li>角色区：管理程序中的角色</li>
            </ul>
          </div>
        </div>`
      },
      "scratch-section1-3": {
        title: "基本操作",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">基本操作</h3>
          <p class="text-neutral-600 mb-4">Scratch的基本操作包括拖拽积木、编辑角色、添加背景等。</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">操作步骤</h4>
            <ol class="list-decimal pl-5 space-y-2 text-neutral-600">
              <li>从积木区选择需要的积木</li>
              <li>将积木拖拽到脚本区</li>
              <li>按照逻辑顺序拼接积木</li>
              <li>点击绿旗运行程序</li>
            </ol>
          </div>
        </div>`
      },
      "scratch-section2": {
        title: "角色与背景",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">角色与背景</h3>
          <p class="text-neutral-600 mb-4">在Scratch中，角色和背景是构成项目的基本元素。</p>
        </div>`
      },
      "scratch-section2-1": {
        title: "创建角色",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">创建角色</h3>
          <p class="text-neutral-600 mb-4">在Scratch中，你可以通过多种方式创建角色：</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">创建方式</h4>
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>从角色库中选择</li>
              <li>绘制新角色</li>
              <li>上传图片</li>
              <li>拍摄照片</li>
            </ul>
          </div>
        </div>`
      },
      "scratch-section2-2": {
        title: "编辑背景",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">编辑背景</h3>
          <p class="text-neutral-600 mb-4">背景是Scratch项目中的舞台环境，你可以根据需要编辑背景。</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">编辑方法</h4>
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>从背景库中选择</li>
              <li>绘制新背景</li>
              <li>上传图片作为背景</li>
            </ul>
          </div>
        </div>`
      },
    },
    python: {
      "python-section1": {
        title: "变量",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">变量</h3>
          <p class="text-neutral-600 mb-4">变量是Python中用来存储数据的容器。</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">变量的定义</h4>
            <p class="text-neutral-600 mb-4">在Python中，变量不需要声明类型，直接赋值即可：</p>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre>x = 10
y = "Hello"
z = 3.14</pre>
            </div>
          </div>
        </div>`
      },
      "python-section1-1": {
        title: "了解变量",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">了解变量</h3>
          <p class="text-neutral-600 mb-4">变量是Python中最基本的概念之一，用于存储数据。</p>
        </div>`
      },
      "python-section1-2": {
        title: "变量的命名",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">变量的命名</h3>
          <p class="text-neutral-600 mb-4">Python变量命名规则：</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>只能包含字母、数字和下划线</li>
              <li>不能以数字开头</li>
              <li>不能使用Python关键字</li>
              <li>区分大小写</li>
            </ul>
          </div>
        </div>`
      },
      "python-section1-3": {
        title: "变量的使用",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">变量的使用</h3>
          <p class="text-neutral-600 mb-4">变量在Python中的使用方法：</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre># 变量的使用示例
x = 10
y = 20
print(x + y)  # 输出30

# 变量的更新
x = x + 5
print(x)  # 输出15</pre>
            </div>
          </div>
        </div>`
      },
      "python-section2": {
        title: "数据类型",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">数据类型</h3>
          <p class="text-neutral-600 mb-4">Python支持多种数据类型，包括：</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>整数 (int)</li>
              <li>浮点数 (float)</li>
              <li>布尔值 (bool)</li>
              <li>字符串 (str)</li>
              <li>列表 (list)</li>
              <li>元组 (tuple)</li>
              <li>字典 (dict)</li>
            </ul>
          </div>
        </div>`
      },
      "python-section2-1": {
        title: "整数 int",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">整数 int</h3>
          <p class="text-neutral-600 mb-4">整数是Python中最基本的数据类型之一。</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre># 整数示例
x = 10
y = -5
z = 0
print(type(x))  # 输出 &lt;class 'int'&gt;</pre>
            </div>
          </div>
        </div>`
      },
      "python-section2-2": {
        title: "浮点数 float",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">浮点数 float</h3>
          <p class="text-neutral-600 mb-4">浮点数用于表示带有小数部分的数字。</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre># 浮点数示例
x = 3.14
y = -2.5
z = 0.0
print(type(x))  # 输出 &lt;class 'float'&gt;</pre>
            </div>
          </div>
        </div>`
      },
      "python-section2-3": {
        title: "布尔值 bool",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">布尔值 bool</h3>
          <p class="text-neutral-600 mb-4">布尔值只有两个可能的值：True 和 False。</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre># 布尔值示例
x = True
y = False
print(type(x))  # 输出 &lt;class 'bool'&gt;</pre>
            </div>
          </div>
        </div>`
      },
      "python-section2-4": {
        title: "字符串 str",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">字符串 str</h3>
          <p class="text-neutral-600 mb-4">字符串用于表示文本数据。</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre># 字符串示例
x = "Hello"
y = 'World'
z = """多行
字符串"""
print(type(x))  # 输出 &lt;class 'str'&gt;</pre>
            </div>
          </div>
        </div>`
      },
      "python-section2-5": {
        title: "列表 list",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">列表 list</h3>
          <p class="text-neutral-600 mb-4">列表是Python中最常用的数据结构之一，用于存储多个元素。</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre># 列表示例
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True]
print(type(fruits))  # 输出 &lt;class 'list'&gt;</pre>
            </div>
          </div>
        </div>`
      },
      "python-section2-6": {
        title: "元组 tuple",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">元组 tuple</h3>
          <p class="text-neutral-600 mb-4">元组与列表类似，但元组是不可变的。</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre># 元组示例
fruits = ("apple", "banana", "cherry")
numbers = (1, 2, 3, 4, 5)
print(type(fruits))  # 输出 &lt;class 'tuple'&gt;</pre>
            </div>
          </div>
        </div>`
      },
      "python-section2-7": {
        title: "字典 dict",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">字典 dict</h3>
          <p class="text-neutral-600 mb-4">字典用于存储键值对。</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre># 字典示例
person = {
  "name": "John",
  "age": 30,
  "city": "New York"
}
print(type(person))  # 输出 &lt;class 'dict'&gt;</pre>
            </div>
          </div>
        </div>`
      },
    },
    cpp: {
      "cpp-section1": {
        title: "C++基础",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">C++基础</h3>
          <p class="text-neutral-600 mb-4">C++是一种高级编程语言，是C语言的扩展。</p>
        </div>`
      },
      "cpp-section1-1": {
        title: "C++简介",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">C++简介</h3>
          <p class="text-neutral-600 mb-4">C++是由Bjarne Stroustrup于1983年开发的编程语言。</p>
        </div>`
      },
      "cpp-section1-2": {
        title: "C++环境搭建",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">C++环境搭建</h3>
          <p class="text-neutral-600 mb-4">搭建C++开发环境需要安装编译器，如GCC、Clang或Visual Studio。</p>
        </div>`
      },
      "cpp-section1-3": {
        title: "第一个C++程序",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">第一个C++程序</h3>
          <p class="text-neutral-600 mb-4">C++的Hello World程序：</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre>#include &lt;iostream&gt;

int main() {
  std::cout &lt;&lt; "Hello, World!" &lt;&lt; std::endl;
  return 0;
}</pre>
            </div>
          </div>
        </div>`
      },
      "cpp-section2": {
        title: "C++语法",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">C++语法</h3>
          <p class="text-neutral-600 mb-4">C++的基本语法包括变量声明、数据类型、运算符等。</p>
        </div>`
      },
      "cpp-section2-1": {
        title: "变量与数据类型",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">变量与数据类型</h3>
          <p class="text-neutral-600 mb-4">C++的基本数据类型包括：</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>int - 整数</li>
              <li>float - 浮点数</li>
              <li>double - 双精度浮点数</li>
              <li>char - 字符</li>
              <li>bool - 布尔值</li>
            </ul>
          </div>
        </div>`
      },
      "cpp-section2-2": {
        title: "运算符",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">运算符</h3>
          <p class="text-neutral-600 mb-4">C++支持多种运算符，包括算术运算符、关系运算符、逻辑运算符等。</p>
        </div>`
      },
      "cpp-section2-3": {
        title: "控制流",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">控制流</h3>
          <p class="text-neutral-600 mb-4">C++的控制流语句包括if-else、switch、for、while等。</p>
        </div>`
      },
    },
    csp: {
      "csp-section1": {
        title: "CSP简介",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">CSP简介</h3>
          <p class="text-neutral-600 mb-4">CSP是计算机软件能力认证的缩写，是由中国计算机学会主办的一项认证考试。</p>
        </div>`
      },
      "csp-section1-1": {
        title: "什么是CSP",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">什么是CSP</h3>
          <p class="text-neutral-600 mb-4">CSP（Computer Software Proficiency Certification）是中国计算机学会推出的一项针对计算机软件专业技术人员的能力认证。</p>
        </div>`
      },
      "csp-section1-2": {
        title: "CSP考试形式",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">CSP考试形式</h3>
          <p class="text-neutral-600 mb-4">CSP考试分为两个级别：CSP-J（入门级）和CSP-S（提高级）。</p>
        </div>`
      },
      "csp-section2": {
        title: "CSP备考",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">CSP备考</h3>
          <p class="text-neutral-600 mb-4">CSP备考需要系统学习算法和数据结构等知识。</p>
        </div>`
      },
      "csp-section2-1": {
        title: "考试大纲",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">考试大纲</h3>
          <p class="text-neutral-600 mb-4">CSP考试大纲包括算法基础、数据结构、数学基础等内容。</p>
        </div>`
      },
      "csp-section2-2": {
        title: "备考策略",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">备考策略</h3>
          <p class="text-neutral-600 mb-4">CSP备考建议：</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>系统学习算法和数据结构</li>
              <li>多做真题和模拟题</li>
              <li>参加培训课程</li>
              <li>形成良好的编程习惯</li>
            </ul>
          </div>
        </div>`
      },
    },
    photoshop: {
      "ps-section1": {
        title: "Photoshop基础",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">Photoshop基础</h3>
          <p class="text-neutral-600 mb-4">Photoshop是Adobe公司开发的一款专业图像处理软件。</p>
        </div>`
      },
      "ps-section1-1": {
        title: "Photoshop界面介绍",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">Photoshop界面介绍</h3>
          <p class="text-neutral-600 mb-4">Photoshop的界面主要包括菜单栏、工具栏、图层面板、属性面板等。</p>
        </div>`
      },
      "ps-section1-2": {
        title: "基本工具使用",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">基本工具使用</h3>
          <p class="text-neutral-600 mb-4">Photoshop的基本工具包括选择工具、画笔工具、橡皮擦工具、渐变工具等。</p>
        </div>`
      },
      "ps-section2": {
        title: "图像编辑",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">图像编辑</h3>
          <p class="text-neutral-600 mb-4">Photoshop的图像编辑功能包括调整色彩、裁剪图像、添加文字等。</p>
        </div>`
      },
      "ps-section2-1": {
        title: "图层操作",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">图层操作</h3>
          <p class="text-neutral-600 mb-4">图层是Photoshop中非常重要的概念，通过图层可以实现复杂的图像编辑效果。</p>
        </div>`
      },
      "ps-section2-2": {
        title: "色彩调整",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">色彩调整</h3>
          <p class="text-neutral-600 mb-4">Photoshop提供了多种色彩调整工具，如亮度/对比度、色阶、曲线等。</p>
        </div>`
      },
    },
    ai: {
      "ai-section1": {
        title: "AI基础",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">AI基础</h3>
          <p class="text-neutral-600 mb-4">人工智能（AI）是计算机科学的一个分支，旨在创建能够模拟人类智能的系统。</p>
        </div>`
      },
      "ai-section1-1": {
        title: "什么是AI",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">什么是AI</h3>
          <p class="text-neutral-600 mb-4">人工智能（Artificial Intelligence）是指由人制造出来的系统所表现出来的智能。</p>
        </div>`
      },
      "ai-section1-2": {
        title: "AI的应用领域",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">AI的应用领域</h3>
          <p class="text-neutral-600 mb-4">AI的应用领域包括：</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>自然语言处理</li>
              <li>计算机视觉</li>
              <li>语音识别</li>
              <li>机器学习</li>
              <li>深度学习</li>
            </ul>
          </div>
        </div>`
      },
      "ai-section2": {
        title: "机器学习",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">机器学习</h3>
          <p class="text-neutral-600 mb-4">机器学习是人工智能的一个分支，通过算法使计算机能够从数据中学习。</p>
        </div>`
      },
      "ai-section2-1": {
        title: "机器学习基础",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">机器学习基础</h3>
          <p class="text-neutral-600 mb-4">机器学习的基本概念包括：</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>监督学习</li>
              <li>无监督学习</li>
              <li>半监督学习</li>
              <li>强化学习</li>
            </ul>
          </div>
        </div>`
      },
      "ai-section2-2": {
        title: "常见算法",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">常见算法</h3>
          <p class="text-neutral-600 mb-4">机器学习常见算法包括：</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>线性回归</li>
              <li>逻辑回归</li>
              <li>决策树</li>
              <li>支持向量机</li>
              <li>神经网络</li>
            </ul>
          </div>
        </div>`
      },
    },
    basics: {
      "section1": {
        title: "变量",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">变量</h3>
          <p class="text-neutral-600 mb-4">变量是编程中一个重要的概念，它用来存储数据的。</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">变量的概念</h4>
            <p class="text-neutral-600 mb-4">变量就像盒子一样，可以用来保存各种类型的数据。同时，为了区分盒子，需要给每个盒子起个名字。</p>
            <div class="flex justify-center my-6">
              <img src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/627bc5382cdf471ab23785c53bbc10a7~tplv-a9rns2rl98-image.image?lk3s=8e244e95&amp;rcl=202602080311470FBB8956BE9465138033&amp;rrcfp=f06b921b&amp;x-expires=1773083529&amp;x-signature=s87zY93LXsz%2FYR0Ki3rBMelNEJ4%3D" alt="变量概念示意图" class="max-w-full h-auto rounded-lg shadow-md">
            </div>
            <p class="text-neutral-600">在上面的示意图中，我们可以看到变量、变量的名字和值之间的关系。变量通过变量名来标识，而变量名指向变量的值。</p>
          </div>
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div class="flex">
              <div class="flex-shrink-0">
                <i class="fa fa-info-circle text-blue-500"></i>
              </div>
              <div class="ml-3">
                <h4 class="text-sm font-medium text-blue-800">提示</h4>
                <p class="text-sm text-blue-700">变量的命名应该具有描述性，这样可以使代码更易于理解和维护。</p>
              </div>
            </div>
          </div>
        </div>`
      },
      "section1-1": {
        title: "了解变量",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">了解变量</h3>
          <p class="text-neutral-600 mb-4">变量是编程语言中最基本的概念之一，它是用来存储数据的容器。</p>
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">变量的作用</h4>
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>存储数据：变量可以存储各种类型的数据，如数字、文本、布尔值等。</li>
              <li>数据复用：通过变量名可以多次引用存储的数据，避免重复输入。</li>
              <li>数据更新：变量的值可以根据需要进行修改和更新。</li>
              <li>参数传递：变量可以作为参数在不同的函数或模块之间传递数据。</li>
            </ul>
          </div>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">变量的声明与赋值</h4>
            <p class="text-neutral-600 mb-4">在大多数编程语言中，使用变量前需要先声明变量，然后给变量赋值。</p>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre>// JavaScript 示例
let age; // 声明变量
age = 25; // 给变量赋值

// 也可以在声明的同时赋值
let name = "张三"; // 声明并赋值</pre>
            </div>
            <p class="text-neutral-600">上面的代码展示了JavaScript中变量的声明和赋值方式。不同的编程语言可能有不同的语法，但基本概念是相通的。</p>
          </div>
        </div>`
      },
      "section1-2": {
        title: "变量的命名",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">变量的命名</h3>
          <p class="text-neutral-600 mb-4">变量的命名是编程中的一个重要环节，好的变量名可以提高代码的可读性和可维护性。</p>
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">命名规则</h4>
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>变量名只能包含字母、数字、下划线和美元符号（$）。</li>
              <li>变量名不能以数字开头。</li>
              <li>变量名不能是编程语言的保留字（如if、else、for等）。</li>
              <li>变量名应该具有描述性，能够表达变量的用途。</li>
            </ul>
          </div>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">命名约定</h4>
            <p class="text-neutral-600 mb-4">不同的编程语言有不同的命名约定，以下是一些常见的命名约定：</p>
            <div class="space-y-4">
              <div>
                <h5 class="font-medium text-neutral-700 mb-2">驼峰命名法（Camel Case）</h5>
                <div class="bg-neutral-800 text-neutral-100 p-3 font-mono text-sm">
                  <pre>let userName;
let studentScore;</pre>
                </div>
              </div>
              <div>
                <h5 class="font-medium text-neutral-700 mb-2">帕斯卡命名法（Pascal Case）</h5>
                <div class="bg-neutral-800 text-neutral-100 p-3 font-mono text-sm">
                  <pre>let UserName;
let StudentScore;</pre>
                </div>
              </div>
              <div>
                <h5 class="font-medium text-neutral-700 mb-2">下划线命名法（Snake Case）</h5>
                <div class="bg-neutral-800 text-neutral-100 p-3 font-mono text-sm">
                  <pre>let user_name;
let student_score;</pre>
                </div>
              </div>
            </div>
          </div>
        </div>`
      },
      "section1-3": {
        title: "变量的使用",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">变量的使用</h3>
          <p class="text-neutral-600 mb-4">变量在程序中可以用于多种场景，以下是一些常见的使用方式。</p>
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">变量的基本操作</h4>
            <div class="bg-neutral-50 rounded-lg p-6 mb-6">
              <h5 class="font-medium text-neutral-700 mb-3">赋值操作</h5>
              <div class="bg-neutral-800 text-neutral-100 p-3 font-mono text-sm mb-3">
                <pre>let x = 10; // 给变量x赋值为10
x = 20;     // 更新变量x的值为20</pre>
              </div>
              <h5 class="font-medium text-neutral-700 mb-3">算术运算</h5>
              <div class="bg-neutral-800 text-neutral-100 p-3 font-mono text-sm mb-3">
                <pre>let a = 5;
let b = 3;
let sum = a + b;     // sum = 8
let difference = a - b; // difference = 2
let product = a * b; // product = 15
let quotient = a / b; // quotient = 1.666...</pre>
              </div>
              <h5 class="font-medium text-neutral-700 mb-3">字符串操作</h5>
              <div class="bg-neutral-800 text-neutral-100 p-3 font-mono text-sm">
                <pre>let firstName = "张";
let lastName = "三";
let fullName = firstName + " " + lastName; // fullName = "张 三"</pre>
              </div>
            </div>
          </div>
          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <div class="flex">
              <div class="flex-shrink-0">
                <i class="fa fa-exclamation-triangle text-yellow-500"></i>
              </div>
              <div class="ml-3">
                <h4 class="text-sm font-medium text-yellow-800">注意</h4>
                <p class="text-sm text-yellow-700">在使用变量前，确保已经给变量赋值，否则可能会导致错误或意外的结果。</p>
              </div>
            </div>
          </div>
        </div>`
      },
      "section2": {
        title: "数据类型",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">数据类型</h3>
          <p class="text-neutral-600 mb-4">数据类型是编程语言中对数据的分类，不同的数据类型有不同的特性和用途。</p>
          <div class="bg-neutral-50 rounded-lg p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">常见数据类型</h4>
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>数值类型：整数、浮点数等</li>
              <li>字符串类型：文本数据</li>
              <li>布尔类型：true或false</li>
              <li>对象类型：复合数据结构</li>
              <li>数组类型：有序的数据集合</li>
              <li>空类型：null或undefined</li>
            </ul>
          </div>
        </div>`
      },
      "section2-1": {
        title: "整数 int",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">整数 int</h3>
          <p class="text-neutral-600 mb-4">整数是编程语言中最基本的数据类型之一，用于表示没有小数部分的数字。</p>
          <div class="bg-neutral-50 p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">整数的定义</h4>
            <p class="text-neutral-600 mb-4">整数是没有小数部分的数字，可以是正数、负数或零。</p>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre>// 整数示例
let positiveInteger = 100;
let negativeInteger = -50;
let zero = 0;</pre>
            </div>
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">整数的运算</h4>
            <p class="text-neutral-600 mb-4">整数可以进行加、减、乘、除等基本算术运算。</p>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm">
              <pre>// 整数运算示例
let a = 10;
let b = 3;

let addition = a + b;      // 加法: 13
let subtraction = a - b;   // 减法: 7
let multiplication = a * b; // 乘法: 30
let division = a / b;      // 除法: 3.333...（注意：在某些语言中，整数除法可能会向下取整）
let modulus = a % b;       // 取余: 1</pre>
            </div>
          </div>
        </div>`
      },
      "section2-2": {
        title: "浮点数 float",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">浮点数 float</h3>
          <p class="text-neutral-600 mb-4">浮点数其实就是数学中的小数。在Python中，<code class="bg-neutral-100 px-1 py-0.5 text-neutral-800">float()</code>函数用于将整数和字符串转换成浮点数。</p>
          <div class="bg-neutral-50 p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">转换整数</h4>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre>num1 = 123
res1 = float(num1)
print(res1)
结果：123.0</pre>
            </div>
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">转换浮点数</h4>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre>num2 = 123.456
res2 = float(num2)
print(res2)

结果：123.456</pre>
            </div>
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">转换内容是数字的字符串</h4>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre>str1 = '123.456'
res3 = float(str1)
print(res3)
结果：123.456</pre>
            </div>
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">转换内容不是数字的字符串</h4>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre>str2 = 'a-b-c'
res4 = float(str2)
print(res4)
结果：ValueError: float: Argument: a-b-c is not number on line 2</pre>
            </div>
          </div>
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div class="flex">
              <div class="flex-shrink-0">
                <i class="fa fa-info-circle text-blue-500"></i>
              </div>
              <div class="ml-3">
                <h4 class="text-sm font-medium text-blue-800">注意</h4>
                <p class="text-sm text-blue-700">浮点数在计算机中是以近似值的形式存储的，因此在进行精确计算时可能会有微小的误差。如果需要进行精确的小数计算，可以使用Python的decimal模块。</p>
              </div>
            </div>
          </div>
        </div>`
      },
      "section2-3": {
        title: "布尔值 bool",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">布尔值 bool</h3>
          <p class="text-neutral-600 mb-4">布尔值是一种表示真或假的数据类型，在编程中常用于条件判断和逻辑运算。</p>
          <div class="bg-neutral-50 p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">布尔值的定义</h4>
            <p class="text-neutral-600 mb-4">布尔值只有两个可能的值：True（真）和False（假）。</p>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre>// 布尔值示例
let isActive = true;
let isCompleted = false;</pre>
            </div>
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">布尔值的运算</h4>
            <p class="text-neutral-600 mb-4">布尔值可以进行与（AND）、或（OR）、非（NOT）等逻辑运算。</p>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm">
              <pre>// 布尔值运算示例
let a = true;
let b = false;

let andResult = a && b;  // 与运算: false
let orResult = a || b;   // 或运算: true
let notResult = !a;      // 非运算: false</pre>
            </div>
          </div>
        </div>`
      },
      "section2-4": {
        title: "字符串 str",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">字符串 str</h3>
          <p class="text-neutral-600 mb-4">字符串是由字符组成的序列，用于表示文本数据。</p>
          <div class="bg-neutral-50 p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">字符串的定义</h4>
            <p class="text-neutral-600 mb-4">字符串可以使用单引号、双引号或反引号（在某些语言中）来定义。</p>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre>// 字符串示例
let singleQuoted = 'Hello, World!';
let doubleQuoted = "Hello, World!";
let backticked = `Hello, World!`; // 在JavaScript中支持</pre>
            </div>
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">字符串的操作</h4>
            <p class="text-neutral-600 mb-4">字符串可以进行连接、截取、查找等操作。</p>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm">
              <pre>// 字符串操作示例
let str1 = "Hello";
let str2 = "World";

let concatenated = str1 + " " + str2; // 连接: "Hello World"
let length = str1.length;             // 长度: 5
let substring = str1.substring(1, 4); // 截取: "ell"
</pre>
            </div>
          </div>
        </div>`
      },
      "section2-5": {
        title: "列表 list",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">列表 list</h3>
          <p class="text-neutral-600 mb-4">列表是一种有序的数据集合，可以存储不同类型的元素。</p>
          <div class="bg-neutral-50 p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">列表的定义</h4>
            <p class="text-neutral-600 mb-4">列表使用方括号 [] 来定义，元素之间用逗号分隔。</p>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre>// 列表示例
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, {name: "John"}];
</pre>
            </div>
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">列表的操作</h4>
            <p class="text-neutral-600 mb-4">列表可以进行添加、删除、修改、查找等操作。</p>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm">
              <pre>// 列表操作示例
let fruits = ["apple", "banana", "cherry"];

fruits.push("orange");      // 添加元素: ["apple", "banana", "cherry", "orange"]
fruits.pop();               // 删除最后一个元素: ["apple", "banana", "cherry"]
fruits[1] = "grape";        // 修改元素: ["apple", "grape", "cherry"]
let index = fruits.indexOf("cherry"); // 查找元素: 2
</pre>
            </div>
          </div>
        </div>`
      },
      "section2-6": {
        title: "元组 tuple",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">元组 tuple</h3>
          <p class="text-neutral-600 mb-4">元组是一种不可变的有序数据集合，类似于列表，但一旦创建就不能修改。</p>
          <div class="bg-neutral-50 p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">元组的定义</h4>
            <p class="text-neutral-600 mb-4">元组使用圆括号 () 来定义，元素之间用逗号分隔。</p>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre>// 元组示例
let numbers = (1, 2, 3, 4, 5);
let mixed = (1, "hello", true);
</pre>
            </div>
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">元组的特点</h4>
            <p class="text-neutral-600 mb-4">元组的主要特点是不可变性，这意味着一旦创建，就不能添加、删除或修改元组中的元素。</p>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm">
              <pre>// 元组操作示例
let person = ("John", 30, "New York");

let name = person[0];     // 访问元素: "John"
let length = person.length; // 获取长度: 3

// 以下操作会导致错误，因为元组是不可变的
// person[0] = "Jane";    // 错误：不能修改元组元素
// person.push("engineer"); // 错误：不能向元组添加元素
</pre>
            </div>
          </div>
        </div>`
      },
      "section2-7": {
        title: "字典 dict",
        content: `<div class="mb-8">
          <h3 class="text-2xl font-bold text-neutral-800 mb-4">字典 dict</h3>
          <p class="text-neutral-600 mb-4">字典是一种无序的键值对集合，用于存储具有映射关系的数据。</p>
          <div class="bg-neutral-50 p-6 mb-6">
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">字典的定义</h4>
            <p class="text-neutral-600 mb-4">字典使用花括号 {} 来定义，键值对之间用冒号 : 分隔，不同的键值对之间用逗号分隔。</p>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm mb-4">
              <pre>// 字典示例
let person = {
    "name": "John",
    "age": 30,
    "city": "New York"
};
</pre>
            </div>
            <h4 class="text-lg font-semibold text-neutral-800 mb-3">字典的操作</h4>
            <p class="text-neutral-600 mb-4">字典可以进行添加、删除、修改、查找等操作。</p>
            <div class="bg-neutral-800 text-neutral-100 p-4 font-mono text-sm">
              <pre>// 字典操作示例
let person = {
    "name": "John",
    "age": 30,
    "city": "New York"
};

let name = person["name"];    // 访问值: "John"
person["job"] = "engineer";   // 添加键值对
person["age"] = 31;           // 修改值
delete person["city"];        // 删除键值对
</pre>
            </div>
          </div>
        </div>`
      }
    }
  }
};
