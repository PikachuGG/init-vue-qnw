<template>
  <div class="music">
    <div class="swiper">
      <common-swiper :imgUrl="sliderList"></common-swiper>
    </div>
    <div class="tab">
      <div class="tab-wrapper">
        <music-tab></music-tab>
        <router-view :songList="songList" :singerList="singerList" @select="selectItem" @selectSinger="selectSinger"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import CommonSwiper from '@/common/CommonSwiper'
import MusicTab from '@/pages/music/components/MusicTab'
import { getMusicSlider, getMusicSongList, getMusicSingerList } from '@/api/music'
import { createSong } from '@/assets/js/song-list'
import { mapActions } from 'vuex'
export default {
  name: 'music',
  components: {
    CommonSwiper,
    MusicTab
  },
  props: {},
  data () {
    return {
      sliderList: [],
      songList: [],
      singerList: []
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    // getMusicList () {
    //   getDiscList().then((res) => {
    //     if (res.code === 0) {
    //       window.console.log(res.data)
    //     }
    //   })
    // },
    getSliderList () {
      getMusicSlider().then((res) => {
        if (res.code === 0) {
          this.sliderList = this._normalizeSlider(res.data.slider)
        }
      })
    },
    getSongList () {
      getMusicSongList().then((res) => {
        if (res.code === 0) {
          this.songList = this._normalizeSongList(res.songlist)
        }
      })
    },
    getSingerList () {
      getMusicSingerList().then((res) => {
        if (res.code === 0) {
          this.singerList = res.singerList.data.singerlist
        }
      })
    },
    _normalizeSlider (slider) {
      let ret = []
      for (let index = 0; index < slider.length; index++) {
        let retchildren = {}
        retchildren.id = slider[index].id
        retchildren.url = slider[index].picUrl
        ret.push(retchildren)
      }
      return ret
    },
    _normalizeSongList (songlist) {
      let ret = []
      songlist.forEach(element => {
        const musicData = element.data
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    },
    selectItem (item, index) {
      this.$router.push({
        path: `/songplay/${item.id}`
      })
      this.setDisc(item)
    },
    selectSinger (item, index) {
      this.$router.push({
        path: `/singerpage/${item.singer_mid}`
      })
      this.setSinger(item)
    },
    ...mapActions([
      'setDisc',
      'setSinger'
    ])
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    // 搜索-热门搜索
    // this.getMusicList()
    // 音乐轮播图
    this.getSliderList()
    // 推荐列表
    this.getSongList()
    this.getSingerList()
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
  .swiper{
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
  .tab{
    flex: 1;
    overflow: hidden;
    .tab-wrapper{
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .router-view{
        flex: 1;
        overflow: hidden;
      }
    }
  }
}
</style>
