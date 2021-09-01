<template>
  <div>
    <canvas :id="id" :width="width" :height="height" />
  </div>
</template>

<script type="text/ecmascript-6">
import Loader from '../utils/fabricLoader'
import Utils from '../utils/objectEvent'
export default {
  name: 'Fabric',
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
      canvas: null,
      currentObj: null
    }
  },
  created() {
    Loader.ensureFabricIsLoaded(this.cdn).then().catch()
  },
  async mounted() {
    const fabric = await Loader.ensureFabricIsLoaded(this.cdn)
    fabric.Object.prototype.getZIndex = function() {
      return this.canvas.getObjects().indexOf(this)
    }
    this.canvas = new fabric.Canvas(this.id, { preserveObjectStacking: true })
    const canvas = this.canvas
    // this.setCornerIcons({});
    // canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));
    canvas.setWidth(this.width)
    canvas.setHeight(this.height)
    canvas.setBackgroundColor(this.color)
    // canvas.renderAll();
    // this.canvas.push(canvas);
    const that = this
    this.canvas.controlsAboveOverlay = false
    this.canvas.skipOffscreen = true
    // this.drawControls();
    this.canvas.on('selection:created', function(options) {
      that.$emit('selection:created', options)
    })
    this.canvas.on('mouse:down', function(options) {
      that.$emit('mouse:down', options)
    })
    this.canvas.on('mouse:up', function(options) {
      that.$emit('mouse:up', options)
    })
    this.canvas.on('mouse:move', function(options) {
      that.$emit('mouse:move', options)
    })
    this.canvas.on('mouse:dblclick', function(options) {
      that.$emit('mouse:dblclick', options)
    })
    this.canvas.on('mouse:over', function(options) {
      that.$emit('mouse:over', options)
    })
    this.canvas.on('mouse:out', function(options) {
      that.$emit('mouse:out', options)
    })
    this.canvas.on('object:added', function(options) {
      that.$emit('object:added', options)
    })
    this.canvas.on('object:removed', function(options) {
      that.$emit('object:removed', options)
    })
    this.canvas.on('object:modified', function(options) {
      that.$emit('object:modified', options)
    })
    this.canvas.on('object:rotating', function(options) {
      that.$emit('object:rotating', options)
    })
    this.canvas.on('object:scaling', function(options) {
      that.$emit('object:scaling', options)
    })
    this.canvas.on('object:moving', function(options) {
      that.$emit('object:moving', options)
    })
    this.canvas.on('selection:updated', function(options) {
      that.$emit('selection:updated', options)
    })
    this.canvas.on('selection:cleared', function(options) {
      that.$emit('selection:cleared', options)
    })
    this.canvas.on('before:selection:cleared', function(options) {
      that.$emit('before:selection:cleared', options)
    })
  },
  methods: {
    drawDottedline(options) {
      options = Object.assign({ x: 0, y: 0, x1: 10, y1: 10, color: '#B2B2B2', drawWidth: 2, offset: 6, empty: 3 }, options)
      const canvasObject = new window.fabric.Line([options.x, options.y, options.x1, options.y1], {
        strokeDashArray: [options.offset, options.empty],
        stroke: options.color,
        strokeWidth: options.drawWidth,
        ...options
      })
      this.canvas.add(canvasObject)
      this.canvas.renderAll()
    },
    drawArrowLine(options) {
      options = Object.assign({ x: 0, y: 0, x1: 0, y1: 0, color: '#B2B2B2', drawWidth: 2, fillColor: 'rgba(255,255,255,0)', theta: 35, headlen: 35 }, options)
      const canvasObject = new window.fabric.Path(this.drawArrowBase(options.x, options.y, options.x1, options.y1, options.theta, options.headlen), {
        stroke: options.color,
        fill: options.fillColor,
        strokeWidth: options.drawWidth,
        ...options
      })
      this.canvas.add(canvasObject)
      this.canvas.renderAll()
    },
    drawArrowBase(fromX, fromY, toX, toY, theta, headlen) {
      theta = typeof theta !== 'undefined' ? theta : 30
      headlen = typeof theta !== 'undefined' ? headlen : 10
      // 计算各角度和对应的P2,P3坐标
      var angle = (Math.atan2(fromY - toY, fromX - toX) * 180) / Math.PI
      var angle1 = ((angle + theta) * Math.PI) / 180
      var angle2 = ((angle - theta) * Math.PI) / 180
      var topX = headlen * Math.cos(angle1)
      var topY = headlen * Math.sin(angle1)
      var botX = headlen * Math.cos(angle2)
      var botY = headlen * Math.sin(angle2)
      var arrowX = fromX - topX
      var arrowY = fromY - topY
      var path = ' M ' + fromX + ' ' + fromY
      path += ' L ' + toX + ' ' + toY
      arrowX = toX + topX
      arrowY = toY + topY
      path += ' M ' + arrowX + ' ' + arrowY
      path += ' L ' + toX + ' ' + toY
      arrowX = toX + botX
      arrowY = toY + botY
      path += ' L ' + arrowX + ' ' + arrowY
      return path
    },
    freeDrawConfig(options) {
      options = Object.assign({ color: '#b2b2b2', drawWidth: 2 }, options)

      this.canvas.isDrawingMode = options.isDrawingMode
      this.canvas.freeDrawingBrush.color = options.color // 设置自由绘颜色
      this.canvas.freeDrawingBrush.width = options.drawWidth
      this.canvas.renderAll()
    },
    eraseDrawConfig(options) {
      options = Object.assign({ color: 'white', drawWidth: 2 }, options)

      this.canvas.freeDrawingBrush.color = options.color // 设置自由绘颜色
      this.canvas.freeDrawingBrush.width = options.drawWidth
      this.canvas.renderAll()
    },
    removeCurrentObj() {
      const obj = this.canvas.getActiveObject()
      // console.log(obj);
      this.canvas.remove(obj)
      this.canvas.renderAll()
    },
    getEditObj() {
      const obj = this.canvas.getActiveObject()
      this.removeCurrentObj()
      return obj
    },
    setEditObj(obj) {
      this.canvas.add(obj)
      this.canvas.renderAll()
    },
    setRotate(deg = 36) {
      const obj = this.canvas.getActiveObject()
      const angle = obj.angle
      obj.rotate(angle + deg)
      this.canvas.renderAll()
    },
    discardActive() {
      this.canvas.discardActiveObject()
      // this.canvas.discardActiveGroup();
      this.canvas.renderAll()
    },
    deactivateAll() {
      // this.canvas.deactivateAll().renderAll();
    },
    deactivateOne(obj) {
      var activeGroup = this.canvas.getActiveGroup()
      activeGroup.removeWithUpdate(obj)
      this.canvas.renderAll()
    },
    setSelection(flag) {
      this.canvas.selection = flag
      this.canvas.renderAll()
    },
    moveTo() {
      const obj = this.canvas.getActiveObject()
      console.log(this.canvas.sendBackwards)
      this.canvas.sendBackwards(obj, true)
      this.canvas.discardActiveObject()
      // this.canvas.discardActiveGroup();
    },
    createRect(options) {
      options = Object.assign({ width: 0, height: 0, fillColor: 'rgba(255, 255, 255, 0)', left: 50, top: 50 }, options)
      const rect = new window.fabric.Rect({
        fill: options.fillColor, // 填充的颜色
        ...options
      })
      this.canvas.add(rect)
      this.canvas.renderAll()
    },
    createCircle(options) {
      options = Object.assign({ left: 0, top: 0, radius: 30, fillColor: 'rgba(255, 255, 255, 0)', color: '#B2B2B2', drawWidth: 2 }, options)
      const defaultOption = {
        fill: options.fillColor,
        strokeWidth: options.drawWidth,
        stroke: options.color,
        ...options
      }
      const Circle = new window.fabric.Circle(defaultOption)
      this.canvas.add(Circle)
      this.canvas.renderAll()
    },
    createTriangle(options) {
      options = Object.assign({ x: 0, y: 0, x1: 0, y1: 0, x2: 0, y2: 0, left: 100, top: 100, color: '#B2B2B2', drawWidth: 2, fillColor: 'rgba(255, 255, 255, 0)', id: 'triangle' }, options)
      var path = 'M ' + options.x + ' ' + options.y + ' L ' + options.x1 + ' ' + options.y1 + ' L ' + options.x2 + ' ' + options.y2 + ' z'
      const canvasObject = new window.fabric.Path(path, {
        stroke: options.color,
        strokeWidth: options.drawWidth,
        fill: options.fillColor,
        ...options
      })
      this.canvas.add(canvasObject)
      this.canvas.renderAll()
    },
    createEqualTriangle(options) {
      options = Object.assign({ left: 100, top: 100, width: 50, height: 80, fillColor: 'rgba(255, 255, 255, 0)', color: '#B2B2B2', drawWidth: 2 }, options)
      // console.log(defaultOption);
      const triangle = new window.fabric.Triangle({
        fill: options.fillColor,
        strokeWidth: options.drawWidth,
        stroke: options.color,
        ...options
      })
      this.setContronVisibility(triangle)
      this.canvas.add(triangle)
      this.canvas.renderAll()
    },
    createLine(options) {
      options = Object.assign({ x: 0, y: 0, x1: 10, y1: 10, fillColor: 'rgba(255, 255, 255, 0)', strokeColor: '#B0B0B0' }, options)
      const line = new window.fabric.Line([options.x, options.y, options.x1, options.y1], {
        fill: options.fillColor,
        stroke: options.strokeColor,
        ...options
      })
      line.setControlsVisibility({
        bl: false,
        br: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: true,
        tl: false,
        tr: false
      })
      this.canvas.add(line)
      this.canvas.renderAll()
    },
    createEllipse(options) {
      options = Object.assign({ rx: 100, ry: 200, fillColor: 'rgba(255, 255, 255, 0)', angle: 90, strokeColor: '#B0B0B0', strokeWidth: 3, left: 50, top: 50 }, options)
      var ellipse = new window.fabric.Ellipse({
        fill: options.fillColor,
        stroke: options.strokeColor,
        ...options
      })
      this.canvas.add(ellipse)
      this.canvas.renderAll()
    },
    createText(text, options) {
      options = Object.assign({ left: 100, top: 100 }, options)
      var canvasObj = new window.fabric.Text(text, { ...options })
      this.canvas.add(canvasObj)
      this.canvas.renderAll()
    },
    createItext(text, options) {
      options = Object.assign({ left: 0, top: 0, fill: '#000' }, options)
      const IText = new window.fabric.IText(text, options)
      IText.setControlsVisibility({
        bl: false,
        br: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: true,
        tl: false,
        tr: false
      })
      this.canvas.add(IText)
      if (options.width) IText.set('width', options.width)
      this.canvas.renderAll()
    },
    createTextbox(text, options) {
      // _fontSizeMult: 5,
      options.fillColor = options.fillColor ? options.fillColor : options.fill
      options = Object.assign({ fontSize: 14, fillColor: '#000000', registeObjectEvent: false, width: 50, left: 100, top: 100 }, options)
      var canvasObj = new window.fabric.Textbox(text, {
        fill: options.fillColor,
        ...options
      })
      // let arr = canvasObj._splitTextIntoLines(text);
      // console.log(arr);
      this.canvas.add(canvasObj)
      if (options.registeObjectEvent) {
        Utils.registeObjectEvent(this, canvasObj)
      }
      this.canvas.renderAll()
    },
    createImageByImg(img, options) {
      options = options || {}
      const canvas = this.canvas
      const that = this
      // let maxWidth = that.width;
      let width = 0
      let height = 0
      width = img.width
      height = img.height
      // if (img.width > img.height) {
      //   if (img.width > maxWidth) {
      //     width = maxWidth;
      //     height = (img.height / img.width) * width;
      //   } else {
      //     width = img.width;
      //     height = img.height;
      //   }
      // } else {
      //   if (img.height > maxWidth) {
      //     height = maxWidth;
      //     width = (img.width / img.height) * height;
      //   } else {
      //     width = img.width;
      //     height = img.height;
      //   }
      // }
      if (options && options.width) {
        width = options.width
      }
      if (options && options.height) {
        height = options.height
      }
      let leftP = that.width / 2
      let topP = that.height / 2
      if ((options && options.left) || (options && options.left === 0)) {
        leftP = options.left + width / 2
      }
      if ((options && options.top) || (options && options.top === 0)) {
        topP = options.top + height / 2
      }
      const imgOptions = Object.assign(options, {
        id: (options && options.id) ? options.id : 'image',
        left: leftP,
        top: topP,
        scaleX: width / img.width,
        scaleY: height / img.height,
        originX: 'center',
        originY: 'center',
        cornerStrokeColor: 'blue'
      })
      delete imgOptions.width
      delete imgOptions.height
      var canvasImage = new window.fabric.Image(img, imgOptions)

      canvasImage.hasControls = true
      canvasImage.hasBorders = true

      canvas.add(canvasImage) // 把图片添加到画布上
      if (options && options.registeObjectEvent) {
        Utils.registeObjectEvent(that, canvasImage)
      }
      canvas.renderAll.bind(canvas)
    },
    createImage(url, options) {
      options = options || {}
      const canvas = this.canvas
      const that = this
      window.fabric.Image.fromURL(url, function(img) {
        // 添加过滤器
        // img.filters.push(new fabric.Image.filters.Grayscale());
        // 应用过滤器并重新渲染画布执行
        // img.applyFilters(canvas.renderAll.bind(canvas));
        // console.log(img);
        let width = 0
        let height = 0
        width = img.width
        height = img.height
        // if (img.width > img.height) {
        //   if (img.width > maxWidth) {
        //     width = maxWidth;
        //     height = (img.height / img.width) * width;
        //   } else {
        //     width = img.width;
        //     height = img.height;
        //   }
        // } else {
        //   if (img.height > maxWidth) {
        //     height = maxWidth;
        //     width = (img.width / img.height) * height;
        //   } else {
        //     width = img.width;
        //     height = img.height;
        //   }
        // }
        if (options && options.width) {
          width = options.width
        }
        if (options && options.height) {
          height = options.height
        }
        let leftP = that.width / 2
        let topP = that.height / 2
        if ((options && options.left) || (options && options.left === 0)) {
          leftP = options.left + width / 2
        }
        if ((options && options.top) || (options && options.top === 0)) {
          topP = options.top + height / 2
        }
        // console.log(options);
        const imgOptions = Object.assign(options, {
          // ...options,
          id: (options && options.id) ? options.id : 'image',
          left: leftP,
          top: topP,
          scaleX: width / img.width,
          scaleY: height / img.height,
          originX: 'center',
          originY: 'center',
          cornerStrokeColor: 'blue'
        })
        delete imgOptions.width
        delete imgOptions.height
        // console.log("imgOptions", imgOptions);
        img.set(imgOptions)

        img.hasControls = true
        img.hasBorders = true
        // img.customiseCornerIcons(
        //   {
        //     settings: {
        //       borderColor: '#b4b4b4',
        //       cornerSize: 20,
        //       cornerBackgroundColor: '#FF0000',
        //       cornerShape: 'circle',
        //       cornerPadding: 0
        //     }
        //     tl: {
        //       icon: dotCircleImg
        //     },
        //     tr: {
        //       icon: dotCircleImg
        //     },
        //     bl: {
        //       icon: dotCircleImg
        //     },
        //     br: {
        //       icon: dotCircleImg
        //     },
        //     mb: {
        //       icon: dotCircleImg
        //     },
        //     mt: {
        //       icon: dotCircleImg
        //     },
        //     mr: {
        //       icon: dotCircleImg
        //     },
        //     mtr: {
        //       icon: dotCircleImg
        //     }
        //   },
        //   function () {
        //     canvas.renderAll();
        //   }
        // );
        img.setControlsVisibility({
          bl: true,
          br: true,
          mb: false,
          ml: false,
          mr: false,
          mt: false,
          mtr: true,
          tl: true,
          tr: true
        })
        canvas.add(img) // 把图片添加到画布上
        if (options && options.registeObjectEvent) {
          Utils.registeObjectEvent(that, img)
        }
        canvas.renderAll.bind(canvas)
      })
    },
    toJson() {
      const canvas = this.canvas
      const indexs = canvas._objects.map(object => Number(object.getZIndex()))
      const json = canvas.toJSON()
      for (const idx in indexs) {
        json.objects[idx]['z-index'] = indexs[idx]
      }
      json['width'] = canvas.getWidth()
      json['height'] = canvas.getHeight()
      return json
    },
    toDataUrl() {
      const canvas = this.canvas
      const dataURL = canvas.toDataURL({
        format: 'jpeg',
        quality: 1
      })
      return dataURL
    },
    loadFromJSON(json, cb) {
      const canvas = this.canvas
      canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function(
        o,
        object
      ) {
        // `o` = json object
        // `object` = fabric.Object instance
        // ... do some stuff ...
        cb(o)
        object.setControlsVisibility({
          bl: true,
          br: true,
          mb: false,
          ml: true,
          mr: true,
          mt: false,
          mtr: true,
          tl: true,
          tr: true
        })
      })
    },
    clear() {
      this.canvas.clear()
    },
    getObjects() {
      return this.canvas.getObjects()
    },
    renderAll() {
      this.canvas.renderAll(this.canvas)
    },
    renderTop() {
      this.canvas.renderTop()
    },
    setBackgroundColor(color) {
      const canvas = this.canvas
      this.canvas.setBackgroundColor(color, canvas.renderAll.bind(canvas))
    },
    setBackgroundImage(options) {
      const canvas = this.canvas
      let opt = {
        opacity: 1,
        left: 0,
        top: 0,
        angle: 0,
        crossOrigin: null,
        originX: 'left',
        originY: 'top',
        scaleX: 1,
        scaleY: 1
      }
      // console.log(options);
      if (Object.prototype.toString.call(options) === '[object String]') {
        console.log('字符串兼容')
        opt.imgUrl = options
      } else {
        opt = Object.assign(opt, options)
      }

      // canvas.setBackgroundImage(opt.imgUrl, canvas.renderAll.bind(canvas), {
      //   opacity: opt.opacity,
      //   angle: opt.angle,
      //   left: opt.left,
      //   top: opt.top,
      //   originX: 'left',
      //   originY: 'top',
      //   crossOrigin: opt.crossOrigin,
      //   ...opt
      // });

      window.fabric.Image.fromURL(opt.imgUrl, function(img) {
        img.set({ width: opt.width ? opt.width : canvas.width, height: opt.height ? opt.height : canvas.height, originX: 'left', originY: 'top', scaleX: opt.scaleX, scaleY: opt.scaleY })
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), { ...opt })
      })
    },
    toSvg() {
      return this.canvas.toSVG()
    },
    drawControls() {
      const canvas = document.createElement('canvas')
      var ctx = canvas.getContext('2d')
      ctx.setLineDash([])
      ctx.beginPath()
      ctx.ellipse(100, 100, 50, 75, (45 * Math.PI) / 180, 0, 2 * Math.PI) // 倾斜45°角
      ctx.stroke()
      ctx.setLineDash([5])
      ctx.moveTo(0, 200)
      ctx.lineTo(200, 0)
      ctx.stroke()
      this.canvas.drawControls(ctx)
      // this.canvas.controlsAboveOverlay=true;
    },
    setContronVisibility(obj) {
      obj.setControlsVisibility({
        bl: true,
        br: true,
        mb: false,
        ml: true,
        mr: true,
        mt: false,
        mtr: true,
        tl: true,
        tr: true
      })
    },
    // 设置mirror
    toggleMirror(options) {
      options = options || {}
      options = Object.assign({ flip: 'X' }, options)
      const img = this.canvas.getActiveObject()
      // if (img && img.type == 'image') {
      if (options.flip === 'X') {
        img.toggle('flipX')
      } else {
        img.toggle('flipY')
      }
      this.renderAll()
      // }
    },
    // 设置层级
    toNextLayer() {
      const obj = this.canvas.getActiveObject()
      if (!obj) {
        return
      }
      obj.sendBackwards(true)
      this.renderTop()
      // this.canvas.setActiveObject(obj);
    },
    toBottomLayer() {
      const obj = this.canvas.getActiveObject()
      if (!obj) {
        return
      }
      obj.sendToBack()
      this.renderTop()
      // this.canvas.setActiveObject(obj);
    },
    toLastLayer() {
      const obj = this.canvas.getActiveObject()
      if (!obj) {
        return
      }
      obj.bringForward(true)
      this.renderTop()
    },
    toTopLayer() {
      const obj = this.canvas.getActiveObject()
      if (!obj) {
        return
      }
      obj.bringToFront()
      this.renderTop()
    },
    drawByPath(pathArray, options) {
      options = Object.assign({ fillColor: 'rgba(255, 255, 255, 0)', left: 150, top: 150, strokeColor: '#B0B0B0', strokeWidth: 3 }, options)
      let pathStr = 'M '
      for (const item of pathArray) {
        pathStr = pathStr + item[0] + ' ' + item[1] + ' '
      }
      pathStr = pathStr + 'z'
      console.log(pathStr)
      var path = new window.fabric.Path(pathStr)
      path.set({
        stroke: options.strokeColor,
        fill: options.fillColor,
        ...options
      })
      this.canvas.add(path)
    }
  }
}
</script>

<style lang="scss" scoped></style>
