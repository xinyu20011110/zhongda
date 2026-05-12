<template>
  <section ref="sectionEl" class="py-24 relative overflow-hidden" style="background: #f8fafc;">
    <!-- 顶部紫色渐变分割线 -->
    <div class="absolute top-0 left-0 right-0 h-px" style="background: linear-gradient(90deg, transparent, rgba(14,165,201,0.4), transparent)" />

    <!-- 背景光晕 -->
    <div class="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
      style="background: radial-gradient(ellipse at bottom right, rgba(14,165,201,0.05) 0%, transparent 65%)" />

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- 标题 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style="color: #0EA5C9">Our Service</p>
        <h2 class="section-title text-4xl mb-4">我们的灵活用工服务</h2>
        <!-- 核心理念大字 -->
        <div class="inline-flex items-center gap-3 mt-3 mb-5 px-6 py-3 rounded-full"
          style="background: rgba(14,165,201,0.08); border: 1px solid rgba(14,165,201,0.2)">
          <span class="text-lg font-bold tracking-wider" style="color: #0065A3">业务真实 &nbsp;·&nbsp; 风险可控</span>
        </div>
        <p class="section-subtitle max-w-2xl mx-auto">基于扎实的调研与大数据沉淀，依托数字化赋能提升服务效率，快速精准匹配供给与需求</p>
      </div>

      <!-- 两列说明 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div
          v-for="(item, i) in introItems"
          :key="i"
          class="intro-card"
          :class="visible ? 'intro-card--visible' : ''"
          :style="`--delay: ${i * 150}ms`"
        >
          <div class="intro-top-line" />
          <div class="intro-icon-wrap mb-5">
            <svg class="w-6 h-6" style="color: #0EA5C9" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24">
              <path v-for="(d, pi) in item.paths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
            </svg>
          </div>
          <h3 class="font-bold text-base mb-3" style="color:#111827">{{ item.title }}</h3>
          <p class="text-sm leading-relaxed" style="color:#6b7280">{{ item.desc }}</p>
        </div>
      </div>

      <!-- 四大关键成功因素横幅 -->
      <div :class="visible ? 'animate-fade-up' : 'opacity-0'" style="animation-delay: 0.35s">
        <p class="text-center text-xs font-semibold tracking-[0.4em] uppercase mb-8" style="color: rgba(14,165,201,0.7)">
          四个关键成功因素
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="(factor, i) in keyFactors"
            :key="i"
            class="factor-item"
            :class="visible ? 'factor-item--visible' : ''"
            :style="`--delay: ${i * 100 + 400}ms`"
          >
            <div class="factor-num">0{{ i + 1 }}</div>
            <div class="factor-icon">
              <svg class="w-5 h-5" style="color:#0EA5C9" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24">
                <path v-for="(d, pi) in factor.paths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
              </svg>
            </div>
            <p class="text-white font-semibold text-sm mt-3" style="color:#111827">{{ factor.label }}</p>
            <!-- 底部紫色发光线 -->
            <div class="factor-glow-line" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const visible = ref(false)

const introItems = [
  {
    title: '持续创新，稳健迭代',
    desc: '我们在发展实践中总结出创新能力、风控能力、服务能力、政府支持四个关键成功因素，持续保持行业规模领先，为灵活用工企业提供稳定可靠的支撑。',
    paths: ['M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'],
  },
  {
    title: '大数据赋能，精准匹配',
    desc: '基于综合服务平台沉淀的大数据，依托数字化能力提升服务效率，快速匹配供给和需求，让千千万万奔跑在脱贫路上的奋斗者更快地接单干活，减少空闲时间。',
    paths: ['M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'],
  },
]

const keyFactors = [
  {
    label: '创新能力',
    paths: ['M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'],
  },
  {
    label: '风控能力',
    paths: ['M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'],
  },
  {
    label: '服务能力',
    paths: ['M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'],
  },
  {
    label: '政府支持',
    paths: ['M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'],
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
.intro-card {
  position: relative;
  padding: 28px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  overflow: hidden;
  opacity: 0;
  transform: translateY(24px);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
}
.intro-card--visible {
  animation: card-up 0.6s ease-out var(--delay, 0ms) both;
}
.intro-card:hover {
  border-color: rgba(14, 165, 201, 0.25);
  box-shadow: 0 8px 32px rgba(0,0,0,0.07), 0 0 24px rgba(14,165,201,0.06);
  transform: translateY(-4px);
}
.intro-top-line {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #0EA5C9, transparent);
  opacity: 0;
  transition: opacity 0.3s;
}
.intro-card:hover .intro-top-line { opacity: 1; }
.intro-icon-wrap {
  width: 52px; height: 52px;
  border-radius: 14px;
  background: rgba(14,165,201,0.08);
  border: 1px solid rgba(14,165,201,0.2);
  display: flex; align-items: center; justify-content: center;
  transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
}
.intro-card:hover .intro-icon-wrap {
  background: rgba(14,165,201,0.15);
  border-color: rgba(14,165,201,0.4);
  box-shadow: 0 0 16px rgba(14,165,201,0.18);
}

/* 四因素 */
.factor-item {
  position: relative;
  padding: 24px 20px 20px;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  text-align: center;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
}
.factor-item--visible {
  animation: card-up 0.55s ease-out var(--delay, 0ms) both;
}
.factor-item:hover {
  border-color: rgba(14,165,201,0.3);
  box-shadow: 0 6px 24px rgba(0,0,0,0.08), 0 0 20px rgba(14,165,201,0.08);
  transform: translateY(-4px);
}
.factor-num {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.3em;
  color: rgba(14,165,201,0.5);
  margin-bottom: 12px;
}
.factor-icon {
  width: 44px; height: 44px;
  border-radius: 12px;
  background: rgba(14,165,201,0.08);
  border: 1px solid rgba(14,165,201,0.2);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto;
}
.factor-glow-line {
  position: absolute;
  bottom: 0; left: 20%; right: 20%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(14,165,201,0.5), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}
.factor-item:hover .factor-glow-line { opacity: 1; }

@keyframes card-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
