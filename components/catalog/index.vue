<template>
  <div class="catalog" :class="theme.block2">
    <div class="header">
      <div class="rentWhatever">
        <span class="rent" :class="theme.title">Rent</span>
        <select
          v-model="selected"
          class="typeSelector"
          :class="theme.select"
          @change="setSelectedVehicleType"
        >
          <option selected>{{ whatever }}</option>
          <option v-for="(type, index) of vehicleTypes" :key="index">
            {{ type }}
          </option>
        </select>
      </div>

      <div class="addNew" @click="openModal">
        <span class="addNew__text">Add new</span>
        <div class="addNew__btn">
          <img src="~/assets/images/svg/cross.svg" alt="cross" />
        </div>
      </div>
    </div>
    <div class="items">
      <NuxtLink
        v-for="vehicle in filteredVehicles"
        :key="vehicle.id"
        class="link"
        :to="`/vehicle/${vehicle.id}/specifications`"
      >
        <div class="item" :class="theme.block">
          <img class="item__image" :src="vehicle.preview" alt="item1" />
          <div class="item__info">
            <h2 class="item__title" :class="theme.title">{{ vehicle.name }}</h2>
            <span class="item__description" :class="theme.text">
              {{ vehicle.description }}
            </span>
            <span class="item__price">
              {{ vehicle.rent | priceFilter }} $/h
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import priceFilterMixin from '@/mixins/price-filter.js'
import { defaultVehicleType } from '~/constants'

export default Vue.extend({
  name: 'Catalog',
  mixins: [priceFilterMixin],
  data() {
    return {
      selected: '',
    }
  },
  computed: {
    ...mapState('vehicle', {
      vehicles: (state) => state.vehicles,
      vehicleTypes: (state) => state.vehicleTypes,
      selectedVehicleType: (state) => state.selectedVehicleType,
      theme: (state) => state.theme,
      showModal: (state) => state.showModal,
    }),
    filteredVehicles() {
      return this.selected === defaultVehicleType
        ? this.vehicles
        : this.vehicles.filter((c) => c.type === this.selected)
    },
    whatever() {
      return defaultVehicleType
    },
  },
  mounted() {
    this.selected = this.selectedVehicleType
  },
  methods: {
    setSelectedVehicleType() {
      this.$store.commit('vehicle/setSelectedVehicleType', this.selected)
    },
    openModal() {
      this.$store.commit('vehicle/setShowModal', true)
      const mainWrapper = document.querySelector('.main')

      mainWrapper.classList.toggle('blurred', true)
      document.body.style.overflow = 'hidden'
    },
  },
})
</script>

<style scoped>
.catalog {
  width: 100%;
  border-radius: 48px;
  margin-top: 40px;
  padding: 56px 64px;
}

.header {
  display: flex;
  justify-content: space-between;
}

.rentWhatever {
  display: flex;
  align-items: center;
  user-select: none;
}

.rent {
  font-family: var(--f-bold);
  font-size: 40px;
}

.typeSelector {
  border: none;
  font-family: var(--f-bold);
  font-size: 40px;
  color: var(--c-dodger-blue);
  appearance: none;
  width: 240px;
  outline: none;
  margin-left: 5px;
  cursor: pointer;
}

.addNew {
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;

  &__text {
    font-family: var(--f-bold);
    color: var(--c-dodger-blue);
    font-size: 20px;
  }

  &__btn {
    margin-left: 20px;
    background-color: var(--c-dodger-blue);
    color: var(--c-alabaster);
    border-radius: 16px;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.addNew:hover .addNew__btn {
  background-color: var(--c-blue);
}

.addNew:hover .addNew__text {
  color: var(--c-blue);
}

.items {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(373px, 1fr));
  grid-gap: 32px;
}

.item {
  display: flex;
  height: 164px;
  border-radius: 32px;
  padding: 24px 32px;
  border: 1px solid transparent;

  &__image {
    height: 88px;
    border-radius: 24px;
  }

  &__info {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
  }

  &__title {
    margin-top: 16px;
    font-family: var(--f-bold);
    font-size: 14px;
  }

  &__description {
    font-family: var(--f-reg);
    margin-top: 12px;
    font-size: 12px;
    line-height: 18px;
  }

  &__price {
    margin-top: 16px;
    color: var(--c-brilliant-rose);
    font-family: var(--f-bold);
    font-size: 14px;
  }
}

.link {
  text-decoration: none;
}

.link:hover .item {
  border: 1px solid var(--c-silver-sand);
}

@media (max-width: 1455px) {
  .catalog {
    padding: 24px 16px;
    margin-top: 8px;
    border-radius: 24px;
  }

  .rent {
    font-size: 22px;
    display: flex;
    margin-top: 3px;
  }

  .typeSelector {
    font-size: 22px;
    display: flex;
    background-position-y: 2px;
    appearance: none;
    width: 150px;
  }

  .addNew {
    &__btn {
      margin: 0 0 0 12px;
      width: 32px;
      height: 32px;
      border-radius: 8px;
    }

    &__text {
      font-size: 16px;
      white-space: nowrap;
    }
  }

  .items {
    margin-top: 19px;
    grid-template-columns: repeat(auto-fill, minmax(343px, 1fr));
    grid-gap: 12px;
  }

  .item {
    height: 151px;
    border-radius: 24px;
    padding: 24px 19px;
    box-sizing: border-box;

    &__image {
      border-radius: 16px;
    }

    &__info {
      margin-left: 20px;
    }

    &__title {
      font-size: 16px;
      margin-top: 9px;
    }
  }
}
</style>
