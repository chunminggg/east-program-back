<template>
    <div class="box">
        <Card title="登陆">
            <div>
                <Input style="margin-top:10px;" v-model="phoneNumber" placeholder="手机号"></Input>
                <Input style="margin-top:10px;" v-model="password" placeholder="密码" type="password"></Input>
                <Button style="margin-top:10px;" type="primary" @click="loginAction">登陆</Button>
            </div>
        </Card>
    </div>
</template>

<script>
import { userLogin } from "@/plugins/service";
import cookie from 'js-cookie'
export default {
  data() {
    return {
      phoneNumber: "18550786000",
      password: "123456"
    };
  },
  methods: {
    async loginAction() {
      let data = await userLogin(this.phoneNumber, this.password);
      cookie.set('token', data._sessionToken, { expires: 7 })
      this.$router.push('/')
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
