<template>
  <div class="common-top">
    <div class="common-tleft"><slot name="common-tleft"></slot></div>
    <div class="common-tcenter"><slot name="common-tcenter"></slot></div>
    <div class="common-tright"><slot name="common-tright"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'common-top',
  components: {},
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
.common-top{
  background: $base-orange;
  height: px2rem(70);
  color: #fff;
  display: flex;
  .common-tleft{
    width: px2rem(120);
    height: px2rem(70);
    padding-left: px2rem(10);
    text-align: left;
  }
  .common-tcenter{
    flex: 1;
    height: px2rem(70);
  }
  .common-tright{
    width: px2rem(120);
    height: px2rem(70);
    padding-right: px2rem(10);
    text-align: right;
  }
}
</style>
