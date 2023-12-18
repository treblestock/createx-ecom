import BreadCrumbs from "~/components/widgets/BreadCrumbs.vue"

type BreadCrumbs = InstanceType<typeof BreadCrumbs>
type BreadCrumbsAPI = Pick<BreadCrumbs, 'push' | 'update' | 'backTo' | 'remove' | 'pushClear'>


declare module 'vue-router' {
  interface Router {
    $pushBreadCrumb: BreadCrumbsAPI['push']
    $updateBreadCrumb: BreadCrumbsAPI['update']
    $backToBreadCrumb: BreadCrumbsAPI['backTo']
    $removeBreadCrumb: BreadCrumbsAPI['remove']
  }
}

// installation
// let _isBreadCrumbsInstalled = false
// let api: BreadCrumbsAPI

// function isBreadCrumbsInstalled() {
//   return _isBreadCrumbsInstalled
// }

// export function installBreadCrumbs() {
//   _isBreadCrumbsInstalled = true
//   const router = useRouter()
//   api = {
//     push: router.$pushBreadCrumb,
//     backTo: router.$backToBreadCrumb
//   }
// }

let api: BreadCrumbsAPI 


export function provideApi(providedApi: BreadCrumbsAPI) {
  const router = useRouter()
  provide('breadCrumbsApi', api)

  api = providedApi
  router.$pushBreadCrumb = api.push
  router.$updateBreadCrumb = api.update
  router.$backToBreadCrumb = api.backTo
  router.$removeBreadCrumb = api.remove

}
// ===

export default function(): BreadCrumbsAPI {
  if (!api) throw new Error(`useBreadCrumbs.ts: useBreadCrumbs() before installBreadCrumbs() )`)
  return api
}