<template>
  <v-list v-if="props.blogs && props.blogs.length" list-type="grid">
    <v-list-item v-for="blog in props.blogs" :key="blog.id">
      <v-card>
        <template #header>
          {{ blog.title }}
        </template>
        <template #body>
          {{ blog.body }}
        </template>
      </v-card>
    </v-list-item>
  </v-list>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { IBlog } from '@/types'

const props = defineProps({
  blogs: {
    type: Array as PropType<IBlog[]>,
    default: () => [],
  },
})
</script>

<style lang="scss">
.masonry {
  @apply py-4;
}

// transition example
.list {
  &-move,
  &-enter-active,
  &-leave-active {
    @apply transition-all duration-500;
  }

  &-enter-from,
  &-leave-to {
    @apply opacity-0 translate-x-8;
  }
  &-leave {
    &-active {
      @apply absolute;
    }
  }
}
</style>
