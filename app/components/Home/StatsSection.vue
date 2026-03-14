<template>
  <section ref="sectionEl" class="py-20 relative overflow-hidden">
    <!-- 顶部分隔线发光 -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent" />

    <div class="max-w-7xl mx-auto px-6">
      <!-- 标题 -->
      <div class="text-center mb-14 animate-on-enter" ref="titleEl">
        <p class="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">核心实力</p>
        <h2 class="section-title">数字见证价值</h2>
      </div>

      <!-- 统计卡片 -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="glass-card p-8 text-center animate-on-enter"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <!-- 图标 -->
          <div class="w-12 h-12 rounded-xl bg-brand-800/60 border border-brand-600/30 flex items-center justify-center mx-auto mb-5">
            <component :is="stat.icon" class="w-6 h-6 text-brand-300" />
          </div>
          <!-- 数字 -->
          <div class="flex items-end justify-center gap-1 mb-2">
            <span class="text-4xl md:text-5xl font-bold text-gold-400 tabular-nums">
              {{ stat.displayed }}
            </span>
            <span class="text-2xl font-bold text-gold-300 mb-1">{{ stat.unit }}</span>
          </div>
          <!-- 说明 -->
          <p class="text-neutral-400 text-sm mt-2">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

// 简单内联 SVG 图标组件
const IconUsers = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' }),
  ]),
})
const IconMap = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z' }),
  ]),
})
const IconBuilding = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' }),
  ]),
})
const IconClock = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' }),
  ]),
})

interface Stat {
  target: number
  unit: string
  label: string
  icon: ReturnType<typeof defineComponent>
  displayed: string
}

const stats = reactive<Stat[]>([
  { target: 40000, unit: '+', label: '累计服务人数', icon: IconUsers, displayed: '0' },
  { target: 20, unit: '+', label: '覆盖全国区域', icon: IconMap, displayed: '0' },
  { target: 500, unit: '+', label: '合作企业数量', icon: IconBuilding, displayed: '0' },
  { target: 15, unit: '+', label: '深耕行业年限', icon: IconClock, displayed: '0' },
])

const sectionEl = ref<HTMLElement | null>(null)
const hasAnimated = ref(false)

function formatNumber(n: number, target: number): string {
  if (target >= 10000) {
    return (n / 10000).toFixed(n >= target ? 0 : 1) + '万'
  }
  return String(Math.round(n))
}

function animateCounters() {
  if (hasAnimated.value) return
  hasAnimated.value = true

  stats.forEach((stat) => {
    const duration = 2000
    const start = performance.now()
    const fn = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * stat.target)
      stat.displayed = formatNumber(current, stat.target)
      if (progress < 1) requestAnimationFrame(fn)
    }
    requestAnimationFrame(fn)
  })
}

function triggerEnterAnimations(el: HTMLElement) {
  el.querySelectorAll('.animate-on-enter').forEach((child) => {
    ;(child as HTMLElement).classList.add('visible')
  })
}

onMounted(() => {
  if (!sectionEl.value) return
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters()
          triggerEnterAnimations(sectionEl.value!)
          observer.disconnect()
        }
      })
    },
    { threshold: 0.2 }
  )
  observer.observe(sectionEl.value)
})
</script>
