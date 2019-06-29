<template>
  <div class="page-icon">
      <swiper
    :options="swiperOption"
    ref="mySwiper"
    @someSwiperEvent="callback"
    >
      <!-- slides -->
      <swiper-slide>
        <img-text v-for="(item, index) in imgList" :key="index" :imgUrl="item.imgUrl" :text="item.text"></img-text>
      </swiper-slide>
      <swiper-slide>
        <img-text></img-text>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ImgText from '@/components/ImgText'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'page-icon',
  components: {
    swiper,
    swiperSlide,
    ImgText
  },
  props: {},
  data () {
    return {
      imgList: [{
        id: 0,
        imgUrl: 'https://imgs.qunarzz.com/vc/fd/55/94/6c7152c2a8b35a9c49bb26ea25.png_92.png',
        text: '周边游1'
      }, {
        id: 1,
        imgUrl: 'https://imgs.qunarzz.com/vc/fd/55/94/6c7152c2a8b35a9c49bb26ea25.png_92.png',
        text: '周边游2'
      }, {
        id: 2,
        imgUrl: 'https://imgs.qunarzz.com/vc/fd/55/94/6c7152c2a8b35a9c49bb26ea25.png_92.png',
        text: '周边游3'
      }],
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
.page-icon{
  .swiper-slide{
    display: flex;
    .img-text{
      width: 25%;
      background: #ff0;
    }
  }
}
</style>
