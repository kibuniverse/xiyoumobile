import Home from './pages/home'
import Wiki from './pages/wiki'
import Member from './pages/member'
import Join from './pages/join'
import ActivityDetail from './components/activity-detail'

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
  {
    key: 'join',
    path: '/join',
    title: '加入我们',
    component: Join,
  },
  {
    key: 'ActivityDetail',
    path: '/activity-detail',
    title: '活动详细页面',
    component: ActivityDetail,
    notInMenu: true,
  },
]
