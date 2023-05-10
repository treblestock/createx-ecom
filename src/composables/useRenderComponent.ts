import {render, h, type Component, type AppContext, type PropType, VNode} from 'vue'

interface RenderComponentProps<Comp>{
  el: HTMLElement
  component: Component
  props: PropType<Comp>
  appContext: AppContext
}

export default function<Comp>({el, component, props, appContext}: RenderComponentProps<Comp> ) {
  
  let vnode: VNode | null = h(component, props)
  vnode.appContext = appContext
  render(vnode, el)

  return () => {
    render(null, el)
    vnode = null
  }
}