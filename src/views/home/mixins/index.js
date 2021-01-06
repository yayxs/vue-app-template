export default {
  computed: {
    $_homeCategoryMixin_list() {
      let targetList = []
      let ret = {}
      const data = targetList
      const len = targetList.length
      if (len <= 5) {
        ret = {
          prev: data,
          next: [],
        }
      } else if (len > 5 && len <= 10) {
        ret = {
          prev: data.slice(0, 5),
          next: data.slice(5),
        }
      } else {
        const point = Math.ceil(data.length / 2)
      }
    },
  },
}
