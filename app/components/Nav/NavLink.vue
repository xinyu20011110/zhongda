<template>
  <NuxtLink
    :to="to"
    class="relative px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200 group"
    active-class="text-white"
  >
    {{ label }}
    <!-- 金色下划线 hover 动效 -->
    <span
      class="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold-400 transition-all duration-300 rounded-full"
      :class="isActive ? 'w-4/5 opacity-100' : 'w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100'"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string
  label: string
}>()

const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script>
