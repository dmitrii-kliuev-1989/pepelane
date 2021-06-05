import { getVehicles } from 'assets/api/api/request'
import {
  ACTION_TYPES,
  darkTheme,
  defaultVehicleType,
  lightTheme,
} from '~/constants'

export const state = () => ({
  vehicles: [],
  vehicleTypes: [],
  selectedVehicleType: defaultVehicleType,
  theme: lightTheme,
  showModal: false,
})

export const getters = {
  getVehicle: (state) => (id) => {
    const { vehicles } = state

    return vehicles.find((c) => c.id === id)
  },
}

export const mutations = {
  initState(state, newVehicles) {
    state.vehicles = newVehicles
  },
  initVehicleTypes(state, newVehicles) {
    const { vehicleTypes } = state
    vehicleTypes.push(...new Set(newVehicles.map((c) => c.type)))
  },
  setSelectedVehicleType(state, newType) {
    state.selectedVehicleType = newType
  },
  toggleTheme(state) {
    state.theme =
      state.theme === lightTheme
        ? (state.theme = darkTheme)
        : (state.theme = lightTheme)
  },
  setShowModal(state, value) {
    state.showModal = value
  },
}

export const actions = {
  async [ACTION_TYPES.INIT_STATE]({ commit }) {
    const newVehicles = await getVehicles()
    commit('initState', newVehicles)
    commit('initVehicleTypes', newVehicles)
  },
}
