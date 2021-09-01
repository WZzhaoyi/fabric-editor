<template>
  <div class="container">
    <div class="header">
      <div class="logo">LOGO</div>
    </div>
    <div class="content-wrapper">
      <div class="list-wraper">
        <div v-for="item in list" :key="item.id" class="image-wrapper">
          <img :src="item.url" @click="handleAdd(item.url)">
        </div>
      </div>
      <vue-fabric-core
        :id="id"
        ref="canvas"
        :width="width"
        :height="height"
        :color="color"
        :cdn="cdn"
        @selection:created="selected"
        @selection:updated="selected"
      />
      <div class="tool-wrapper">
        <i class="pt-iconfont" @click="handleDelete" />
        <i class="pt-iconfont" @click="rotate" />
        <p class="pt-iconfont" @click="changeDrawMore">LF</p>
        <p class="pt-iconfont" @click="createLine">L</p>
        <p class="pt-iconfont" @click="createRect">R</p>
        <p class="pt-iconfont" @click="createItext">IT</p>
        <!-- <i @click="selected" class="pt-iconfont icon-crop"></i> -->
        <p class="pt-iconfont" @click="toJSON">J</p>
        <p class="pt-iconfont" @click="generateImg()">GH</p>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import Fabric from '../fabric-core/index.vue'
export default {
  name: 'FabricEditor',
  components: {
    'vue-fabric-core': Fabric
  },
  props: {
    id: {
      type: String,
      required: false,
      default: 'fabricCanvas'
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: '#fff'
    },
    cdn: {
      type: String,
      required: false,
      default: 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/2.3.6/fabric.min.js'
    }
  },
  data() {
    return {
      imgUrl: '',
      list: [
        {
          id: 1,
          url: 'https://s1.tuchong.com/content-image/201907/be4f3b7bc7b57305bf4c4c2d304d5ba8.jpg'
        },
        {
          id: 2,
          url: 'https://avatar-static.segmentfault.com/201/274/2012740089-59e81e962035e_big64'
        }
      ],
      isDrawingMode: true
    }
  },
  created() {

  },
  async mounted() {
  },
  methods: {
    changeDrawMore() {
      this.isDrawingMode = !this.isDrawingMode
      this.$refs.canvas.freeDrawConfig({ isDrawingMode: this.isDrawingMode })
    },
    createLine() {
      this.$refs.canvas.createLine({ x: 10, y: 10, x1: 100, y1: 10, strokeColor: '#ff0000', strokeWidth: 10 })
    },
    createRect() {
      this.$refs.canvas.createRect({
        width: 100,
        height: 100,
        fill: 'rgba(0, 255, 255, 0.5)',
        left: 50,
        top: 50,
        stroke: '#ff0000',
        strokeWidth: 10
      })
    },
    createItext() {
      this.$refs.canvas.createItext('https://s1.tuchong.com/content-image/201907/be4f3b7bc7b57305bf4c4c2d304d5ba8.jpg', {
        fontFamily: 'sans-serif'
      })
    },
    setErase() {
      this.$refs.canvas.eraseDrawConfig({ drawWidth: 20 })
    },
    toggleMirror() {
      this.$refs.canvas.toggleMirror({ flip: 'Y' })
    },
    discardActive() {
      this.$refs.canvas.discardActive()
    },
    toDataURL(src, callback, outputFormat) {
      var img = new Image()
      img.crossOrigin = 'Anonymous'
      img.onload = function() {
        var canvas = document.createElement('CANVAS')
        var ctx = canvas.getContext('2d')
        var dataURL
        canvas.height = this.naturalHeight
        canvas.width = this.naturalWidth
        ctx.drawImage(this, 0, 0)
        dataURL = canvas.toDataURL(outputFormat)
        callback(dataURL)
      }
      img.src = src
      if (img.complete || img.complete === undefined) {
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='
        img.src = src
      }
    },
    handleAdd(url) {
      console.log('handleAdd', url)
      const createImage = this.$refs.canvas.createImage.bind(this.$refs.canvas)
      // this.toDataURL(url,createImage);
      createImage(url)
    },
    handleDelete() {
      this.$refs.canvas.removeCurrentObj()
    },
    rotate() {
      this.$refs.canvas.setRotate()
    },
    createImg() {
      const dataUrl = this.$refs.canvas.toDataUrl()
      // console.log(dataUrl);
      this.imgUrl = dataUrl
    },
    selected(obj, option) {
      this.$refs.canvas.setSelection(true)
      // console.log(obj);
      // console.log(option);
    },
    toJSON() {
      const json = this.$refs.canvas.toJson()
      console.log('JSON', json)
    },
    generateImg(backwardUrl = `/process`) {
      const json = this.$refs.canvas.toJson()
      var data = JSON.stringify({
        'mydata': json
      })

      var xhr = new XMLHttpRequest()
      xhr.withCredentials = true
      xhr.responseType = 'blob'

      xhr.addEventListener('readystatechange', function() {
        if (this.readyState === 4) {
          const blob = this.response
          const src = window.URL.createObjectURL(blob)
          window.open(src)
        }
      })

      xhr.open('POST', backwardUrl)
      xhr.setRequestHeader('Content-Type', 'application/json')

      xhr.send(data)
      return json
    }
  }
}
</script>

<style lang='scss' scoped>
.container {
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .header {
    height: 60px;

    border-bottom: 1px solid #efefef;
    display: -ms-flexbox;
    display: -moz-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;

    box-sizing: border-box;
    width: 100%;

    .logo {
      width: 200px;
      box-sizing: border-box;
      border-right: 1px solid #efefef;
      height: 60px;
      display: -ms-flexbox;
      display: -moz-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      box-align: center;
      -moz-box-align: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      box-pack: center;
      -webkit--moz-box-pack: center;
      -moz-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
    }
  }

  .content-wrapper {
    position: relative;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -moz-box;
    display: -webkit-box;
    display: flex;
    -moz-box-flex: 1;
    box-flex: 1;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;

    #canvas {
      border: 1px #777;
    }

    .tool-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      display: -ms-flexbox;
      display: -moz-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;

      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -moz-box-direction: normal;
      -moz-box-orient: vertical;
      -webkit-flex-direction: column;
      flex-direction: column;

      .pt-iconfont {
        padding: 20px 30px;
      }
    }

    .list-wraper {
      width: 200px;

      border-right: 1px solid #efefef;
      overflow-y: auto;
      flex-shrink: 0;
      box-sizing: border-box;

      display: -webkit-flex;
      display: -ms-flexbox;
      display: -moz-box;
      display: -webkit-box;
      display: flex;
      -webkit-box-orient: vertical;
      -moz-box-orient: vertical;
      -webkit-flex-direction: column;
      flex-direction: column;

      .image-wrapper {
        padding: 20px;
        display: -ms-flexbox;
        display: -moz-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;

        flex-shrink: 0;
        box-pack: center;
        -webkit--moz-box-pack: center;
        -moz-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        box-align: center;
        -moz-box-align: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        border-bottom: 1px solid #efefef;
        position: relative;
        img {
          width: 120px;
        }
        .pt-iconfont {
          position: absolute;
          top: 0px;
          right: 0px;
          font-size: 18px;
          color: #777;
          padding: 10px;
        }
      }
    }
  }
}
</style>
