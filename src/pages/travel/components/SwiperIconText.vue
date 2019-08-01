<template>
  <div class="swiper-icon-text">
      <dir class="img-box">
        <img :src="imgUrl">
      </dir>
      <div class="text-box">{{text}}</div>
  </div>
</template>

<script>
export default {
  name: 'swiper-icon-text',
  components: {},
  props: [
    'imgUrl',
    'text'
  ],
  data () {
    return {
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {},
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
.swiper-icon-text{
  .img-box{
    overflow: hidden;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 60%;
    }
  }
  .text-box{
    text-align: center;
    line-height: px2rem(56.3);
    font-size: px2rem(26);
  }
}
</style>
