// Credit to https://github.com/matt-oconnell/vue-monaco-editor/blob/master/src/MonacoLoader.js

let loaderPending = false
let loaderCallbacks = []

function onAmdLoaderLoad() {
  let currentCallback = loaderCallbacks.shift()
  while (currentCallback) {
    window.clearTimeout(currentCallback.timeout)
    currentCallback.resolve()
    currentCallback = loaderCallbacks.shift()
  }
}

function onAmdLoaderError(err) {
  let currentCallback = loaderCallbacks.shift()
  while (currentCallback) {
    window.clearTimeout(currentCallback.timeout)
    currentCallback.reject(err)
    currentCallback = loaderCallbacks.shift()
  }
}

export default {
  reset() {
    loaderPending = false
    loaderCallbacks = []
  },
  ensureFabricIsLoaded(srcPath = 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/2.3.6/fabric.min.js') {
    return new Promise((resolve, reject) => {
      if (window.fabric) {
        resolve(window.fabric)
      }

      const timeout = window.setTimeout(() => {
        reject(new Error("Couldn't load fabric after 60s"))
      }, 60000)

      loaderCallbacks.push({
        resolve: () => {
          if (loaderPending) {
            loaderPending = false
          }
          resolve(window.fabric)
        },
        timeout,
        reject
      })

      if (!loaderPending) {
        const loaderScript = window.document.createElement('script')
        loaderScript.type = 'text/javascript'
        loaderScript.src = srcPath
        loaderScript.addEventListener('load', onAmdLoaderLoad)
        loaderScript.addEventListener('error', onAmdLoaderError)
        window.document.body.appendChild(loaderScript)
        loaderPending = true
      }
    })
  }
}
