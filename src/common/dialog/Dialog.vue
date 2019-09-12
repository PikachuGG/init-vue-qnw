<template>
  <div class="dialog">
    <div class="dialog-wrapper" v-show="showDialog">
      <div class="dialog-content">
        <div class="dialog-hd">
          <h4 class="dialog-title">{{dialogTitle}}</h4>
        </div>
        <div class="dialog-bd">
          <div class="dialog-text">{{dialogText}}</div>
        </div>
        <div class="dialog-ft border-top">
          <a @click="cancel" href="javascript:;" class="cancel-dialog-btn">{{cancelBtnText}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dialog',
  components: {},
  props: {
    dialogTitle: {
      type: String,
      default: ''
    },
    dialogText: {
      type: String,
      default: ''
    },
    cancelBtnText: {
      type: String,
      default: '关闭'
    }
  },
  data () {
    return {
      showDialog: false
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    show () {
      this.showDialog = true
    },
    hide () {
      this.showDialog = false
    },
    cancel () {
      this.showDialog = false
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
.dialog{
  .dialog-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    background: rgba(0,0,0,.6);
    .dialog-content{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
      background: #fff;
      width: 80%;
      min-height: 60%;
      border-radius: px2rem(16);
      padding: px2rem(30) px2rem(30) 0;
      .dialog-hd{
        height: px2rem(80);
        h4{
          line-height: px2rem(80);
          text-align: center;
          font-size: px2rem(38);
          font-weight: 600;
        }
      }
      .dialog-bd{
        padding: px2rem(30) 0;
        .dialog-text{
          font-size: px2rem(32);
          line-height: px2rem(60);
          color: #666;
          overflow: auto;
          height: px2rem(800);
        }
      }
      .dialog-ft{
        height: px2rem(80);
        text-align: center;
        &::before{
          border-bottom: 1px solid #333;
        }
        .cancel-dialog-btn{
          line-height: px2rem(80);
          text-align: center;
          font-size: px2rem(38);
          display: inline-block;
          color: #000;
        }
      }
    }
  }
}
</style>
