<template>
  <div class="header">
    <NuxtLink to="/">
      <div class="logo">
        <img src="~/assets/images/svg/Logo.svg" alt="logo" />
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
      <div class="person__text">Bessie Cooper</div>
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
  margin: auto 0 auto 273px;
  display: flex;
}

.nightMod__image {
}

.nightMod__text {
  margin: 0 0 0 16px;
  font-family: var(--f-reg);
  color: var(--c-slate-gray);
  white-space: nowrap;
}

.messagesImage {
  margin-left: 105px;
}

.bellImage {
  margin-left: 24px;
}

.person {
  display: flex;
}

.person__text {
  margin-left: 47px;
  align-self: center;
  white-space: nowrap;
  font-family: var(--f-bold);
}

.person__image {
  margin-left: 16px;
  border-radius: 50%;
}
</style>
