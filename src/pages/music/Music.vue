<template>
  <div class="music">music</div>
</template>

<script>
import { getDiscList } from '@/api/music'
export default {
  name: 'music',
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
  methods: {
    getMusicList () {
      getDiscList().then((res) => {
        if (res.code === 0) {
          window.console.log(res.data)
        }
      })
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    // this.getMusicList()
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
</style>
