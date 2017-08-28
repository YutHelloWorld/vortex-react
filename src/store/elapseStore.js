import { observable, action, useStrict } from 'mobx'

useStrict(true)

class ElapseStore {
  @observable elapse = 0

  @action
  plus() {
    this.elapse += 1
  }
}

const elapseStore = new ElapseStore()

export default elapseStore
