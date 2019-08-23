<template>
  <div class="music-singer">
    <div class="singer-choose-bar">
      <div class="bar-title" v-show="!showTypes">全部歌手</div>
      <div class="bar-btn" v-show="!showTypes" @click="showAction">筛选</div>
      <div class="singer-types" v-show="showTypes">
        <span>华语</span>
        <span>华语</span>
        <span>华语</span>
        <span>华语</span>
        <span>华语</span>
        <span>华语</span>
        <span>华语</span>
        <span>华语</span>
        <span>华语</span>
        <span>华语</span>
        <span>华语</span>
        <span>华语</span>
        <span>华语</span>
        <span>华语</span>
        <span>华语</span>
        <span>华语</span>
      </div>
    </div>
    <div class="singer-list">
      <singer-list :singerList="singerList"></singer-list>
    </div>
  </div>
</template>

<script>
import SingerList from '@/pages/music/components/MusicSingerList'
export default {
  name: 'music-singer',
  components: {
    SingerList
  },
  props: {
    singerList: {
      type: Array
    }
  },
  data () {
    return {
      showTypes: false
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    showAction () {
      this.showTypes = !this.showTypes
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
.music-singer{
  height: 100%;
  overflow: hidden;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  .singer-choose-bar{
    background: #ff0;
    clear: both;
    height: px2rem(60);
    .bar-title{
      line-height: px2rem(60);
      font-size:px2rem(28);
      color:#333;
      float: left;
    }
    .bar-btn{
      float: right;
      line-height: px2rem(60);
      font-size:px2rem(28);
      color:#333;
    }
    .singer-types{
      display: flex;
      span{
        flex: 1;
        line-height: px2rem(60);
        font-size:px2rem(28);
        color:#333;
      }
    }
  }
  .singer-list{
    flex: 1;
    overflow: hidden;
  }
}
</style>
