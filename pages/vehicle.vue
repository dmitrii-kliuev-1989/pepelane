<template>
  <div class="vehicle">
    <img src="~/assets/images/png/helicopter.png" alt="helicopter" />
    <div class="info">
      <h1 class="info__title">XR-74 «Cooper»</h1>
      <div class="nav">
        <div class="link">Specifications</div>
        <div class="link">Team</div>
        <div class="link">Rent terms</div>
      </div>
      <div class="specifications">
        <span class="specifications__text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vehicle',
}
</script>

<style scoped>
.vehicle {
  margin-top: 40px;
  display: flex;
}

.info {
  margin-left: 64px;
}

.info__title {
  font-family: var(--f-bold);
  margin-top: 54px;
  font-size: 40px;
  color: var(--c-midnight);
}

.nav {
  display: flex;
  justify-content: space-between;
  width: 300px;
}
</style>
