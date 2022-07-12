<template>
  <nav class="navbar">
    <div class="navbar__container">
      <nuxt-link to="/" class="navbar__container--logo">
        <span class="navbar__container--logo-text">NUXT 3</span>
      </nuxt-link>
      <v-list list-type="flex">
        <v-list-item class="navbar__container--item" v-for="item in menu" :key="item.id">
          <nuxt-link class="link__primary" :to="item.url">{{ item.title }}</nuxt-link>
        </v-list-item>
      </v-list>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const { useGetNavigationItems } = useNavigation()

const { menu } = useGetNavigationItems()
</script>

<style lang="scss">
.navbar {
  @apply border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-800;
  &__container {
    @apply container flex flex-wrap justify-between items-center mx-auto;
    &--logo {
      @apply flex items-center;
      &-text {
        @apply self-center text-xl font-semibold whitespace-nowrap text-white;
      }
    }
    &--item {
      @apply mr-4;
      &:last-child {
        @apply mr-0;
      }
    }
  }
}
</style>
