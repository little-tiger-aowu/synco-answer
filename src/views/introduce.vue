<template>
  <!-- 安全柜介绍 -->
  <div class="introduce-box">
    <!-- 商品图片 -->
    <img class="product-img" src="../assets/images/product.png" alt="" />
    <!-- 商品介绍 -->
    <div class="ladel-box">
      <div>
        赛默飞1500系列生物安全柜，以经典的造型诠释出实验室科学家们心中的渴望；以创新的设计定义超越时代的美好感受。<br />
        全新时尚的水泥灰喷粉涂层外加熏黑的条带，耐看不拍脏<br />
        新一代UI操作面板让客户无需培训即可上手操作且能清晰了解仪器工作状态<br />
        1500系列生物安全柜继承了赛默飞生物安全柜家族的安全优良性能基因<br />
        安全只要交给双风机就好了:<br />
        - 基于双风机的Smartflow Plus,让最危险的前窗气流平衡控制变得游刃有余<br />
        - 基于双风机的DAVe，让安全柜的安全状态让客户一清二楚<br />
        - 基于双风机的设计，让年复一年的维护变成自动简单<br />
        除此之外，还有多项安全功能升级，为科学家们
        <span>保驾护航</span>
      </div>
    </div>
    <!-- 开始答题按钮 -->
    <div @click="startBtn()" class="botton-box">
      <img src="../assets/images/botton.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "introduce",
  data() {
    return {};
  },
  methods: {
    startBtn() {
      this.$router.push("/answer");
    },
  },
};
</script>

<style scoped lang="scss">
.introduce-box {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/page-img.png");
  background-size: cover;
  .product-img {
    margin: 35px 35px 0 35px;
    width: 30%;
    height: 25%;
  }
  .ladel-box {
    background-image: url("../assets/images/label.png");
    background-size: 100% 100%;
    /*position: absolute;*/
    width: 88%;
    /*height: 55vh;*/
    margin: 0 6%;
    top: 30%;
    div {
      margin: 0 28px;
      font-size: 3vw;
      color: #656464;
      letter-spacing: 2px;
      line-height: 2.9vh;
      padding: 25px 0;
      span {
        color: red;
        font-size: 1.5em;
        line-height: 24px;
        font-weight: bold;
      }
    }
  }
  .botton-box {
    /*position: absolute;*/
    /*bottom: 3%;*/
    width: 50%;
    margin: .8vh 32%;
    img {
      width: 80%;
    }
  }
}
</style>