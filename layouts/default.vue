<template>
  <div class="mainWrapper">
    <div class="main">
      <Header />
      <Nuxt />
    </div>
  </div>
</template>

<style>
@import 'node_modules/normalize.css';

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
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

.mainWrapper {
  background-color: var(--c-alabaster);
}

.main {
  width: 1440px;
  margin: 0 auto;
  padding: 48px 64px;
}
</style>
