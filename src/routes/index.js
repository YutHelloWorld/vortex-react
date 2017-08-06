import asyncComponent from '../components/AsyncComponent'
import Home from './Home'

export default Home
export const AsyncCounter = asyncComponent(() => import(
  /* webpackChunkName: "counter" */
  './Counter'))
export const AsyncZen = asyncComponent(() => import(
  /* webpackChunkName: "zen" */
  './Zen'))
export const AsyncElapse = asyncComponent(() => import(
  /* webpackChunkName: "elapse" */
  './Elapse'))
export const AsyncRoute = asyncComponent(() => import(
  /* webpackChunkName: "route" */
  './Route'))
export const AsyncPageNotFound = asyncComponent(() => import(
  /* webpackChunkName: "pageNotFound" */
  './PageNotFound'))
