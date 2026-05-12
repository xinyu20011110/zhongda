<template>
  <section ref="sectionEl" class="py-24 relative overflow-hidden bg-[#F8FAFD]">

    <!-- 背景装饰 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
        style="background: radial-gradient(circle, rgba(0,191,165,0.03) 0%, transparent 65%)" />
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">

      <!-- 案例标识 -->
      <div class="flex items-center gap-4 mb-12" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <div class="h-px flex-1 bg-gradient-to-r from-[#00BFA5]/30 to-transparent" />
        <span class="text-[#00BFA5] text-lg font-bold tracking-[0.3em] uppercase">案例2</span>
        <div class="h-px flex-1 bg-gradient-to-l from-[#00BFA5]/30 to-transparent" />
      </div>

      <!-- 内容主体 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <!-- 公司标题卡（原单独模块，现与痛点模块并列同行） -->
        <div class="case-header-card flex flex-col justify-center h-full"
          :class="visible ? 'animate-fade-up' : 'opacity-0'" style="margin-bottom: 0;">
          <div class="flex flex-col xl:flex-row xl:items-center gap-6">
            <div class="flex-shrink-0">
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold text-white"
                style="background: linear-gradient(135deg, rgba(0,191,165,0.8), rgba(24,144,255,0.6)); border: 1px solid rgba(0,191,165,0.3);">
                亚
              </div>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 mb-4">
                <h2 class="text-xl sm:text-2xl font-bold text-neutral-800">某某团餐公司</h2>

                <span class="text-[10px] sm:text-xs px-2 py-1 rounded-full"
                  style="background: rgba(24,144,255,0.06); color: #1890FF; border: 1px solid rgba(24,144,255,0.15)">
                  餐饮 · 团膳管理
                </span>
              </div>
              <div class="grid grid-cols-2 gap-3 max-w-sm">
                <div class="result-badge !p-3 sm:!p-4" style="border-color: rgba(0,191,165,0.15)">
                  <p class="text-lg sm:text-xl font-bold text-neutral-800">7,000<span
                      class="text-sm sm:text-base">+</span></p>
                  <p class="text-[10px] sm:text-xs text-[#00BFA5]">直营门店员工</p>
                </div>
                <div class="result-badge !p-3 sm:!p-4" style="border-color: rgba(24,144,255,0.15)">
                  <p class="text-lg sm:text-xl font-bold text-neutral-800">100<span
                      class="text-sm sm:text-base">%</span></p>
                  <p class="text-[10px] sm:text-xs text-[#1890FF]">移动端考勤率</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content-block flex flex-col justify-center h-full" :class="visible ? 'content-block--visible' : ''"
          style="--delay: 200ms">
          <div class="block-label" style="--accent-color: #1890FF; --accent-bg: rgba(24,144,255,0.06)">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>客户痛点</span>
          </div>
          <div class="space-y-3">
            <div v-for="pain in acasiaPains" :key="pain.title" class="need-item">
              <div class="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                style="background: rgba(24,144,255,0.08)">
                <div class="w-1.5 h-1.5 rounded-full bg-[#1890FF]" />
              </div>
              <div>
                <p class="text-neutral-800 text-sm font-semibold">{{ pain.title }}</p>
                <p class="text-neutral-500 text-xs mt-0.5 leading-relaxed">{{ pain.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="content-block lg:col-span-2" :class="visible ? 'content-block--visible' : ''"
          style="--delay: 300ms">
          <div class="block-label" style="--accent-color: #0D7FEE; --accent-bg: rgba(13,127,238,0.06)">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>解决方案</span>
          </div>
          <p class="text-neutral-500 text-sm mb-5">
            针对企业需求，提供涵盖多模块的一体化软件系统解决方案，配备手机移动端应用及报表图表展示功能。
          </p>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <div v-for="module in acasiaModules" :key="module.name" class="module-chip"
              :style="`--chip-color: ${module.color}; --chip-bg: ${module.bg}`">
              <svg class="w-5 h-5 mb-2" :style="`color: ${module.color}`" fill="none" stroke="currentColor"
                stroke-width="1.8" viewBox="0 0 24 24">
                <path v-for="(d, i) in module.paths" :key="i" stroke-linecap="round" stroke-linejoin="round" :d="d" />
              </svg>
              <p class="text-neutral-700 text-xs font-semibold text-center">{{ module.name }}</p>
            </div>
          </div>
          <div class="flex gap-3 mt-5 flex-wrap">
            <div class="platform-tag">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>手机移动端应用</span>
            </div>
            <div class="platform-tag">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>报表图表展示功能</span>
            </div>
          </div>
        </div>

        <div class="content-block lg:col-span-2" :class="visible ? 'content-block--visible' : ''"
          style="--delay: 400ms">
          <div class="block-label" style="--accent-color: #00BFA5; --accent-bg: rgba(0,191,165,0.06)">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>服务成果</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="result in acasiaResults" :key="result.title" class="outcome-card"
              :style="`--outcome-accent: ${result.accent}`">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                :style="`background: ${result.iconBg}`">
                <svg class="w-5 h-5" :style="`color: ${result.accent}`" fill="none" stroke="currentColor"
                  stroke-width="1.8" viewBox="0 0 24 24">
                  <path v-for="(d, i) in result.paths" :key="i" stroke-linecap="round" stroke-linejoin="round" :d="d" />
                </svg>
              </div>
              <p class="text-neutral-800 font-bold text-sm mb-2">{{ result.title }}</p>
              <p class="text-neutral-500 text-xs leading-relaxed">{{ result.desc }}</p>
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

const acasiaPains = [
  { title: '管理压力巨大', desc: '门店数量众多，人事工作量极为庞大，数据滞后严重，门店真实情况难以实时确认。' },
  { title: '排班繁琐，容错率低', desc: '人员流动性大，手动工作排班耗时费力，容错率较低，易产生排班冲突与纠纷。' },
]

const acasiaModules = [
  { name: '人事管理', color: '#1890FF', bg: 'rgba(24,144,255,0.06)', paths: ['M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'] },
  { name: '考勤管理', color: '#00BFA5', bg: 'rgba(0,191,165,0.06)', paths: ['M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'] },
  { name: '排班管理', color: '#0D7FEE', bg: 'rgba(13,127,238,0.06)', paths: ['M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'] },
  { name: '假期管理', color: '#00A88E', bg: 'rgba(0,168,142,0.06)', paths: ['M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'] },
  { name: '加班管理', color: '#1890FF', bg: 'rgba(24,144,255,0.06)', paths: ['M12 9v3l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'] },
  { name: '报表图表', color: '#00BFA5', bg: 'rgba(0,191,165,0.06)', paths: ['M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'] },
]

const acasiaResults = [
  {
    title: '效率全面提升', desc: '实现跨系统数据打通，项目型组织支撑及流程优化，以移动端自动化流程有效提升组织管理效率。',
    accent: '#1890FF', iconBg: 'rgba(24,144,255,0.08)', paths: ['M13 10V3L4 14h7v7l9-11h-7z'],
  },
  {
    title: '数据实时透明', desc: '全员移动端考勤，彻底告别纸质考勤方式，工时数据实时可见、高度透明，杜绝数据滞后。',
    accent: '#00BFA5', iconBg: 'rgba(0,191,165,0.08)', paths: ['M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'],
  },
  {
    title: '数字化转型达成', desc: '拥有 7,000+ 员工的直营餐饮门店体系，顺利完成向数字化企业的系统性转型升级。',
    accent: '#0D7FEE', iconBg: 'rgba(13,127,238,0.08)', paths: ['M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'],
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
    { threshold: 0.08 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})
</script>

<style scoped>
.case-header-card {
  padding: 28px 32px;
  border-radius: 20px;
  border: 1px solid rgba(0, 191, 165, 0.12);
  background: white;
}

.result-badge {
  padding: 12px 16px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid;
  background: rgba(248, 250, 253, 0.8);
}

.content-block {
  padding: 28px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: white;
  opacity: 0;
  transform: translateY(20px);
}

.content-block--visible {
  animation: block-in 0.55s ease-out var(--delay, 0ms) both;
}

.block-label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--accent-color);
  background: var(--accent-bg);
  width: fit-content;
  padding: 5px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.need-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.module-chip {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 10px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: rgba(248, 250, 253, 0.8);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
  cursor: default;
}

.module-chip:hover {
  border-color: var(--chip-color, rgba(24, 144, 255, 0.3));
  box-shadow: 0 0 16px rgba(24, 144, 255, 0.06);
  transform: translateY(-2px);
  background: var(--chip-bg, rgba(24, 144, 255, 0.03));
}

.platform-tag {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  background: rgba(24, 144, 255, 0.05);
  color: #1890FF;
  border: 1px solid rgba(24, 144, 255, 0.12);
}

.outcome-card {
  padding: 20px;
  border-radius: 14px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: rgba(248, 250, 253, 0.8);
  transition: border-color 0.3s, transform 0.3s;
}

.outcome-card:hover {
  border-color: var(--outcome-accent, rgba(24, 144, 255, 0.2));
  transform: translateY(-3px);
}

@keyframes block-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
