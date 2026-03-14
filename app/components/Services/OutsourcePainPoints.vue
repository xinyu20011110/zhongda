<template>
  <section ref="sectionEl" class="py-24 bg-brand-950">
    <div class="max-w-7xl mx-auto px-6">

      <!-- 标题区 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style="color: #10b981">Pain Points</p>
        <h2 class="section-title text-4xl mb-4">您正面临这些用工困境？</h2>
        <p class="section-subtitle">传统用工模式的六大核心痛点，正在侵蚀企业竞争力与合规底线</p>
      </div>

      <!-- 3×2 卡片网格 -->
      <div class="grid grid-cols-3 gap-6">
        <div
          v-for="(point, i) in painPoints"
          :key="i"
          class="pain-card"
          :class="visible ? 'pain-card--visible' : ''"
          :style="`--delay: ${i * 100}ms`"
        >
          <!-- 左侧警示色条 -->
          <div class="absolute left-0 top-5 bottom-5 w-[3px] rounded-r-full" :style="`background: ${point.accentColor}`" />

          <div class="flex items-start gap-4 pl-6">
            <!-- 图标 -->
            <div class="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" :style="`background: ${point.iconBg}`">
              <svg class="w-5 h-5" :style="`color: ${point.iconColor}`" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.8">
                <path v-for="(d, pi) in point.paths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
              </svg>
            </div>
            <!-- 文字 -->
            <div class="flex-1 pt-0.5">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-bold px-2 py-0.5 rounded-full"
                  :style="`background: ${point.tagBg}; color: ${point.tagColor}`">
                  难题 {{ i + 1 }}
                </span>
              </div>
              <h3 class="text-white font-bold text-base mb-1.5">{{ point.title }}</h3>
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
    title: '编制不足',
    desc: '编制有限，难以满足业务发展需求；预算固定，难以承担不断攀升的编外人力成本压力。',
    accentColor: '#10b981',
    iconBg: 'rgba(16, 185, 129, 0.12)',
    iconColor: '#34d399',
    tagBg: 'rgba(16, 185, 129, 0.12)',
    tagColor: '#34d399',
    paths: [
      'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    ],
  },
  {
    title: '成本高',
    desc: '人员招募成本居高不下，人事管理及跨部门沟通成本持续攀升，严重挤压企业经营利润。',
    accentColor: '#3B8FE8',
    iconBg: 'rgba(59, 143, 232, 0.12)',
    iconColor: '#60a5fa',
    tagBg: 'rgba(59, 143, 232, 0.12)',
    tagColor: '#60a5fa',
    paths: [
      'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    ],
  },
  {
    title: '风险不可控',
    desc: '业务运营中法定用工风险难以预判；业务调整时员工安置与赔偿风险全部由企业独自承担。',
    accentColor: '#ef4444',
    iconBg: 'rgba(239, 68, 68, 0.12)',
    iconColor: '#f87171',
    tagBg: 'rgba(239, 68, 68, 0.12)',
    tagColor: '#f87171',
    paths: [
      'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    ],
  },
  {
    title: '需求波动',
    desc: '季节性、业务高峰与低谷导致用人需求频繁波动，传统固定用工模式无法灵活高效应对。',
    accentColor: '#f97316',
    iconBg: 'rgba(249, 115, 22, 0.12)',
    iconColor: '#fb923c',
    tagBg: 'rgba(249, 115, 22, 0.12)',
    tagColor: '#fb923c',
    paths: [
      'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
    ],
  },
  {
    title: '高流失',
    desc: '员工流失率居高不下，持续的新人培训投入与低产出形成恶性循环，大量资源被无效消耗。',
    accentColor: '#eab308',
    iconBg: 'rgba(234, 179, 8, 0.12)',
    iconColor: '#facc15',
    tagBg: 'rgba(234, 179, 8, 0.12)',
    tagColor: '#facc15',
    paths: [
      'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1',
    ],
  },
  {
    title: '全国落地难',
    desc: '各地社保公积金政策差异大，跨城市落地难；分公司人力管理及沟通协调成本极高。',
    accentColor: '#a855f7',
    iconBg: 'rgba(168, 85, 247, 0.12)',
    iconColor: '#c084fc',
    tagBg: 'rgba(168, 85, 247, 0.12)',
    tagColor: '#c084fc',
    paths: [
      'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
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
    { threshold: 0.1 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})
</script>

<style scoped>
.pain-card {
  position: relative;
  padding: 24px 24px 24px 0;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(10, 37, 64, 0.5);
  backdrop-filter: blur(12px);
  overflow: hidden;
  opacity: 0;
  transform: translateY(24px);
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
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
