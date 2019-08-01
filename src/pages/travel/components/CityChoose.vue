<template>
  <div class="city-choose">
    <city-choose-alphabet :cities="cities"></city-choose-alphabet>
    <common-top>
      <span class="iconfont icon-arrowLeft" slot="common-tleft" @click="backAction"
      ></span>
      <div slot="common-tcenter" class="travel-top">{{title}}</div>
    </common-top>
    <div class="travle-search">
      <input type="text" placeholder="请输入城市搜索">
    </div>
    <div class="city-wrapper" ref="citywrapper">
      <div class="content">
        <city-choose-list :title="hotTitle" :cityList="hotCities"></city-choose-list>
        <city-choose-list
        v-for="(val, key, i) of cities"
        :key="i"
        :title="key"
        :cityList="val"
        ></city-choose-list>
      </div>
    </div>
  </div>
</template>

<script>
import CommonTop from '@/common/CommonTop'
import CityChooseList from '@/pages/travel/components/CityChooseList'
import CityChooseAlphabet from '@/pages/travel/components/CityChooseAlphabet'
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'city-choose',
  components: {
    CommonTop,
    CityChooseList,
    CityChooseAlphabet
  },
  props: {},
  data () {
    return {
      title: '城市选择',
      hotTitle: '热门城市',
      hotCities: [],
      cities: {},
      alphabets: []
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    backAction () {
      this.$router.go(-1)
    },
    getCityList () {
      axios.get('/mock/city.json').then(
        this.handleGetDataSucc
      )
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.getCityList()
    this.bscroll = new BScroll(this.$refs.citywrapper)
  },
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
.city-choose{
  height: 100%;
  display: flex;
  flex-direction:column;
  position: relative;
  .iconfont{
    font-size:px2rem(60);
    line-height:px2rem(70);
  }
  .travel-top{
    text-align: center;
    font-size:px2rem(36);
    line-height:px2rem(70);
  }
  .travle-search{
    width: 100%;
    height: px2rem(70);
    background: $base-orange;
    text-align: center;
    padding-bottom: px2rem(20);
    input{
      width: px2rem(540);
      @include height-lineheight(px2rem(50));
      font-size:px2rem(26);
      background: #fff;
      padding:0 px2rem(15);
      border-radius: px2rem(4);
    }
  }
  .city-wrapper{
    overflow: hidden;
    flex: 1;
  }
}
</style>
