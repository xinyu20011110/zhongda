<template>
  <section ref="sectionEl" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">

      <!-- 标题 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-[#00BFA5] text-xs font-semibold tracking-[0.4em] uppercase mb-3">Company Profile</p>
        <h2 class="section-title text-4xl mb-4">公司简介</h2>
        <p class="section-subtitle">一体化解决方案，实现人才与组织的双向赋能</p>
      </div>

      <!-- 左右布局 -->
      <div class="grid grid-cols-2 gap-20 items-center">

        <!-- 左侧：文字介绍 -->
        <div :class="visible ? 'intro-left' : 'opacity-0'">
          <!-- 成立年份标牌 -->
          <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8 year-badge">
            <div class="w-2 h-2 rounded-full bg-[#00BFA5] animate-pulse" />
            <span class="text-[#00BFA5] text-sm font-semibold tracking-widest">创立于 2018 年</span>
          </div>

          <p class="text-neutral-600 leading-8 text-base mb-6">
            中达聚财是一家以<span class="text-neutral-800 font-semibold">人力资源服务为主业</span>的综合性企业集团，致力于为各类客户提供一体化解决方案，实现人才与组织的双向赋能。
          </p>
          <p class="text-neutral-500 leading-8 text-sm mb-8">
            公司依托广泛的全国落地网络，整合优质人才资源与数字化服务能力，覆盖人才招募、人员外包、灵活用工等多元服务场景，助力企业降本增效、合规稳定运营。
          </p>

          <!-- 标签组 -->
          <div class="flex flex-wrap gap-3">
            <span v-for="tag in tags" :key="tag" class="tag-chip">{{ tag }}</span>
          </div>
        </div>

        <!-- 右侧：4项数据 -->
        <div class="grid grid-cols-2 gap-5" :class="visible ? 'intro-right' : 'opacity-0'">
          <div v-for="(item, i) in metrics" :key="i" class="metric-card"
            :style="`--delay: ${i * 100}ms`">
            <div class="metric-icon-wrap mb-4">
              <svg class="w-5 h-5" :style="`color: ${item.color}`" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.6">
                <path v-for="(d, pi) in item.paths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
              </svg>
            </div>
            <div class="flex items-end gap-1 mb-1">
              <span class="text-3xl font-black" :style="`color: ${item.color}`">{{ item.value }}</span>
              <span class="text-lg font-bold mb-0.5" :style="`color: ${item.color}`">{{ item.unit }}</span>
            </div>
            <p class="text-neutral-700 text-sm font-medium">{{ item.label }}</p>
            <p class="text-neutral-400 text-xs mt-0.5">{{ item.sublabel }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const visible = ref(false)

const tags = ['人力资源服务', '招聘流程外包', '人才外包托管', '灵活用工', '全国落地网络', '数字化管理']

const metrics = [
  {
    value: '400', unit: '+', label: '覆盖城市', sublabel: '遍及全国31省',
    color: '#1890FF',
    paths: ['M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z'],
  },
  {
    value: '2万', unit: '+', label: '赋能中外人才', sublabel: '服务百余家企业',
    color: '#00BFA5',
    paths: ['M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'],
  },
  {
    value: '10', unit: '+', label: '专业团队沉淀', sublabel: '行业深耕年限',
    color: '#0D7FEE',
    paths: ['M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'],
  },
  {
    value: '7×24', unit: '', label: '全时服务保障', sublabel: '随时响应需求',
    color: '#00A88E',
    paths: ['M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'],
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
.year-badge {
  background: rgba(0, 191, 165, 0.06);
  border: 1px solid rgba(0, 191, 165, 0.15);
}

.tag-chip {
  display: inline-block;
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  background: rgba(24, 144, 255, 0.04);
  border: 1px solid rgba(24, 144, 255, 0.1);
}

.intro-left {
  animation: fade-in-left 0.7s ease-out 0.1s both;
}
.intro-right {
  animation: fade-in-right 0.7s ease-out 0.25s both;
}
@keyframes fade-in-left {
  from { opacity: 0; transform: translateX(-24px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes fade-in-right {
  from { opacity: 0; transform: translateX(24px); }
  to   { opacity: 1; transform: translateX(0); }
}

.metric-card {
  padding: 24px 20px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: rgba(248, 250, 253, 0.8);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
}
.metric-card:hover {
  border-color: rgba(24, 144, 255, 0.2);
  box-shadow: 0 8px 32px rgba(24, 144, 255, 0.08);
  transform: translateY(-3px);
}

.metric-icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(24, 144, 255, 0.06);
  border: 1px solid rgba(24, 144, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
