<template>
  <div class="login-container">
    <section class="login-title">
      <h3>登录</h3>
    </section>
    <section class="main-form">
      <van-form @submit="onSubmit">
        <van-field
          label-width="150px"
          label-align="center"
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          label-width="150px"
          label-align="center"
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <section class="login-btn">
          <van-button loading type="info" loading-text="加载中..." native-type="submit">登录</van-button>
        </section>
      </van-form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      console.log('点击了登录按钮');
    },
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
