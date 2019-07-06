(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{227:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("你能尝试使用一趟扫描实现吗？")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("ul",[a("li",[t._v("标签：链表")]),t._v(" "),t._m(10),t._v(" "),a("li",[t._v("首先设立预先指针pre，预先指针是一个小技巧，在"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/8cMt_Yaeu6AT5jk3DhdhqA",target:"_blank",rel:"noopener noreferrer"}},[t._v("第2题"),a("OutboundLink")],1),t._v("中进行了讲解")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("li",[t._v("时间复杂度：O(n)")])]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"画解算法：19-删除链表的倒数第n个节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#画解算法：19-删除链表的倒数第n个节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 画解算法：19. 删除链表的倒数第N个节点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"题目链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 题目链接")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述","aria-hidden":"true"}},[this._v("#")]),this._v(" 题目描述")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("给定一个链表: 1-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("2-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("3-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("4-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("5, 和 n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 2.\n\n当删除了倒数第二个节点后，链表变为 1-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("2-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("3-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("5.\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("说明：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("给定的 "),s("code",[this._v("n")]),this._v(" 保证是有效的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("进阶：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"解题方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解题方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 解题方案")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路","aria-hidden":"true"}},[this._v("#")]),this._v(" 思路")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("整体思路是让前面的指针先移动"),s("code",[this._v("n")]),this._v("步，之后前后指针共同移动直到前面的指针到尾部为止")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[t._v("设预先指针"),a("code",[t._v("pre")]),t._v("的下一个节点指向"),a("code",[t._v("head")]),t._v("，设前指针为"),a("code",[t._v("start")]),t._v("，后指针为"),a("code",[t._v("end")]),t._v("，二者都等于"),a("code",[t._v("pre")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("start")]),this._v("先向前移动n步")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[t._v("之后"),a("code",[t._v("start")]),t._v("和"),a("code",[t._v("end")]),t._v("共同向前移动，此时二者的距离为"),a("code",[t._v("n")]),t._v("，当"),a("code",[t._v("start")]),t._v("到尾部时，"),a("code",[t._v("end")]),t._v("的位置恰好为倒数第"),a("code",[t._v("n")]),t._v("个节点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("因为要删除该节点，所以要移动到该节点的前一个才能删除，所以循环结束条件为"),s("code",[this._v("start.next != null")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("删除后返回"),s("code",[this._v("pre.next")]),this._v("，为什么不直接返回"),s("code",[this._v("head")]),this._v("呢，因为"),s("code",[this._v("head")]),this._v("有可能是被删掉的点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeNthFromEnd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    \n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"画解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#画解","aria-hidden":"true"}},[this._v("#")]),this._v(" 画解")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/06/08/5cfb590548c8068296.png",alt:"fr<x>ame_00001.png"}}),this._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/06/08/5cfb59056322550694.png",alt:"fr<x>ame_00002.png"}}),this._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/06/08/5cfb590548d3412898.png",alt:"fr<x>ame_00003.png"}}),this._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/06/08/5cfb5cb3942f072681.png",alt:"fr<x>ame_00004.png"}}),this._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/06/08/5cfb590acf6ef19427.png",alt:"fr<x>ame_00005.png"}}),this._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/06/08/5cfb5907c207755226.png",alt:"fr<x>ame_00006.png"}}),this._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/06/08/5cfb5908005cc43738.png",alt:"fr<x>ame_00007.png"}}),this._v(" "),s("img",{attrs:{src:"https://i.loli.net/2019/06/08/5cfb590b01fc369826.png",alt:"fr<x>ame_00008.png"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("点击「"),a("strong",[t._v("阅读原文")]),t._v("」在PC端评论打卡")]),t._v(" "),a("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("后台回复「"),a("strong",[t._v("算法")]),t._v("」，加入天天算法群")]),t._v(" "),a("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("觉得算法直击灵魂，欢迎点击"),a("strong",[t._v("在看")]),t._v("和"),a("strong",[t._v("转发")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/05/20/5ce23b33cc01d73486.gif",alt:""}})])}],!1,null,null,null);s.default=n.exports}}]);