import Vue from 'vue'
import VueRouter from 'vue-router'
import SplashPage from '../pages/splash-page/SplashPage'
import LoginPage from '../pages/login-page/LoginPage'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {path: '/', component: SplashPage},
    {path: '/splash', component: SplashPage},
    {path: '/login', component: LoginPage},
    {path: '*', redirect: '/'}
  ]
})
