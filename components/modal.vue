<template>
  <div class="modalBackground">
    <div class="addNewVehicle" :class="theme.block">
      <div class="titleWrapper">
        <h1 class="title" :class="theme.title">Add new vehicle</h1>
        <button class="btnClose" :class="theme.block2" @click="close">
          <img class="btnClose__image" :src="crossImage" alt="" />
        </button>
      </div>
      <div class="newVehicleForm">
        <label for="fileBrowser" class="fileBrowser">
          <div class="loadImage" :class="theme.block2">
            <div class="loadImage__iconWrapper" :class="theme.block">
              <img src="~assets/images/svg/load-image.svg" alt="" />
            </div>
          </div>
          <img class="vehicleImage hide" alt="" />
        </label>
        <input id="fileBrowser" type="file" hidden @change="onFileChange" />
        <input
          v-model="name"
          name="name"
          type="text"
          placeholder="Name"
          :class="[theme.block2, theme.placeholder]"
        />
        <input
          v-model="description"
          name="description"
          type="text"
          placeholder="Description"
          :class="[theme.block2, theme.placeholder]"
        />
        <div class="rentPriceWrapper">
          <input
            v-model="rentPrice"
            name="rentPrice"
            type="number"
            placeholder="Rent price"
            :class="[theme.block2, theme.placeholder]"
          />
          <span class="dollar">$/h</span>
        </div>
        <button @click="addNewVehicle">Complete</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { lightTheme } from '~/constants/theme'

export default Vue.extend({
  name: 'Modal',
  data() {
    return {
      name: '',
      description: '',
      rentPrice: '',
      imagePath: '',
      vehicleImageElement: {},
      loadImageElement: {},
      fileBrowser: {},
      firstLoad: true,
    }
  },
  computed: {
    ...mapState('vehicle', {
      theme: (state) => state.theme,
      showModal: (state) => state.showModal,
    }),
    crossImage() {
      return this.theme.name === lightTheme.name
        ? require('../assets/images/svg/light-theme-cross.svg')
        : require('../assets/images/svg/dark-theme-cross.svg')
    },
  },
  mounted() {
    this.vehicleImageElement = document.querySelector('.vehicleImage')
    this.loadImageElement = document.querySelector('.loadImage')
    this.fileBrowser = document.querySelector('#fileBrowser')
  },
  methods: {
    close() {
      this.$store.commit('vehicle/setShowModal', false)

      const mainWrapper = document.querySelector('.main')
      mainWrapper.classList.toggle('blurred', false)

      document.body.style.overflow = 'visible'
      this.cleanForm()
    },
    addNewVehicle() {
      const base64Image = this.getBase64Image(this.vehicleImageElement)

      const newVehicle = {
        id: `5f2bb90becfae50e20ea1877${+new Date()}`,
        name: this.name,
        type: 'custom',
        description: this.description,
        specifications_text:
          'Ullamco minim eiusmod mollit reprehenderit laborum laborum tempor in incididunt. Officia fugiat sunt et veniam non pariatur do eu excepteur cupidatat ea id. Ut nulla laboris aliquip laboris ad commodo esse quis. Id irure elit amet esse aute aliqua pariatur est Lorem nulla.\n\nAdipisicing aliquip voluptate esse occaecat eiusmod enim do. Labore reprehenderit et ullamco amet do laborum officia fugiat fugiat sit exercitation do velit. Elit ad labore labore non sit officia. Culpa exercitation in consequat in qui veniam exercitation proident mollit anim aliquip. Voluptate laboris commodo adipisicing officia. Excepteur laboris adipisicing aliqua sunt sint dolore.',
        team_text:
          'Nostrud consectetur deserunt ea et dolor ad ad exercitation fugiat labore anim. Aliqua enim enim enim voluptate excepteur aliquip ea reprehenderit. Voluptate sint consequat ipsum et cupidatat nostrud ipsum duis elit amet aliquip. Fugiat enim dolor cillum do officia ea sit nostrud. Excepteur Lorem nulla mollit deserunt nisi culpa minim velit duis nisi laborum. Elit incididunt pariatur ullamco nostrud ut enim voluptate et enim deserunt pariatur proident dolor. Cupidatat cillum duis minim minim voluptate velit.',
        term_text:
          'Magna ut dolore duis labore tempor amet amet adipisicing pariatur. Cupidatat nulla pariatur sunt magna eiusmod ut cillum deserunt nulla esse mollit aute eiusmod do. Enim officia tempor ea anim magna culpa amet id amet laborum quis. Ea aliqua non id deserunt anim amet minim eiusmod. Esse et non elit do nulla minim dolor non amet voluptate et cupidatat. In mollit ipsum dolor minim dolore nostrud veniam. Id est exercitation ad ullamco commodo esse excepteur quis proident.\n\nMollit nostrud quis ex fugiat nostrud ut nostrud elit quis. Aute ipsum reprehenderit mollit laborum. Culpa deserunt duis et do velit anim sint excepteur. Irure reprehenderit magna eu qui minim. Ad laborum occaecat et ut et ipsum. Occaecat aute nostrud in aliqua fugiat deserunt sit ea.\n\nQuis eiusmod commodo laboris magna fugiat aute commodo proident excepteur dolore dolore non. Incididunt anim duis anim eu exercitation pariatur consectetur. Nisi est dolore id adipisicing occaecat enim excepteur. Nisi sit et dolore laboris aute mollit officia in eu.',
        rent: this.rentPrice,
        preview: base64Image,
        image: base64Image,
      }

      this.$store.commit('vehicle/addNewVehicle', newVehicle)

      this.cleanForm()
      this.toggleImage()
      this.close()
    },
    cleanForm() {
      this.name = ''
      this.description = ''
      this.rentPrice = ''

      if (this.vehicleImageElement.src !== '') {
        this.toggleImage()
      }

      this.firstLoad = true
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files[0])
    },
    createImage(file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        this.vehicleImageElement.src = e.target.result
      }
      reader.readAsDataURL(file)

      if (this.firstLoad) {
        this.toggleImage()
        this.firstLoad = false
      }

      this.fileBrowser.value = ''
    },
    toggleImage() {
      this.loadImageElement.classList.toggle('hide')
      this.vehicleImageElement.classList.toggle('hide')
    },
    getBase64Image(img) {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      return canvas.toDataURL('image/png')
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
}

.addNewVehicle {
  & .titleWrapper {
    display: flex;
    justify-content: space-between;
  }

  & .title {
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
    border: none;
    border-radius: 16px;
    cursor: pointer;

    &:hover {
      border: 1px solid var(--c-silver-sand);
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
    border-radius: 12px;
    padding-left: 24px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-family: var(--f-reg);
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

.vehicleImage {
  margin-top: 40px;
  height: 348px;
  border-radius: 24px;
  cursor: pointer;
}

.loadImage {
  margin-top: 40px;
  width: 100%;
  height: 348px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid var(--c-silver-sand);
  }

  &__iconWrapper {
    width: 48px;
    height: 48px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.fileBrowser {
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
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

  .vehicleImage {
    margin-top: 24px;
    height: 260px;
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

.hide {
  display: none;
}
</style>
