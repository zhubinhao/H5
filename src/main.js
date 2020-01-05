import Vue from 'vue'
import './plugins/axios'
import VueLazyload from 'vue-lazyload'
// import 'normalize.css' //css样式初始化的插件
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import 'lib-flexible'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css';
import './css/style.css'
Vue.use(VueLazyload,{
  error: require('./assets/error.png'),
})
Vue.use(Mint); 
Vue.config.productionTip = false

// 全局导入组件
const requireComponent = require.context(
  // 其组件目录的相对路径
  './components/common'
  // 是否查询其子目录
  , true
  // 匹配基础组件文件名的正则表达式, 这里可以匹配的文件名为xxx.vue格式
  , /[A-Za-z0-9-_]+\.(vue|js)$/)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 剥去文件名开头的 `'./` 和结尾的扩展名
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
