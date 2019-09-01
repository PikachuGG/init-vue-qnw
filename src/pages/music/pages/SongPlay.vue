<template>
  <div class='song-play'>
    <router-view :disc="disc"></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'song-play',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  // 监听属性 类似于data概念
  computed: {
    ...mapGetters([
      'disc'
    ])
  },
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
.song-play{
  height: 100%;
}
</style>
