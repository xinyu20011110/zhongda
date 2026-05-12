<template>
  <section ref="sectionEl" class="py-24 relative overflow-hidden" style="background: #ffffff;">

    <!-- 背景光晕 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
        style="background: radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)" />
      <div class="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full"
        style="background: radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)" />
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">

      <!-- 标题区 -->
      <div class="text-center mb-16" :class="animated ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style="color: #10b981">Our Track Record</p>
        <h2 class="section-title text-4xl mb-4">业务实力数据</h2>
        <p class="section-subtitle">数字背后，是每一个被精准服务的企业与求职者</p>
      </div>

      <!-- 三项统计 -->
      <div class="grid grid-cols-3 gap-8">
        <div v-for="(stat, i) in stats" :key="i" class="stat-card" :class="animated ? 'stat-card--visible' : ''"
          :style="`--delay: ${i * 150}ms`">
          <!-- 图标 -->
          <div class="stat-icon-wrap mb-6">
            <svg class="w-7 h-7" style="color: #00BFA5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.6">
              <path v-for="(d, pi) in stat.paths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
            </svg>
          </div>

          <!-- 数字 -->
          <div class="flex items-end justify-center gap-1 mb-2">
            <span class="stat-number">{{ formatNumber(counts[i]) }}</span>
            <span class="stat-suffix">{{ stat.suffix }}</span>
          </div>

          <!-- 单位 -->
          <p class="text-sm mb-1 ">{{ stat.unit }}</p>

          <!-- 标签 -->
          <p class="stat-label">{{ stat.label }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const animated = ref(false)

const stats = [
  {
    label: '简历储备',
    value: 4000000,
    suffix: '+',
    unit: '份',
    paths: ['M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'],
  },
  {
    label: '已服务 B 端企业',
    value: 1000,
    suffix: '+',
    unit: '家',
    paths: ['M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'],
  },
  {
    label: '已服务 C 端求职者',
    value: 200000,
    suffix: '+',
    unit: '人',
    paths: ['M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'],
  },
]

const counts = ref(stats.map(() => 0))

function formatNumber(n: number): string {
  return n.toLocaleString('en-US')
}

function animateCount(index: number, target: number) {
  const duration = 2200
  const start = performance.now()
  function step(now: number) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    counts.value[index] = Math.floor(eased * target)
    if (progress < 1) requestAnimationFrame(step)
    else counts.value[index] = target
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animated.value = true
        stats.forEach((stat, i) => {
          setTimeout(() => animateCount(i, stat.value), i * 150)
        })
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})
</script>

<style scoped>
.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 32px;
  border-radius: 20px;
  border: 1px solid #e5e7eb;
  background: #f8fafc;
  opacity: 0;
  transform: translateY(28px);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
}

.stat-card--visible {
  animation: stat-in 0.7s ease-out var(--delay, 0ms) both;
}

.stat-card:hover {
  border-color: rgba(0, 191, 165, 0.25);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08), 0 0 30px rgba(0, 191, 165, 0.07);
  transform: translateY(-4px);
}

.stat-icon-wrap {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: rgba(0, 191, 165, 0.08);
  border: 1px solid rgba(0, 191, 165, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(135deg, #00BFA5, #0EA5C9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.stat-suffix {
  font-size: 1.5rem;
  font-weight: 700;
  color: #00BFA5;
  padding-bottom: 4px;
}

.stat-label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

@keyframes stat-in {
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
