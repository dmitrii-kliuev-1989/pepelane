<template>
  <div class="team">
    <span class="team__description">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    </span>
    <h2 class="team__title">Qualified specialists</h2>
    <div class="specialists">
      <div class="specialist">
        <img
          class="specialist__image"
          src="~/assets/images/png/pilot-assistant.png"
          alt="pilot-assistant"
        />
        <div class="specialist__info">
          <span class="specialist__name">Marvin McKinney</span>
          <span class="specialist__role">Pilot assistant</span>
        </div>
      </div>
      <div class="specialist">
        <img
          class="specialist__image"
          src="~/assets/images/png/mechanic.png"
          alt="mechanic"
        />
        <div class="specialist__info">
          <span class="specialist__name">Savannah Nguyen</span>
          <span class="specialist__role">Mechanic</span>
        </div>
      </div>
      <div class="specialist">
        <img
          class="specialist__image"
          src="~/assets/images/png/stewardess.png"
          alt="stewardess"
        />
        <div class="specialist__info">
          <span class="specialist__name">Courtney Henry</span>
          <span class="specialist__role">Stewardess</span>
        </div>
      </div>
    </div>
    <span class="specialists__description">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </span>
  </div>
</template>

<script>
export default {
  name: 'Team',
}
</script>

<style scoped>
.team {
  display: flex;
  flex-direction: column;

  &__description {
    margin-top: 32px;
    font-family: var(--f-reg);
    color: var(--c-slate-gray);
    font-size: 14px;
    line-height: 20px;
  }

  &__title {
    margin-top: 32px;
    font-family: var(--f-bold);
    color: var(--c-midnight);
  }
}

.specialists {
  margin-top: 29px;
  display: flex;

  &__description {
    margin-top: 19px;
    font-family: var(--f-reg);
    color: var(--c-slate-gray);
    font-size: 14px;
    line-height: 20px;
  }
}

.specialist {
  display: flex;
  flex-direction: column;
  margin-right: 25px;

  &__info {
    display: flex;
    flex-direction: column;
  }

  &:last-child {
    margin-right: 0;
  }

  &__name {
    margin-top: 13px;
    font-family: var(--f-bold);
    color: var(--c-midnight);
    font-size: 16px;
  }

  &__role {
    margin-top: 8px;
    color: var(--c-slate-gray);
    font-family: var(--f-reg);
    font-size: 12px;
  }
}

@media (max-width: 800px) {
  .team {
    padding-bottom: 139px;
  }

  .specialists {
    flex-direction: column;
    margin-top: 24px;
    margin-left: 1px;
  }

  .specialist {
    margin-bottom: 12px;
    flex-direction: row;

    &__image {
      width: 132px;
      height: 80px;
    }

    &__info {
      margin-left: 16px;
    }

    &__name {
      margin-top: 20px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .team {
    &__description {
      margin-top: 17px;
      font-family: var(--f-reg);
      color: var(--c-slate-gray);
      font-size: 14px;
    }

    &__title {
      font-size: 20px;
      margin-top: 22px;
    }
  }
}
</style>
