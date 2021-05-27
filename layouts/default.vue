<template>
  <div class="main">
    <Header />
    <Nuxt />
  </div>
</template>

<style>
@import 'node_modules/normalize.css';

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
  width: 1440px;
  margin: 0 auto;
  padding: 48px 64px;
}
</style>
