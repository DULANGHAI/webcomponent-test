import { Config } from '@stencil/core';
import { vueOutputTarget as vue2OutputTarget } from 'stencil-vue2-output-target';
import { vueOutputTarget as vue3OutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'sten-components',
  outputTargets: [
    vue2OutputTarget({
      componentCorePackage: "sten-components",
      proxiesFile: "../sten-components-vue2/src/components.ts",
      // componentModels: vueComponentModels,
    }),
    vue3OutputTarget({
      componentCorePackage: "sten-components",
      proxiesFile: "../sten-components-vue3/src/components.ts",
      // componentModels: vueComponentModels,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
