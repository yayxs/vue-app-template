import { getBannerApi } from '@/api/home'

const state = {
  bannerList: [],
}
const mutations = {
  setBannerList(state, payload) {
    state.bannerList = payload
  },
}
const actions = {
  async getHomeBannerAction({ commit }) {
    const {
      data: { result },
    } = await getBannerApi()
    commit('setBannerList', result)
  },
}

export default { state, mutations, actions }
