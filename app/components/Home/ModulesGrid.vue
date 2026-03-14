<template>
  <section ref="sectionEl" class="py-24 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 bg-gradient-to-b from-brand-900/50 to-brand-950" />
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- 标题区域 -->
      <div class="text-center mb-16 animate-on-enter">
        <p class="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">四大板块</p>
        <h2 class="section-title mb-4">核心业务矩阵</h2>
        <p class="section-subtitle max-w-xl mx-auto">
          深耕四大领域，构建全方位一体化服务生态，赋能企业高质量发展
        </p>
      </div>

      <!-- 2×2 卡片网格 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <NuxtLink
          v-for="(module, i) in modules"
          :key="module.title"
          :to="module.to"
          class="glass-card p-8 cursor-pointer block group animate-on-enter"
          :style="{ transitionDelay: `${i * 0.1 + 0.1}s` }"
        >
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

const IconHuman = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' }),
  ]),
})
const IconBusiness = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' }),
  ]),
})
const IconEducation = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' }),
  ]),
})
const IconConsult = defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' }),
  ]),
})

const modules = [
  {
    title: '人力资源服务',
    description: '提供外包、派遣、薪酬代理、社保代缴、招聘猎头全场景一体化解决方案，构建企业人力资源管理闭环。',
    tags: ['劳务外包', '人才派遣', '薪酬代理', '社保代缴', '猎头招聘'],
    icon: IconHuman,
    iconBg: 'linear-gradient(135deg, rgba(16,80,160,0.5), rgba(26,111,212,0.3))',
    iconColor: '#72B5F2',
    to: '/services?tab=hr',
  },
  {
    title: '商务与生活服务',
    description: '涵盖企业商务接待、差旅管理、办公配套及员工生活福利等多元化服务，全面提升企业运营品质。',
    tags: ['商务接待', '差旅管理', '员工福利', '办公配套'],
    icon: IconBusiness,
    iconBg: 'linear-gradient(135deg, rgba(184,134,11,0.3), rgba(232,184,64,0.2))',
    iconColor: '#F0CC70',
    to: '/services?tab=business',
  },
  {
    title: '教育培训服务',
    description: '定制化职业技能培训与职业素养提升课程体系，助力企业员工专业成长与团队能力建设。',
    tags: ['职业技能', '职业素养', '团队建设', '定制课程'],
    icon: IconEducation,
    iconBg: 'linear-gradient(135deg, rgba(16,80,160,0.4), rgba(72,180,248,0.2))',
    iconColor: '#72B5F2',
    to: '/services?tab=education',
  },
  {
    title: '咨询与投资服务',
    description: '提供企业战略咨询、合规管理、投融资规划等专业顾问服务，驱动企业价值持续增长。',
    tags: ['战略咨询', '合规管理', '投融资', '风险评估'],
    icon: IconConsult,
    iconBg: 'linear-gradient(135deg, rgba(184,134,11,0.4), rgba(232,184,64,0.15))',
    iconColor: '#E8B840',
    to: '/services?tab=consulting',
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
