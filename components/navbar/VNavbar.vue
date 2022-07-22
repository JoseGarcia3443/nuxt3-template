<script lang="ts" setup>
import { PropType } from 'vue'
import { VariantNavbar } from './type'

const props = defineProps({
  variant: {
    type: String as PropType<VariantNavbar>,
    default: 'default',
  },
})

const { useGetNavigationItems } = useNavigation()
const { menu } = useGetNavigationItems()

/* eslint-disable @typescript-eslint/no-unused-vars */
const { SVGProps } = useSVG({
  customStyles: {
    width: '180px',
    height: '45px',
  },
})

const { register } = useSticky({
  offset: 100,
  customClass: 'navbar__sticky--scrolling',
  direction: true,
})
</script>

<template>
  <nav
    :ref="(el) => register(el)"
    :class="['navbar', `navbar__${props.variant}`]"
  >
    <div class="navbar__container">
      <nuxt-link to="/" class="navbar__container--logo">
        <v-logo-white :="SVGProps" />
      </nuxt-link>
      <v-list list-type="flex" class="navbar__container--list">
        <v-list-item
          v-for="item in menu"
          :key="item.id"
          class="navbar__container--item"
        >
          <v-link :href="item.url" variant="underline">
            {{ item.title }}
          </v-link>
        </v-list-item>
      </v-list>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  @apply w-full bg-nuxt-primary bg-opacity-90;
  &__fixed {
    @apply fixed top-0 left-0;
  }
  &__sticky {
    @apply absolute top-0 left-0 z-10 translate-y-0;
    &--scrolling {
      @apply fixed animate-fade-in bg-opacity-100;
      & .navbar__container {
        @apply py-2;
      }
    }
  }
  &__container {
    @apply container mx-auto flex flex-wrap justify-between items-center py-4;
    &--list {
      @apply hidden lg:flex;
    }
    &--logo {
      @apply flex items-center;
    }

    &--item {
      @apply mr-4 px-4;

      &:last-child {
        @apply mr-0 pr-0;
      }
    }
  }
}
</style>
