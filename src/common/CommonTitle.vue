<template>
  <div class="common-title">
    <router-link to="titleUrl">
      <div class="title-left"><slot name="title-left"></slot></div>
      <div class="title-center"><span>{{titleInfo}}</span></div>
      <div class="title-right"><slot name="title-right"></slot></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'common-title',
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
.common-title{
  padding: px2rem(16);
  height: px2rem(92);
  overflow: hidden;
  .title-left{
    float: left;
    @include height-lineheight(px2rem(60));
  }
  .title-center{
    float: left;
    @include height-lineheight(px2rem(54));
    span{
      font-size: px2rem(34);
      padding: 0 px2rem(6);
      font-weight: 600;
      color: #333;
    }
  }
  .title-right{
    float: left;
    @include height-lineheight(px2rem(60));
  }
}
</style>
