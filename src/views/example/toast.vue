<template>
    <div class="showToast">
        <button class="toast" @click="showToast">点击查看toast</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      const: 0
    }
  },  
  methods: {
    showToast() {
      this.$toast(`这是toas${this.const ++}`)
    }
  }
}
</script>