<template>
  <header :ref="getRefElement" class="header">
    <div class="header__wrapper">
      <div class="header__wrapper--content">
        <h1 class="header__wrapper--title layer" data-speed="-1">
          {{ $t('pages.header.placeholder') }}
        </h1>
      </div>
      <v-img
        v-for="img in images"
        :key="img.id"
        :src="img.src"
        class="header__wrapper--image layer"
        :data-speed="img.speed"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
import {
  useEventListener,
  MaybeElement,
  useWindowSize,
  useMouse,
} from '@vueuse/core'
import { unwrapElement } from '~~/utils/unwrapElement'

const { width, height } = useWindowSize()
const { x, y } = useMouse()

const parallax = ref<HTMLElement | null>(null)
const images = reactive([
  { id: 1, src: '/assets/images/parallax/1.png', speed: 1 },
  { id: 2, src: '/assets/images/parallax/2.png', speed: -4 },
  { id: 3, src: '/assets/images/parallax/3.png', speed: -2 },
  { id: 4, src: '/assets/images/parallax/4.png', speed: 5 },
  { id: 5, src: '/assets/images/parallax/5.png', speed: 4 },
  { id: 6, src: '/assets/images/parallax/6.png', speed: 6 },
  { id: 7, src: '/assets/images/parallax/7.png', speed: 2 },
  { id: 8, src: '/assets/images/parallax/8.png', speed: -9 },
  { id: 9, src: '/assets/images/parallax/9.png', speed: 8 },
  { id: 10, src: '/assets/images/parallax/10.png', speed: 3 },
  { id: 11, src: '/assets/images/parallax/11.png', speed: 6 },
  { id: 12, src: '/assets/images/parallax/12.png', speed: -6 },
])

const onParallaxEffect = () => {
  const layers = parallax.value?.querySelectorAll<HTMLElement>('.layer')

  layers?.forEach((layer) => {
    const speed = layer.getAttribute('data-speed')
    const xPosition = (width.value - x.value * parseInt(speed || '0')) / 100
    const yPosition = (height.value - y.value * parseInt(speed || '0')) / 100
    layer.style.transform = `translate(${xPosition}px, ${yPosition}px)`
  })
}

const getRefElement = (maybeElement: MaybeElement) => {
  const el = unwrapElement(maybeElement)
  if (el) parallax.value = el
}

useEventListener(parallax, 'mousemove', onParallaxEffect)
</script>

<style lang="scss">
.header {
  @apply bg-nuxt-primary h-screen;

  &__wrapper {
    @apply container mx-auto h-full;

    &--content {
      @apply h-full flex items-center justify-center;
    }

    &--title {
      @apply font-semibold text-white text-[2rem] md:text-[4vw] uppercase tracking-widest;
      @apply relative z-10;
    }

    &--image {
      @apply absolute top-0 left-0 w-full h-full object-cover;
    }
  }
}
</style>
