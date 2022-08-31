import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from 'sten-components/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
