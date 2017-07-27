import Vue from 'vue'
import Router from 'vue-router'
import itemOne from '../components/education'
import itemTwo from '@/components/experience'
import itemThree from '@/components/projects'
import itemFour from '@/components/contact'

Vue.use(Router)

const routes = [
    {path: '/', name: 'education', component: itemOne},
    {path: '/education', name: 'education', component: itemOne},
    {path: '/experience', name: 'experience', component: itemTwo},
    {path: '/projects', name: 'projects', component: itemThree},
    {path: '/contact', name: 'contact', component: itemFour}
]

export default new Router({
  routes,
  data: {
    itemOne: 'Education',
    itemTwo: 'Experience',
    itemThree: 'Projects',
    itemFour: 'Contact'
  }
})
