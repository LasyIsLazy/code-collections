/**
 * 需要考虑的情况：
 * - null
 * - 数组
 * - 日期
 * - new 创建的 String、Number、Boolean 对象
 * - DOM 节点
 * - 普通对象
 * - 其他类型
 */


function deepClone(obj) {
  // 关于 typeof 的描述可以参考 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#%E6%8F%8F%E8%BF%B0
  if (typeof obj === 'object') {
    // null
    if (obj === null) {
      return obj
    }

    // 数组
    if (Array.isArray(obj)) {
      return obj.map(ele => deepClone(ele))
    }

    // 日期类型
    if (obj instanceof Date) {
      return new Date(obj)
    }

    // 用 new 创建的 String、Number、Boolean 对象
    const types = [String, Number, Boolean]
    let Con = null
    types.forEach(constructor => {
      if (obj instanceof constructor) {
        Con = constructor
      }
    })
    if (Con) {
      return new Con(obj)
    }

    // DOM 节点
    if (obj.nodeType && typeof obj.cloneNode === 'function') {
      return obj.cloneNode(true)
    }

    // 普通对象
    const returnObj = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const element = obj[key]
        returnObj[key] = deepClone(element)
      }
    }
    return returnObj
  }

  // 默认直接返回
  return obj
}

// 测试：
const node = document.createElement('div')
node.appendChild(document.createElement('p'))
const obj = {
  a: {
    arr: [1, '2', true, null, undefined, Symbol('symbol')],
    obj: { key: 2 },
    date: new Date(),
    strObj: new String('str'),
    numObj: new Number('num'),
    bolObj: new Boolean('bol'),
    node
  }
}
console.log(obj)
console.log(deepClone(obj))
