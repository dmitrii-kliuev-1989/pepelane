import vehicles from './vehicles.json'

/** Emulate request */
export const getVehicles = () =>
  new Promise((resolve) => {
    const delay = parseInt(Math.random() * 1000)
    setTimeout(() => {
      resolve(vehicles)
    }, delay)
  })
