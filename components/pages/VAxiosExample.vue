<script lang="ts" setup>
import { IBlog } from '~~/types'

const config = useRuntimeConfig()

const {
  data: blogs,
  pending,
  refresh,
} = await useFetch<IBlog[]>('/posts', {
  baseURL: config.API_BASE_URL,
  server: false,
})

const totalBlogsFetched = computed(() => (blogs.value ? blogs.value.length : 0))
</script>

<template>
  <div class="viewport">
    <div class="viewport__loader">
      <v-loader v-if="pending" size="sm" />
    </div>
    <div class="section">
      <div class="section__header">
        <h2 class="section__header--title">{{ $t('pages.axios.title') }}</h2>
      </div>
      <div class="section__body">
        <div class="section__body--refresh">
          <button class="button__primary" @click="refresh()">
            {{ $t('pages.axios.refresh') }}
          </button>
        </div>
        <div class="section__body--blogs">
          <div class="section__body--blogs-counter">
            <span>
              {{ $t('pages.axios.count', { value: totalBlogsFetched }) }}
            </span>
          </div>
          <v-blog-list :blogs="blogs" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section {
  @apply flex flex-col;
  &__header {
    @apply flex flex-col py-2;
    &--title {
      @apply text-center text-2xl font-bold text-gray-300;
    }
  }
  &__body {
    @apply flex flex-col items-center justify-center relative;
    &--refresh {
      @apply py-4;
    }
    &--blogs {
      @apply w-full;
      &-counter {
        @apply flex justify-end py-8;
        & span {
          @apply text-gray-300;
        }
      }
    }
  }
}
</style>
