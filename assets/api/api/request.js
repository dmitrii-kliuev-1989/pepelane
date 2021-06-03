import vehicles from './vehicles.json'

/** Emulate request */
export const getVehicles = () =>
  new Promise((resolve) => {
    resolve(vehicles)
  })
