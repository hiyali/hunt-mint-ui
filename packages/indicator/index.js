import Vue from 'vue';

const Indicator = Vue.extend(require('./src/indicator.vue'));
let instance;
let timer;

export default {
  /* open(options = {}) {
    if (!instance) {
      instance = new Indicator({
        el: document.createElement('div')
      });
    }
    if (instance.visible) return;
    instance.text = typeof options === 'string' ? options : options.text || '';
    instance.spinnerType = options.spinnerType || 'snake';
    document.body.appendChild(instance.$el);
    if (timer) {
      clearTimeout(timer);
    }

    Vue.nextTick(() => {
      instance.visible = true;
    });
  }, // */
  open(options = {}) {
    if (!instance) {
      instance = new Indicator({
        el: document.createElement('div')
      });
    }
    // if (instance.visible) {
    //   return;
    // }
    instance.text = typeof options === 'string' ? options : options.text || '';
    instance.spinnerType = options.spinnerType || 'snake';
    instance.visibleSpinner = options.spinnerType !== 'message';
    document.body.appendChild(instance.$el);
    if (timer) {
      clearTimeout(timer);
    }
    if (options.duration) {
      timer = setTimeout(() => {
        this.close();
      }, options.duration);
    }

    Vue.nextTick(() => {
      instance.visible = true;
    });
  },

  close() {
    if (instance) {
      instance.visible = false;
      timer = setTimeout(() => {
        if (instance.$el) {
          instance.$el.style.display = 'none';
        }
      }, 400);
    }
  }
};
