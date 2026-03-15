<template>
  <section ref="sectionEl" class="py-24 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 bg-gradient-to-b from-brand-900/50 to-brand-950" />
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- 标题区域 -->
      <div class="text-center mb-16 animate-on-enter">
        <p class="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">Core Services</p>
        <h2 class="section-title mb-4">三大核心业务</h2>
        <p class="section-subtitle max-w-xl mx-auto">
          覆盖招聘外包、人才外包、灵活用工三大场景，为企业提供全生命周期人力资源解决方案
        </p>
      </div>

      <!-- 1×3 卡片网格 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="(module, i) in modules"
          :key="module.title"
          :to="module.to"
          class="glass-card p-8 cursor-pointer block group animate-on-enter"
          :style="{ transitionDelay: `${i * 0.1 + 0.1}s` }"
        >
          <!-- 悬停时右上角金色角标 -->
          <div class="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-glow-gold" />
          <!-- 图标 -->
          <div
            class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
            :style="{ background: module.iconBg }"
          >
            <component :is="module.icon" class="w-7 h-7" :style="{ color: module.iconColor }" />
          </div>

          <!-- 标题 + 描述 -->
          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors duration-300">
            {{ module.title }}
          </h3>
          <p class="text-neutral-400 text-sm leading-relaxed mb-6">
            {{ module.description }}
          </p>

          <!-- 标签 -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="tag in module.tags"
              :key="tag"
              class="px-2.5 py-1 rounded-md text-xs font-medium border border-white/10 text-neutral-400 group-hover:border-brand-500/40 group-hover:text-brand-300 transition-all duration-300"
            >
              {{ tag }}
            </span>
          </div>

          <!-- 了解更多 -->
          <div class="flex items-center gap-2 text-sm font-semibold text-brand-400 group-hover:text-gold-400 transition-colors duration-300">
            了解更多
            <svg
              class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </div>

          <!-- 悬停时右上角金色角标 -->
          <div class="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-glow-gold" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const IconRpo = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' }),
  ]),
})
const IconOutsource = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' }),
  ]),
})
const IconFlex = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' }),
  ]),
})

const modules = [
  {
    title: 'RPO 招聘流程外包',
    description: '整合全渠道资源与大数据匹配技术，提供从岗位发布到入职跟进的全流程一站式招聘服务，降低招聘成本、提升到岗质量。',
    tags: ['全渠道覆盖', '视频化招聘', '雇主品牌', '按效付费'],
    icon: IconRpo,
    iconBg: 'linear-gradient(135deg, rgba(16,80,160,0.5), rgba(26,111,212,0.3))',
    iconColor: '#72B5F2',
    to: '/services?tab=rpo',
  },
  {
    title: '全风险岗位人才外包',
    description: '承接企业全国范围内人员招募、合同签订、档案管理及用工风险管控，让企业从繁杂人事事务中解脱，聚焦核心业务。',
    tags: ['风险管控', '属地化参保', '弹性用工', '全国联动'],
    icon: IconOutsource,
    iconBg: 'linear-gradient(135deg, rgba(184,134,11,0.3), rgba(232,184,64,0.2))',
    iconColor: '#F0CC70',
    to: '/services?tab=outsource',
  },
  {
    title: '灵活用工',
    description: '面向业务高峰、季节性用工及项目制需求，提供按需配置、快速响应的弹性人力资源方案，有效控制固定用工成本。',
    tags: ['按需配置', '快速响应', '成本优化', '合规保障'],
    icon: IconFlex,
    iconBg: 'linear-gradient(135deg, rgba(16,80,160,0.4), rgba(72,180,248,0.2))',
    iconColor: '#72B5F2',
    to: '/services?tab=flex',
  },
]

const sectionEl = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!sectionEl.value) return
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionEl.value!.querySelectorAll('.animate-on-enter').forEach((el, i) => {
            setTimeout(() => (el as HTMLElement).classList.add('visible'), i * 100)
          })
          observer.disconnect()
        }
      })
    },
    { threshold: 0.1 }
  )
  observer.observe(sectionEl.value)
})
</script>
