<template>
  <div class="vehicle">
    <img
      class="vehicle__image"
      src="~/assets/images/png/helicopter.png"
      alt="vehicle__image"
    />
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

      <div class="rentNowWrapper">
        <div class="rentNow">
          <div>
            <span class="rentNow__for">Rent for</span>
            <span class="rentNow__price">164 $/h</span>
          </div>
          <button class="rentNow__button">Rent now</button>
        </div>
      </div>

      <div class="gradientBox"></div>
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
  display: flex;
  margin-top: 40px;

  &__image {
    border-radius: 24px;
  }
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
  display: flex;
  margin-top: 28px;
  max-width: 536px;
  width: 100%;
  height: 80px;
  background-color: var(--c-athens-gray);
  border-radius: 16px;
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

.gradientBox {
  display: none;
}

@media (max-width: 1350px) {
  .vehicle {
    &__image {
      height: 500px;
    }
  }
}

@media (max-width: 1120px) {
  .vehicle {
    flex-direction: column;

    &__image {
      align-self: center;
    }

    .rentNow {
      max-width: 1000px;
      width: 100%;
    }
  }

  .info {
    margin: 0 30px;
  }
}

@media (max-width: 550px) {
  .vehicle {
    margin-top: 8px;
    padding: 0 16px 32px 16px;

    &__image {
      border-radius: 16px;
      max-width: 343px;
      min-width: 343px;
      width: 100%;
      max-height: 332px;
    }
  }

  .info {
    margin-left: 0;
    margin-right: 0;

    &__title {
      margin-top: 18px;
      font-size: 24px;
    }
  }

  .nav {
    margin-top: 16px;
    width: 100%;
    justify-content: flex-start;
  }

  .link {
    margin-right: 13px;
  }

  .gradientBox {
    z-index: 1;
    display: block;
    width: 100%;
    position: fixed;
    bottom: 100px;
    height: 34px;
    background: linear-gradient(
      180deg,
      rgba(252, 252, 252, 0) 0%,
      var(--c-alabaster) 100%
    );
  }

  .rentNowWrapper {
    z-index: 2;
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    width: 93%;
    background-color: var(--c-white);
    padding-bottom: 32px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
  }

  .rentNow {
    margin-top: 0;
    max-width: 536px;
    width: 100%;
    padding: 12px 24px;

    &__for {
      font-size: 16px;
    }

    &__price {
      font-size: 16px;
    }

    &__button {
      font-size: 14px;
      width: 111px;
      height: 44px;
    }
  }
}
</style>
