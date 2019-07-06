(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{185:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"画解算法：9-回文数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#画解算法：9-回文数","aria-hidden":"true"}},[t._v("#")]),t._v(" 画解算法：9. 回文数")]),t._v(" "),s("h2",{attrs:{id:"题目链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 题目链接")]),t._v(" "),s("p",[t._v("https://leetcode-cn.com/problems/palindrome-number/")]),t._v(" "),s("h2",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),s("p",[t._v("判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。")]),t._v(" "),s("p",[t._v("示例 1:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("输入: 121\n输出: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),s("p",[t._v("示例 2:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("输入: -121\n输出: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。\n")])])]),s("p",[t._v("示例 3:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("输入: 10\n输出: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n解释: 从右向左读, 为 01 。因此它不是一个回文数。\n")])])]),s("h2",{attrs:{id:"解题方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解题方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 解题方案")]),t._v(" "),s("h3",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路","aria-hidden":"true"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("ul",[s("li",[t._v("标签：数学")]),t._v(" "),s("li",[t._v("如果是负数则一定不是回文数，直接返回false")]),t._v(" "),s("li",[t._v("如果是正数，则将其倒序数值计算出来，然后比较和原数值是否相等")]),t._v(" "),s("li",[t._v("如果是回文数则相等返回true，如果不是则不相等false")]),t._v(" "),s("li",[t._v("比如123的倒序321，不相等；121的倒序121，相等")])]),t._v(" "),s("h3",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPalindrome")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" cur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            cur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"画解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#画解","aria-hidden":"true"}},[t._v("#")]),t._v(" 画解")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/06/06/5cf88fae1022717169.png",alt:"fr<x>ame_00001.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/06/06/5cf88fae06ae063620.png",alt:"fr<x>ame_00002.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/06/06/5cf88fae26f3863032.png",alt:"fr<x>ame_00003.png"}})]),t._v(" "),s("p",[s("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("点击「"),s("strong",[t._v("阅读原文")]),t._v("」在PC端评论打卡")]),t._v(" "),s("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("后台回复「"),s("strong",[t._v("算法")]),t._v("」，加入天天算法群")]),t._v(" "),s("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("觉得算法直击灵魂，欢迎点击"),s("strong",[t._v("在看")]),t._v("和"),s("strong",[t._v("转发")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/05/20/5ce23b33cc01d73486.gif",alt:""}})])])}],!1,null,null,null);a.default=n.exports}}]);