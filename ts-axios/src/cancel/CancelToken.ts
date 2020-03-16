import { CancelExecutor, CancelTokenSource, Canceler } from '../types'
import Cancel from './Cancel'

interface ResolvePromise {
  (reason: Cancel): void
}

export default class CancelToken {
  promise: Promise<Cancel>
  reason?: Cancel
  // hahaNum: number

  constructor(executor: CancelExecutor) {
    let resolvePromise: ResolvePromise

    this.promise = new Promise<Cancel>(resolve => {
      resolvePromise = resolve
    })
    // 先执行constructor里的代码
    // this.hahaNum = 666999

    executor(message => {
      if (this.reason) {
        return
      }
      this.reason = new Cancel(message)
      resolvePromise(this.reason!)
    })
  }

  throwIfRequested() {
    if (this.reason) {
      // console.log('throwIfCancellationRequested')
      throw this.reason
    }
  }

  static source(): CancelTokenSource {
    let cancel!: Canceler
    const token = new CancelToken(c => {
      // console.log(c) // 把executor赋值给cancel
      cancel = c
    })
    // console.log(cancel)
    return {
      cancel,
      token
    }
  }
}