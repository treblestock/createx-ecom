import type {DirectiveBinding} from 'vue'
export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (binding.value) {
      el.classList.add(binding.value)
    }
  }
}