<template>
  <div class="home-travel">
    <page-swiper></page-swiper>
    <page-icon></page-icon>
    <page-title
    :titleUrl="titleList[0].url"
    :titleInfo="titleList[0].title"
    >
      <span class="iconfont icon-search" slot="title-left"></span>
      <span class="iconfont icon-search" slot="title-right"></span>
    </page-title>
  </div>
</template>

<script>
import PageSwiper from '@/components/PageSwiper'
import PageIcon from '@/components/PageIcon'
import PageTitle from '@/components/PageTitle'
export default {
  name: 'home-travel',
  components: {
    PageSwiper,
    PageIcon,
    PageTitle
  },
  props: {},
  data () {
    return {
      titleList: [{
        title: '本周热门',
        url: 'https://www.baidu.com/'
      }, {
        title: '猜你喜欢',
        url: 'https://www.baidu.com/'
      }]
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
.home-travel{
  .iconfont{
    font-size: px2rem(30);
  }
}
</style>
