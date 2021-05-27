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
        <span class="specialist__name">Marvin McKinney</span>
        <span class="specialist__role">Pilot assistant</span>
      </div>
      <div class="specialist">
        <img
          class="specialist__image"
          src="~/assets/images/png/mechanic.png"
          alt="mechanic"
        />
        <span class="specialist__name">Savannah Nguyen</span>
        <span class="specialist__role">Mechanic</span>
      </div>
      <div class="specialist">
        <img
          class="specialist__image"
          src="~/assets/images/png/stewardess.png"
          alt="stewardess"
        />
        <span class="specialist__name">Courtney Henry</span>
        <span class="specialist__role">Stewardess</span>
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
    margin-top: 35px;
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
</style>
