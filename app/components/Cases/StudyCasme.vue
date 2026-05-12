<template>
  <section ref="sectionEl" class="py-24 bg-white relative overflow-hidden">

    <!-- 背景光晕 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
        style="background: radial-gradient(circle, rgba(24,144,255,0.03) 0%, transparent 65%)" />
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">

      <!-- 案例标识 -->
      <div class="flex items-center gap-4 mb-12" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <div class="h-px flex-1 bg-gradient-to-r from-[#1890FF]/30 to-transparent" />
        <span class="text-[#1890FF] text-lg font-bold tracking-[0.3em] uppercase">案例1</span>
        <div class="h-px flex-1 bg-gradient-to-l from-[#1890FF]/30 to-transparent" />
      </div>

      <!-- 内容主体 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <!-- 公司标题卡（原单独模块，现与需求模块并列同行） -->
        <div class="case-header-card flex flex-col justify-center h-full"
          :class="visible ? 'animate-fade-up' : 'opacity-0'" style="margin-bottom: 0;">
          <div class="flex flex-col xl:flex-row xl:items-center gap-6">
            <div class="flex-shrink-0">
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold text-white"
                style="background: linear-gradient(135deg, rgba(24,144,255,0.8), rgba(0,191,165,0.6)); border: 1px solid rgba(24,144,255,0.3);">
                协
              </div>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 mb-4">
                <h2 class="text-xl sm:text-2xl font-bold text-neutral-800">某某协会</h2>
                <span class="text-[10px] sm:text-xs px-2 py-1 rounded-full"
                  style="background: rgba(24,144,255,0.06); color: #1890FF; border: 1px solid rgba(24,144,255,0.15)">
                  行业协会 · 公益服务
                </span>
              </div>
              <div class="grid grid-cols-2 gap-3 max-w-sm">
                <div class="result-badge !p-3 sm:!p-4" style="--accent: rgba(24,144,255,0.15); --text: #1890FF">
                  <p class="text-lg sm:text-xl font-bold text-neutral-800">3,000<span
                      class="text-sm sm:text-base">+</span></p>
                  <p class="text-[10px] sm:text-xs" style="color: #1890FF">转移外包人员</p>
                </div>
                <div class="result-badge !p-3 sm:!p-4" style="--accent: rgba(0,191,165,0.15); --text: #00BFA5">
                  <p class="text-lg sm:text-xl font-bold text-neutral-800">2,000<span
                      class="text-sm sm:text-base">+</span></p>
                  <p class="text-[10px] sm:text-xs" style="color: #00BFA5">稳定在岗员工</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content-block flex flex-col justify-center h-full" :class="visible ? 'content-block--visible' : ''"
          style="--delay: 200ms">
          <div class="block-label" style="--accent-color: #00BFA5; --accent-bg: rgba(0,191,165,0.06)">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>客户需求</span>
          </div>
          <div class="space-y-3">
            <div v-for="need in casmeNeeds" :key="need.title" class="need-item">
              <div class="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                style="background: rgba(0,191,165,0.1)">
                <div class="w-1.5 h-1.5 rounded-full bg-[#00BFA5]" />
              </div>
              <div>
                <p class="text-neutral-800 text-sm font-semibold">{{ need.title }}</p>
                <p class="text-neutral-500 text-xs mt-0.5 leading-relaxed">{{ need.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="content-block lg:col-span-2" :class="visible ? 'content-block--visible' : ''"
          style="--delay: 300ms">
          <div class="block-label" style="--accent-color: #0D7FEE; --accent-bg: rgba(13,127,238,0.06)">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>解决方案</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div v-for="sol in casmeSolutions" :key="sol.title" class="solution-card">
              <div class="solution-icon" :style="`background: ${sol.iconBg}`">
                <svg class="w-5 h-5" :style="`color: ${sol.iconColor}`" fill="none" stroke="currentColor"
                  stroke-width="1.8" viewBox="0 0 24 24">
                  <path v-for="(d, i) in sol.paths" :key="i" stroke-linecap="round" stroke-linejoin="round" :d="d" />
                </svg>
              </div>
              <div>
                <p class="text-neutral-800 text-sm font-bold mb-1.5">{{ sol.title }}</p>
                <p class="text-neutral-500 text-xs leading-relaxed">{{ sol.desc }}</p>
              </div>
            </div>
          </div>
          <div class="mt-5 flex items-center gap-3 flex-wrap">
            <span class="text-neutral-400 text-xs">核心产品类型：</span>
            <span class="type-tag">半风险人力资源外包</span>
            <span class="type-tag">全风险人力资源外包</span>
          </div>
        </div>

        <div class="content-block lg:col-span-2" :class="visible ? 'content-block--visible' : ''"
          style="--delay: 400ms">
          <div class="block-label" style="--accent-color: #00BFA5; --accent-bg: rgba(0,191,165,0.06)">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>服务成果</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="result in casmeResults" :key="result.title" class="result-row">
              <div class="result-check">
                <svg class="w-3.5 h-3.5 text-[#00BFA5]" fill="none" stroke="currentColor" stroke-width="2.5"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="text-neutral-800 text-sm font-semibold">{{ result.title }}</p>
                <p class="text-neutral-500 text-xs mt-0.5">{{ result.desc }}</p>
              </div>
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

const casmeNeeds = [
  { title: '人员分散，管理成本高', desc: '全国各县市均有工作人员，每个工作点人员较少，跨地域统一管理成本极高。' },
  { title: '培训信息化需求迫切', desc: '需要搭建线上培训体系，实现远程知识传递与合规培训管理。' },
  { title: '人员结构复杂', desc: '人员组成涵盖全职、兼职、退休返聘等多种形式，用工形式认定困难，法律风险高。' },
]

const casmeSolutions = [
  {
    title: 'SAAS 系统赋能管理',
    desc: '各地调解人员通过 SAAS 系统规划工作安排，实现快速响应与科学管理效能提升。',
    iconBg: 'rgba(24,144,255,0.08)',
    iconColor: '#1890FF',
    paths: ['M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18'],
  },
  {
    title: '专业培训管理',
    desc: '构建线上培训管理体系，系统性优化人员培训成本与管理成本，提升合规标准。',
    iconBg: 'rgba(0,191,165,0.08)',
    iconColor: '#00BFA5',
    paths: ['M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'],
  },
  {
    title: '属地化参保落地',
    desc: '凭借覆盖全国的服务网络，实现部分员工的属地化参保需求，合规降低用工风险。',
    iconBg: 'rgba(0,168,142,0.08)',
    iconColor: '#00A88E',
    paths: ['M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', 'M15 11a3 3 0 11-6 0 3 3 0 016 0z'],
  },
]

const casmeResults = [
  { title: '稳定在岗员工 2,000+', desc: '通过科学的人力资源外包方案，实现大规模稳定用工。' },
  { title: '有效解决周期性用工难题', desc: '灵活应对业务波动，按需配置人员，规避闲置成本。' },
  { title: '试用期离职率显著降低', desc: '通过精准人岗匹配与完善的入职跟进机制，提升人员留存率。' },
  { title: '全国服务网络落地', desc: '依托多城市分支机构，实现属地化用工合规与员工服务。' },
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
  border: 1px solid rgba(24, 144, 255, 0.12);
  background: rgba(248, 250, 253, 0.8);
}

.result-badge {
  padding: 12px 16px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--accent);
  background: white;
}

.content-block {
  padding: 28px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: rgba(248, 250, 253, 0.6);
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

.solution-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  background: white;
}

.solution-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.type-tag {
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.72rem;
  font-weight: 600;
  background: rgba(0, 191, 165, 0.06);
  color: #00BFA5;
  border: 1px solid rgba(0, 191, 165, 0.15);
}

.result-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px;
  border-radius: 10px;
  background: white;
  border: 1px solid rgba(0, 191, 165, 0.08);
}

.result-check {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(0, 191, 165, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
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
