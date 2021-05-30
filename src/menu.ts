import Home from './pages/home'
import Wiki from './pages/wiki'
import Member from './pages/member'

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
  },
  {
    key: 'member',
    path: '/member',
    title: '成员',
    component: Member,
  },
]
