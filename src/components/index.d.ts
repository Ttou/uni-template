declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Welcome: (typeof import('./Welcome/Welcome.vue'))['default']
  }
}

export {}
