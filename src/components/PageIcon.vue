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
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        text: '景点门票'
      }, {
        id: 1,
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        text: '故宫'
      }, {
        id: 2,
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        text: '北京必游'
      }, {
        id: 3,
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        text: '水上乐园'
      }, {
        id: 4,
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png',
        text: '爬长城'
      }, {
        id: 5,
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
        text: '北京欢乐谷'
      }, {
        id: 6,
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        text: '动植物园'
      }, {
        id: 7,
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
        text: '北京野生动物园'
      }, {
        id: 8,
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png',
        text: '北京世园会'
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
  padding:px2rem(20) 0;
  border-bottom: 1px solid #ccc;
  .swiper-slide{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    .img-text{
      width: 25%;
    }
  }
}
</style>
