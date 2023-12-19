// import * as endpoints from "~/server/endpoints/index"
// import type { EndpointsConfig, ResolveReturn } from "~/server/endpoints/index"
// const baseApiUrl = import.meta.env.VITE_SERVER_BASE_URL + '/api/v1'



// export default async function handler<A extends keyof EndpointsConfig, P extends EndpointsConfig[A]['payload']>(
//   action: A,
//   payload: P
//   ): Promise<ResolveReturn<A, P> > { 
//   // ) { 

//   const url = new URL(baseApiUrl)
//   url.searchParams.set('action', action)
//   url.searchParams.set('payload', JSON.stringify(payload))


//   // const endpoint = endpoints[action]
//   // type Return = ReturnType<typeof endpoint<typeof payload>>


//   const resp = await fetch(url)
//   const res = await resp.json()
//   // return res as Return
//   return res
// }