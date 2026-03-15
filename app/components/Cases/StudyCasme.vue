<template>
  <section ref="sectionEl" class="py-24 bg-brand-950 relative overflow-hidden">

    <!-- 背景光晕 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
        style="background: radial-gradient(circle, rgba(26,111,212,0.05) 0%, transparent 65%)" />
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">

      <!-- 案例标识 -->
      <div class="flex items-center gap-4 mb-12" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <div class="h-px flex-1 bg-gradient-to-r from-brand-600/50 to-transparent" />
        <span class="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase">Case Study 01</span>
        <div class="h-px flex-1 bg-gradient-to-l from-brand-600/50 to-transparent" />
      </div>

      <!-- 公司标题卡 -->
      <div class="case-header-card mb-12" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <div class="flex flex-col md:flex-row md:items-center gap-6">
          <!-- Logo 区 -->
          <div class="flex-shrink-0">
            <div class="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white"
              style="background: linear-gradient(135deg, rgba(26,111,212,0.4), rgba(59,130,246,0.2)); border: 1px solid rgba(59,143,232,0.3);">
              协
            </div>
          </div>
          <!-- 公司信息 -->
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3 mb-2">
              <h2 class="text-2xl font-bold text-white">中国中小企业协会</h2>
              <span class="text-xs px-2.5 py-1 rounded-full font-semibold"
                style="background: rgba(212,160,23,0.12); color: #E8B840; border: 1px solid rgba(212,160,23,0.2)">
                CASME
              </span>
              <span class="text-xs px-2.5 py-1 rounded-full"
                style="background: rgba(59,130,246,0.1); color: #72B5F2; border: 1px solid rgba(59,130,246,0.2)">
                行业协会 · 公益服务
              </span>
            </div>
            <p class="text-neutral-400 text-sm leading-relaxed max-w-2xl">
              由国家发展改革委发起、报国务院批准设立，成立于 2006 年 12 月，隶属工业和信息化部行业管理，
              受最高法委托逐步系统化管理全国法院庭前调解人员。
            </p>
          </div>
          <!-- 关键数据 -->
          <div class="flex-shrink-0 grid grid-cols-2 gap-3">
            <div class="result-badge" style="--accent: rgba(26,111,212,0.3); --text: #72B5F2">
              <p class="text-xl font-bold text-white">3,000<span class="text-base">+</span></p>
              <p class="text-xs" style="color: #72B5F2">转移外包人员</p>
            </div>
            <div class="result-badge" style="--accent: rgba(212,160,23,0.2); --text: #E8B840">
              <p class="text-xl font-bold text-white">2,000<span class="text-base">+</span></p>
              <p class="text-xs" style="color: #E8B840">稳定在岗员工</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 内容主体：四列式布局 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <!-- 1. 项目背景 -->
        <div class="content-block" :class="visible ? 'content-block--visible' : ''" style="--delay: 100ms">
          <div class="block-label" style="--accent-color: #3B8FE8; --accent-bg: rgba(59,143,232,0.1)">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>项目背景</span>
          </div>
          <p class="text-neutral-300 text-sm leading-relaxed">
            中国中小企业协会成立于 2006 年 12 月，是由国家发展改革委发起、报国务院批准设立的服务全国中小企业的综合性行业协会，隶属工业和信息化部行业管理。
            受最高法委托逐步系统化管理全国法院庭前调解人员（公益性质）。
          </p>
        </div>

        <!-- 2. 客户需求 -->
        <div class="content-block" :class="visible ? 'content-block--visible' : ''" style="--delay: 200ms">
          <div class="block-label" style="--accent-color: #f97316; --accent-bg: rgba(249,115,22,0.1)">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>客户需求</span>
          </div>
          <div class="space-y-3">
            <div v-for="need in casmeNeeds" :key="need.title" class="need-item">
              <div class="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                style="background: rgba(249,115,22,0.15)">
                <div class="w-1.5 h-1.5 rounded-full bg-orange-400" />
              </div>
              <div>
                <p class="text-white text-sm font-semibold">{{ need.title }}</p>
                <p class="text-neutral-400 text-xs mt-0.5 leading-relaxed">{{ need.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. 解决方案 -->
        <div class="content-block lg:col-span-2" :class="visible ? 'content-block--visible' : ''" style="--delay: 300ms">
          <div class="block-label" style="--accent-color: #E8B840; --accent-bg: rgba(232,184,64,0.1)">
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
                <p class="text-white text-sm font-bold mb-1.5">{{ sol.title }}</p>
                <p class="text-neutral-400 text-xs leading-relaxed">{{ sol.desc }}</p>
              </div>
            </div>
          </div>
          <!-- 方案要点 -->
          <div class="mt-5 flex items-center gap-3 flex-wrap">
            <span class="text-neutral-500 text-xs">核心产品类型：</span>
            <span class="type-tag">半风险人力资源外包</span>
            <span class="type-tag">全风险人力资源外包</span>
          </div>
        </div>

        <!-- 4. 服务成果 -->
        <div class="content-block lg:col-span-2" :class="visible ? 'content-block--visible' : ''" style="--delay: 400ms">
          <div class="block-label" style="--accent-color: #4ade80; --accent-bg: rgba(74,222,128,0.1)">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>服务成果</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="result in casmeResults" :key="result.title" class="result-row">
              <div class="result-check">
                <svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" stroke-width="2.5"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p class="text-white text-sm font-semibold">{{ result.title }}</p>
                <p class="text-neutral-400 text-xs mt-0.5">{{ result.desc }}</p>
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
  {
    title: '人员分散，管理成本高',
    desc: '全国各县市均有工作人员，每个工作点人员较少，跨地域统一管理成本极高。',
  },
  {
    title: '培训信息化需求迫切',
    desc: '需要搭建线上培训体系，实现远程知识传递与合规培训管理。',
  },
  {
    title: '人员结构复杂',
    desc: '人员组成涵盖全职、兼职、退休返聘等多种形式，用工形式认定困难，法律风险高。',
  },
]

const casmeSolutions = [
  {
    title: 'SAAS 系统赋能管理',
    desc: '各地调解人员通过 SAAS 系统规划工作安排，实现快速响应与科学管理效能提升。',
    iconBg: 'rgba(26,111,212,0.15)',
    iconColor: '#3B8FE8',
    paths: ['M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18'],
  },
  {
    title: '专业培训管理',
    desc: '构建线上培训管理体系，系统性优化人员培训成本与管理成本，提升合规标准。',
    iconBg: 'rgba(212,160,23,0.15)',
    iconColor: '#E8B840',
    paths: ['M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'],
  },
  {
    title: '属地化参保落地',
    desc: '凭借覆盖全国的服务网络，实现部分员工的属地化参保需求，合规降低用工风险。',
    iconBg: 'rgba(74,222,128,0.12)',
    iconColor: '#4ade80',
    paths: ['M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', 'M15 11a3 3 0 11-6 0 3 3 0 016 0z'],
  },
]

const casmeResults = [
  {
    title: '稳定在岗员工 2,000+',
    desc: '通过科学的人力资源外包方案，实现大规模稳定用工。',
  },
  {
    title: '有效解决周期性用工难题',
    desc: '灵活应对业务波动，按需配置人员，规避闲置成本。',
  },
  {
    title: '试用期离职率显著降低',
    desc: '通过精准人岗匹配与完善的入职跟进机制，提升人员留存率。',
  },
  {
    title: '全国服务网络落地',
    desc: '依托多城市分支机构，实现属地化用工合规与员工服务。',
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
  border: 1px solid rgba(59, 143, 232, 0.2);
  background: rgba(10, 37, 64, 0.5);
  backdrop-filter: blur(12px);
}

.result-badge {
  padding: 12px 16px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--accent);
  background: rgba(10, 37, 64, 0.4);
}

.content-block {
  padding: 28px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(10, 37, 64, 0.4);
  backdrop-filter: blur(10px);
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
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(6, 21, 41, 0.5);
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
  background: rgba(212, 160, 23, 0.1);
  color: #E8B840;
  border: 1px solid rgba(212, 160, 23, 0.2);
}

.result-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px;
  border-radius: 10px;
  background: rgba(6, 21, 41, 0.4);
  border: 1px solid rgba(74, 222, 128, 0.08);
}

.result-check {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(74, 222, 128, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

@keyframes block-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
