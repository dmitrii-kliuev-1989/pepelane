<template>
  <div class="vehicle">
    <img src="~/assets/images/png/helicopter.png" alt="helicopter" />
    <div class="info">
      <h1 class="info__title">XR-74 «Cooper»</h1>
      <div class="nav">
        <NuxtLink
          class="link"
          active-class="link_active"
          to="/vehicle/specifications"
        >
          Specifications
        </NuxtLink>
        <NuxtLink class="link" active-class="link_active" to="/vehicle/team">
          Team
        </NuxtLink>
        <NuxtLink
          class="link"
          active-class="link_active"
          to="/vehicle/rent-terms"
        >
          Rent terms
        </NuxtLink>
      </div>

      <div class="childContent">
        <NuxtChild />
      </div>

      <div class="rentNow">
        <div>
          <span class="rentNow__for">Rent for</span>
          <span class="rentNow__price">164 $/h</span>
        </div>
        <button class="rentNow__button">Rent now</button>
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

  &__title {
    font-family: var(--f-bold);
    margin-top: 54px;
    font-size: 40px;
    color: var(--c-midnight);
  }
}

.nav {
  margin-top: 33px;
  display: flex;
  justify-content: space-between;
  width: 300px;
}

.childContent {
  height: 400px;
}

.link {
  font-family: var(--f-bold);
  color: var(--c-slate-gray);
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;

  &_active {
    color: var(--c-dodger-blue);
  }

  &:hover {
    text-decoration: underline;
  }
}

.rentNow {
  margin-top: 28px;
  width: 536px;
  height: 80px;
  background-color: var(--c-athens-gray);
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;

  &__for {
    color: var(--c-midnight);
    font-family: var(--f-bold);
    font-size: 20px;
  }

  &__price {
    color: var(--c-brilliant-rose);
    font-family: var(--f-bold);
    font-size: 20px;
  }

  &__button {
    font-family: var(--f-bold);
    background-color: var(--c-dodger-blue);
    color: var(--c-alabaster);
    border: none;
    border-radius: 12px;
    height: 48px;
    width: 136px;
    cursor: pointer;
  }
}
</style>
