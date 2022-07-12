<template>
  <ul :class="['list', `list__${props.listType}`]">
    <slot />
  </ul>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { ListType } from './types'

const props = defineProps({
  listType: {
    type: String as PropType<ListType>,
    default: 'flex',
  },
})
</script>

<style lang="scss">
.list {
  &__flex {
    @apply flex;
  }
  &__grid {
    @apply grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4;
  }
  &__item {
    @apply h-full flex justify-center items-center;
  }
}
</style>
