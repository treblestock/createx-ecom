import { h, type VNode, type SetupContext, Component} from 'vue'

import Slider from '~/components/widgets/Slider.vue'

interface WithDefaultSlot {
  slots: {
    default: (...args: any) => VNode
  }
}


export default function(props: {cond: any, slider?: Component}, { slots }: SetupContext & WithDefaultSlot) {
  const vw = document.documentElement.clientWidth
  const slider = props.slider || Slider

  const vnode = vw < 400
    ? h(slider, null, {
      default: slots.default
    })
    : h('div', [slots.default()] )

  return vnode
}