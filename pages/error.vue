<template>
  <div class="error">
    <div class="error__msgOne">An error has occurred</div>
    <div class="error__msgTwo">Please refresh the page</div>
    <button class="error__button">Reload page</button>
  </div>
</template>

<script>
export default {
  name: 'Error',
}
</script>

<style scoped>
.error {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--c-athens-gray);
  border-radius: 48px;
  min-height: 100%;
  justify-content: center;

  &__msgOne {
    font-family: var(--f-bold);
    font-size: 40px;
  }

  &__msgTwo {
    margin-top: 24px;
    font-family: var(--f-reg);
    font-size: 14px;
    color: var(--c-slate-gray);
  }

  &__button {
    margin-top: 40px;
    font-family: var(--f-bold);
    color: var(--c-alabaster);
    background-color: var(--c-dodger-blue);
    border: none;
    border-radius: 12px;
    width: 161px;
    height: 48px;
  }
}
</style>
