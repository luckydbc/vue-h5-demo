<template>
    <div>
        <p class="" @click="goDemo('circle')">circle</p>
        <p class="" @click="goDemo('toast')">toast</p>
    </div>
</template>
<script>
export default {
  methods: {
    goDemo(route) {
      this.$router.push(`/example/${route}`)
    }
  }
}
</script>