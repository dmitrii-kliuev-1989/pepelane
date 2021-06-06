<template>
  <div class="spec">
    <span class="spec__text" :class="theme.text">{{ specificationsText }}</span>
    <h2 class="spec__featuresTitle" :class="theme.title">Features:</h2>
    <div class="features">
      <div class="feature">
        <div class="feature__imageWrapper" :class="theme.block2">
          <img
            class="feature__image"
            src="~/assets/images/svg/cup.svg"
            alt="cup"
          />
        </div>
        <div class="feature__info">
          <h3 class="feature__title" :class="theme.title">
            A challenge for a true champion
          </h3>
          <span class="feature__text" :class="theme.text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            amet sint. Velit officia consequat duis enim velit mollit.
          </span>
        </div>
      </div>
      <div class="feature">
        <div class="feature__imageWrapper" :class="theme.block2">
          <img
            class="feature__image"
            src="~/assets/images/svg/face.svg"
            alt="face"
          />
        </div>
        <div class="feature__info">
          <h3 class="feature__title" :class="theme.title">
            Pilot's sweaty hands
          </h3>
          <span class="feature__text" :class="theme.text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            amet sint. Velit officia consequat duis enim velit mollit.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Specifications',
  computed: {
    ...mapGetters('vehicle', {
      getVehicle: 'getVehicle',
    }),
    ...mapState('vehicle', {
      theme: (state) => state.theme,
    }),
    specificationsText() {
      return this.currentVehicle()?.specifications_text
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
.spec {
  padding-top: 32px;

  &__text {
    font-family: var(--f-reg);
    font-size: 14px;
    line-height: 20px;
  }

  &__featuresTitle {
    margin-top: 27px;
    font-family: var(--f-bold);
    font-size: 24px;
  }
}

.features {
  margin-top: 29px;
  display: flex;
  flex-direction: column;
}

.feature {
  display: flex;
  margin-bottom: 9px;

  &__imageWrapper {
    border-radius: 16px;
    min-width: 80px;
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__info {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
  }

  &__title {
    margin-top: 14px;
    font-family: var(--f-bold);
    font-size: 16px;
  }

  &__text {
    margin-top: 11px;
    font-family: var(--f-reg);
    line-height: 20px;
    font-size: 14px;
  }
}

@media (max-width: 550px) {
  .spec {
    padding-top: 17px;

    &__featuresTitle {
      font-size: 20px;
      margin-top: 22px;
    }
  }

  .features {
    margin-top: 24px;
    padding-bottom: 130px;
  }

  .feature {
    &__imageWrapper {
      box-sizing: border-box;
      min-width: 64px;
      max-height: 80px;
    }

    &__image {
      width: 24px;
      height: 24px;
    }

    &__title {
      margin-top: 6px;
    }

    &__info {
      margin-left: 10px;
    }
  }
}
</style>
