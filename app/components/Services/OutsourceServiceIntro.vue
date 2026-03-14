<template>
  <section ref="sectionEl" class="py-24 bg-brand-900">
    <div class="max-w-7xl mx-auto px-6">

      <!-- 标题区 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style="color: #10b981">Our Service</p>
        <h2 class="section-title text-4xl mb-4">我们的服务</h2>
        <p class="section-subtitle">全链路人才外包托管，让您的团队聚焦最核心的业务</p>
      </div>

      <!-- 左右分栏 -->
      <div class="grid grid-cols-2 gap-20 items-center">

        <!-- 左侧：护盾视觉 -->
        <div
          class="relative flex flex-col items-center justify-center py-12"
          :class="visible ? 'intro-left--visible' : 'opacity-0'"
        >
          <!-- 背景光晕 -->
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="w-72 h-72 rounded-full" style="background: radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)" />
          </div>
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="w-48 h-48 rounded-full" style="background: radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)" />
          </div>

          <!-- 护盾主体 -->
          <div class="relative z-10 w-44 h-44 flex items-center justify-center rounded-3xl shield-box">
            <svg class="w-24 h-24" style="color: #10b981" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          <!-- 标语 -->
          <div class="relative z-10 mt-8 text-center">
            <p class="text-lg font-bold tracking-widest" style="color: #34d399">全托管 · 无忧用工</p>
            <p class="text-neutral-500 text-sm mt-1">Full Outsourcing · Zero HR Burden</p>
          </div>

          <!-- 四角浮动标签 -->
          <div class="absolute top-8 left-4 badge-float" style="animation-delay: 0.6s">
            <span class="badge-chip" style="border-color: rgba(16,185,129,0.3); color: #34d399">人员招募</span>
          </div>
          <div class="absolute top-8 right-4 badge-float" style="animation-delay: 0.9s">
            <span class="badge-chip" style="border-color: rgba(59,143,232,0.3); color: #60a5fa">合同管理</span>
          </div>
          <div class="absolute bottom-8 left-4 badge-float" style="animation-delay: 1.2s">
            <span class="badge-chip" style="border-color: rgba(232,184,64,0.3); color: #fbbf24">人事服务</span>
          </div>
          <div class="absolute bottom-8 right-4 badge-float" style="animation-delay: 1.5s">
            <span class="badge-chip" style="border-color: rgba(239,68,68,0.3); color: #f87171">风险管控</span>
          </div>
        </div>

        <!-- 右侧：四项服务 -->
        <div
          class="space-y-5"
          :class="visible ? 'intro-right--visible' : 'opacity-0'"
        >
          <div
            v-for="(service, i) in services"
            :key="i"
            class="service-item"
            :style="`--delay: ${i * 120}ms`"
          >
            <div class="service-icon-box" :style="`background: ${service.iconBg}; box-shadow: 0 0 20px ${service.glowColor}`">
              <svg class="w-5 h-5" :style="`color: ${service.iconColor}`" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.8">
                <path v-for="(d, pi) in service.paths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
              </svg>
            </div>
            <div>
              <h4 class="text-white font-bold text-sm mb-1">{{ service.title }}</h4>
              <p class="text-neutral-400 text-xs leading-relaxed">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部引语横幅 -->
      <div
        class="mt-16 px-8 py-6 rounded-2xl text-center quote-banner"
        :class="visible ? 'animate-fade-up' : 'opacity-0'"
        style="animation-delay: 0.5s"
      >
        <p class="text-base font-medium leading-relaxed" style="color: rgba(255,255,255,0.85)">
          通过以上服务帮助企业从繁杂的人事管理业务中解脱出来，
          <span style="color: #34d399; font-weight: 700">集中资源和精力投入到企业经营和市场等核心工作中</span>
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const visible = ref(false)

const services = [
  {
    title: '多快好省的人员招募服务',
    desc: '全国范围内高效匹配人才，缩短招募周期，降低招聘成本，保障到岗质量。',
    iconBg: 'rgba(16, 185, 129, 0.1)',
    iconColor: '#34d399',
    glowColor: 'rgba(16,185,129,0.08)',
    paths: ['M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'],
  },
  {
    title: '员工劳动合同签订及档案管理',
    desc: '规范化合同签署流程，完整档案托管，确保劳动关系合规合法，规避法律风险。',
    iconBg: 'rgba(59, 143, 232, 0.1)',
    iconColor: '#60a5fa',
    glowColor: 'rgba(59,143,232,0.08)',
    paths: [
      'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    ],
  },
  {
    title: '专业高效的员工管理及人事服务',
    desc: '专业 HR 团队提供考勤、绩效、薪酬计算等全套人事管理，减轻企业内部管理负担。',
    iconBg: 'rgba(232, 184, 64, 0.1)',
    iconColor: '#fbbf24',
    glowColor: 'rgba(232,184,64,0.08)',
    paths: [
      'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    ],
  },
  {
    title: '突发事件处理及用工风险管控',
    desc: '专业团队快速响应劳动纠纷与突发事件，将用工法律风险转移，保障企业稳定运营。',
    iconBg: 'rgba(239, 68, 68, 0.1)',
    iconColor: '#f87171',
    glowColor: 'rgba(239,68,68,0.08)',
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
/* 护盾容器 */
.shield-box {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 21, 41, 0.8));
  border: 1px solid rgba(16, 185, 129, 0.25);
  box-shadow: 0 0 60px rgba(16, 185, 129, 0.12), inset 0 1px 0 rgba(255,255,255,0.05);
  transition: box-shadow 0.4s ease;
}
.shield-box:hover {
  box-shadow: 0 0 90px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255,255,255,0.08);
}

/* 浮动小标签 */
.badge-float {
  animation: float-badge 3s ease-in-out infinite;
}
.badge-chip {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid;
  font-size: 11px;
  font-weight: 600;
  background: rgba(6, 21, 41, 0.7);
  backdrop-filter: blur(8px);
  white-space: nowrap;
}
@keyframes float-badge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* 左侧入场 */
.intro-left--visible {
  animation: fade-in-left 0.7s ease-out 0.1s both;
}
@keyframes fade-in-left {
  from { opacity: 0; transform: translateX(-24px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* 右侧入场 */
.intro-right--visible {
  animation: fade-in-right 0.7s ease-out 0.25s both;
}
@keyframes fade-in-right {
  from { opacity: 0; transform: translateX(24px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* 服务条目 */
.service-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px 20px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(10, 37, 64, 0.4);
  transition: border-color 0.3s, background 0.3s, transform 0.3s;
}
.service-item:hover {
  border-color: rgba(16, 185, 129, 0.2);
  background: rgba(16, 185, 129, 0.05);
  transform: translateX(4px);
}

.service-icon-box {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

/* 引语横幅 */
.quote-banner {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.07), rgba(6, 21, 41, 0.6));
  border: 1px solid rgba(16, 185, 129, 0.15);
}
</style>
