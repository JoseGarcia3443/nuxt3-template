<template>
  <Html :lang="locale" class="scroll-smooth no-scrollbar overflow-y-auto">
  <Body class="body">
    <VNavbar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Body>

  </Html>
</template>

<script lang="ts" setup>
import { AppSetup } from './utils/app'

AppSetup()

const locale = useState<string>('locale.setting')
</script>

<style lang="scss">
body {
  @apply bg-color-gray-900;
}

.viewport {
  @apply container mx-auto py-8;
  &__loader {
    @apply absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50; 
  }
}
</style>
