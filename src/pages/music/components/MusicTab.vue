<template>
  <div class="home-tab">
    <div class="tab-nav">
      <ul>
        <li
        v-for="(item, index) of tabList"
        :key="index"
        >
          <span
          @click="toggle(index, item.content)"
          :class="{active:active===index}"
          >
            {{item.title}}
          </span>
        </li>
      </ul>
    </div>
    <div class="tab-con"><component :is="currentViem"></component></div>
  </div>
</template>

<script>
import MusicRecommend from '@/pages/music/pages/MusicRecommend'
import MusicSinger from '@/pages/music/pages/MusicSinger'
import MusicRank from '@/pages/music/pages/MusicRank'
import MusicSearch from '@/pages/music/pages/MusicSearch'

export default {
  name: 'music-tab',
  components: {
    MusicRecommend,
    MusicSinger,
    MusicRank,
    MusicSearch
  },
  props: {},
  data () {
    return {
      active: 0,
      currentViem: 'MusicRecommend',
      tabList: [{
        title: '推荐',
        content: 'MusicRecommend'
      }, {
        title: '歌手',
        content: 'MusicSinger'
      }, {
        title: '排行',
        content: 'MusicRank'
      }, {
        title: '搜索',
        content: 'MusicSearch'
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
.home-tab{
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .tab-nav{
    background: $base-orange;
    padding: px2rem(20) 0;
    ul{
      display: flex;
      li{
        flex: 1;
        text-align: center;
        span{
          font-size: px2rem(30);
          line-height: px2rem(60);
          color: #fff;
          display: inline-block;
          width: px2rem(66);
          text-align: center;
          &.active{
            font-weight: bolder;
            border-bottom: 6px solid #fff;
          }
        }
      }
    }
  }
  .tab-con{
    flex: 1;
    overflow: hidden;
  }
}
</style>
