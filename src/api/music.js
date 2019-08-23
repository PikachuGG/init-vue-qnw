import axios from 'axios'
export function getDiscList () {
  const url = '/music/splcloud/fcgi-bin/gethotkey.fcg'
  const data = {
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getMusicSongList () {
  const url = '/music/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  const data = {
    page: 'detail',
    tpl: 'macv4',
    type: 'top',
    topid: 4,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch(function (error) {
    console.log(error)
  })
}

export function getMusicSlider () {
  const url = '/music/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = {
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'h5',
    needNewCode: 1
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// export function getMusicSingerList () {
//   const url = 'music/v8/fcg-bin/v8.fcg'
//   const data = {
//     channel: 'singer',
//     page: 'list',
//     key: 'all_all_all',
//     pagesize: 100,
//     pagenum: 1,
//     g_tk: 5381,
//     loginUin: 0,
//     hostUin: 0,
//     format: 'json',
//     inCharset: 'utf-8',
//     outCharset: 'utf-8',
//     notice: 0,
//     platform: 'yqq.json',
//     needNewCode: 0
//   }
//   return axios.get(url, {
//     params: data
//   }).then((res) => {
//     return Promise.resolve(res.data)
//   }).catch(function (error) {
//     console.log(error)
//   })
// }

export function getMusicSingerList () {
  const url = '/singer/getSingerList'
  const data = {
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: '{"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}}'
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch(function (error) {
    console.log(error)
  })
}
