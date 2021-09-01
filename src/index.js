import Fabric from './lib/fabric-core'
import FabricEditor from './lib/fabric-editor'

const components = [
  Fabric,
  FabricEditor
]

export {
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
