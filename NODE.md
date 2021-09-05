node 学习笔记

# CommonJS 规范

html中引入js：通过script标签来引入。如果没有html怎么引用？ 可以使用CommonJS

```js

exports.add = function() {}
exports.obj = { value: '1' }

module.exports = {
  // 导出一个模块  相当于ESM的 export default
  // 与ESM不同的是  如果有module.exports 和 exports.XXX
  // 你引用的话只能是引用module.exports  XXX 会是undefined
  // XXX 会是exports对象上的一个属性 
}

```

引用

```js
const XXX = require('a.js')
```

`require命令用于加载模块文件，相当于读入并执行一个js文件，然后返回该模块的exports对象，没有发现指定模块，则就会报错`

`CommJS` 的引用是对输出值的拷贝


# Node.js 的非阻塞I/O

- I/O 即Input/Output， 一个系统的输入和输出
- 阻塞I/O和非阻塞I/O的区别就在于系统接收输入再到输出期间，能不能接收其他输入。

>阻塞I/O，就是在输入到输出期间，不能接收另外的输入或输出

理解非阻塞I/O的要点在于
- 确定一个进行Input/OutPut的系统
- 思考在I/O过程中，能不能进行其他I/O




