const BASE_URL = '/rpo'

const routes = {
  home: '/',
  games: '/games',
  about: '/about',
  contact: '/contact',
  signup: '/signup',
  signin: '/signin',
}

Object.entries(routes).forEach(([key, value]) => (routes[key] = `${BASE_URL}${value}`))

export default routes
