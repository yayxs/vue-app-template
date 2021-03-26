import { getCodeImg, login } from 'api/login'
import { getToken, setToken } from 'utils/auth'
const user = {
  state: {
    token: getToken(),
    img: '',
    uuid: '',
    user: {},
    roles: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_UUID: (state, uuid) => {
      state.uuid = uuid
    },
    SET_IMG: (state, img) => {
      state.img = img
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    // 登录
    loginAction({ commit }, { code, username, password, uuid }) {
      return new Promise((resolve, reject) => {
        const params = {
          code,
          username,
          password,
          uuid
        }
        login(params)
          .then(res => {
            const { token, user } = res
            // 保存token
            setToken(token)
            commit('SET_TOKEN', token)
            setUserInfo(commit, user)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    // 获取验证码以及uuid
    getCodeUuidAction({ commit }) {
      return new Promise((resolve, reject) => {
        getCodeImg()
          .then(res => {
            const { img, uuid } = res
            commit('SET_UUID', uuid)
            commit('SET_IMG', img)
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}

export const setUserInfo = (commit, user) => {
  const { roles } = user
  if (roles.length === 0) {
    commit('SET_ROLES', ['ROLE_SYSTEM_DEFAULT'])
  } else {
    commit('SET_ROLES', roles)
  }
  commit('SET_USER', roles.user)
}
export default user
