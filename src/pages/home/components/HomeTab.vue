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
    <component :is="currentViem"></component>
  </div>
</template>

<script>
import Travel from '@/pages/travel/Travel'
import Music from '@/pages/music/Music'
import Other from '@/pages/other/Other'

export default {
  name: 'home-tab',
  components: {
    Travel,
    Music,
    Other
  },
  props: {},
  data () {
    return {
      active: 0,
      currentViem: 'Travel',
      tabList: [{
        title: '旅游',
        content: 'Travel'
      }, {
        title: '音乐',
        content: 'Music'
      }, {
        title: '其他',
        content: 'Other'
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
}
</style>
