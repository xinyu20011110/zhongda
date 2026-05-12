<template>
  <section ref="sectionEl" class="py-24" style="background: #f8fafc;">
    <div class="max-w-7xl mx-auto px-6">

      <!-- 标题区 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style="color: #10b981">Pain Points</p>
        <h2 class="section-title text-4xl mb-4">您正面临这些用工困境？</h2>
        <p class="section-subtitle">传统用工模式的六大核心痛点，正在侵蚀企业竞争力与合规底线</p>
      </div>

      <!-- 3×2 卡片网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(point, i) in painPoints"
          :key="i"
          class="pain-card group"
          :class="visible ? 'pain-card--visible' : ''"
          :style="`--delay: ${i * 100}ms; --accent: #00BFA5`"
        >
          <!-- 背景装饰水印 -->
          <div class="absolute right-0 -bottom-4 text-7xl font-black italic opacity-[0.03] pointer-events-none select-none transition-all duration-500 group-hover:opacity-[0.05] group-hover:translate-x-1" style="color: #00BFA5">
            0{{ i + 1 }}
          </div>
          
          <!-- 顶部高亮彩条 -->
          <div class="absolute top-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-1.5" style="background: #00BFA5"></div>

          <div class="relative z-10 flex flex-col h-full">
            <div class="mb-5 flex items-start justify-between gap-4">
              <div class="flex items-start gap-4 min-w-0">
                <div class="pain-icon-wrap shrink-0">
                  <svg class="w-6 h-6" style="color: #00BFA5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="1.7">
                    <path v-for="(d, pi) in point.paths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
                  </svg>
                </div>
                <div class="min-w-0 pt-1">
                  <h3 class="font-bold text-lg lg:text-xl text-gray-900 tracking-tight">{{ point.title }}</h3>
                </div>
              </div>
              <span class="text-sm font-bold w-6 h-6 flex items-center justify-center rounded-sm" style="color: #00BFA5; background: rgba(0, 191, 165, 0.1)">
                {{ i + 1 }}
              </span>
            </div>
            
            <p class="text-gray-600 text-sm lg:text-base leading-relaxed flex-1 font-medium mt-1">
              {{ point.desc }}
            </p>

            <div class="mt-6 pt-5 border-t border-gray-100 flex items-center gap-4 relative z-10">
               <div class="flex-1 h-[1px] bg-gray-100 transition-all duration-500 group-hover:bg-gray-200"></div>
               <div class="w-1.5 h-1.5 rounded-full transition-all duration-500 group-hover:scale-150" style="background: #00BFA5"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const visible = ref(false)

const painPoints = [
  {
    title: '编制不足',
    desc: '编制有限，难以满足业务发展需求；预算固定，难以承担不断攀升的编外人力成本压力。',
    paths: [
      'M12 10.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z',
      'M4.5 20.25a7.5 7.5 0 0115 0',
    ],
  },
  {
    title: '成本高',
    desc: '人员招募成本居高不下，人事管理及跨部门沟通成本持续攀升，严重挤压企业经营利润。',
    paths: [
      'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    ],
  },
  {
    title: '风险不可控',
    desc: '业务运营中法定用工风险难以预判；业务调整时员工安置与赔偿风险全部由企业独自承担。',
    paths: [
      'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    ],
  },
  {
    title: '需求波动',
    desc: '季节性、业务高峰与低谷导致用人需求频繁波动，传统固定用工模式无法灵活高效应对。',
    paths: [
      'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
    ],
  },
  {
    title: '高流失',
    desc: '员工流失率居高不下，持续的新人培训投入与低产出形成恶性循环，大量资源被无效消耗。',
    paths: [
      'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1',
    ],
  },
  {
    title: '全国落地难',
    desc: '各地社保公积金政策差异大，跨城市落地难；分公司人力管理及沟通协调成本极高。',
    paths: [
      'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
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
    { threshold: 0.1 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})
</script>

<style scoped>
.pain-card {
  position: relative;
  padding: 28px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  overflow: hidden;
  opacity: 0;
  transform: translateY(24px);
  transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
}

.pain-card--visible {
  animation: card-in 0.6s ease-out var(--delay, 0ms) both;
}

.pain-card:hover {
  border-color: var(--accent);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
  transform: translateY(-4px);
}

.pain-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(0, 191, 165, 0.12), rgba(0, 191, 165, 0.04));
  border: 1px solid rgba(0, 191, 165, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.35s ease, background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
}

.pain-card:hover .pain-icon-wrap {
  transform: translateY(-2px) scale(1.04);
  background: linear-gradient(135deg, rgba(0, 191, 165, 0.16), rgba(0, 191, 165, 0.08));
  border-color: rgba(0, 191, 165, 0.28);
  box-shadow: 0 10px 24px rgba(0, 191, 165, 0.12);
}

@keyframes card-in {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
