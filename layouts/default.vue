<template>
  <div class="mainWrapper" :class="theme">
    <div class="main">
      <Header />
      <Nuxt />
    </div>
    <Modal v-show="showModal" />
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { ACTION_TYPES } from '~/constants'

export default Vue.extend({
  computed: {
    ...mapState('vehicle', {
      theme: (state) => state.theme,
      showModal: (state) => state.showModal,
    }),
  },
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

.blurred {
  filter: blur(32px);
}

.mainWrapper.light {
  background-color: var(--c-alabaster);
}

.mainWrapper.dark {
  background-color: var(--c-midnight);
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
