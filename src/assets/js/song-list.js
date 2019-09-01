export default class Song {
  constructor ({ id, mid, singer, name, album, duration, image, url }) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSong (musicData) {
  return new Song({
    id: musicData.songid || musicData.id,
    mid: musicData.songmid || musicData.mid,
    singer: filterSiner(musicData.singer),
    name: musicData.songname || musicData.name,
    album: musicData.albumname || musicData.album.name,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid || musicData.album.mid}.jpg?max_age=2592000`,
    // url: `http://ws.stream.qqmusic.qq.com/${musicData.songid || musicData.id}.m4a?fromtag=46`
    // url: `http://stream0.qqmusic.qq.com/${musicData.songid || musicData.id}.m4a?fromtag=46`
    url: ''
    // url: `http://ws.stream.qqmusic.qq.com/C400${musicData.songmid || musicData.id}.m4a?vkey=${songVkey}&guid=4929716310&uin=2048&fromtag=66`
  })
}

function filterSiner (singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach(element => {
    ret.push(element.name)
  })
  return ret
}
