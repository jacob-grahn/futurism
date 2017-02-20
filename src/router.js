import Vue from 'vue'
import VueRouter from 'vue-router'
import SplashPage from './pages/splash/SplashPage'
import SignOutPage from './pages/sign-out/SignOutPage'
import CardBuilderPage from './pages/card-builder/CardBuilderPage'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {path: '/', component: SplashPage},
    {path: '/splash', component: SplashPage},
    {path: '/sign-out', component: SignOutPage},
    {path: '/card-builder', component: CardBuilderPage},
    {path: '*', redirect: '/'}
  ]
})
