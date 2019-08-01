<template>
  <div class="swiper-icon border-bottom">
      <swiper
      :options="swiperOption"
      >
      <!-- slides -->
      <swiper-slide
      v-for="(travel, index) of travelList"
      :key="index"
      >
        <swiper-icon-text v-for="(item, index) in travel" :key="index" :imgUrl="item.imgUrl" :text="item.text"></swiper-icon-text>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import SwiperIconText from '@/pages/travel/components/SwiperIconText'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'swiper-icon',
  components: {
    swiper,
    swiperSlide,
    SwiperIconText
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
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {
    travelList: function () {
      const travels = []
      this.imgList.forEach((item, index) => {
        const travel = Math.floor(index / 8)
        if (!travels[travel]) {
          travels[travel] = []
        }
        travels[travel].push(item)
      })
      return travels
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
.swiper-icon{
  &::before{
    border-bottom: 1px solid #ff0000;
  }
  padding:px2rem(20) 0;
  .swiper-slide{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    .swiper-icon-text{
      width: 25%;
    }
  }
  /deep/
  .swiper-container{
    padding: 0 0 px2rem(32);
  }
  /deep/
  .swiper-pagination-bullet{
    width: px2rem(16);
    height: px2rem(16);
    margin:0 px2rem(8);
  }
}
</style>
