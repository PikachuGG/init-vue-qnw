<template>
  <div class="travel">
    <common-swiper></common-swiper>
    <swiper-icon></swiper-icon>
    <div class="choose-city border-bottom">
      <router-link to="/citychoose">{{city}}</router-link>
    </div>
    <common-title
    :titleUrl="titleList[0].url"
    :titleInfo="titleList[0].title"
    >
      <span class="iconfont icon-huo" slot="title-left"></span>
      <span class="iconfont icon-arrowRight" slot="title-right"></span>
    </common-title>
  </div>
</template>

<script>
import CommonSwiper from '@/common/CommonSwiper'
import SwiperIcon from '@/pages/travel/components/SwiperIcon'
import CommonTitle from '@/common/CommonTitle'
export default {
  name: 'travel',
  components: {
    CommonSwiper,
    SwiperIcon,
    CommonTitle
  },
  props: {},
  data () {
    return {
      city: '北京',
      titleList: [{
        title: '本周热门',
        url: 'https://www.baidu.com/'
      }, {
        title: '猜你喜欢',
        url: 'https://www.baidu.com/'
      }]
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
.travel{
  .iconfont{
    font-size: px2rem(40);
    padding: 0 px2rem(6);
  }
  .icon-huo{
    color: #f00;
  }
  .icon-arrowRight{
    color: #333;
  }
  .choose-city{
    @include height-lineheight(px2rem(60));
    text-align:center;
    font-size:px2rem(30);
    a{
      color: $base-orange;
    }
    &::before{
      border-bottom: 1px solid #ff0000;
    }
  }
}
</style>
