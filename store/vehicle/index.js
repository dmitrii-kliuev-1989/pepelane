import { getVehicles } from 'assets/api/api/request'

export const state = () => ({
  vehicles: [],
})

export const ACTION_TYPES = {
  ADD_VEHICLE: 'ADD_VEHICLE',
  INIT_STATE: 'INIT_STATE',
}

export const getters = {
  getVehicle: (state) => (name) => {
    const { vehicles } = state

    return vehicles.find((c) => c.name === name)
  },
  counter(state) {
    const { vehicles } = state
    return vehicles.length
  },
}

export const mutations = {
  initState(state, newVehicles) {
    state.vehicles = newVehicles
  },
}

export const actions = {
  async [ACTION_TYPES.INIT_STATE]({ commit }) {
    const newVehicles = await getVehicles()
    commit('initState', newVehicles)
  },
}
