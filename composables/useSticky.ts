import { MaybeElement } from '@vueuse/core'
import { unwrapElement } from '~~/utils/unwrapElement'

type StickyOptions = {
  offset: number
  customClass?: string
  direction?: boolean
}

export const useSticky = (options: StickyOptions) => {
  const elementRef = ref<HTMLElement | null>(null)
  const lastScrollPosition = ref(0)

  const onScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    scrollTop > options.offset
      ? elementRef.value?.classList.add(options.customClass ?? 'sticky')
      : elementRef.value?.classList.remove(options.customClass ?? 'sticky')

    if (options.direction) getDirection(scrollTop, lastScrollPosition.value)
  }

  const getDirection = (newScroll: number, oldScroll: number) => {
    newScroll >= oldScroll
      ? document.documentElement.setAttribute('data-scroll-direction', 'down')
      : document.documentElement.setAttribute('data-scroll-direction', 'up')
    lastScrollPosition.value = newScroll
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return {
    register: (maybeElement: MaybeElement) => {
      const el = unwrapElement(maybeElement)
      if (el) elementRef.value = el
    },
  }
}
