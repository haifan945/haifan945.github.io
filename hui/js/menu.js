/**
 * HuiAdmin.js
 * ------------------
 * Hui-v6.0  Design development By http://www.webhaifan.com
 **/
//sidebar - menu组件封装
//在页面上面直接调用sidebar - menu的方法
// 菜单配置
$(function () {
  App.setbasePath("");
  App.setGlobalImgPath("hui/images/");
  addTabs({
    id: "10000",
    title: "主页",
    close: true,
    url: "/pages/home.html",
    // url: "/pages/list.html",
    urlType: "relative",
  });
  App.fixIframeCotent();
  var menus = [{
      id: "10000",
      text: "首页",
      icon: "icon-home",
      url: "/pages/home.html",
      targetType: "iframe-tab",
      children: "",
    },

    {
      id: "9001",
      text: "图标",
      icon: " icon-pic",
      children: [{
          id: "90011",
          text: "图标",
          icon: "icon-sm-dot",
          url: "/pages/icons.html",
          targetType: "iframe-tab",
        },
        {
          id: "90012",
          text: "bootstrap图标",
          icon: "icon-sm-dot",
          url: "/pages/icons.html",
          targetType: "iframe-tab",
        },
      ],
    },
    {
      id: "9002",
      text: "布局",
      icon: " icon-book",
      children: [{
          id: "90021",
          text: "布局",
          url: "pages/layout.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
        {
          id: "90022",
          text: "导航",
          url: "pages/nav.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },

        {
          id: "90024",
          text: "新闻列表",
          url: "pages/newsList.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
        {
          id: "90025",
          text: "superSlider轮播",
          url: "pages/supersilder.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
        {
          id: "90026",
          text: "superSliderTab",
          url: "pages/silder-tab.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
        {
          id: "90027",
          text: "superSliderNav",
          url: "pages/silder-nav.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
      ],
    },

    {
      id: "9003",
      text: "组件",
      icon: " icon-menu",
      children: [{
          id: "900310",
          text: "input",
          url: "pages/input.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",

        },

        {
          id: "90031",
          text: "动画",
          url: "pages/animate.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
        {
          id: "90032",
          text: "按钮",
          url: "/pages/button.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
        {
          id: "90033",
          text: "表单",
          url: "/pages/form.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
        {
          id: "90034",
          text: "表格",
          url: "pages/table.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
        {
          id: "90035",
          text: "辅助",
          url: "pages/assist.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },

        {
          id: "90039",
          text: "时间线",
          url: "pages/timeline.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },

        {
          id: "90040",
          text: "自定义弹出层",
          url: "pages/huilayer.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },


      ],
    },
    {
      id: "9004",
      text: "页面",
      icon: " icon-text2",
      children: [{
          id: "90041",
          text: "登录页面",
          url: "pages/login.html",
          targetType: "blank",
          icon: "icon-sm-dot",
        },
        {
          id: "90042",
          text: "layer弹出层",
          url: "pages/layer.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
      ],
    },

    {
      id: "9005",
      text: "应用",
      icon: " hui-icon icon-menu",
      children: [{
          id: "90051",
          text: "分类名称",
          url: "#",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
        {
          id: "90052",
          text: "分类名称",
          url: "#",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
      ],
    },
    {
      id: "9006",
      text: "高级",
      icon: " icon-captcha",
      children: [{
          id: "90061",
          text: "Echarts",
          url: "pages/echarts.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
        {
          id: "90062",
          text: "SCSS引入",
          url: "pages/include.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
      ],
    },
    {
      id: "9007",
      text: "用户",
      icon: " icon-user",
      children: [{
          id: "90071",
          text: "分类名称",
          url: "#",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
        {
          id: "90072",
          text: "分类名称",
          url: "#",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
      ],
    },
    {
      id: "9008",
      text: "设置",
      icon: " icon-set",
      children: [{
          id: "90081",
          text: "网站设置",
          url: "pages/website.html",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
        {
          id: "90082",
          text: "分类名称",
          url: "#",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
      ],
    },
    {
      id: "9009",
      text: "帮助",
      icon: " icon-help",
      children: [{
          id: "90091",
          text: "分类名称",
          url: "#",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
        {
          id: "90092",
          text: "分类名称",
          url: "#",
          targetType: "iframe-tab",
          icon: "icon-sm-dot",
        },
      ],
    },
  ];
  $(".sidebar-menu").sidebarMenu({
    data: menus,
  });
});