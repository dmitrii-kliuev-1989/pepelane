<template>
  <div class="header">
    <NuxtLink to="/">
      <div class="logo">
        <img class="logo__img" :src="logoPath" alt="logo" />
        <img class="pepelane__img" :src="pepelaneImgPath" alt="Pepelane" />
      </div>
    </NuxtLink>
    <div class="sharing" :class="theme.text">
      World's first affordable airsharing
    </div>
    <div class="mod" @click="toggleTheme">
      <img class="mod__image" :src="modeImagePath" alt="mod" />
      <span class="mod__text" :class="theme.text">{{ modText }}</span>
    </div>
    <img
      class="messagesImage"
      src="~/assets/images/svg/messages.svg"
      alt="messages"
    />
    <img class="bellImage" src="~/assets/images/svg/bell.svg" alt="bell" />
    <div class="person">
      <div class="person__name" :class="theme.title">Bessie Cooper</div>
      <img
        class="person__image"
        src="~/assets/images/png/person.png"
        alt="person"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { lightTheme } from '~/constants/theme'

export default Vue.extend({
  name: 'Header',
  computed: {
    ...mapState('vehicle', {
      theme: (state) => state.theme,
    }),
    logoPath() {
      return this.theme.name === lightTheme.name
        ? require('~/assets/images/svg/Logo-light-theme.svg')
        : require('~/assets/images/svg/Logo-dark-theme.svg')
    },
    pepelaneImgPath() {
      return this.theme.name === lightTheme.name
        ? require('../assets/images/svg/Pepelane-light-theme.svg')
        : require('../assets/images/svg/Pepelane-dark-theme.svg')
    },
    modeImagePath() {
      return this.theme.name === lightTheme.name
        ? require('../assets/images/svg/night-mod.svg')
        : require('../assets/images/svg/day-mode.svg')
    },
    modText() {
      return this.theme.name === lightTheme.name ? 'Night mod' : 'Day mod'
    },
  },
  methods: {
    toggleTheme() {
      this.$store.commit('vehicle/toggleTheme')
    },
  },
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.logo {
  margin-top: 4px;
  display: flex;
  user-select: none;
}

.pepelane__img {
  padding: 0 0 0 18px;
}

.sharing {
  font-family: var(--f-reg);
  margin: auto 0 auto 65px;
  white-space: nowrap;
}

.mod {
  margin: auto 0 auto auto;
  display: flex;
  align-items: center;
  width: 121px;
  user-select: none;
  cursor: pointer;

  &__image {
    transform: scale(1);
    transition-duration: 0.3s;
  }

  &__text {
    margin: 0 0 0 16px;
    font-family: var(--f-reg);
    white-space: nowrap;
  }
}

.mod:hover .mod__image {
  transform: scale(1.3);
  transition-duration: 0.3s;
}

.messagesImage {
  margin: auto 0 auto 105px;
  user-select: none;
  cursor: pointer;
  transform: scale(1);
  transition-duration: 0.3s;

  &:hover {
    transform: scale(1.3);
    transition-duration: 0.3s;
  }
}

.bellImage {
  margin: auto 0 auto 24px;
  user-select: none;
  cursor: pointer;
  transform: scale(1);
  transition-duration: 0.3s;

  &:hover {
    transform: scale(1.3);
    transition-duration: 0.3s;
  }
}

.person {
  display: flex;
  user-select: none;

  &__name {
    margin-left: 47px;
    align-self: center;
    white-space: nowrap;
    font-family: var(--f-bold);
  }

  &__image {
    margin-left: 16px;
    border-radius: 50%;
  }
}

@media (max-width: 1240px) {
  .sharing {
    display: none;
  }
}

@media (max-width: 920px) {
  .mod {
    width: auto;

    &__text {
      display: none;
    }
  }

  .messagesImage,
  .bellImage {
    margin-left: 16px;
  }
}

@media (max-width: 700px) {
  .header {
    padding: 12px 16px;
  }

  .logo {
    margin: 0;

    &__img {
      width: 32px;
      height: 32px;
    }
  }

  .pepelane__img {
    margin: 9px 0 0 12px;
    padding: 0;
    height: 14px;
    width: 67px;
  }

  .messagesImage,
  .bellImage {
    width: 20px;
    height: 20px;
    margin-top: 6px;
  }

  .mod__image {
    height: 18px;
    margin: 0;
  }

  .person {
    &__name {
      display: none;
    }

    &__image {
      margin: auto 0 0 25px;
      width: 32px;
      height: 32px;
    }
  }
}
</style>
