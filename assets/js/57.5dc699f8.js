(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{170:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("相信不少同学和我一样，在刚学完数据结构后开始刷算法题时，遇到递归的问题总是很头疼，而一看解答，却发现大佬们几行递归代码就优雅的解决了问题。从我自己的学习经历来看，刚开始理解递归思路都很困难，更别说自己写了。")]),t._v(" "),a("p",[t._v("我一直觉得刷算法题和应试一样，既然是应试就一定有套路存在。在刷题中，我总结出了一套解决递归问题的模版思路与解法，用这个思路可以秒解很多递归问题。")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("何为递归？程序反复调用自身即是递归。")]),t._v(" "),a("p",[t._v("我自己在刚开始解决递归问题的时候，总是会去纠结这一层函数做了什么，它调用自身后的下一层函数又做了什么…然后就会觉得实现一个递归解法十分复杂，根本就无从下手。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("如上图所示，我们需要关心的主要是以下三点：")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("一定要理解这3步，这就是以后递归秒杀算法题的依据和思路。")]),t._v(" "),a("p",[t._v("但这么说好像很空，我们来以题目作为例子，看看怎么套这个模版，相信3道题下来，你就能慢慢理解这个模版。之后再解这种套路递归题都能直接秒了。")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("先看一道简单的Leetcode题目： "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/",title:"Leetcode 104. 二叉树的最大深度",target:"_blank",rel:"noopener noreferrer"}},[t._v("Leetcode 104. 二叉树的最大深度"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("题目很简单，求二叉树的最大深度，那么直接套递归解题三部曲模版：")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("具体Java代码如下：")]),t._v(" "),t._m(12),a("p",[t._v("当足够熟练后，也可以和Leetcode评论区一样，很骚的几行代码搞定问题，让之后的新手看的一脸懵逼(这道题也是我第一次一行代码搞定一道Leetcode题)：")]),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("看了一道递归套路解决二叉树的问题后，有点套路搞定递归的感觉了吗？我们再来看一道Leetcode中等难度的链表的问题，掌握套路后这种中等难度的问题真的就是秒："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/swap-nodes-in-pairs/",title:"Leetcode 24. 两两交换链表中的节点",target:"_blank",rel:"noopener noreferrer"}},[t._v("Leetcode 24. 两两交换链表中的节点"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("直接上三部曲模版：")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("附上Java代码：")]),t._v(" "),t._m(17),t._m(18),t._v(" "),a("p",[t._v("相信经过以上2道题，你已经大概理解了这个模版的解题流程了。")]),t._v(" "),a("p",[t._v("那么请你先不看以下部分，尝试解决一下这道easy难度的Leetcode题（个人觉得此题比上面的medium难度要难）："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/balanced-binary-tree/comments/",title:"Leetcode 110. 平衡二叉树",target:"_blank",rel:"noopener noreferrer"}},[t._v("Leetcode 110. 平衡二叉树"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("我觉得这个题真的是集合了模版的精髓所在，下面套三部曲模版：")]),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("为什么我说这个题是集合了模版精髓？正是因为此题的返回值。要知道我们搞这么多花里胡哨的，都是为了能写出正确的递归函数，因此在解这个题的时候，我们就需要思考，我们到底希望返回什么值？")]),t._v(" "),a("p",[t._v("何为平衡二叉树？平衡二叉树即左右两棵子树高度差不大于1的二叉树。而对于一颗树，它是一个平衡二叉树需要满足三个条件：它的左子树是平衡二叉树，**它的右子树是平衡二叉树，它的左右子树的高度差不大于1。**换句话说：如果它的左子树或右子树不是平衡二叉树，或者它的左右子树高度差大于1，那么它就不是平衡二叉树。")]),t._v(" "),a("p",[t._v("而在我们眼里，这颗二叉树就3个节点：root、left、right。那么我们应该返回什么呢？如果返回一个当前树是否是平衡二叉树的boolean类型的值，那么我只知道left和right这两棵树是否是平衡二叉树，无法得出left和right的高度差是否不大于1，自然也就无法得出root这棵树是否是平衡二叉树了。而如果我返回的是一个平衡二叉树的高度的int类型的值，那么我就只知道两棵树的高度，但无法知道这两棵树是不是平衡二叉树，自然也就没法判断root这棵树是不是平衡二叉树了。")]),t._v(" "),a("p",[t._v("因此，这里我们返回的信息应该是既包含子树的深度的int类型的值，又包含子树是否是平衡二叉树的boolean类型的值。可以单独定义一个ReturnNode类，如下：")]),t._v(" "),t._m(20),t._m(21),t._v(" "),a("p",[t._v("具体的Java代码如下：")]),t._v(" "),t._m(22),t._m(23),t._v(" "),a("p",[t._v("暂时就写这么多啦，作为一个高考语文及格分，大学又学了工科的人，表述能力实在差因此啰啰嗦嗦写了一大堆，希望大家能理解这个很好用的套路。")]),t._v(" "),a("p",[t._v("下面我再列举几道我在刷题过程中遇到的也是用这个套路秒的题，真的太多了，大部分链表和树的递归题都能这么秒，因为树和链表天生就是适合递归的结构。")]),t._v(" "),a("p",[t._v("我会随时补充，正好大家可以看了上面三个题后可以拿这些题来练练手，看看自己是否能独立快速准确的写出递归解法了。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/symmetric-tree/comments/",title:"Leetcode 101. 对称二叉树",target:"_blank",rel:"noopener noreferrer"}},[t._v("Leetcode 101. 对称二叉树"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/",title:"Leetcode 111. 二叉树的最小深度",target:"_blank",rel:"noopener noreferrer"}},[t._v("Leetcode 111. 二叉树的最小深度"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/invert-binary-tree/",title:"Leetcode 226. 翻转二叉树",target:"_blank",rel:"noopener noreferrer"}},[t._v("Leetcode 226. 翻转二叉树"),a("OutboundLink")],1),t._v("：这个题的备注是最骚的。Mac OS下载神器homebrew的大佬作者去面试谷歌，没做出来这道算法题，然后被谷歌面试官怼了：”我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。”")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/merge-two-binary-trees/",title:"Leetcode 617. 合并二叉树",target:"_blank",rel:"noopener noreferrer"}},[t._v("Leetcode 617. 合并二叉树"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/maximum-binary-tree/",title:"Leetcode 654. 最大二叉树",target:"_blank",rel:"noopener noreferrer"}},[t._v("Leetcode 654. 最大二叉树"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/",title:"Leetcode 654. 最大二叉树",target:"_blank",rel:"noopener noreferrer"}},[t._v("Leetcode 83. 删除排序链表中的重复元素"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/reverse-linked-list/",title:"Leetcode 654. 最大二叉树",target:"_blank",rel:"noopener noreferrer"}},[t._v("Leetcode 206. 翻转链表"),a("OutboundLink")],1)]),t._v(" "),t._m(24),t._v(" "),t._m(25)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_3道题彻底搞定：套路解决递归问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3道题彻底搞定：套路解决递归问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 3道题彻底搞定：套路解决递归问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"递归解题三部曲"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递归解题三部曲","aria-hidden":"true"}},[this._v("#")]),this._v(" 递归解题三部曲")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("相信很多初学者和我一样，这是一个思维误区，一定要走出来。既然递归是一个反复调用自身的过程，这就说明它每一级的功能都是一样的，"),s("strong",[this._v("因此我们只需要关注一级递归的解决过程即可。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("实在没学过啥绘图的软件，就灵魂手绘了一波，哈哈哈勿喷。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/06/13/5d0124912b80969325.jpg",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("整个递归的终止条件。")])]),this._v(" "),s("li",[s("p",[this._v("一级递归需要做什么？")])]),this._v(" "),s("li",[s("p",[this._v("应该返回给上一级的返回值是什么？")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("因此，也就有了我们解递归题的三部曲：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("找整个递归的终止条件：递归应该在什么时候结束？")])]),this._v(" "),s("li",[s("p",[this._v("找返回值：应该给上一级返回什么信息？")])]),this._v(" "),s("li",[s("p",[this._v("本级递归应该做什么：在这一级递归中，应该完成什么任务？")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"例1：求二叉树的最大深度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例1：求二叉树的最大深度","aria-hidden":"true"}},[this._v("#")]),this._v(" 例1：求二叉树的最大深度")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[a("strong",[t._v("找终止条件。")]),t._v(" 什么情况下递归结束？当然是树为空的时候，此时树的深度为0，递归就结束了。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("找返回值。")]),t._v(" 应该返回什么？题目求的是树的最大深度，我们需要从每一级得到的信息自然是当前这一级对应的树的最大深度，因此我们的返回值应该是当前树的最大深度，这一步可以结合第三步来看。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("本级递归应该做什么。")]),t._v(" 首先，还是强调要走出之前的思维误区，递归后我们眼里的树一定是这个样子的，看下图。此时就三个节点：root、root.left、root.right，其中根据第二步，root.left和root.right分别记录的是root的左右子树的最大深度。那么本级递归应该做什么就很明确了，自然就是在root的左右子树中选择较大的一个，再加上1就是以root为根的子树的最大深度了，然后再返回这个深度即可。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/06/13/5d01248c7d02f97296.jpg",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxDepth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//终止条件：当树为空时结束递归，并返回当前深度0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//root的左、右子树的最大深度")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" leftDepth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxDepth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" rightDepth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxDepth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回的是左右子树的最大深度+1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftDepth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rightDepth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxDepth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxDepth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxDepth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"例2：两两交换链表中的节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例2：两两交换链表中的节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 例2：两两交换链表中的节点")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[a("strong",[t._v("找终止条件。")]),t._v(" 什么情况下递归终止？没得交换的时候，递归就终止了呗。因此当链表只剩一个节点或者没有节点的时候，自然递归就终止了。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("找返回值。")]),t._v(" 我们希望向上一级递归返回什么信息？由于我们的目的是两两交换链表中相邻的节点，因此自然希望交换给上一级递归的是已经完成交换处理，即已经处理好的链表。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("本级递归应该做什么。")]),t._v(" 结合第二步，看下图！由于只考虑本级递归，所以这个链表在我们眼里其实也就三个节点：head、head.next、已处理完的链表部分。而本级递归的任务也就是交换这3个节点中的前两个节点，就很easy了。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/06/13/5d01248c603cc44982.jpg",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapPairs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//终止条件：链表只剩一个节点或者没节点了，没得交换了。返回的是已经处理好的链表")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//一共三个节点:head, next, swapPairs(next.next)")]),t._v("\n      \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//下面的任务便是交换这3个节点中的前两个节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapPairs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//根据第二步：返回给上一级的是当前已经完成交换后，即处理好了的链表部分")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"例3：平衡二叉树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例3：平衡二叉树","aria-hidden":"true"}},[this._v("#")]),this._v(" 例3：平衡二叉树")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[s("strong",[this._v("找终止条件。")]),this._v(" 什么情况下递归应该终止？自然是子树为空的时候，空树自然是平衡二叉树了。")])]),this._v(" "),s("li",[s("p",[s("strong",[this._v("应该返回什么信息：")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReturnNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" isB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" depth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//构造方法")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReturnNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" isB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" depth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" isB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("depth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" depth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[s("strong",[this._v("本级递归应该做什么。")]),this._v(" 知道了第二步的返回值后，这一步就很简单了。目前树有三个节点：root，left，right。我们首先判断left子树和right子树是否是平衡二叉树，如果不是则直接返回false。再判断两树高度差是否不大于1，如果大于1也直接返回false。否则说明以root为节点的子树是平衡二叉树，那么就返回true和它的高度。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这个ReturnNode是参考我描述的递归套路的第二步：思考返回值是什么")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//一棵树是BST等价于它的左、右俩子树都是BST且俩子树高度差不超过1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//因此我认为返回值应该包含当前树是否是BST和当前树的高度这两个信息")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReturnNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" isB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" depth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReturnNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" depth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" isB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" isB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("depth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" depth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//主函数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isBalanced")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isBST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//参考递归套路的第三部：描述单次执行过程是什么样的")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里的单次执行过程具体如下：")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否终止?->没终止的话，判断是否满足不平衡的三个条件->返回值")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReturnNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isBST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReturnNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不平衡的情况有3种：左树不平衡、右树不平衡、左树和右树差的绝对值大于1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReturnNode")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isBST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReturnNode")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isBST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReturnNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("depth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("depth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReturnNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不满足上面3种情况，说明平衡了，树的深度为左右俩子树最大深度+1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReturnNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("depth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("depth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一些可以用这个套路解决的题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些可以用这个套路解决的题","aria-hidden":"true"}},[this._v("#")]),this._v(" 一些可以用这个套路解决的题")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("后台回复「"),a("strong",[t._v("算法")]),t._v("」，加入天天算法群")]),t._v(" "),a("span",{staticStyle:{display:"block","text-align":"center"}},[t._v("觉得文章直击灵魂，欢迎点击"),a("strong",[t._v("在看")]),t._v("和"),a("strong",[t._v("转发")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/05/20/5ce23b33cc01d73486.gif",alt:""}})])}],!1,null,null,null);s.default=e.exports}}]);