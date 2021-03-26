<template>
  <div class="login-container">
    <h2>登录</h2>
    <van-form @submit="onSubmit">
      <van-field v-model="userInfo.username" name="用户名" label="用户名" placeholder="用户名" />
      <van-field v-model="userInfo.password" type="password" name="密码" label="密码" placeholder="密码" />
      <van-field v-model="userInfo.code" center clearable label="验证码" placeholder="验证码">
        <template #button>
          <van-image width="80" height="40" :src="userInfo.imgSrc" @click="handleChangeImage" />
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { encrypt } from 'utils/rsaEncrypt'
export default {
  name: 'Login',
  data: function() {
    return {
      userInfo: {
        username: '',
        password: '',
        code: '', // 验证码
        uuid: '', // 随机ID
        imgSrc: ''
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions({
      getCode: 'getCodeUuidAction', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
      login: 'loginAction'
    }),
    init() {
      this.fetchCode()
    },
    fetchCode() {
      this.getCode()
        .then(res => {
          if (res && res.uuid && res.img) {
            const { img, uuid } = res
            this.userInfo.uuid = uuid
            this.userInfo.imgSrc = img
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    onSubmit() {
      this.login({ ...this.userInfo, password: encrypt(this.userInfo.password) }).then(() => {
        this.$router.push({ path: '/home' })
      })
    },
    handleChangeImage() {
      this.fetchCode()
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  width: 100vw;
  @include center();
  flex-direction: column;
  h2 {
    padding: 40px;
    padding-top: 0;
  }
  .van-form {
    width: 90%;
  }
}
</style>
