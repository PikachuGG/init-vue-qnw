<template>
  <div class="tab-nav">
    <ul>
      <router-link
      tag="li"
      v-for="(item, index) of tabList"
      :key="index"
      :to="item.content"
      >
        <span>
          {{item.title}}
        </span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'music-tab',
  components: {},
  props: {
    songList: Array,
    singerList: Array
  },
  data () {
    return {
      // active: 0,
      currentViem: '/music/recommend',
      tabList: [{
        title: '推荐',
        content: '/music/recommend'
      }, {
        title: '歌手',
        content: '/music/singer'
      }, {
        title: '排行',
        content: '/music/rank'
      }, {
        title: '搜索',
        content: '/music/search'
      }]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    toggle (i, v) {
      this.active = i
      this.currentViem = v
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
.tab-nav{
  background: #fff;
  padding: px2rem(20) 0;
  ul{
    display: flex;
    li{
      flex: 1;
      text-align: center;
      span{
        font-size: px2rem(30);
        line-height: px2rem(60);
        color: #333;
        display: inline-block;
        width: px2rem(66);
        text-align: center;
      }
      &.active{
        span{
          color: $base-orange;
          font-weight: bolder;
          border-bottom: 6px solid $base-orange;
        }
      }
    }
  }
}
</style>
