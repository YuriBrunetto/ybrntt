import Home from './pages/Home'
import About from './pages/About'
import OpenSource from './pages/OpenSource'
import Work from './pages/Work'
import TalkToMe from './pages/TalkToMe'

const routes = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: Home
  },
  {
    title: 'About',
    path: '/about',
    component: About
  },
  {
    title: 'OpenSource',
    path: '/open-source',
    component: OpenSource
  },
  {
    title: 'Work',
    path: '/work',
    component: Work
  },
  {
    title: 'Talk to me',
    path: '/talk-to-me',
    component: TalkToMe
  }
]

export default routes
