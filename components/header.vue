<template>
  <div class="header">
    <NuxtLink to="/">
      <div class="logo">
        <img class="logo__img" src="~/assets/images/svg/Logo.svg" alt="logo" />
        <img
          class="pepelane__img"
          src="~/assets/images/svg/Pepelane.svg"
          alt="Pepelane"
        />
      </div>
    </NuxtLink>
    <div class="sharing">World's first affordable airsharing</div>
    <div class="nightMod">
      <img
        class="nightMod__image"
        src="~/assets/images/svg/night-mod.svg"
        alt="night-mod"
      />
      <span class="nightMod__text">Night mod</span>
    </div>
    <img
      class="messagesImage"
      src="~/assets/images/svg/messages.svg"
      alt="messages"
    />
    <img class="bellImage" src="~/assets/images/svg/bell.svg" alt="bell" />
    <div class="person">
      <div class="person__name">Bessie Cooper</div>
      <img
        class="person__image"
        src="~/assets/images/png/person.png"
        alt="person"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.logo {
  margin-top: 4px;
  display: flex;
}

.pepelane__img {
  padding: 0 0 0 18px;
}

.sharing {
  font-family: var(--f-reg);
  color: var(--c-slate-gray);
  margin: auto 0 auto 65px;
  white-space: nowrap;
}

.nightMod {
  margin: auto 0 auto auto;
  display: flex;

  &__text {
    margin: 0 0 0 16px;
    font-family: var(--f-reg);
    color: var(--c-slate-gray);
    white-space: nowrap;
  }
}

.messagesImage {
  margin-left: 105px;
}

.bellImage {
  margin-left: 24px;
}

.person {
  display: flex;

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
  .nightMod__text {
    display: none;
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

  .nightMod__image {
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
