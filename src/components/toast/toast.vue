<template>
    <div class="toast-wrap" v-if="show">{{text}}</div>
</template>
<script>
</script>
<style lang="scss" scoped>
.toast-wrap{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.2);
    padding: 10px 20px;
    border-radius: 5px;
    color: #ffffff;
}
</style>