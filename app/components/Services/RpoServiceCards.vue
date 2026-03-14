<template>
  <section ref="sectionEl" class="py-24 bg-brand-900">
    <div class="max-w-7xl mx-auto px-6">

      <!-- 标题区 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-gold-400 text-xs font-semibold tracking-[0.4em] uppercase mb-3">Our Solutions</p>
        <h2 class="section-title text-4xl mb-4">我们的解决方案</h2>
        <p class="section-subtitle">三大核心服务，覆盖企业招聘全链路，精准解决您的用人难题</p>
      </div>

      <!-- 3 张服务卡片 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div v-for="(card, i) in serviceCards" :key="i" class="service-card glass-card"
          :class="visible ? 'service-card--visible' : ''" :style="`--delay: ${i * 150}ms`">
          <!-- 顶部图标区 -->
          <div class="service-icon-wrap mb-6" :style="`background: ${card.iconBg}`">
            <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
              <path v-for="(d, pi) in card.iconPaths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
            </svg>
            <!-- 图标光晕 -->
            <div class="service-icon-glow" :style="`background: ${card.glowColor}`" />
          </div>

          <!-- 卡片序号 -->
          <div class="text-xs font-bold tracking-[0.3em] mb-3" :style="`color: ${card.accentColor}`">
            0{{ i + 1 }}
          </div>

          <!-- 标题 -->
          <h3 class="text-white font-bold text-xl mb-3 leading-snug">{{ card.title }}</h3>

          <!-- 描述 -->
          <p class="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">{{ card.desc }}</p>

          <!-- 标签列表 -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="tag in card.tags" :key="tag" class="text-xs px-2.5 py-1 rounded-full border"
              :style="`border-color: ${card.accentColor}40; color: ${card.accentColor}; background: ${card.accentColor}12`">
              {{ tag }}
            </span>
          </div>

          <!-- 底部分隔线 + 装饰 -->
          <div class="h-px w-full mb-0"
            :style="`background: linear-gradient(90deg, ${card.accentColor}50, transparent)`" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const visible = ref(false)

const serviceCards = [
  {
    title: '岗位视频化转变',
    desc: '通过对职位信息进行提炼，以视频的形式结合融媒体进行投放，结合运营平台，提升岗位吸引力和信息传达效率，高效触动候选人的求职欲望。',
    tags: ['融媒体投放', '视频运营', '岗位提炼'],
    accentColor: '#3B8FE8',
    iconBg: 'linear-gradient(135deg, #0A2540, #1050A0)',
    glowColor: 'rgba(59, 143, 232, 0.3)',
    iconPaths: [
      'M15 10l4.553-2.069A1 1 0 0121 8.876v6.248a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    ],
  },
  {
    title: '雇主品牌营销及口碑提升',
    desc: '通过市场投放、信息流投放、品牌岗位裂变、社群等多渠道营销与运营，提升雇主品牌知名度；并对候选人进行 1v1 答疑讲解，提升沟通体验与口碑。',
    tags: ['信息流投放', '品牌裂变', '社群运营'],
    accentColor: '#E8B840',
    iconBg: 'linear-gradient(135deg, #0A2540, #B8860B)',
    glowColor: 'rgba(232, 184, 64, 0.3)',
    iconPaths: [
      'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
    ],
  },
  {
    title: '全流程一站式招聘服务',
    desc: '根据客户具体需求，整合技术、资源及供应商，提供一站式、全流程、定制化的招聘服务；通过需求访谈、策略制定、人才寻访、背景调查，帮助企业提升效率、降低成本。',
    tags: ['需求访谈', '策略制定', '人才寻访', '背景调查'],
    accentColor: '#72B5F2',
    iconBg: 'linear-gradient(135deg, #0A2540, #0D3560)',
    glowColor: 'rgba(114, 181, 242, 0.3)',
    iconPaths: [
      'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
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
.service-card {
  display: flex;
  flex-direction: column;
  padding: 32px;
  opacity: 0;
  transform: translateY(32px);
}

.service-card--visible {
  animation: card-in 0.65s ease-out var(--delay, 0ms) both;
}

@keyframes card-in {
  from {
    opacity: 0;
    transform: translateY(32px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-icon-wrap {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.service-icon-glow {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  filter: blur(12px);
  opacity: 0.5;
}
</style>
