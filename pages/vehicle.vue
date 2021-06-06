<template>
  <div class="vehicle">
    <img class="vehicle__image" :src="imgPath" alt="vehicle__image" />
    <div class="info">
      <h1 class="info__title" :class="theme.title">{{ title }}</h1>
      <div class="nav">
        <NuxtLink
          class="link"
          :class="theme.text"
          active-class="link_active"
          :to="`/vehicle/${$route.params.id}/specifications`"
        >
          Specifications
        </NuxtLink>
        <NuxtLink
          class="link"
          :class="theme.text"
          active-class="link_active"
          :to="`/vehicle/${$route.params.id}/team`"
        >
          Team
        </NuxtLink>
        <NuxtLink
          class="link"
          :class="theme.text"
          active-class="link_active"
          :to="`/vehicle/${$route.params.id}/rent-terms`"
        >
          Rent terms
        </NuxtLink>
      </div>

      <div class="childContent">
        <NuxtChild />
      </div>

      <div class="rentNowWrapper" :class="theme.block">
        <div class="rentNow" :class="theme.block2">
          <div>
            <span class="rentNow__for" :class="theme.title">Rent for</span>
            <span class="rentNow__price">{{ rent | priceFilter }} $/h</span>
          </div>
          <button class="rentNow__button">Rent now</button>
        </div>
      </div>

      <div class="gradientBox" :class="theme.gradient"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import priceFilterMixin from '@/mixins/price-filter'

export default {
  name: 'Vehicle',
  mixins: [priceFilterMixin],
  computed: {
    ...mapGetters('vehicle', {
      getVehicle: 'getVehicle',
    }),
    ...mapState('vehicle', {
      theme: (state) => state.theme,
    }),
    id() {
      return this.currentVehicle()?.id
    },
    title() {
      return this.currentVehicle()?.name
    },
    imgPath() {
      return this.currentVehicle()?.image
    },
    rent() {
      return this.currentVehicle()?.rent
    },
  },
  methods: {
    currentVehicle() {
      return this.getVehicle(this.$route.params.id)
    },
  },
}
</script>

<style scoped>
.vehicle {
  display: flex;
  margin-top: 40px;

  &__image {
    border-radius: 24px;
    height: 700px;
    min-width: 700px;
  }
}

.info {
  margin-left: 64px;

  &__title {
    font-family: var(--f-bold);
    margin-top: 54px;
    font-size: 40px;
  }
}

.nav {
  margin-top: 33px;
  display: flex;
  justify-content: space-between;
  width: 300px;
}

.childContent {
  min-height: 400px;
}

.link {
  font-family: var(--f-bold);
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  user-select: none;

  &_active {
    color: var(--c-dodger-blue) !important;
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
  border-radius: 16px;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  user-select: none;

  &__for {
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

    &:hover {
      background-color: var(--c-blue);
    }
  }
}

.gradientBox {
  display: none;
}

@media (max-width: 1350px) {
  .vehicle {
    &__image {
      height: 500px;
      min-width: 500px;
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
  }

  .rentNowWrapper {
    z-index: 2;
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    width: 93%;

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
