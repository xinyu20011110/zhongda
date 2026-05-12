<template>
  <section ref="sectionEl" class="py-24 bg-[#F8FAFD]">
    <div class="max-w-7xl mx-auto px-6">

      <!-- 标题 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-[#00BFA5] text-xs font-semibold tracking-[0.4em] uppercase mb-3">Core Values</p>
        <h2 class="section-title text-4xl mb-4">核心价值</h2>
        <p class="section-subtitle">专业化价值体系，驱动企业与人才的共同成长</p>
      </div>

      <!-- 3 大价值卡片 -->
      <div class="grid grid-cols-3 gap-8">
        <div
          v-for="(val, i) in values"
          :key="i"
          class="value-card"
          :class="visible ? 'value-card--visible' : ''"
          :style="`--delay: ${i * 130}ms`"
        >
          <div class="value-top-line" />

          <!-- 图标 -->
          <div class="value-icon-wrap mb-6" :style="`background: ${val.iconBg}; border-color: ${val.borderColor}`">
            <svg class="w-7 h-7" :style="`color: ${val.iconColor}`" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5">
              <path v-for="(d, pi) in val.paths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
            </svg>
          </div>

          <!-- 标题 -->
          <h3 class="text-neutral-800 font-bold text-lg mb-3">{{ val.title }}</h3>

          <!-- 描述 -->
          <p class="text-neutral-500 text-sm leading-relaxed">{{ val.desc }}</p>

          <!-- 底部标签 -->
          <div class="mt-6 pt-5 border-t border-neutral-100 flex flex-wrap gap-2">
            <span v-for="tag in val.tags" :key="tag"
              class="text-xs px-2.5 py-1 rounded-md"
              :style="`color: ${val.iconColor}; background: ${val.iconBg}`">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const visible = ref(false)

const values = [
  {
    title: '合规降本',
    desc: '严格遵循劳动法规与行业标准，通过专业的合规管理帮助企业消除用工隐患，同时整合优质资源降低综合用工成本，实现合规与效益的双赢。',
    iconBg: 'rgba(0, 191, 165, 0.08)',
    iconColor: '#00BFA5',
    borderColor: 'rgba(0, 191, 165, 0.2)',
    tags: ['用工合规', '成本优化', '风险消除'],
    paths: [
      'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    ],
  },
  {
    title: '防控风险',
    desc: '专业法务与 HR 团队全程介入，建立完善的风险预警与应急响应机制，快速处理劳动纠纷与突发事件，将用工法律风险降至最低，保障企业稳定运营。',
    iconBg: 'rgba(24, 144, 255, 0.08)',
    iconColor: '#1890FF',
    borderColor: 'rgba(24, 144, 255, 0.2)',
    tags: ['风险预警', '应急响应', '纠纷处理'],
    paths: [
      'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
    ],
  },
  {
    title: '提高效率',
    desc: '数字化管理系统贯穿招募、入职、在岗全流程，标准化操作规范与专业团队协同作业，大幅缩短交付周期，让企业用人需求得到快速、精准的响应与满足。',
    iconBg: 'rgba(0, 168, 142, 0.08)',
    iconColor: '#00A88E',
    borderColor: 'rgba(0, 168, 142, 0.2)',
    tags: ['数字化管理', '快速交付', '精准匹配'],
    paths: [
      'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
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
.value-card {
  position: relative;
  padding: 32px 28px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: white;
  overflow: hidden;
  opacity: 0;
  transform: translateY(28px);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.35s;
}
.value-card--visible {
  animation: card-up 0.65s ease-out var(--delay, 0ms) both;
}
.value-card:hover {
  border-color: rgba(24, 144, 255, 0.15);
  box-shadow: 0 12px 48px rgba(24, 144, 255, 0.08);
  transform: translateY(-6px);
}
@keyframes card-up {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

.value-top-line {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, #1890FF, #00BFA5);
  opacity: 0;
  transition: opacity 0.3s;
}
.value-card:hover .value-top-line { opacity: 1; }

.value-icon-wrap {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s;
}
.value-card:hover .value-icon-wrap {
  box-shadow: 0 0 20px rgba(24, 144, 255, 0.1);
}
</style>
