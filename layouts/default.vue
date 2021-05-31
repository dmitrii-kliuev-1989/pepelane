<template>
  <div class="main">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
import { ACTION_TYPES } from '@/store/vehicle'

export default Vue.extend({
  created() {
    this.$store.dispatch(`vehicle/${ACTION_TYPES.INIT_STATE}`)
  },
})
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: var(--c-alabaster);
}

.main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  padding: 48px 64px;
}

@media (max-width: 1230px) {
  .main {
    padding: 20px 24px 48px 24px;
  }
}

@media (max-width: 1000px) {
  .main {
    padding: 20px 10px 48px 10px;
  }
}

@media (max-width: 700px) {
  .main {
    padding: 0;
  }
}
</style>
