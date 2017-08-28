import { observable, action, useStrict } from 'mobx'
import axios from 'axios'

useStrict(true)

class ZenStore {
  @observable fetching = false
  @observable content = []
  @observable availableId = 0
  @observable text = ''

  @action
  fetchZen() {
    this.fetching = true
    axios.get('https://api.github.com/zen')
    .then(action('response', (res) => {
      console.log(res)
      this.availableId ++
      this.fetching = false
      this.text = res.data
      this.content.push(
        {
          id: this.availableId,
          text: this.text
        }
      )
    }))
    .catch(function (error) {
      console.log(error)
    })
  }

  @action
  clearZen() {
    this.content = []
    this.availableId = 0
  }
}

const zenStore = new ZenStore()

export default zenStore
