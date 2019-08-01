<template>
  <div class="city-choose-alphabet">
    <ul>
      <li
      v-for="(val, key, index) of cities"
      :key="index"
      @click="handleLetterClick"
      >{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'city-choose-alphabet',
  components: {},
  props: {
    cities: Object
  },
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
    handleLetterClick (e) {
      window.console.log(e.target.innerText)
    }
  },
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
.city-choose-alphabet{
  z-index: 99;
  position: absolute;
  right: px2rem(20);
  top:50%;
  transform: translateY(-50%);
  width: px2rem(30);
  ul{
    li{
      @include height-lineheight(px2rem(40));
      font-size: px2rem(26);
      text-align: center;
      color: $base-orange;
    }
  }
}
</style>
