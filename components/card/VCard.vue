<template>
<div class="card">
  <div class="card__content">
    <div class="card__content--header">
      <h2 class="card__content--header-title">
        <slot name="header"/>
      </h2>
    </div>
    <div class="card__content--body">
      <p class="card__content--body-paragraph">
        <slot name="body"/>
      </p>
    </div>
    <div class="card__content--footer">
      <slot name="footer"/>
    </div>
  </div>
</div>
</template>


<style lang="scss">
.card {
  @apply p-3 bg-gray-800 rounded h-full;
  &__content {
    @apply flex flex-col;
    &--header {
      @apply mb-2;
      &-title {
        @apply text-center text-gray-200 capitalize font-bold text-[18px];
      }
    }
    &--body {
      &-paragraph {
        @apply text-gray-300 text-justify;
      }
    }
  }
}
</style>
