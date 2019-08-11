<template>
  <div class="music-list">
    <ul>
      <li>
        <div class="list-l">
          <img src="" alt="">
        </div>
        <div class="list-r border-bottom">
          <div class="list-r-info">
            <div class="list-title">1</div>
            <div class="list-desc">2</div>
          </div>
          <div class="list-r-operate">
            <div class="list-playicon">3</div>
            <div class="list-shareicon">4</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'music-list',
  components: {},
  props: {},
  data () {
    return {
    }
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
.music-list{
  ul{
    li{
      padding: px2rem(18) 0;
      display: flex;
      .list-l{
        width: px2rem(100);
        height: px2rem(100);
      }
      .list-r{
        height: px2rem(100);
        flex:1;
        display: flex;
        .list-r-info{
          flex: 1;
          .list-title{
            @include height-lineheight(px2rem(60));
            font-size: px2rem(30);
            color: #333;
          }
          .list-desc{
             @include height-lineheight(px2rem(40));
             font-size: px2rem(20);
             color: #ccc;
          }
        }
        .list-r-operate{
          width: px2rem(200);
          height: px2rem(100);
        }
      }
      .border-bottom::before{
        border-color:#333;
      }
    }
  }
}
</style>
