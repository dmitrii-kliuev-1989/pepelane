import { getVehicles } from 'assets/api/api/request'
import { ACTION_TYPES, defaultVehicleType } from '~/constants'

export const state = () => ({
  vehicles: [],
  vehicleTypes: [],
  selectedVehicleType: defaultVehicleType,
})

export const getters = {
  getVehicle: (state) => (name) => {
    const { vehicles } = state

    return vehicles.find((c) => c.name === name)
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
}

export const actions = {
  async [ACTION_TYPES.INIT_STATE]({ commit }) {
    const newVehicles = await getVehicles()
    commit('initState', newVehicles)
    commit('initVehicleTypes', newVehicles)
  },
}
