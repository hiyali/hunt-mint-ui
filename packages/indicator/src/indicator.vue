<template>
  <transition name="mint-indicator">
    <div class="mint-indicator" v-show="visible">
      <div class="mint-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
        <!--<spinner class="mint-indicator-spin" :type="convertedSpinnerType" :size="32"></spinner>-->
        <spinner class="mint-indicator-spin" :type="convertedSpinnerType" :size="32" v-show="visibleSpinner"></spinner>
        <div v-if="visibleSpinner && text" class="mint-indicator-middle"></div>
        <span class="mint-indicator-text" v-show="text">{{ text }}</span>
      </div>
      <div class="mint-indicator-mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<style>
@component-namespace mint {
  @component indicator {
    transition: opacity .2s linear;
    position: relative;
    z-index: 200;

    @descendent wrapper {
      position: fixed 50% * * 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      box-sizing: border-box;
      text-align: center;
    }

    @descendent text {
      display: block;
      color: #fff;
      text-align: center;
      font-size: 16px;
    }

    @descendent middle {
      height: 10px;
    }

    @descendent spin {
      display: inline-block;
      text-align: center;
    }

    @descendent mask {
      position: fixed 0 * * 0;
      size: 100%;
      opacity: 0;
      background: transparent;
    }
  }
}

.mint-indicator-enter,
.mint-indicator-leave-active {
  opacity: 0;
}
</style>

<script type="text/babel">
  import Spinner from 'mint-ui/packages/spinner/index.js';
  if (process.env.NODE_ENV === 'component') {
    require('mint-ui/packages/spinner/style.css');
  }

  export default {
    data() {
      return {
        visibleSpinner: false,
        visible: false
      };
    },

    components: {
      Spinner
    },

    computed: {
      convertedSpinnerType() {
        switch (this.spinnerType) {
          case 'double-bounce':
            return 1;
          case 'triple-bounce':
            return 2;
          case 'fading-circle':
            return 3;
          default:
            return 0;
        }
      }
    },

    props: {
      text: String,
      spinnerType: {
        type: String,
        default: 'snake'
      }
    }
  };
</script>
