<template>
  <div class="page-home page">
    <h2>Description</h2>
    <section class="demo">
      <div class="section-content">
        <fabric-editor ref="editor" :width="1000" :height="500" />
      </div>
    </section>

    <section class="snippets">
      <Collapse>
        <div class="section-content">
          <CodeSnippet class="snippet" :code="componentSnippet" lang="html" />
          <div class="plus">+</div>
          <CodeSnippet class="snippet" :code="mainSnippet" lang="js" />
        </div>
      </Collapse>
    </section>
  </div>
</template>

<script>
import CodeSnippet from '../components/CodeSnippet.vue'
import Collapse from '../components/Collapse.vue'

const mainSnippet = `
data () {
  return {
    msg: 'vue fabric editor'
  }
}
`

const componentSnippet = `
<fabric-editor :width="1000" :height="500" />
`
export default {
  name: 'Home',
  components: {
    CodeSnippet,
    Collapse
  },

  data() {
    return {
      msg: 'vue fabric editor',
      mainSnippet,
      componentSnippet
    }
  }
}
</script>
