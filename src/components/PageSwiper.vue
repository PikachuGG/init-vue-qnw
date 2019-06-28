<template>
  <div class='page-swiper'>
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img src="http://source.qunarzz.com/site/images/wns/20190620_qunar_dujia_homepage_3.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://source.qunarzz.com/site/images/wns/20190621_qunar_dujia_homepage_2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="http://source.qunarzz.com/site/images/wns/20190531_dujia_homepage_top_banner_4.jpg" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'page-swiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {},
  data () {
    return {
      swiperOption: {}
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
.page-swiper{
  width:100%;
  height:0;
  padding-bottom: 20%;
  background: #f00;
  .swiper-slide{
    height:100%;
    padding-bottom:20%;
  }
}
</style>
