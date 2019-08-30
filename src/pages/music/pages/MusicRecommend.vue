<template>
  <div class="music-recommend">
    <scroll class="recommend-wrapper" :data="songList">
      <div class="recommend-list">
        <ul>
          <li
          v-for="(item, index) of songList"
          :key="index"
          @click="selectItem(item, index)"
          >
            <div class="list-l">
              <img v-lazy="item.image">
            </div>
            <div class="list-r border-bottom">
              <div class="list-r-info">
                <div class="list-title">{{item.name}}</div>
                <div class="list-desc">{{getDesc(item)}}</div>
              </div>
              <div class="list-r-operate">
                <div class="list-playicon"><span class="iconfont icon-bofang-yuanshijituantubiao"></span></div>
                <div class="list-shareicon"><span class="iconfont icon-gengduo"></span></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/common/scroll/scroll'
export default {
  name: 'music-recommend',
  components: {
    Scroll
  },
  props: {
    songList: Array
  },
  data () {
    return {
    }
  },
  // 监听属性 类似于data概念
  computed: {
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    getDesc (item) {
      return `${item.singer}--${item.album}`
    },
    selectItem (item, index) {
      this.$emit('select', item, index)
      // window.console.log(item)
      // window.console.log(index)
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
  },
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
.music-recommend{
  height: 100%;
  overflow: hidden;
  background: #f2f2f2;
  .recommend-wrapper{
    height: 100%;
    overflow: hidden;
    .recommend-list{
      ul{
        li{
          padding: px2rem(18) 0;
          display: flex;
          background: #fff;
          .list-l{
            width: px2rem(110);
            height: px2rem(90);
            img{
              width: px2rem(90);
              margin: 0 px2rem(10);
            }
            img[lazy=loading]{
              width: px2rem(90);
            }
          }
          .list-r{
            height: px2rem(90);
            flex:1;
            display: flex;
            .list-r-info{
              flex: 1;
              .list-title{
                @include height-lineheight(px2rem(50));
                font-size: px2rem(30);
                color: #333;
              }
              .list-desc{
                  @include height-lineheight(px2rem(40));
                  font-size: px2rem(20);
                  color: #8a8a8a;
              }
            }
            .list-r-operate{
              width: px2rem(130);
              height: px2rem(90);
              display: flex;
              .list-playicon{
                flex: 1;
                height: px2rem(90);
                line-height: px2rem(90);
                text-align: center;
                .iconfont{
                  font-size: px2rem(50);
                  color: #333;
                }
              }
              .list-shareicon{
                width: px2rem(60);
                height: px2rem(90);
                line-height: px2rem(90);
                text-align: center;
                .iconfont{
                  font-size: px2rem(50);
                  color: #333;
                }
              }
            }
          }
          .border-bottom::before{
            border-color:#333;
          }
        }
      }
    }
  }
}
</style>
