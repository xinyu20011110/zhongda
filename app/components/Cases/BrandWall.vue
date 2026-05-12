<template>
  <section ref="sectionEl" class="py-24 bg-[#F8FAFD]">
    <div class="max-w-7xl mx-auto px-6">

      <!-- 标题 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-[#00BFA5] text-xs font-semibold tracking-[0.4em] uppercase mb-3">Trusted By</p>
        <h2 class="section-title text-4xl mb-4">他们选择了中达聚财</h2>
        <p class="section-subtitle">覆盖新零售、互联网、餐饮、医疗等多元行业的知名企业</p>
      </div>

      <!-- 品牌 Logo 墙 (图片版带氛围光) -->
      <div 
        class="relative max-w-6xl mx-auto mt-12 mb-8"
        :class="visible ? 'animate-fade-up' : 'opacity-0'" 
        style="animation-delay: 200ms"
      >
        <!-- 氛围光背景 -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full min-h-[300px] pointer-events-none -z-0 flex items-center justify-between px-10">
          <div class="w-64 h-64 md:w-96 md:h-96 bg-[#1890FF] opacity-[0.15] blur-[100px] rounded-full"></div>
          <div class="w-64 h-64 md:w-96 md:h-96 bg-[#00BFA5] opacity-[0.15] blur-[100px] rounded-full"></div>
        </div>
        
        <!-- 品牌墙图片 -->
        <div class="relative z-10 w-full px-4 sm:px-8 flex justify-center">
          <img src="~/assets/img/logoWall.png" alt="合作企业品牌墙" class="w-full max-w-5xl h-auto object-contain mix-blend-darken" />
        </div>
      </div>

      <!-- 合作数字 -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="stat-strip"
          :class="visible ? 'stat-strip--visible' : ''"
          :style="`--delay: ${800 + i * 100}ms`"
        >
          <p class="text-3xl font-bold text-neutral-800">
            <span style="background: linear-gradient(135deg, #1890FF, #00BFA5); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">{{ stat.value }}</span>{{ stat.suffix }}
          </p>
          <p class="text-neutral-500 text-sm mt-1">{{ stat.label }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const visible = ref(false)

const stats = [
  { value: '1,000', suffix: '+', label: '已服务 B 端企业' },
  { value: '200,000', suffix: '+', label: '已服务 C 端求职者' },
  { value: '98', suffix: '%', label: '客户续约率' },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.1 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})
</script>

<style scoped>
.stat-strip {
  padding: 24px 28px;
  border-radius: 14px;
  border: 1px solid rgba(24, 144, 255, 0.1);
  background: white;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
}
.stat-strip--visible {
  animation: card-in 0.5s ease-out var(--delay, 0ms) both;
}

@keyframes card-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
