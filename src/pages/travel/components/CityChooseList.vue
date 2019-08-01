<template>
  <div class="city-choose-list">
      <div class="city-title">{{title}}</div>
      <div class="city-con">
          <ul v-if="itemLength">
              <li class="border" v-for="(item, index) of cityList" :key="index">
                {{item.name}}
              </li>
          </ul>
          <ul v-else>
            <li class="border col4" v-for="(item, index) of cityList" :key="index">
              {{item.name}}
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'city-choose-list',
  components: {},
  props: {
    title: String,
    cityList: Array
  },
  data () {
    return {}
  },
  // 监听属性 类似于data概念
  computed: {
    itemLength () {
      const cityListLength = this.cityList.length
      return (cityListLength && cityListLength < 7) ? 1 : 0
    }
  },
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
.city-choose-list{
  .city-title{
    @include height-lineheight(px2rem(50));
    padding: 0 px2rem(15);
    background: #f5f5f5;
    font-size: px2rem(22);
  }
  .city-con{
    background: #fff;
    ul{
      display: flex;
      flex-wrap: wrap;
      padding-right: px2rem(50);
      li{
        width: 33.3%;
        font-size: px2rem(26);
        @include height-lineheight(px2rem(100));
        text-align: center;
        &.border{
          border-color: #000;
          &::before{
            border-right: none;
          }
        }
        &.col4{
          width: 25%;
        }
      }
    }
  }
}
</style>
