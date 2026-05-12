<template>
  <section ref="sectionEl" class="py-24" style="background: #f8fafc;">
    <div class="max-w-7xl mx-auto px-20">

      <!-- 标题区 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-gold-400 text-xs font-semibold tracking-[0.4em] uppercase mb-3">Pain Points</p>
        <h2 class="section-title text-4xl mb-4">您正面临这些招聘困境？</h2>
        <p class="section-subtitle">传统招聘模式的四大核心痛点，正在悄悄侵蚀企业竞争力</p>
      </div>

      <!-- 2×2 卡片网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(point, i) in painPoints" :key="i" class="pain-card group"
          :class="visible ? 'pain-card--visible' : ''" :style="`--delay: ${i * 120}ms; --accent: #1890FF`">
          <!-- 背景装饰水印 -->
          <div
            class="absolute right-0 -bottom-4 text-7xl font-black italic opacity-[0.03] pointer-events-none select-none transition-all duration-500 group-hover:opacity-[0.05] group-hover:translate-x-1"
            style="color: #1890FF">
            0{{ i + 1 }}
          </div>

          <!-- 顶部高亮彩条 -->
          <div class="absolute top-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-1.5"
            style="background: #1890FF"></div>

          <div class="relative z-10 flex flex-col h-full">
            <div class="mb-5 flex items-start justify-between gap-4">
              <div class="flex items-start gap-4 min-w-0">
                <div class="pain-icon-wrap shrink-0">
                  <svg class="w-6 h-6" style="color: #1890FF" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="1.7">
                    <path v-for="(d, pi) in point.paths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
                  </svg>
                </div>
                <div class="min-w-0 pt-1">
                  <h3 class="font-bold text-lg lg:text-xl text-gray-900 tracking-tight">{{ point.title }}</h3>
                </div>
              </div>
              <span class="text-sm font-bold w-6 h-6 flex items-center justify-center rounded-sm"
                style="color: #1890FF; background: rgba(24, 144, 255, 0.1)">
                {{ i + 1 }}
              </span>
            </div>

            <p class="text-gray-600 text-sm lg:text-base leading-relaxed flex-1 font-medium mt-1">
              {{ point.desc }}
            </p>

            <div class="mt-6 pt-5 border-t border-gray-100 flex items-center gap-4 relative z-10">
              <div class="flex-1 h-[1px] bg-gray-100 transition-all duration-500 group-hover:bg-gray-200"></div>
              <div class="w-1.5 h-1.5 rounded-full transition-all duration-500 group-hover:scale-150"
                style="background: #1890FF"></div>
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
      'M3.75 6.75h16.5',
      'M5.25 6.75v10.5A2.25 2.25 0 007.5 19.5h9a2.25 2.25 0 002.25-2.25V6.75',
      'M8.25 10.5h7.5',
      'M8.25 13.5h4.5',
      'M15.75 13.5v3.75',
      'M14.25 15.75h3',
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
      'M3.75 5.25h16.5',
      'M6 5.25l4.72 6.293c.182.243.28.539.28.843v4.114a1.5 1.5 0 00.879 1.364l1.5.75A1.5 1.5 0 0015 17.273v-4.886c0-.304.098-.6.28-.843L20 5.25',
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
      'M12 9a3 3 0 11-6 0 3 3 0 016 0z',
      'M3.75 18.75v-.75A3.75 3.75 0 017.5 14.25h3A3.75 3.75 0 0114.25 18v.75',
      'M18 8.25v2.25h1.875',
      'M21 10.5a3 3 0 11-6 0 3 3 0 016 0z',
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
      'M14.5 13.5l4 4',
      'M18.5 13.5l-4 4',
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
  padding: 28px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  overflow: hidden;
  opacity: 0;
  transform: translateY(28px);
  transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
}

.pain-card--visible {
  animation: card-in 0.6s ease-out var(--delay, 0ms) both;
}

.pain-card:hover {
  border-color: var(--accent);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
  transform: translateY(-4px);
}

.pain-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.12), rgba(24, 144, 255, 0.04));
  border: 1px solid rgba(24, 144, 255, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.35s ease, background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
}

.pain-card:hover .pain-icon-wrap {
  transform: translateY(-2px) scale(1.04);
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.16), rgba(24, 144, 255, 0.08));
  border-color: rgba(24, 144, 255, 0.28);
  box-shadow: 0 10px 24px rgba(24, 144, 255, 0.12);
}

@keyframes card-in {
  from {
    opacity: 0;
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
