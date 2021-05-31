<template>
  <div class="spec">
    <span class="spec__text">{{ specificationsText }}}</span>
    <h2 class="spec__featuresTitle">Features:</h2>
    <div class="features">
      <div class="feature">
        <div class="feature__imageWrapper">
          <img
            class="feature__image"
            src="~/assets/images/svg/cup.svg"
            alt="cup"
          />
        </div>
        <div class="feature__info">
          <h3 class="feature__title">A challenge for a true champion</h3>
          <span class="feature__text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            amet sint. Velit officia consequat duis enim velit mollit.
          </span>
        </div>
      </div>
      <div class="feature">
        <div class="feature__imageWrapper">
          <img
            class="feature__image"
            src="~/assets/images/svg/face.svg"
            alt="face"
          />
        </div>
        <div class="feature__info">
          <h3 class="feature__title">Pilot's sweaty hands</h3>
          <span class="feature__text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            amet sint. Velit officia consequat duis enim velit mollit.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Specifications',
  computed: {
    ...mapGetters('vehicle', {
      getVehicle: 'getVehicle',
    }),
    specificationsText() {
      return this.currentVehicle()?.specifications_text
    },
  },
  methods: {
    currentVehicle() {
      return this.getVehicle(this.$route.params.name)
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
    color: var(--c-slate-gray);
  }

  &__featuresTitle {
    margin-top: 27px;
    font-family: var(--f-bold);
    color: var(--c-midnight);
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
    background-color: var(--c-athens-gray);
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
    color: var(--c-midnight);
    font-size: 16px;
  }

  &__text {
    margin-top: 11px;
    font-family: var(--f-reg);
    color: var(--c-slate-gray);
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
