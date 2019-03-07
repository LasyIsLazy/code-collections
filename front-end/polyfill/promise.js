function MyPromise(exector) {
  this.status = 'pending' // 存储 Promise 实例的状态
  this.value = undefined // resolve 后返回的值
  this.reason = undefined // reject 后返回的原因
  this.fulfilledQueues = [] // fulfilled 后执行的回调
  this.rejectedQueues = [] // reject 后执行的回调

  const runQueue = () => {
    if (this.status === 'fulfilled') {
      this.fulfilledQueues.forEach(callback => {
        callback(this.value)
      })
    }
    if (this.status === 'rejected') {
      this.rejectedQueues.forEach(callback => {
        callback(this.reason)
      })
    }
  }
  const resolve = value => {
    this.status = 'fulfilled'
    this.value = value
    runQueue()
  }
  const reject = reason => {
    this.status = 'rejected'
    this.reject = reason
    runQueue()
  }
  exector(resolve, reject)
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  if (this.status === 'fulfilled') {
    onFulfilled(this.value)
  }
  if (this.status === 'rejected') {
    onRejected(this.reason)
  }
  if (this.status === 'pending') {
    // 执行 then 的时候异步操作一般还没有完成，因此将回调放到队列中，等待完成时（调用 resolve 或 reject）再运行
    this.fulfilledQueues.push(onFulfilled)
    this.rejectedQueues.push(onRejected)
  }
}

new MyPromise((resolve, reject) => {
  console.log('Begin async operation')
  // 异步操作
  setTimeout(() => {
    console.log('Async operation fulfilled 1 seconds later')
    resolve('fulfilled')
  }, 1000)
}).then(val => {
  console.log('Run then callback and return:', val)
})
