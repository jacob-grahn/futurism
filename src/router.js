import Vue from 'vue'
import VueRouter from 'vue-router'
import SplashPage from './pages/splash/SplashPage'
import CardBuilderPage from './pages/card-builder/CardBuilderPage'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {path: '/', component: SplashPage},
    {path: '/splash', component: SplashPage},
    {path: '/card-builder', component: CardBuilderPage},
    {path: '*', redirect: '/'}
  ]
})
