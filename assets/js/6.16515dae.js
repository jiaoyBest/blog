(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{221:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"画解算法：101-对称二叉树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#画解算法：101-对称二叉树","aria-hidden":"true"}},[t._v("#")]),t._v(" 画解算法：101. 对称二叉树")]),t._v(" "),s("h2",{attrs:{id:"题目链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 题目链接")]),t._v(" "),s("p",[t._v("https://leetcode-cn.com/problems/symmetric-tree/")]),t._v(" "),s("h2",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),s("p",[t._v("给定一个二叉树，检查它是否是镜像对称的。")]),t._v(" "),s("p",[t._v("例如，二叉树 "),s("code",[t._v("[1,2,2,3,4,4,3]")]),t._v(" 是对称的。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    1\n   / \\\n  2   2\n / \\ / \\\n3  4 4  3\n")])])]),s("p",[t._v("但是下面这个 "),s("code",[t._v("[1,2,2,null,3,null,3]")]),t._v(" 则不是镜像对称的:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    1\n   / \\\n  2   2\n   \\   \\\n   3    3\n")])])]),s("h2",{attrs:{id:"解题方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解题方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 解题方案")]),t._v(" "),s("h3",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路","aria-hidden":"true"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("ul",[s("li",[t._v("标签：dfs")]),t._v(" "),s("li",[t._v("递归结束条件：\n"),s("ul",[s("li",[t._v("都为空指针则返回true")]),t._v(" "),s("li",[t._v("只有一个为空则返回false")])])]),t._v(" "),s("li",[t._v("递归过程：\n"),s("ul",[s("li",[t._v("判断两个指针当前节点值是否相等")]),t._v(" "),s("li",[t._v("判断A的右子树与B的左子树是否对称")]),t._v(" "),s("li",[t._v("判断A的左子树与B的右子树是否对称")])])]),t._v(" "),s("li",[t._v("短路：在递归判断过程中存在短路现象，也就是做"),s("code",[t._v("与")]),t._v("操作时，如果前面的值返回false则后面的不再进行计算")]),t._v(" "),s("li",[t._v("时间复杂度：O(n)")])]),t._v(" "),s("h3",{attrs:{id:"画解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#画解","aria-hidden":"true"}},[t._v("#")]),t._v(" 画解")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf0874b6d81810598.png",alt:"fr<x>ame_00001.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf0874b6e9b376592.png",alt:"fr<x>ame_00004.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf0874b6687591951.png",alt:"fr<x>ame_00007.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf0874c2f02f59006.png",alt:"fr<x>ame_00010.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf0874bb1afc28470.png",alt:"fr<x>ame_00013.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf0874b8c70a78148.png",alt:"fr<x>ame_00018.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf0874d6cb0069836.png",alt:"fr<x>ame_00022.png"}}),t._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/05/31/5cf0874d15ae839505.png",alt:"fr<x>ame_00026.png"}})]),t._v(" "),s("h3",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSymmetric")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isMirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isMirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" t2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" t2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" t2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" t2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isMirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isMirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("点击「"),s("strong",[t._v("阅读原文")]),t._v("」打卡")]),t._v(" "),s("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("后台回复「"),s("strong",[t._v("算法")]),t._v("」，加入天天算法群")]),t._v(" "),s("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("觉得算法直击灵魂，欢迎点击"),s("strong",[t._v("在看")]),t._v("和"),s("strong",[t._v("转发")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/05/20/5ce23b33cc01d73486.gif",alt:""}})])])}],!1,null,null,null);a.default=r.exports}}]);