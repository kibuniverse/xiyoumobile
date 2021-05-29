import Home from './pages/home'
import Wiki from './pages/wiki'

export const menu = [
  {
    key: 'home',
    path: '/home',
    title: '主页',
    component: Home,
  },
  {
    key: 'wiki',
    path: '/wiki',
    title: 'wiki',
    component: Wiki,
  }
]