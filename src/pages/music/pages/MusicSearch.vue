<template>
  <div class="music-search">
    <div class="search-hottags">
      <common-title :titleInfo="titlehot"></common-title>
      <search-tags></search-tags>
    </div>
    <div class="search-historytags">
      <common-title :titleInfo="titlehistory"></common-title>
      <search-tags></search-tags>
    </div>
  </div>
</template>

<script>
import CommonTitle from '@/common/CommonTitle'
import SearchTags from '@/pages/music/components/MusicSearchTags'

export default {
  name: 'music-search',
  components: {
    CommonTitle,
    SearchTags
  },
  props: {},
  data () {
    return {
      titlehot: '热门搜索',
      titlehistory: '历史记录'
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

</style>
