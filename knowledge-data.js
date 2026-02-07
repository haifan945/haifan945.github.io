
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
            title: "Photoshop界面",
            icon: "fa-file-text-o",
          },
          {
            id: "ps-section1-2",
            title: "基本工具",
            icon: "fa-file-text-o",
          },
        ],
      },
      {
        id: "ps-section2",
        title: "图像处理",
        icon: "fa-folder",
        subItems: [
          {
            id: "ps-section2-1",
            title: "图像调整",
            icon: "fa-file-text-o",
          },
          {
            id: "ps-section2-2",
            title: "图层操作",
            icon: "fa-file-text-o",
          },
        ],
      },
    ],
    ai: [
      {
        id: "ai-section1",
        title: "人工智能基础",
        icon: "fa-folder",
        subItems: [
          {
            id: "ai-section1-1",
            title: "什么是人工智能",
            icon: "fa-file-text-o",
          },
          {
            id: "ai-section1-2",
            title: "AI发展历史",
            icon: "fa-file-text-o",
          },
        ],
      },
      {
        id: "ai-section2",
        title: "AI应用",
        icon: "fa-folder",
        subItems: [
          {
            id: "ai-section2-1",
            title: "机器学习",
            icon: "fa-file-text-o",
          },
          {
            id: "ai-section2-2",
            title: "深度学习",
            icon: "fa-file-text-o",
          },
        ],
      },
    ],
  },

  // 各分类的内容数据
  content: {
    scratch: {
      "scratch-section1": {
        title: "Scratch基础",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">Scratch基础</h3>
            <p class="text-neutral-600 mb-4">Scratch是一款由麻省理工学院开发的图形化编程工具，专为儿童和青少年设计。</p>
            
            <div class="bg-neutral-50 rounded-lg p-6 mb-6">
              <h4 class="text-lg font-semibold text-neutral-800 mb-3">Scratch的特点</h4>
              <ul class="list-disc pl-5 space-y-2 text-neutral-600">
                <li>图形化编程：使用积木式代码块，无需手写代码</li>
                <li>直观易用：适合编程初学者</li>
                <li>创意表达：可以创建动画、游戏、故事等</li>
                <li>社区共享：可以分享和学习其他用户的作品</li>
              </ul>
            </div>
          </div>
        `,
      },
      "scratch-section1-1": {
        title: "了解Scratch",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">了解Scratch</h3>
            <p class="text-neutral-600 mb-4">Scratch是一款免费的图形化编程工具，旨在帮助年轻人学习编程概念，培养创造力、逻辑思维和协作能力。</p>
          </div>
        `,
      },
      "scratch-section1-2": {
        title: "Scratch界面介绍",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">Scratch界面介绍</h3>
            <p class="text-neutral-600 mb-4">Scratch界面主要由以下几个部分组成：</p>
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>代码区：包含各种代码块</li>
              <li>舞台区：显示项目运行效果</li>
              <li>角色区：管理项目中的角色</li>
              <li>背景区：管理项目中的背景</li>
            </ul>
          </div>
        `,
      },
      "scratch-section1-3": {
        title: "基本操作",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">基本操作</h3>
            <p class="text-neutral-600 mb-4">Scratch的基本操作包括：</p>
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>拖放代码块：从代码区拖放代码块到脚本区</li>
              <li>编辑角色：添加、删除、修改角色</li>
              <li>编辑背景：添加、删除、修改背景</li>
              <li>运行项目：点击绿色旗帜按钮运行项目</li>
            </ul>
          </div>
        `,
      },
      "scratch-section2": {
        title: "角色与背景",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">角色与背景</h3>
            <p class="text-neutral-600 mb-4">在Scratch中，角色是项目中的主要元素，背景是角色活动的环境。</p>
          </div>
        `,
      },
      "scratch-section2-1": {
        title: "创建角色",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">创建角色</h3>
            <p class="text-neutral-600 mb-4">在Scratch中，你可以通过以下方式创建角色：</p>
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>从角色库中选择</li>
              <li>绘制新角色</li>
              <li>上传图片作为角色</li>
              <li>拍摄照片作为角色</li>
            </ul>
          </div>
        `,
      },
      "scratch-section2-2": {
        title: "编辑背景",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">编辑背景</h3>
            <p class="text-neutral-600 mb-4">在Scratch中，你可以通过以下方式编辑背景：</p>
            <ul class="list-disc pl-5 space-y-2 text-neutral-600">
              <li>从背景库中选择</li>
              <li>绘制新背景</li>
              <li>上传图片作为背景</li>
              <li>拍摄照片作为背景</li>
            </ul>
          </div>
        `,
      },
    },
    python: {
      "python-section1": {
        title: "变量",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">变量</h3>
            <p class="text-neutral-600 mb-4">变量是编程中一个重要的概念，它用来存储数据的。</p>

            <div class="bg-neutral-50 rounded-lg p-6 mb-6">
              <h4 class="text-lg font-semibold text-neutral-800 mb-3">变量的概念</h4>
              <p class="text-neutral-600 mb-4">变量就像盒子一样，可以用来保存各种类型的数据。同时，为了区分盒子，需要给每个盒子起个名字。</p>

              <div class="flex justify-center my-6">
                <img
                  src="https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc/pc/super_tool/627bc5382cdf471ab23785c53bbc10a7~tplv-a9rns2rl98-image.image?lk3s=8e244e95&amp;rcl=202602080311470FBB8956BE9465138033&amp;rrcfp=f06b921b&amp;x-expires=1773083529&amp;x-signature=s87zY93LXsz%2FYR0Ki3rBMelNEJ4%3D"
                  alt="变量概念示意图" class="max-w-full h-auto rounded-lg shadow-md">
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
          </div>
        `,
      },
      "python-section1-1": {
        title: "了解变量",
        content: `
          <div class="mb-8">
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

              <div class="bg-neutral-800 text-neutral-100 p-4 rounded-md font-mono text-sm mb-4">
                <pre>// JavaScript 示例
let age; // 声明变量
age = 25; // 给变量赋值

// 也可以在声明的同时赋值
let name = "张三"; // 声明并赋值</pre>
              </div>

              <p class="text-neutral-600">上面的代码展示了JavaScript中变量的声明和赋值方式。不同的编程语言可能有不同的语法，但基本概念是相通的。</p>
            </div>
          </div>
        `,
      },
      "python-section1-2": {
        title: "变量的命名",
        content: `
          <div class="mb-8">
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
                  <div class="bg-neutral-800 text-neutral-100 p-3 rounded-md font-mono text-sm">
                    <pre>let userName;</pre>
                  </div>
                </div>

                <div>
                  <h5 class="font-medium text-neutral-700 mb-2">帕斯卡命名法（Pascal Case）</h5>
                  <div class="bg-neutral-800 text-neutral-100 p-3 rounded-md font-mono text-sm">
                    <pre>let UserName;</pre>
                  </div>
                </div>

                <div>
                  <h5 class="font-medium text-neutral-700 mb-2">下划线命名法（Snake Case）</h5>
                  <div class="bg-neutral-800 text-neutral-100 p-3 rounded-md font-mono text-sm">
                    <pre>let user_name;</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
      },
      "python-section1-3": {
        title: "变量的使用",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">变量的使用</h3>
            <p class="text-neutral-600 mb-4">变量的使用是编程中的基本操作，通过变量名可以访问和修改变量的值。</p>

            <div class="bg-neutral-50 rounded-lg p-6 mb-6">
              <h4 class="text-lg font-semibold text-neutral-800 mb-3">变量的访问</h4>
              <p class="text-neutral-600 mb-4">通过变量名可以直接访问变量的值：</p>

              <div class="bg-neutral-800 text-neutral-100 p-4 rounded-md font-mono text-sm mb-4">
                <pre>let age = 25;
console.log(age); // 输出：25</pre>
              </div>
            </div>

            <div class="bg-neutral-50 rounded-lg p-6 mb-6">
              <h4 class="text-lg font-semibold text-neutral-800 mb-3">变量的修改</h4>
              <p class="text-neutral-600 mb-4">可以通过赋值语句修改变量的值：</p>

              <div class="bg-neutral-800 text-neutral-100 p-4 rounded-md font-mono text-sm mb-4">
                <pre>let age = 25;
console.log(age); // 输出：25

age = 26; // 修改变量的值
console.log(age); // 输出：26</pre>
              </div>
            </div>

            <div class="bg-neutral-50 rounded-lg p-6 mb-6">
              <h4 class="text-lg font-semibold text-neutral-800 mb-3">变量的运算</h4>
              <p class="text-neutral-600 mb-4">变量可以参与各种运算：</p>

              <div class="bg-neutral-800 text-neutral-100 p-4 rounded-md font-mono text-sm mb-4">
                <pre>let a = 5;
let b = 3;
let sum = a + b;     // sum = 8
let difference = a - b; // difference = 2
let product = a * b; // product = 15
let quotient = a / b; // quotient = 1.666...</pre>
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
          </div>
        `,
      },
      "python-section2": {
        title: "数据类型",
        content: `
          <div class="mb-8">
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
          </div>
        `,
      },
    },
    cpp: {
      "cpp-section1": {
        title: "C++基础",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">C++基础</h3>
            <p class="text-neutral-600 mb-4">C++是一种高级编程语言，是C语言的扩展，支持面向对象编程。</p>
          </div>
        `,
      },
      "cpp-section1-1": {
        title: "C++简介",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">C++简介</h3>
            <p class="text-neutral-600 mb-4">C++是由Bjarne Stroustrup于1979年在贝尔实验室开始开发的编程语言。</p>
          </div>
        `,
      },
      "cpp-section1-2": {
        title: "C++环境搭建",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">C++环境搭建</h3>
            <p class="text-neutral-600 mb-4">搭建C++开发环境需要安装编译器，如GCC、Clang或Visual Studio。</p>
          </div>
        `,
      },
      "cpp-section1-3": {
        title: "第一个C++程序",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">第一个C++程序</h3>
            <p class="text-neutral-600 mb-4">Hello World是学习任何编程语言的第一个程序。</p>
            <div class="bg-neutral-800 text-neutral-100 p-4 rounded-md font-mono text-sm">
              <pre>#include &lt;iostream&gt;

int main() {
  std::cout << "Hello, World!" << std::endl;
  return 0;
}</pre>
            </div>
          </div>
        `,
      },
      "cpp-section2": {
        title: "C++语法",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">C++语法</h3>
            <p class="text-neutral-600 mb-4">C++语法包括变量、数据类型、运算符、控制流等基本概念。</p>
          </div>
        `,
      },
      "cpp-section2-1": {
        title: "变量与数据类型",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">变量与数据类型</h3>
            <p class="text-neutral-600 mb-4">C++支持多种数据类型，如int、float、double、char等。</p>
          </div>
        `,
      },
      "cpp-section2-2": {
        title: "运算符",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">运算符</h3>
            <p class="text-neutral-600 mb-4">C++支持算术运算符、关系运算符、逻辑运算符等。</p>
          </div>
        `,
      },
      "cpp-section2-3": {
        title: "控制流",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">控制流</h3>
            <p class="text-neutral-600 mb-4">C++的控制流语句包括if-else、for、while、switch等。</p>
          </div>
        `,
      },
    },
    csp: {
      "csp-section1": {
        title: "CSP简介",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">CSP简介</h3>
            <p class="text-neutral-600 mb-4">CSP（计算机软件能力认证）是由中国计算机学会主办的一项认证考试。</p>
          </div>
        `,
      },
      "csp-section1-1": {
        title: "什么是CSP",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">什么是CSP</h3>
            <p class="text-neutral-600 mb-4">CSP是评估计算机软件能力的认证考试，分为多个级别。</p>
          </div>
        `,
      },
      "csp-section1-2": {
        title: "CSP考试形式",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">CSP考试形式</h3>
            <p class="text-neutral-600 mb-4">CSP考试采用机试形式，主要考察算法和程序设计能力。</p>
          </div>
        `,
      },
      "csp-section2": {
        title: "CSP备考",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">CSP备考</h3>
            <p class="text-neutral-600 mb-4">备考CSP需要掌握算法基础、数据结构和编程技巧。</p>
          </div>
        `,
      },
      "csp-section2-1": {
        title: "考试大纲",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">考试大纲</h3>
            <p class="text-neutral-600 mb-4">CSP考试大纲包括算法基础、数据结构、编程环境等内容。</p>
          </div>
        `,
      },
      "csp-section2-2": {
        title: "备考策略",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">备考策略</h3>
            <p class="text-neutral-600 mb-4">备考CSP需要系统学习算法和数据结构，多做练习题。</p>
          </div>
        `,
      },
    },
    photoshop: {
      "ps-section1": {
        title: "Photoshop基础",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">Photoshop基础</h3>
            <p class="text-neutral-600 mb-4">Photoshop是Adobe公司开发的一款专业图像处理软件。</p>
          </div>
        `,
      },
      "ps-section1-1": {
        title: "Photoshop界面",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">Photoshop界面</h3>
            <p class="text-neutral-600 mb-4">Photoshop界面包括菜单栏、工具栏、图层面板等部分。</p>
          </div>
        `,
      },
      "ps-section1-2": {
        title: "基本工具",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">基本工具</h3>
            <p class="text-neutral-600 mb-4">Photoshop的基本工具包括选择工具、画笔工具、橡皮擦工具等。</p>
          </div>
        `,
      },
      "ps-section2": {
        title: "图像处理",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">图像处理</h3>
            <p class="text-neutral-600 mb-4">Photoshop可以进行图像调整、滤镜应用、图层操作等处理。</p>
          </div>
        `,
      },
      "ps-section2-1": {
        title: "图像调整",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">图像调整</h3>
            <p class="text-neutral-600 mb-4">Photoshop提供亮度/对比度、色阶、曲线等图像调整功能。</p>
          </div>
        `,
      },
      "ps-section2-2": {
        title: "图层操作",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">图层操作</h3>
            <p class="text-neutral-600 mb-4">图层是Photoshop中重要的概念，可以实现复杂的图像处理效果。</p>
          </div>
        `,
      },
    },
    ai: {
      "ai-section1": {
        title: "人工智能基础",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">人工智能基础</h3>
            <p class="text-neutral-600 mb-4">人工智能（AI）是研究如何使计算机模拟人类智能行为的学科。</p>
          </div>
        `,
      },
      "ai-section1-1": {
        title: "什么是人工智能",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">什么是人工智能</h3>
            <p class="text-neutral-600 mb-4">人工智能是计算机科学的一个分支，旨在创建能够模拟人类智能的系统。</p>
          </div>
        `,
      },
      "ai-section1-2": {
        title: "AI发展历史",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">AI发展历史</h3>
            <p class="text-neutral-600 mb-4">人工智能的发展经历了多个阶段，从早期的符号主义到现代的深度学习。</p>
          </div>
        `,
      },
      "ai-section2": {
        title: "AI应用",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">AI应用</h3>
            <p class="text-neutral-600 mb-4">人工智能在各个领域都有广泛的应用，如计算机视觉、自然语言处理、语音识别等。</p>
          </div>
        `,
      },
      "ai-section2-1": {
        title: "机器学习",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">机器学习</h3>
            <p class="text-neutral-600 mb-4">机器学习是人工智能的一个重要分支，使计算机能够从数据中学习。</p>
          </div>
        `,
      },
      "ai-section2-2": {
        title: "深度学习",
        content: `
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-neutral-800 mb-4">深度学习</h3>
            <p class="text-neutral-600 mb-4">深度学习是机器学习的一个分支，使用神经网络模拟人脑的学习过程。</p>
          </div>
        `,
      },
    },
  },
};

// 导出数据
if (typeof module !== "undefined" && module.exports) {
  module.exports = knowledgeData;
} else if (typeof window !== "undefined") {
  // 在浏览器环境中暴露到全局作用域
  window.knowledgeData = knowledgeData;
}
