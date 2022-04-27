<template>
  <!-- 首页 -->
  <div class="main-box"></div>
</template>

<script>
import { userLogin, checkUserInfo } from "@/api/path";
export default {
  data() {
    return {
      openId: this.$route.query.openId || "", //获取openid
      avatar: this.$route.query.avatar || "",
      nickName: this.$route.query.nickname || "",
    };
  },
  created() {
    this.getOpenId();
  },
  methods: {
    //获取openId
    getOpenId() {
      if (this.openId) {
        this.$cookies.set("openId", this.openId);
        this.$cookies.set("avatar", this.avatar);
        this.$cookies.set("nickName", this.nickName);
        this.userLogin();
      } else {
        window.location.href =
          "http://wx.oauth.synconize.com/wechat/oauth/?appId=wxfb99f0fc1ca20ac0&redirectUrl=http://192.168.0.111:8080/";
        // window.location.href =
        //   "http://wx.oauth.synconize.com/wechat/oauth/?appId=wxfb99f0fc1ca20ac0&redirectUrl=http://tf-research.front.synconize.com/";
      }
    },
    // 微信授权登录
    userLogin() {
      console.log(1);
      let data = {
        openId: this.openId,
        avatar: this.avatar,
        nickName: this.nickName,
      };
      console.log(data);
      userLogin(JSON.stringify(data))
        .then((result) => {
          if (result.code == 200) {
            this.$toast({
              type: "success",
              message: "登录成功",
              duration: 1500,
            });
            let data = {
              openId: this.openId,
            };
            checkUserInfo(data).then((result) => {
              this.$router.push("/introduce");
              if (result.data == 1) {
                this.$toast({
                  icon: "like-o",
                  message: "您以参与过此次活动",
                  duration: 2000,
                });
              } else if (result.data == 2) {
                setTimeout(() => {
                  this.$router.push("/introduce");
                }, 1500);
              } else if (result.data == 3) {
                this.$toast({
                  icon: "records",
                  message: "您已完成问答，请完善个人信息",
                  duration: 2000,
                });
                setTimeout(() => {
                  this.$router.push("/userForm");
                }, 1500);
              }
            });
          }
        })
        .catch((err) => {});
    },
  },
};
</script>

<style scoped>
.main-box {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/home-img.png");
  background-size: cover;
}
</style>