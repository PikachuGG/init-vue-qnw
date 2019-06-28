<template>
  <div class="home">
    <page-top>
      <span class="iconfont icon-fanhui" slot="page-tleft"></span>
      <input type="text" class="page-tinput" slot="page-tcenter">
      <span class="iconfont icon-wode " slot="page-tright"></span>
    </page-top>
    <page-swiper></page-swiper>
      home
    </div>
</template>

<script>
import PageTop from '@/components/PageTop'
import PageSwiper from '@/components/PageSwiper'
export default {
  name: 'home',
  components: {
    PageTop,
    PageSwiper
  },
  props: {},
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
.home{
  height:100%;
  .iconfont{
    font-size:px2rem(60);
    line-height:px2rem(90);
  }
  .page-tinput{
    line-height: px2rem(60);
    height:px2rem(60);
    background: #fff;
    margin-top:px2rem(15);
    padding-left:px2rem(20);
    width: 100%;
  }
}
</style>
