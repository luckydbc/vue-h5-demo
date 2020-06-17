import Vue from 'vue'

import toastComponent from './toast.vue'
let timer = null
let toastDom = null

const toastConstructor = Vue.extend(toastComponent)

function showToast(text, duration = 2000) {
  console.log(toastDom)
  if (!toastDom) {
    toastDom = new toastConstructor({
      el: document.createElement('div'),
      data () {
        return {
          text: text,
          show: true
        }
      }
    })
    document.body.appendChild(toastDom.$el)
  } else {
    toastDom.show = true
    toastDom.text = text
  }
  clearTimeout(timer)
  timer = setTimeout(() => { toastDom.show = false}, duration)
}

function registerToast () {
  Vue.prototype.$toast = showToast
}

export default registerToast