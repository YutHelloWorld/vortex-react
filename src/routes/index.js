import AsyncLoad from '../components/AsyncLoad'
import LoginRoute from './Login'

export const AsyncZen = AsyncLoad({
  loader: () => import(/* webpackChunkName: "zen" */'./Zen'),
})

export const AsyncHome = AsyncLoad({
  loader: () => import(/* webpackChunkName: "home" */'./Home'),
})

export const Login = LoginRoute
