<template>
  <section ref="sectionEl" class="py-24 bg-brand-950">
    <div class="max-w-7xl mx-auto px-6">

      <!-- 标题区 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-gold-400 text-xs font-semibold tracking-[0.4em] uppercase mb-3">Pain Points</p>
        <h2 class="section-title text-4xl mb-4">您正面临这些招聘困境？</h2>
        <p class="section-subtitle">传统招聘模式的四大核心痛点，正在悄悄侵蚀企业竞争力</p>
      </div>

      <!-- 2×2 卡片网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(point, i) in painPoints"
          :key="i"
          class="pain-card"
          :class="visible ? 'pain-card--visible' : ''"
          :style="`--delay: ${i * 120}ms`"
        >
          <!-- 左侧警示色条 -->
          <div class="absolute left-0 top-5 bottom-5 w-[3px] rounded-r-full" :style="`background: ${point.accentColor}`" />

          <div class="flex items-start gap-5 pl-6">
            <!-- 图标 -->
            <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" :style="`background: ${point.iconBg}`">
              <svg class="w-6 h-6" :style="`color: ${point.iconColor}`" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.8">
                <path v-for="(d, pi) in point.paths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
              </svg>
            </div>
            <!-- 文字 -->
            <div class="flex-1 pt-1">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-bold px-2 py-0.5 rounded-full" :style="`background: ${point.tagBg}; color: ${point.tagColor}`">
                  痛点 {{ i + 1 }}
                </span>
              </div>
              <h3 class="text-white font-bold text-lg mb-2">{{ point.title }}</h3>
              <p class="text-neutral-400 text-sm leading-relaxed">{{ point.desc }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const visible = ref(false)

const painPoints = [
  {
    title: '费用高，效果差',
    desc: '高昂的招聘平台投放费用，却难以转化为实际到岗效果，投入产出严重失衡。',
    accentColor: '#f97316',
    iconBg: 'rgba(249, 115, 22, 0.12)',
    iconColor: '#fb923c',
    tagBg: 'rgba(249, 115, 22, 0.12)',
    tagColor: '#fb923c',
    paths: [
      'M6 4l6 9m6-9l-6 9',
      'M12 13v7',
      'M9 16h6',
      'M9 19.5h6',
    ],
  },
  {
    title: '渠道少，质量低',
    desc: '触达渠道严重不足，简历质量参差不齐，优质候选人覆盖面极为有限。',
    accentColor: '#eab308',
    iconBg: 'rgba(234, 179, 8, 0.12)',
    iconColor: '#facc15',
    tagBg: 'rgba(234, 179, 8, 0.12)',
    tagColor: '#facc15',
    paths: [
      'M13 16h-1v-4h-1m1-4h.01',
      'M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    ],
  },
  {
    title: '时间紧，人手少',
    desc: '业务急速扩张，但内部 HR 团队资源严重不足，招聘周期被动拉长。',
    accentColor: '#ef4444',
    iconBg: 'rgba(239, 68, 68, 0.12)',
    iconColor: '#f87171',
    tagBg: 'rgba(239, 68, 68, 0.12)',
    tagColor: '#f87171',
    paths: [
      'M12 6v6h4.5',
      'M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    ],
  },
  {
    title: '难邀约，易爽约',
    desc: '候选人响应率低，面试到场率不足，大量沟通成本消耗在无效邀约上。',
    accentColor: '#a855f7',
    iconBg: 'rgba(168, 85, 247, 0.12)',
    iconColor: '#c084fc',
    tagBg: 'rgba(168, 85, 247, 0.12)',
    tagColor: '#c084fc',
    paths: [
      'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      'M9 14l2 2 4-4',
    ],
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})
</script>

<style scoped>
.pain-card {
  position: relative;
  padding: 28px 28px 28px 0;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(10, 37, 64, 0.5);
  backdrop-filter: blur(12px);
  overflow: hidden;
  opacity: 0;
  transform: translateY(28px);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
}

.pain-card--visible {
  animation: card-in 0.6s ease-out var(--delay, 0ms) both;
}

.pain-card:hover {
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transform: translateY(-3px);
}

@keyframes card-in {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
