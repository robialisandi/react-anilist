import Home from '../pages/Home'
import Anime from '../pages/Anime'

export const publicRoutes = [
  {
    path: '/',
    element: Home
  },
  {
    path: '/anime/:id',
    element: Anime
  },
]