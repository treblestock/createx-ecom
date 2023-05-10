import useApp from '~/composables/useApp'

export default function(globalPropertyName: string) {
  return useApp()?.config.globalProperties[globalPropertyName]
}
