<template>
  <div class="page-title">
    <router-link to="titleUrl">
      <div class="title-left"><slot name="title-left"></slot></div>
      <div class="title-center">{{titleInfo}}</div>
      <div class="title-right"><slot name="title-right"></slot></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'page-title',
  components: {},
  props: ['titleUrl', 'titleInfo'],
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
.page-title{
  padding: px2rem(16);
  .title-left{
    display: inline-block;
    line-height: px2rem(60);
    height: px2rem(60);
  }
  .title-center{
    display: inline-block;
    font-size: px2rem(36);
    line-height: px2rem(60);
    color: #333;
    font-weight: 600;
    height: px2rem(60);
  }
  .title-right{
    display: inline-block;
    line-height: px2rem(60);
    height: px2rem(60);
  }
}
</style>
