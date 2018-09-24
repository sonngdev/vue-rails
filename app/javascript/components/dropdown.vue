<template>
  <div class="relative inline-block">
    <div role="button" class="inline-block select-none" @click.prevent="open = !open">
      <slot name="link"></slot>
    </div>

    <div v-show="open" class="absolute pin-r w-32 mt-2 z-10">
      <slot name="dropdown-items"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        open: false
      }
    }
  }
</script>
