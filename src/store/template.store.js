import { defineStore } from 'pinia'
import queryString from 'query-string'
import { KEY } from '../constants'
export const useTemplateStore = defineStore('templateStore', {
  state: () => ({
    autoplay: 1,
    drag: false,
    formDialog: false,
    bultens: JSON.parse(localStorage.getItem(KEY)) || []
  }),
  actions: {
    setStorage(data) {
      try {
        const newData = JSON.parse(JSON.stringify(data))
        this.bultens = newData
        localStorage.setItem(KEY, JSON.stringify(newData))
      } catch (error) {
        console.log(error)
      }
    },
    deleteBulten(url) {
      const filterData = this.bultens.filter((item) => item.url !== url)
      this.setStorage(filterData)
    },
    addBulten(bulten) {
      bulten.url = Object.values(queryString.parse(bulten.url))[0]
      const newBultens = [...this.bultens, bulten]
      this.setStorage(newBultens)
    }
  }
})
