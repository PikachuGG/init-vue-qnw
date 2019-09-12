<template>
  <div class="music-singer-page">
    <singer-detail
    :singerImg="singerImg"
    :songList="songList"
    :singName="singName"
    :singDesc="singDesc"
    :songTotal="songTotal"
    @select="selectItem"
    >
    </singer-detail>
  </div>
</template>

<script>
import SingerDetail from '@/pages/music/components/SingerDetail'
import { createSong } from '@/assets/js/song-list'
import { getMusicSingerDetail, getPlaySongKey } from '@/api/music'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'music-singer-page',
  components: {
    SingerDetail
  },
  props: {},
  data () {
    return {
      singDesc: '',
      songTotal: 0,
      songList: []
    }
  },
  // 监听属性 类似于data概念
  computed: {
    singName () {
      return this.singer.singer_name
    },
    singerImg () {
      return this.singer.singer_pic
    },
    ...mapGetters([
      'singer'
    ])
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    _getDetail () {
      if (!this.singer.singer_id) {
        window.console.log('获取不到歌手')
      }
      getMusicSingerDetail(this.singer.singer_mid).then((res) => {
        if (res.code === 0) {
          this.singDesc = res.singer.data.singer_brief
          this.songTotal = res.singer.data.total_song
          this.songList = this._normalizeSongList(res.singer.data.songlist)
        }
      })
    },
    _normalizeSongList (songlist) {
      let ret = []
      songlist.forEach(element => {
        const musicData = element
        if (musicData.id && musicData.mid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    },
    selectItem (item, index) {
      this.$router.push({
        path: `/songplay/${item.mid}`
      })
      if (item.mid) {
        getPlaySongKey(item.mid).then((res) => {
          window.console.log(res)
          if (res.code === 0) {
            item.url = res.req_0.data.sip[0] + res.req_0.data.midurlinfo[0].purl
          }
        })
      }
      this.setDisc(item)
    },
    ...mapActions([
      'setDisc'
    ])
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this._getDetail()
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
.music-singer-page{
  height: 100%;
  overflow: hidden;
}
</style>
