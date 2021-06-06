<template>
  <div class="terms">
    <span class="descriptionPartOne text" :class="theme.text">
      {{ termText }}
    </span>
    <span class="descriptionPartTwo text" :class="theme.text">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </span>

    <h3 class="additionalConditions" :class="theme.title">
      Additional conditions:
    </h3>

    <ul class="conditions text" :class="theme.text">
      <li>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </li>
      <li>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </li>
      <li>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'RentTerms',
  computed: {
    ...mapGetters('vehicle', {
      getVehicle: 'getVehicle',
    }),
    ...mapState('vehicle', {
      theme: (state) => state.theme,
    }),
    termText() {
      return this.currentVehicle()?.term_text
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
.terms {
  padding-top: 32px;
  display: flex;
  flex-direction: column;
}

.text {
  font-family: var(--f-reg);
  font-size: 14px;
  line-height: 20px;
}

.descriptionPartTwo {
  margin-top: 16px;
}

.additionalConditions {
  margin-top: 22px;
}

ul {
  margin-top: 28px;
  list-style: none;
}

ul li {
  margin-bottom: 16px;
  letter-spacing: -0.18px;
}

ul li::before {
  content: '\2022';
  color: var(--c-brilliant-rose);
  font-weight: bold;
  width: 1em;
  margin: 0 13px 0 0;
}

@media (max-width: 550px) {
  .terms {
    padding-top: 18px;
  }

  .descriptionPartOne {
    margin-top: 0;
  }

  ul {
    padding-bottom: 131px;
  }

  .descriptionPartTwo {
    margin-top: 7px;
  }

  .additionalConditions {
    margin-top: 16px;
  }

  ul {
    margin-top: 19px;
  }

  ul li {
    margin-bottom: 8px;
  }

  ul li::before {
    margin: 0 6px 0 0;
  }
}
</style>
