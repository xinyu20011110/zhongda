<template>
  <section class="relative min-h-[52vh] flex items-center justify-center overflow-hidden bg-brand-950">

    <!-- 背景光晕 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style="background: radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%)" />
      <div class="absolute top-1/3 right-1/4 w-80 h-80 rounded-full"
        style="background: radial-gradient(circle, rgba(234,179,8,0.05) 0%, transparent 65%)" />
    </div>

    <!-- 旋转装饰环 -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div class="w-[520px] h-[520px] rounded-full border border-brand-800/20 animate-spin-slow" />
    </div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div class="w-[380px] h-[380px] rounded-full border border-gold-600/10"
        style="animation: spin-slow 25s linear infinite reverse" />
    </div>

    <!-- 内容 -->
    <div class="relative z-10 text-center px-6 py-20" :class="visible ? 'animate-fade-up' : 'opacity-0'" ref="contentEl">
      <p class="text-gold-400 text-xs font-semibold tracking-[0.4em] uppercase mb-4">About Us · Since 2018</p>
      <h1 class="section-title text-5xl mb-6">关于中达聚财</h1>
      <p class="section-subtitle max-w-2xl mx-auto text-lg">
        深耕人力资源服务行业，以专业与诚信构建企业发展的坚实基础
      </p>
      <!-- 分割线 -->
      <div class="flex items-center justify-center gap-4 mt-8">
        <div class="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/50" />
        <div class="w-1.5 h-1.5 rounded-full bg-gold-400" />
        <div class="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/50" />
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const contentEl = ref<HTMLElement | null>(null)
const visible = ref(false)

onMounted(() => {
  // Banner 直接可见，短暂延迟触发动效
  setTimeout(() => { visible.value = true }, 100)
})
</script>
