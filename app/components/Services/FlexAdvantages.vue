<template>
  <section ref="sectionEl" class="py-24 relative overflow-hidden" style="background: #f8fafc;">
    <div class="absolute top-0 left-0 right-0 h-px" style="background: linear-gradient(90deg, transparent, rgba(14,165,201,0.25), transparent)" />

    <!-- 背景光晕 -->
    <div class="absolute bottom-0 right-0 w-80 h-80 pointer-events-none"
      style="background: radial-gradient(ellipse at bottom right, rgba(14,165,201,0.04) 0%, transparent 65%)" />

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- 标题 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style="color: #0EA5C9">Our Advantages</p>
        <h2 class="section-title text-4xl mb-4">三大核心服务保障</h2>
        <p class="section-subtitle">技术、资金、时效三维驱动，为灵活用工提供全链路可靠保障</p>
      </div>

      <!-- 3 列大卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(adv, i) in advantages"
          :key="i"
          class="fadv-card"
          :class="visible ? 'fadv-card--visible' : ''"
          :style="`--delay: ${i * 130}ms`"
        >
          <div class="fadv-top-line" />

          <!-- 大序号装饰 -->
          <div class="fadv-num">0{{ i + 1 }}</div>

          <!-- 图标 -->
          <div class="fadv-icon-wrap mb-5">
            <svg class="w-7 h-7" style="color:#0EA5C9" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path v-for="(d, pi) in adv.paths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
            </svg>
          </div>

          <!-- 标题 -->
          <h3 class="font-bold text-xl mb-4 leading-snug" style="color:#111827">{{ adv.title }}</h3>

          <!-- 描述 -->
          <p class="text-sm leading-relaxed mb-6" style="color:#6b7280">{{ adv.desc }}</p>

          <!-- 特性标签 -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tag, ti) in adv.tags"
              :key="ti"
              class="fadv-tag"
            >{{ tag }}</span>
          </div>
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
    title: '技术保证',
    desc: '依托行业领先的数字化平台，运用大数据与智能算法精准匹配供需两端，实现任务发布、接单、管理、结算全流程线上化、自动化运转。',
    tags: ['大数据匹配', '智能算法', '全流程线上化'],
    paths: [
      'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
    ],
  },
  {
    title: '资金安全',
    desc: '资金通过监管账户严格隔离保管，依托银行级别的安全架构，确保每一笔任务结算资金清晰可溯，灵活就业人员按时足额收款，企业资金流向透明合规。',
    tags: ['监管账户', '银行级安全', '资金可溯'],
    paths: [
      'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    ],
  },
  {
    title: '7×24 小时服务',
    desc: '专业客服与技术支撑团队全天候在线响应，无论是平台操作问题还是突发用工需求，均可快速处理，保障业务连续性不受时间限制。',
    tags: ['全天候响应', '专业客服', '快速处理'],
    paths: [
      'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
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
    { threshold: 0.12 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})
</script>

<style scoped>
.fadv-card {
  position: relative;
  padding: 32px 28px;
  border-radius: 18px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  overflow: hidden;
  opacity: 0;
  transform: translateY(28px);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.35s;
}
.fadv-card--visible {
  animation: card-up 0.6s ease-out var(--delay, 0ms) both;
}
.fadv-card:hover {
  border-color: rgba(14,165,201,0.3);
  box-shadow: 0 10px 40px rgba(0,0,0,0.08), 0 0 30px rgba(14,165,201,0.08);
  transform: translateY(-6px);
}
.fadv-top-line {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #0EA5C9, transparent);
  opacity: 0;
  transition: opacity 0.3s;
}
.fadv-card:hover .fadv-top-line { opacity: 1; }

.fadv-num {
  position: absolute;
  top: 20px; right: 24px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.25em;
  color: rgba(14,165,201,0.25);
}
.fadv-icon-wrap {
  width: 60px; height: 60px;
  border-radius: 16px;
  background: rgba(14,165,201,0.08);
  border: 1px solid rgba(14,165,201,0.2);
  display: flex; align-items: center; justify-content: center;
  transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
}
.fadv-card:hover .fadv-icon-wrap {
  background: rgba(14,165,201,0.15);
  border-color: rgba(14,165,201,0.4);
  box-shadow: 0 0 20px rgba(14,165,201,0.2);
}
.fadv-tag {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(14,165,201,0.08);
  border: 1px solid rgba(14,165,201,0.2);
  color: #0EA5C9;
  transition: background 0.2s, border-color 0.2s;
}
.fadv-card:hover .fadv-tag {
  background: rgba(14,165,201,0.14);
  border-color: rgba(14,165,201,0.3);
}
@keyframes card-up {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
