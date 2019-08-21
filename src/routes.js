import Home from './pages/Home'
import About from './pages/About'
import OpenSource from './pages/OpenSource'
import Work from './pages/Work'

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
  }
]

export default routes
