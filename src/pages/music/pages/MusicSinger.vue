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
      <scroll class="singer-list-wrapper">
        <ul>
          <li v-for="(item, index) in singerList" :key="index" @click="selectItem(item, index)">
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
  </div>
</template>

<script>
import Scroll from '@/common/scroll/scroll'
export default {
  name: 'music-singer',
  components: {
    Scroll
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
    },
    selectItem (item, index) {
      this.$emit('selectSinger', item, index)
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
    background: #f2f2f2;
    .singer-list-wrapper{
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
}
</style>
