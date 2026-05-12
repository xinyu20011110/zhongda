<template>
  <section class="relative min-h-[36vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F0F7FF] to-white">

    <!-- 背景光晕 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style="background: radial-gradient(circle, rgba(24,144,255,0.04) 0%, transparent 65%)" />
      <div class="absolute top-1/4 right-1/4 w-80 h-80 rounded-full"
        style="background: radial-gradient(circle, rgba(0,191,165,0.03) 0%, transparent 65%)" />
    </div>

    <!-- 旋转装饰环 -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div class="w-[520px] h-[520px] rounded-full border border-[#1890FF]/8 animate-spin-slow" />
    </div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div class="w-[380px] h-[380px] rounded-full border border-[#00BFA5]/8"
        style="animation: spin-slow 25s linear infinite reverse" />
    </div>

    <!-- 内容 -->
    <div class="relative z-10 text-center px-6 py-12" :class="visible ? 'animate-fade-up' : 'opacity-0'">
      <p class="text-[#00BFA5] text-xs font-semibold tracking-[0.4em] uppercase mb-4">Contact Us</p>
      <h1 class="section-title text-5xl mb-6">联系我们</h1>
      <p class="section-subtitle max-w-2xl mx-auto text-lg">
        总部位于北京，业务辐射大连、郑州、深圳、宿迁、新泰等全国多个城市
      </p>
      <div class="flex items-center justify-center gap-4 mt-8">
        <div class="h-px w-16 bg-gradient-to-r from-transparent to-[#00BFA5]/30" />
        <div class="w-1.5 h-1.5 rounded-full bg-[#00BFA5]" />
        <div class="h-px w-16 bg-gradient-to-l from-transparent to-[#1890FF]/30" />
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const visible = ref(false)
onMounted(() => {
  setTimeout(() => { visible.value = true }, 100)
})
</script>
