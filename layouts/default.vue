<template>
  <div class="mainWrapper" :class="theme">
    <div class="main">
      <Header />
      <Nuxt />
    </div>
    <div v-if="showModal" class="modalBackground" :class="theme"></div>
    <div v-if="showModal" class="addNewVehicle">
      <div class="titleWrapper">
        <h1 class="title">Add new vehicle</h1>
        <button class="btnClose" @click="closeModal">
          <img
            class="btnClose__image"
            src="~assets/images/svg/cross-x.svg"
            alt=""
          />
        </button>
      </div>
      <form class="newVehicleForm">
        <div class="loadImage">
          <div class="loadImage__iconWrapper">
            <img src="~assets/images/svg/load-image.svg" alt="" />
          </div>
        </div>
        <input name="name" type="text" placeholder="Name" />
        <input name="description" type="text" placeholder="Description" />
        <div class="rentPriceWrapper">
          <input name="rentPrice" type="text" placeholder="Rent price" />
          <span class="dollar">$/h</span>
        </div>
        <button type="submit">Complete</button>
      </form>
    </div>
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
  methods: {
    closeModal() {
      this.$store.commit('vehicle/setShowModal', false)

      const mainWrapper = document.querySelector('.main')
      mainWrapper.classList.toggle('blurred', false)
      document.body.style.overflow = 'visible'
    },
  },
})
</script>

<style scoped>
.addNewVehicle {
  position: fixed;
  height: 100vh;
  max-width: 600px;
  width: 100%;
  background-color: var(--c-alabaster);
  top: 0;
  right: 0;
  border-top-left-radius: 48px;
  border-bottom-left-radius: 48px;
  padding: 64px 72px;
  display: flex;
  flex-direction: column;
}

.modalBackground {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;

  &.dark {
    background-color: var(--c-blue-charcoal);
  }

  &.light {
    background-color: var(--c-san-juan);
  }
}

.addNewVehicle {
  & .titleWrapper {
    display: flex;
    justify-content: space-between;
  }

  & .title {
    color: var(--c-midnight);
    font-family: var(--f-bold);
    font-size: 40px;
    margin: 0;
  }

  & .btnClose {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background-color: var(--c-athens-gray);
    border: none;
    border-radius: 16px;

    &:hover {
      background-color: var(--c-silver-sand);
    }
  }
}

.newVehicleForm {
  display: flex;
  flex-direction: column;
  align-items: center;

  & input {
    margin-top: 24px;
    border: none;
    height: 56px;
    width: 100%;
    background-color: var(--c-athens-gray);
    border-radius: 12px;
    padding-left: 24px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-family: var(--f-reg);
      color: var(--c-slate-gray);
      font-size: 14px;
    }
  }

  & button {
    margin-top: 40px;
    height: 56px;
    width: 100%;
    font-family: var(--f-bold);
    font-size: 16px;
    border: none;
    border-radius: 12px;
    color: var(--c-alabaster);
    background-color: var(--c-dodger-blue);

    &:hover {
      background-color: var(--c-blue);
      cursor: pointer;
    }
  }

  & .rentPriceWrapper {
    position: relative;
    width: 100%;
  }

  & .dollar {
    position: absolute;
    right: 23px;
    top: 42px;
    font-family: var(--f-reg);
    color: var(--c-gull-gray);
    font-size: 16px;
  }
}

.loadImage {
  margin-top: 40px;
  width: 100%;
  height: 348px;
  background-color: var(--c-athens-gray);
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__iconWrapper {
    width: 48px;
    height: 48px;
    background-color: var(--c-alabaster);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 610px) {
  .addNewVehicle {
    border-radius: 24px 24px 0 0;
    height: 653px;
    top: auto;
    bottom: 0;
    padding: 32px 16px;

    & .title {
      font-size: 24px;
    }

    & .btnClose {
      width: 32px;
      height: 32px;
      border-radius: 8px;

      &__image {
        width: 20px;
        height: 20px;
      }
    }
  }

  .loadImage {
    margin-top: 24px;
    height: 260px;
    width: 343px;
  }

  .newVehicleForm {
    display: flex;
    flex-direction: column;
    align-items: center;

    & input {
      margin-top: 16px;
      height: 52px;
    }

    & button {
      margin-top: 24px;
      height: 52px;
    }
  }
}
</style>

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
