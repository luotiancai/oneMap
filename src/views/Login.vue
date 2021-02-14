<template>
  <div class="login">
    <h1>北仑区地理信息数据平台</h1>
    <h2>——————&nbsp;&nbsp;&nbsp;NingBo&nbsp;BeiLun&nbsp;&nbsp;&nbsp;——————</h2>
    <el-alert
      :title= msg
      type="error"
      v-if="error">
    </el-alert>
    <div class="inputContainer">
      <div>登录</div>
      <div class="dl"><img src="../assets/img/login_user.svg" /><input v-model="userName" placeholder="请输入账号" /></div>
      <div class="dl"><img src="../assets/img/login_password.svg" /><input v-model="password" placeholder="请输入密码" /></div>
      <div class="dlBtn" @click="enter"><img src="../assets/img/login_btn.svg" /></div>
    </div>
  </div>
</template>
<script>
import { md5 } from './Login/md5'
import { service } from '../utils/axios'
export default {
  name: 'Login',
  data () {
    return {
      postData: {},
      userName: '',
      password: '',
      msg: '',
      error: false
    }
  },
  methods: {
    enter () {
      this.postData = {
        username: this.userName,
        password: md5(this.password)
      }
      service(
        {
          url: '/user/userlogin',
          method: 'post',
          data: this.postData
        }
      ).then((res) => {
        if (res.data.code == '1') {
          sessionStorage.setItem('LBToken', res.data.data.token)
          sessionStorage.setItem('user', JSON.stringify(res.data.data.userInfo[0]))
          this.$router.push('./index')
        } else {
          this.msg = res.data.msg
          this.error = true
        }
      })
    }
  }

}
</script>
<style lang="scss">
body {
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background: url(../assets/img/login.png) no-repeat center top;
  .login {
    margin-top: 10%;
    width: 600px;
    height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: white;
    h1 {
      font-size: 42px;
      font-weight: bolder;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }
    h2 {
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      margin-bottom: 50px;
    }
    .alert {
      display: none;
    }
    .inputContainer {
      width: 300px;
      height: 250px;
      padding: 30px;
      background: white;
      border-radius: 4px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      color: black;
      font-size: 20px;
    }
    .dl {
      width: 100%;
      height: 42px;
      border: 1px solid #eeeeee;
      border-radius: 4px;
      margin: 30px 0px;
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        margin: 0px 10px;
      }
      input {
        width: 250px;
        border: none;
        color: #6e6e6e;
        font-size: 14px;
        line-height: 28px;
      }
    }
    .dlBtn {
      width: 150px;
      height: 42px;
      border-radius: 21px;
      margin: 0px 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #3f69f4;
      cursor: pointer;
    }
  }
}

</style>>
