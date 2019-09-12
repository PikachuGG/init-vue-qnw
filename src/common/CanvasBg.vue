<template>
  <div class="canvas-bg">
    <canvas id="canvas" width="300" height="150"></canvas>
  </div>
</template>

<script>
export default {
  name: 'canvas-bg',
  components: {},
  props: {},
  data () {
    return {
      canvas: '',
      ctx: '',
      w: 0,
      h: 0,
      r: 200,
      hours: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    _initCanvas () {
      window.console.log('初始化canvas')
      this.canvas = document.getElementById('canvas')
      if (!this.canvas.getContext) return
      this.ctx = this.canvas.getContext('2d')
      this.w = window.innerWidth
      this.h = window.innerHeight
      this.canvas.width = this.w
      this.canvas.height = this.h
      this.draw()
    },
    draw () {
      let _this = this
      let date = new Date()
      let hour = date.getHours()
      let minute = date.getMinutes()
      let second = date.getSeconds()
      this.ctx.clearRect(0, 0, this.w, this.h)
      this.ctx.save()
      this.ctx.translate(this.w / 2, this.h / 2)
      // 画背景
      this.clockBg()
      // 画时针
      hour = hour + minute / 60
      this.clockHour(hour)
      // 画分针
      this.clockMinute(minute)
      // 画秒针
      this.clockSecond(second)
      // 画中心点
      this.clockCircle()
      this.ctx.restore()
      window.requestAnimationFrame(_this.draw)
    },
    clockBg () {
      this.ctx.save()
      this.ctx.beginPath()
      this.ctx.lineWidth = 10
      this.ctx.arc(0, 0, this.r, 0, 2 * Math.PI, false)
      this.ctx.stroke()
      this.ctx.closePath()
      for (let i = 0; i < 60; i++) {
        const _r = this.r - 20
        this.ctx.beginPath()
        this.ctx.arc(_r * Math.cos(i * Math.PI / 30), _r * Math.sin(i * Math.PI / 30), 4, 0, 2 * Math.PI, false)
        this.ctx.fillStyle = '#888'
        if (i % 5 === 0) {
          this.ctx.fillStyle = '#000'
        }
        this.ctx.fill()
        this.ctx.closePath()
      }
      for (let i = 0; i < this.hours.length; i++) {
        const _r = this.r - 40
        this.ctx.font = '30px Arial'
        this.ctx.textAlign = 'center'
        this.ctx.textBaseline = 'middle'
        this.ctx.fillStyle = '#000'
        this.ctx.fillText(this.hours[i], _r * Math.cos(i * Math.PI / 6), _r * Math.sin(i * Math.PI / 6))
      }
      this.ctx.restore()
    },
    clockHour (hour) {
      this.ctx.save()
      this.ctx.rotate(hour * 30 * Math.PI / 180)
      this.ctx.beginPath()
      this.ctx.moveTo(0, 10)
      this.ctx.lineTo(0, -(this.r - 90))
      this.ctx.lineWidth = 16
      this.ctx.lineCap = 'round'
      this.ctx.stroke()
      this.ctx.closePath()
      this.ctx.restore()
    },
    clockMinute (minute) {
      this.ctx.save()
      this.ctx.rotate(minute * 6 * Math.PI / 180)
      this.ctx.beginPath()
      this.ctx.moveTo(0, 20)
      this.ctx.lineTo(0, -(this.r - 60))
      this.ctx.lineWidth = 10
      this.ctx.lineCap = 'round'
      this.ctx.strokeStyle = '#333'
      this.ctx.stroke()
      this.ctx.closePath()
      this.ctx.restore()
    },
    clockSecond (second) {
      this.ctx.save()
      this.ctx.rotate(second * 6 * Math.PI / 180)
      this.ctx.beginPath()
      this.ctx.moveTo(3, 30)
      this.ctx.lineTo(-3, 30)
      this.ctx.lineTo(-1, -(this.r - 40))
      this.ctx.lineTo(-6, -(this.r - 40))
      this.ctx.lineTo(0, -(this.r - 34))
      this.ctx.lineTo(6, -(this.r - 40))
      this.ctx.lineTo(1, -(this.r - 40))
      this.ctx.lineWidth = 1
      this.ctx.fillStyle = '#f00'
      this.ctx.fill()
      this.ctx.closePath()
      this.ctx.restore()
    },
    clockCircle () {
      this.ctx.save()
      this.ctx.beginPath()
      this.ctx.arc(0, 0, 6, 0, 2 * Math.PI, false)
      this.ctx.fillStyle = '#fff'
      this.ctx.fill()
      this.ctx.closePath()
      this.ctx.restore()
    },
    findRandom (one, two) {
      return one + Math.random() * (two - one)
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this._initCanvas()
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

</style>
