import { getVehicles } from 'assets/api/api/request'
import { ACTION_TYPES, defaultVehicleType } from '~/constants'
import { darkTheme, lightTheme } from '~/constants/theme'

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
  addNewVehicle(state, newVehicle) {
    state.vehicles.push(newVehicle)
    fnInitVehicleTypes(state, state.vehicles)
  },
  initVehicleTypes(state, vehicles) {
    fnInitVehicleTypes(state, vehicles)
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

function fnInitVehicleTypes(state, vehicles) {
  state.vehicleTypes = []
  state.vehicleTypes.push(...new Set(vehicles.map((c) => c.type)))
}
