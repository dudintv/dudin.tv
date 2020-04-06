import Vue from 'vue'
import VueCodeHighlight from 'vue-code-highlight'
import 'vue-code-highlight/themes/prism-tomorrow.css'
import 'prism-es6/components/prism-markup-templating'
import 'prism-es6/components/prism-basic'
import 'prism-es6/components/prism-r'

if (!Vue.prototype.VueCodeHighlight) {
  Vue.use(VueCodeHighlight)
}
