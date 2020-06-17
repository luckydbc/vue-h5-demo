<template>
  <div class="circle-progress">
    <div
      class="svg-circle-progress"
      :style="{ width: `${_size}px`, height: `${_size}px` }"
    >
      <div class="svg-progress__text">
        <slot>
          <span
            class="counter"
            v-if="!isNaN(progress)"
            :style="{
              fontSize: _counterfontSize,
              lineHeight: _counterLineHeight
            }"
            >{{ progress }}%</span
          >
        </slot>
      </div>
      <svg
        class="svg-progress"
        :width="_size"
        :height="_size"
        :viewBox="viewBox"
      >
        <defs>
          <linearGradient
            v-if="_isLiner"
            id="liner-gradient-color"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              v-for="(value, key, index) in valueColor"
              :key="index"
              :offset="key"
              :style="{ 'stop-color': value }"
            >
              {{ value }}
            </stop>
          </linearGradient>
        </defs>
        <circle
          class="svg-progress__meter"
          :cx="_cx"
          :cy="_cy"
          :r="radius"
          :stroke-width="_strokeWidth"
          :style="{ stroke: meterColor }"
        ></circle>
        <circle
          class="svg-progress__value"
          :cx="_cx"
          :cy="_cy"
          :r="radius"
          :stroke-width="_strokeWidth"
          :style="{
            stroke: _isLiner ? 'url(#liner-gradient-color)' : valueColor,
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset
          }"
        ></circle>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    expansion: {
      type: Number,
      default: 1
    },
    meterColor: {
      type: String,
      default: '#e6e6e6'
    },
    progress: {
      type: Number,
      required: true,
      default: 0
    },
    valueColor: {
      type: [String, Object],
      default: '#f77a52'
    },
    size: {
      type: Number,
      default: 120
    },
    strokeWidth: {
      type: Number,
      default: 12
    }
  },

  data() {
    return {
      dashoffset: 0,
      fontEmSize: 2,
      strokeDasharray: this.circumference,
      strokeDashoffset: 0
    };
  },

  computed: {
    circumference() {
      return 2 * Math.PI * this.radius;
    },

    containerStyle() {
      return `{ width: ${this._size}px, height: ${this._size}px }`;
    },

    radius() {
      return ((this.size - this.strokeWidth) / 2) * this.expansion;
    },

    viewBox() {
      return `0 0 ${this.size * this.expansion} ${this.size * this.expansion}`;
    },

    _cx() {
      return (this.size / 2) * this.expansion;
    },

    _cy() {
      return (this.size / 2) * this.expansion;
    },

    _counterfontSize() {
      return `${this.fontEmSize * this.expansion}em`;
    },

    _counterLineHeight() {
      return `${this._height}px`;
    },

    _strokeWidth() {
      return this.strokeWidth * this.expansion;
    },

    _size() {
      return this.size * this.expansion;
    },
    _isLiner() {
      return (
        Object.prototype.toString.call(this.valueColor) == '[object Object]'
      );
    }
  },

  watch: {
    progress() {
      this.updateBar();
    }
  },

  created() {
    this.updateBar();
  },

  methods: {
    updateBar() {
      const progress = this.progress / 100;
      const dashoffset = this.circumference * (1 - progress);
      this.strokeDashoffset = dashoffset;
    }
  }
};
</script>
<style lang="scss" scoped>
.svg-circle-progress {
  position: relative;
  text-align: center;
  margin: 0 auto;
}
.svg-progress {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.svg-progress__text {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  span {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 0.8em;
    transform: translate(-50%, -50%);
  }
}

.svg-progress__meter,
.svg-progress__value {
  fill: none;
}
.svg-progress__value {
  stroke-linecap: round;
  -webkit-transition: all 1s linear;
  transition: all 1s linear;
}
</style>
