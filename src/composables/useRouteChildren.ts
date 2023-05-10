import { useRouter, type RouteRecordNormalized, RouteRecordRaw } from "vue-router"
export default function<K extends keyof RouteRecordRaw>(routeName?: string, extractChildRouteProp?: K) {
  const router = useRouter()
  const routes = router.getRoutes()
  routeName ||= router.currentRoute.value.name as string
  const route = routes.find(item => item.name === routeName) as RouteRecordNormalized
  
  if (!extractChildRouteProp) return route.children // full option case
  return route.children.map(option => option[extractChildRouteProp])
}