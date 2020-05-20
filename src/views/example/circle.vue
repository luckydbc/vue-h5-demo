<template>
  <div class="circle-demo">
    <circle-ring
      :expansion="1"
      meterColor="#d3d3d3"
      :progress="80"
      :valueColor="gradientColor"
      :size="100"
    >
    </circle-ring>
  </div>
</template>
<script>
import circleRing from '@/components/circle-ring'
export default {
  data() {
    return {
      gradientColor1: '#3fecff',
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6'
      }
    };
  },
  components: { circleRing }
};
</script>
