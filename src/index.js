import Component from './lib/component.vue'
import Fabric from './lib/fabric-core'
import FabricEditor from './lib/fabric-editor'

const components = [
  Component,
  Fabric,
  FabricEditor
]

export {
  Component,
  Fabric,
  FabricEditor
}

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
