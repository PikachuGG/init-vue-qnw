<template>
  <div class="music-singer-list">
    <scroll class="singer-wrapper">
      <ul>
        <li v-for="(item, index) in singerList" :key="index">
          <div class="list-l">
            <img v-lazy="item.singer_pic">
          </div>
          <div class="list-r border-bottom">
            <div class="list-r-info">
              <div class="list-title">{{item.singer_name}}</div>
            </div>
            <div class="list-r-operate">
              收藏
            </div>
          </div>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/common/scroll/scroll'
export default {
  name: 'music-singer-list',
  components: {
    Scroll
  },
  props: {
    singerList: {
      type: Array
    }
  },
  data () {
    return {}
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
.music-singer-list{
  height: 100%;
  overflow: hidden;
  background: #f2f2f2;
  .singer-wrapper{
    height: 100%;
    overflow: hidden;
    ul{
      li{
        padding: px2rem(18) px2rem(10);
        display: flex;
        background: #fff;
        .list-l{
          width: px2rem(90);
          height: px2rem(90);
          border-radius: 50%;
          overflow: hidden;
          img{
            width: px2rem(90);
          }
          img[lazy=loading]{
            width: px2rem(90);
          }
        }
        .list-r{
          margin-left: px2rem(20);
          height: px2rem(90);
          flex:1;
          display: flex;
          .list-r-info{
            flex: 1;
            .list-title{
              @include height-lineheight(px2rem(90));
              font-size: px2rem(30);
              color: #333;
            }
          }
          .list-r-operate{
            width: px2rem(130);
            height: px2rem(90);
            display: flex;
            font-size: px2rem(30);
            color: #f00;
            line-height: px2rem(90);
          }
        }
        .border-bottom::before{
          border-color:#333;
        }
      }
    }
  }
}
</style>
