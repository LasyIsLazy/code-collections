/**
 * 订阅者
 * 订阅者的基本功能：
 * - 订阅
 * - 退订
 * - 对收到的内容做出响应
 */
class Subscriber {
    /**
     * callback: 订阅者收到通知后要做的事情
     */
    constructor(callback) {
        this.callback = callback
    }
    /**
     * 订阅
     */
    subscribe(publisher) {
        publisher.add(this)
    }
    /**
     * 退订
     */
    unsubscribe(publisher) {
        publisher.remove(this)
    }
    /**
     * 订阅者收到通知并做出响应
     */
    run() {
        this.callback.call()
    }
}

/**
 * 发布者
 * 发布者的基本功能：
 * - 增加订阅者
 * - 删除订阅者
 * - 发布
 */
class Publisher {
    /**
     * subs：订阅者列表
     */
    constructor() {
        this.subs = []
    }
    /**
     * 增加订阅者
     */
    add(sub) {
        this.subs.push(sub)
    }
    /**
     * 删除订阅者
     */
    remove(sub) {
        const rmIndex = this.subs.findIndex(ele => ele === rmIndex)
        rmIndex !== -1 && this.subs.splice(rmIndex, 1)
    }
    /**
     * 发布
     */
    deliver() {
        this.subs.forEach(sub => sub.run())
    }
}

// 示例：报社

const newspaperOffice = new Publisher() // 报社

// 有两个人在收到报纸后会读报纸 
const person1 = new Subscriber(() => {
    console.log('Person1 read')
})
const person2 = new Subscriber(() => {
    console.log('Person2 read')
})

// person1 订阅了报纸
person1.subscribe(newspaperOffice)

// 报社发布了报纸，将报纸分发到每个订阅者的手中
newspaperOffice.deliver()
// 此时 person1 收到报纸并阅读了报纸
// 控制台输出：Person1 read
// 而 person2 没有订阅，因此控制不会输出：Person2 read