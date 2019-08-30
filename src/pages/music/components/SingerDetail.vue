<template>
  <div class="singer-detail">
    <scroll class="singer-detail-scroll">
      <div class="singer-detail-wrapper">
        <div class="singer">
          <div class="singer-img">
            <img :src="singerImg">
          </div>
          <div class="singer-info">
            <div class="singer-name">{{singName}}</div>
            <div class="singer-desc">{{singDesc}}</div>
          </div>
          <div class="play-wrapper">
            <div class="play-btn">
              <span class=""></span>
            </div>
          </div>
        </div>
        <div class="detail">
          <div class="song-total">歌曲共{{songTotal}}首</div>
          <div class="detail-list">
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
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/common/scroll/scroll'
export default {
  name: 'singer-detail',
  components: {
    Scroll
  },
  props: {
    singName: String,
    singDesc: String,
    singerImg: String,
    songTotal: Number,
    songList: Array
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
    getDesc (item) {
      return `${item.singer}--${item.album}`
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
.singer-detail{
  background: #f8f8f8;
  height: 100%;
  overflow: hidden;
  .singer-detail-scroll{
    height: 100%;
    overflow: hidden;
    .singer{
      width: 100%;
      overflow: hidden;
      .singer-img{
        width: 50%;
        border-radius: 50%;
        overflow: hidden;
        margin:px2rem(90) auto px2rem(30);
        box-shadow: 0 px2rem(7) px2rem(14) rgba(0,0,0,.35);
        img{
          width: 100%;
        }
      }
      .singer-info{
        .singer-name{
          text-align: center;
          height: px2rem(90);
          line-height: px2rem(90);
          font-size: px2rem(40);
          color: #000;
        }
        .singer-desc{
          line-height: px2rem(50);
          font-size: px2rem(30);
          color: grey;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding: 0 px2rem(60);
          text-align: center;
        }
      }
      .play-wrapper{
        padding: px2rem(20) 0;
        .play-btn{
          width: px2rem(380);
          height: px2rem(80);
          border-radius: px2rem(40);
          box-shadow: 0 6px 32px rgba(230,120,0,.5);
          background-color: $base-orange;
          margin: 0 auto;
        }
      }
    }
    .detail{
      overflow: hidden;
      .song-total{
        padding:px2rem(20) px2rem(10);
        font-size: px2rem(30);
        color: $base-orange;
      }
      .detail-list{
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
}
</style>
