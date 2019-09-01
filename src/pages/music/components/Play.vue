<template>
  <div class="play">
    <div class="play-bg">
      <img :src="disc.image">
    </div>
    <div class="top">
        <div class="top-left"><span @click="backAction" class="iconfont icon-arrowLeft"></span></div>
        <div class="top-center">{{disc.name}}</div>
        <div class="top-right"></div>
    </div>
    <div class="middle">
      <div class="player-img"></div>
      <div class="player-lyric"></div>
    </div>
    <div class="play-audio">
      <audio :src="disc.url" autoplay="autoplay">
          您的浏览器不支持 audio 标签。
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'play',
  components: {},
  props: {
    disc: Object
  },
  data () {
    return {}
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    backAction () {
      this.$router.go(-1)
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    if (!this.disc.id) {
      this.$router.go(-1)
    }
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {},
  // 生命周期 - 创建之前
  beforeCreate () {},
  // 生命周期 - 挂载之前
  beforeMount () {},
  // 生命周期 - 更新之前
  beforeUpdate () {},
  // 生命周期 - 更新之后
  updated () {},
  // 生命周期 - 销毁之前
  beforeDestroy () {},
  // 生命周期 - 销毁完成
  destroyed () {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated () {}
}
</script>

<style lang='scss' scoped>
.play{
  background: #fcc;
  position: fixed;
  width: 100%;
  height: 100%;
  .play-bg{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    filter: blur(20px);
  }
  .top{
    background: $base-orange;
    height: px2rem(70);
    color: #fff;
    display: flex;
    .top-left{
      width: px2rem(120);
      height: px2rem(70);
      padding-left: px2rem(10);
      text-align: left;
      .iconfont{
        font-size:px2rem(60);
        line-height:px2rem(70);
      }
    }
    .top-center{
      flex: 1;
      height: px2rem(70);
      font-size:px2rem(40);
      line-height:px2rem(70);
      text-align: center;
    }
    .top-right{
      width: px2rem(120);
      height: px2rem(70);
      padding-right: px2rem(10);
      text-align: right;
    }
  }
}
</style>
