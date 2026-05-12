<template>
  <section ref="sectionEl" class="py-24" style="background: #f8fafc;">
    <div class="max-w-7xl mx-auto px-6">

      <!-- 标题区 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style="color: #10b981">Our Advantages</p>
        <h2 class="section-title text-4xl mb-4">五大核心服务优势</h2>
        <p class="section-subtitle">专业团队全程护航，从招募到用工合规，每一环节精准管控</p>
      </div>

      <!-- 5 列卡片 -->
      <div class="grid grid-cols-5 gap-5">
        <div
          v-for="(adv, i) in advantages"
          :key="i"
          class="adv-card"
          :class="visible ? 'adv-card--visible' : ''"
          :style="`--delay: ${i * 110}ms`"
        >
          <!-- 顶部亮线（hover 时显现） -->
          <div class="adv-top-line" />

          <!-- 图标 -->
          <div class="adv-icon-wrap mb-5">
            <svg class="w-6 h-6" style="color: #00BFA5" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.6">
              <path v-for="(d, pi) in adv.paths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
            </svg>
          </div>

          <!-- 序号 -->
          <div class="text-xs font-bold tracking-[0.3em] mb-3" style="color: rgba(0,191,165,0.6)">
            0{{ i + 1 }}
          </div>

          <!-- 标题 -->
          <h3 class="font-bold text-sm mb-3 leading-snug" style="color:#111827">{{ adv.title }}</h3>

          <!-- 描述 -->
          <p class="text-xs leading-relaxed" style="color:#6b7280">{{ adv.desc }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const visible = ref(false)

const advantages = [
  {
    title: '多快好省',
    desc: '整合优质渠道与人才库，大幅缩短招募周期，提升交付质量，全面降低综合用工成本。',
    paths: [
      'M13 10V3L4 14h7v7l9-11h-7z',
    ],
  },
  {
    title: '服务在线化全国联动',
    desc: '数字化管理系统贯穿全流程，全国各城市统一标准协同作业，实时掌握项目动态。',
    paths: [
      'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    ],
  },
  {
    title: '弹性用工',
    desc: '按需配置人力规模，灵活应对业务高峰与低谷，无需承担固定编制带来的长期人力压力。',
    paths: [
      'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    ],
  },
  {
    title: '流失管控',
    desc: '建立完善的员工留存激励机制，系统性降低流失率，减少反复招聘培训带来的资源浪费。',
    paths: [
      'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    ],
  },
  {
    title: '风险管控',
    desc: '专业法务与 HR 团队承接用工合规风险，提供突发事件快速响应，保障企业合法稳定运营。',
    paths: [
      'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
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
.adv-card {
  position: relative;
  padding: 28px 22px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  overflow: hidden;
  opacity: 0;
  transform: translateY(28px);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.35s;
}

.adv-card--visible {
  animation: card-up 0.6s ease-out var(--delay, 0ms) both;
}

.adv-card:hover {
  border-color: rgba(0, 191, 165, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), 0 0 24px rgba(0, 191, 165, 0.08);
  transform: translateY(-5px);
}

/* 顶部亮线 */
.adv-top-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00BFA5, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.adv-card:hover .adv-top-line {
  opacity: 1;
}

/* 图标圆框 */
.adv-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(0, 191, 165, 0.08);
  border: 1px solid rgba(0, 191, 165, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.adv-card:hover .adv-icon-wrap {
  background: rgba(0, 191, 165, 0.15);
  border-color: rgba(0, 191, 165, 0.4);
  box-shadow: 0 0 16px rgba(0, 191, 165, 0.2);
}

@keyframes card-up {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
