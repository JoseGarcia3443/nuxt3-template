<template>
  <nuxt-link
    :="$attrs"
    :class="['link', `link__${props.variant}`, `link__style--${props.color}`]"
    :to="props.href"
  >
    <slot />
  </nuxt-link>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import type { LinkTypes, LinkColors } from './type'

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  variant: {
    type: String as PropType<LinkTypes>,
    default: 'default',
  },
  color: {
    type: String as PropType<LinkColors>,
    default: 'light',
  },
})
</script>

<style lang="scss">
.link {
  &__style {
    &--light {
      @apply text-light after:bg-nuxt-accent;
    }
  }
  &__default {
    @apply font-bold no-underline;
  }
  &__underline {
    @apply font-bold no-underline relative transition-all duration-300;
    @apply after:content-[''] after:absolute after:w-full after:h-[1px];
    @apply after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300;
    @apply hover:after:scale-x-100 hover:after:origin-bottom-left;
  }
}
</style>
