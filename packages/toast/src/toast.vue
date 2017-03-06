<template>
  <transition name="mint-toast-pop">
    <div class="mint-toast" v-show="visible">
      <div class="mint-toast-wrapper" :class="customClass" :style="{ 'padding': iconClass === '' ? '10px' : '20px' }">
        <i class="mint-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
        <span class="mint-toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ message }}</span>
      </div>

      <div class="mint-toast-mask" @touchmove.stop.prevent @click="ownClose"></div>
    </div>
  </transition>
</template>

<style>
  @component-namespace mint {
    @component toast {
      position: relative;
      z-index: 200;
      transition: opacity .3s linear;

      @descendent wrapper {
        position: fixed 50% * * 50%;
        transform: translate(-50%, -50%);

        max-width: 80%;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
        box-sizing: border-box;
        text-align: center;
      }

      @descendent icon {
        display: block;
        text-align: center;
        font-size: 56px;
      }

      @descendent text {
        font-size: 14px;
        display: block;
        text-align: center;
      }

      @when placetop {
        top: 50px;
        left: 50%;
        transform: translate(-50%, 0);
      }

      @when placemiddle {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      @when placebottom {
        bottom: 50px;
        left: 50%;
        transform: translate(-50%, 0);
      }

      @descendent pop-enter, pop-leave-active {
        opacity: 0;
      }

      @descendent mask {
        position: fixed 0 * * 0;
        size: 100%;
        opacity: 0;
        background: transparent;
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    props: {
      message: String,
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'middle'
      },
      iconClass: {
        type: String,
        default: ''
      }
    },

    methods: {
      ownClose: function() {
        this.close();
      }
    },

    data() {
      return {
        visible: false
      };
    },

    computed: {
      customClass() {
        var classes = [];
        switch (this.position) {
          case 'top':
            classes.push('is-placetop');
            break;
          case 'bottom':
            classes.push('is-placebottom');
            break;
          default:
            classes.push('is-placemiddle');
        }
        classes.push(this.className);

        return classes.join(' ');
      }
    }
  };
</script>
