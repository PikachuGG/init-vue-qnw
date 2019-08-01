<template>
  <div class="home">
    <transition
    name="bounce"
    >
      <menu-left
      v-if="show"
      ></menu-left>
    </transition>
    <common-top>
      <span class="iconfont icon-menu-fill" slot="common-tleft"
      @click="showWWW"
      ></span>
      <input type="text" class="common-tinput" slot="common-tcenter" >
      <span class="iconfont icon-search" slot="common-tright"></span>
    </common-top>
    <home-tab></home-tab>
    </div>
</template>

<script>
import CommonTop from '@/common/CommonTop'
import HomeTab from '@/pages/home/components/HomeTab'
import MenuLeft from '@/pages/home/components/MenuLeft'
export default {
  name: 'home',
  components: {
    CommonTop,
    HomeTab,
    MenuLeft
  },
  props: {},
  data () {
    return {
      show: false
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    showWWW () {
      this.show = true
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
.home{
  position: relative;
  height:100%;
  .iconfont{
    font-size:px2rem(60);
    line-height:px2rem(70);
  }
  .common-tinput{
    @include height-lineheight(px2rem(50));
    background: #fff;
    margin-top:px2rem(10);
    padding-left:px2rem(20);
    width: 100%;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      width: 0;
    }
    100% {
      width: 90%;
    }
  }
}
</style>
