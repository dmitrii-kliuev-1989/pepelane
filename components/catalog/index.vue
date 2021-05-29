<template>
  <div class="catalog">
    <div class="header">
      <span class="rent">
        Rent
        <span class="whatever">whatever</span>
        <img src="~/assets/images/svg/arrow-bottom.svg" alt="arrow-bottom" />
      </span>

      <div class="addNew">
        <span class="addNew__text">Add new</span>
        <div class="addNew__btn">
          <img src="~/assets/images/svg/cross.svg" alt="cross" />
        </div>
      </div>
    </div>
    <div class="items">
      <NuxtLink class="link" to="/vehicle/specifications">
        <div class="item">
          <img
            class="item__image"
            src="~/assets/images/png/items/item1.png"
            alt="item1"
          />
          <div class="item__info">
            <h2 class="item__title">XR-74 «Cooper»</h2>
            <span class="item__description">
              Brief description of the project, in a few lines.
            </span>
            <span class="item__price">1 278 $/h</span>
          </div>
        </div>
      </NuxtLink>
      <div class="item">
        <img
          class="item__image"
          src="~/assets/images/png/items/item2.png"
          alt="item1"
        />
        <div class="item__info">
          <h2 class="item__title">XR-74 «Cooper»</h2>
          <span class="item__description">
            Brief description of the project, in a few lines.
          </span>
          <span class="item__price">164 $/h</span>
        </div>
      </div>
      <div class="item">
        <img
          class="item__image"
          src="~/assets/images/png/items/item3.png"
          alt="item1"
        />
        <div class="item__info">
          <h2 class="item__title">XR-74 «Cooper»</h2>
          <span class="item__description">
            Brief description of the project, in a few lines.
          </span>
          <span class="item__price">164 $/h</span>
        </div>
      </div>
      <div class="item">
        <img
          class="item__image"
          src="~/assets/images/png/items/item3.png"
          alt="item1"
        />
        <div class="item__info">
          <h2 class="item__title">XR-74 «Cooper»</h2>
          <span class="item__description">
            Brief description of the project, in a few lines.
          </span>
          <span class="item__price">164 $/h</span>
        </div>
      </div>
      <div class="item">
        <img
          class="item__image"
          src="~/assets/images/png/items/item4.png"
          alt="item1"
        />
        <div class="item__info">
          <h2 class="item__title">XR-74 «Cooper»</h2>
          <span class="item__description">
            Brief description of the project, in a few lines.
          </span>
          <span class="item__price">164 $/h</span>
        </div>
      </div>
      <div class="item">
        <img
          class="item__image"
          src="~/assets/images/png/items/item1.png"
          alt="item1"
        />
        <div class="item__info">
          <h2 class="item__title">XR-74 «Cooper»</h2>
          <span class="item__description">
            Brief description of the project, in a few lines.
          </span>
          <span class="item__price">1 278 $/h</span>
        </div>
      </div>
      <div class="item">
        <img
          class="item__image"
          src="~/assets/images/png/items/item2.png"
          alt="item1"
        />
        <div class="item__info">
          <h2 class="item__title">XR-74 «Cooper»</h2>
          <span class="item__description">
            Brief description of the project, in a few lines.
          </span>
          <span class="item__price">164 $/h</span>
        </div>
      </div>
      <div class="item">
        <img
          class="item__image"
          src="~/assets/images/png/items/item5.png"
          alt="item1"
        />
        <div class="item__info">
          <h2 class="item__title">XR-74 «Cooper»</h2>
          <span class="item__description">
            Brief description of the project, in a few lines.
          </span>
          <span class="item__price">164 $/h</span>
        </div>
      </div>
      <div class="item">
        <img
          class="item__image"
          src="~/assets/images/png/items/item4.png"
          alt="item1"
        />
        <div class="item__info">
          <h2 class="item__title">XR-74 «Cooper»</h2>
          <span class="item__description">
            Brief description of the project, in a few lines.
          </span>
          <span class="item__price">164 $/h</span>
        </div>
      </div>
      <div class="item">
        <img
          class="item__image"
          src="~/assets/images/png/items/item2.png"
          alt="item1"
        />
        <div class="item__info">
          <h2 class="item__title">XR-74 «Cooper»</h2>
          <span class="item__description">
            Brief description of the project, in a few lines.
          </span>
          <span class="item__price">164 $/h</span>
        </div>
      </div>
      <div class="item">
        <img
          class="item__image"
          src="~/assets/images/png/items/item5.png"
          alt="item1"
        />
        <div class="item__info">
          <h2 class="item__title">XR-74 «Cooper»</h2>
          <span class="item__description">
            Brief description of the project, in a few lines.
          </span>
          <span class="item__price">164 $/h</span>
        </div>
      </div>
      <div class="item">
        <img
          class="item__image"
          src="~/assets/images/png/items/item4.png"
          alt="item1"
        />
        <div class="item__info">
          <h2 class="item__title">XR-74 «Cooper»</h2>
          <span class="item__description">
            Brief description of the project, in a few lines.
          </span>
          <span class="item__price">164 $/h</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Catalog',
}
</script>

<style scoped>
.catalog {
  background-color: var(--c-athens-gray);
  width: 100%;
  border-radius: 48px;
  margin-top: 40px;
  padding: 56px 64px;
}

.header {
  display: flex;
  justify-content: space-between;
}

.rent {
  font-family: var(--f-bold);
  color: var(--c-midnight);
  font-size: 40px;
}

.whatever {
  color: var(--c-dodger-blue);
}

.addNew {
  display: flex;
  align-items: center;

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

.items {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(373px, 1fr));
  grid-gap: 32px;
}

.item {
  display: flex;
  background-color: var(--c-white);
  height: 164px;
  border-radius: 32px;
  padding: 24px 32px;
  border: 1px solid var(--c-white);

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
    color: var(--c-midnight);
    font-family: var(--f-bold);
    font-size: 14px;
  }

  &__description {
    font-family: var(--f-reg);
    margin-top: 12px;
    color: var(--c-slate-gray);
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
  border: 1px solid var(--c-slate-gray);
}

@media (max-width: 1439px) {
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

  .whatever {
    margin-left: 5px;
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
