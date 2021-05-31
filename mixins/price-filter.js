const priceFilterMixin = {
  filters: {
    priceFilter(value) {
      const ret = []
      const chars = String(value).split('').reverse()

      for (let i = 1; i <= chars.length; i++) {
        ret.push(chars[i - 1])
        if (i % 3 === 0 && i !== chars.length) {
          ret.push(' ')
        }
      }

      return `${ret.reverse().join('')}`
    },
  },
}

export default priceFilterMixin
