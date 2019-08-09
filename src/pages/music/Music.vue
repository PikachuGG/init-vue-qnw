<template>
  <div class="music">
    <div class="music-swiper">
      <common-swiper :imgUrl="swiperImgUrl"></common-swiper>
    </div>
    <div class="music-tab">
      <music-tab></music-tab>
    </div>
  </div>
</template>

<script>
import CommonSwiper from '@/common/CommonSwiper'
import MusicTab from '@/pages/music/components/MusicTab'
import { getDiscList, getMusicSlider } from '@/api/music'
export default {
  name: 'music',
  components: {
    CommonSwiper,
    MusicTab
  },
  props: {},
  data () {
    return {
      swiperImgUrl: []
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    getMusicList () {
      getDiscList().then((res) => {
        if (res.code === 0) {
        }
      })
    },
    getSliderList () {
      getMusicSlider().then((res) => {
        if (res.code === 0) {
          this.filterImg(res.data.slider)
        }
      })
    },
    filterImg (imgUrl) {
      for (let index = 0; index < imgUrl.length; index++) {
        let e = {}
        e.id = imgUrl[index].id
        e.url = imgUrl[index].picUrl
        this.swiperImgUrl.push(e)
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    // this.getMusicList(),
    this.getSliderList()
  },
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
.music{
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .music-swiper{
    /deep/
    .common-swiper{
      padding:0 0 40%;
      .swiper-slide{
        padding: 0 0;
        .img-box{
          border-radius: 0;
        }
      }
    }
  }
  .music-tab{
    flex: 1;
    background: #f00;
    overflow: hidden;
    /deep/
    .home-tab{
      .tab-nav{
        background: #fff;
        ul{
          li{
            span{
              color: $base-orange;
              &.active{
                border-bottom: 6px solid $base-orange;
              }
            }
          }
        }
      }
    }
  }
}
</style>
