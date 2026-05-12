<template>
  <NuxtLink
    :to="to"
    class="relative px-4 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-800 transition-colors duration-200 group"
    active-class="text-neutral-800"
  >
    {{ label }}
    <!-- 蓝绿渐变下划线 hover 动效 -->
    <span
      class="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300"
      style="background: linear-gradient(90deg, #1890FF, #00BFA5)"
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
