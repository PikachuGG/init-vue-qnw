<template>
  <div class='common-swiper'>
    <swiper
    :options="swiperOption"
    >
      <!-- slides -->
      <swiper-slide v-for="(item, index) of imgUrl" :key="index">
        <div class="img-box">
          <img :src="item.url">
          <div class="img-type">{{item.type}}</div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'common-swiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {},
  data () {
    return {
      imgUrl: [{
        id: 1,
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/b421363bbbb9184deacb4247eeea7485.jpg_750x200_12b42643.jpg',
        type: '广告1'
      }, {
        id: 2,
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg',
        type: '广告2'
      }, {
        id: 3,
        url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg',
        type: '广告3'
      }],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
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
.common-swiper{
  width:100%;
  height:0;
  padding:0 px2rem(8) 25.6%;
  background: linear-gradient(to top,#fff 0,#fff 35%,$base-orange 35%,$base-orange 100%,);
  .swiper-slide{
    padding: 0 px2rem(8);
    .img-box{
      position: relative;
      border-radius: px2rem(16);
      overflow: hidden;
      img{
        width:100%;
      }
      .img-type{
        position: absolute;
        left: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        color: #fff;
        z-index: 99;
        padding: 0 px2rem(8);
        @include height-lineheight(px2rem(40));
        font-size: px2rem(26);
        font-family: "微软雅黑";
        text-align: center;
        border-top-right-radius:px2rem(16);
      }
    }
  }
  /deep/
  .swiper-pagination-bullet{
    width: px2rem(16);
    height: px2rem(16);
    margin:0 px2rem(8);
  }
}
</style>
