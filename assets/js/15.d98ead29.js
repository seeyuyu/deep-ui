(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{871:function(t,e,v){"use strict";v.r(e);var _=v(4),n=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"loading-dialog"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#loading-dialog"}},[t._v("#")]),t._v(" loading-dialog")]),t._v(" "),v("p",[t._v("该组件内置了 "),v("code",[t._v("el-footer")]),t._v("，以及发送请求自动对 "),v("code",[t._v("confirm")]),t._v(" 按钮进行 "),v("code",[t._v("loading")]),t._v(", 从细节上减少您的工作量~")]),t._v(" "),v("no-ssr",[v("vue-live",{attrs:{layoutProps:{lang:"vue"},code:"<template>\n  <div>\n    <loading-dialog\n      title=\"标题\"\n      :visible.sync=\"visible\"\n      :confirm=\"handleConfirm\"\n    >\n        <el-form-renderer :content=\"content\" v-model=\"data\">\n        </el-form-renderer>\n    </loading-dialog>\n    <el-button @click=\"visible = true\">打开弹窗</el-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      visible: false,\n      data: {},\n      content: [\n            {\n                label: '用户名',\n                id: 'username',\n                type: 'input',\n                el: {\n                    type: 'username',\n                    placeholder: '请输入密码'\n                }\n            },\n            {\n                label: '密码',\n                id: 'password',\n                type: 'input',\n                el: {\n                    type: 'password',\n                    placeholder: '请输入密码'\n                }\n            }\n        ]\n    };\n  },\n  methods: {\n    handleConfirm() {\n      return new Promise(resolve => setTimeout(resolve, 2000));\n    }\n  }\n};\n<\/script>\n",requires:{}}})],1),v("h2",{attrs:{id:"props"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" props")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Type")]),t._v(" "),v("th",[t._v("Required")]),t._v(" "),v("th",[t._v("Default")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("visible")]),t._v(" "),v("td",[t._v("是否显示 dialog")]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[v("code",[t._v("false")])]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("confirmButtonText")]),t._v(" "),v("td",[t._v("确定按钮文字")]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[v("code",[t._v("false")])]),t._v(" "),v("td",[t._v("确定")])]),t._v(" "),v("tr",[v("td",[t._v("cancelButtonText")]),t._v(" "),v("td",[t._v("取消按钮文字")]),t._v(" "),v("td",[v("code",[t._v("String")])]),t._v(" "),v("td",[v("code",[t._v("false")])]),t._v(" "),v("td",[t._v("取消")])]),t._v(" "),v("tr",[v("td",[t._v("hasFooter")]),t._v(" "),v("td",[t._v("是否有底部栏")]),t._v(" "),v("td",[v("code",[t._v("Boolean")])]),t._v(" "),v("td",[v("code",[t._v("false")])]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("beforeClose")]),t._v(" "),v("td",[t._v("关闭前会执行检查是否可以关闭")]),t._v(" "),v("td",[v("code",[t._v("Function")])]),t._v(" "),v("td",[v("code",[t._v("false")])]),t._v(" "),v("td",[t._v("() => true")])]),t._v(" "),v("tr",[v("td",[t._v("confirm")]),t._v(" "),v("td",[t._v("点击按钮触发的事件，传入对应的处理 promise 可以达到 loading 的效果")]),t._v(" "),v("td",[v("code",[t._v("Function")])]),t._v(" "),v("td",[v("code",[t._v("false")])]),t._v(" "),v("td",[t._v("() => true")])]),t._v(" "),v("tr",[v("td",[t._v("confirmDisabled")]),t._v(" "),v("td",[t._v("禁用提交按钮")]),t._v(" "),v("td",[v("code",[t._v("Function")]),t._v(" /  "),v("code",[t._v("Boolean")])]),t._v(" "),v("td",[v("code",[t._v("false")])]),t._v(" "),v("td",[t._v("false")])])])]),t._v(" "),v("h2",{attrs:{id:"slots"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("#")]),t._v(" slots")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Default Slot Content")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("default")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("footer")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("footer-area")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])])])]),t._v(" "),v("h2",{attrs:{id:"events"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" events")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Event Name")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Parameters")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("update:visible")]),t._v(" "),v("td",[t._v("双向绑定 visible")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("close")]),t._v(" "),v("td",[t._v("关闭弹窗会执行")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("confirm")]),t._v(" "),v("td",[t._v("confirm 事件完成时触发")]),t._v(" "),v("td",[t._v("-")])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);