<template>
  <section ref="sectionEl" class="py-24 bg-brand-900/50">
    <div class="max-w-7xl mx-auto px-6">

      <!-- 标题 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-gold-400 text-xs font-semibold tracking-[0.4em] uppercase mb-3">Trusted By</p>
        <h2 class="section-title text-4xl mb-4">他们选择了中达聚财</h2>
        <p class="section-subtitle">覆盖新零售、互联网、餐饮、医疗等多元行业的知名企业</p>
      </div>

      <!-- 品牌 Logo 墙 -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div
          v-for="(brand, i) in brands"
          :key="brand.name"
          class="brand-card"
          :class="visible ? 'brand-card--visible' : ''"
          :style="`--delay: ${i * 60}ms`"
        >
          <!-- 品牌图标区 -->
          <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3 mx-auto"
            :style="`background: ${brand.iconBg}`">
            <span class="text-lg font-bold" :style="`color: ${brand.iconColor}`">{{ brand.abbr }}</span>
          </div>
          <p class="text-white text-sm font-semibold text-center leading-tight">{{ brand.name }}</p>
          <p class="text-neutral-500 text-xs text-center mt-1">{{ brand.tag }}</p>
        </div>
      </div>

      <!-- 合作数字 -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="stat-strip"
          :class="visible ? 'stat-strip--visible' : ''"
          :style="`--delay: ${800 + i * 100}ms`"
        >
          <p class="text-3xl font-bold text-white">
            <span class="text-gold-400">{{ stat.value }}</span>{{ stat.suffix }}
          </p>
          <p class="text-neutral-400 text-sm mt-1">{{ stat.label }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const visible = ref(false)

const brands = [
  { name: '飞鹤乳业', abbr: '飞', tag: '新零售 · 母婴', iconBg: 'rgba(239,68,68,0.12)', iconColor: '#f87171' },
  { name: '京东集团', abbr: '京', tag: '电子商务 · 物流', iconBg: 'rgba(26,111,212,0.15)', iconColor: '#3B8FE8' },
  { name: '滴滴出行', abbr: '滴', tag: 'O2O · 出行', iconBg: 'rgba(249,115,22,0.12)', iconColor: '#fb923c' },
  { name: '新希望集团', abbr: '希', tag: '农业 · 食品', iconBg: 'rgba(34,197,94,0.12)', iconColor: '#4ade80' },
  { name: '中小企业协会', abbr: '协', tag: '行业协会 · 公益', iconBg: 'rgba(212,160,23,0.12)', iconColor: '#E8B840' },
  { name: '亚惠美食', abbr: '亚', tag: '餐饮 · 团膳', iconBg: 'rgba(168,85,247,0.12)', iconColor: '#c084fc' },
  { name: '互联网教育平台', abbr: '教', tag: '在线教育 · K12', iconBg: 'rgba(20,184,166,0.12)', iconColor: '#2dd4bf' },
  { name: '互联网医疗', abbr: '医', tag: '数字医疗 · 健康', iconBg: 'rgba(59,130,246,0.12)', iconColor: '#60a5fa' },
  { name: '音视频科技', abbr: '媒', tag: '内容 · 数据标注', iconBg: 'rgba(244,63,94,0.12)', iconColor: '#fb7185' },
  { name: '快消零售品牌', abbr: '零', tag: '快消 · 连锁门店', iconBg: 'rgba(234,179,8,0.12)', iconColor: '#facc15' },
]

const stats = [
  { value: '1,000', suffix: '+', label: '已服务 B 端企业' },
  { value: '200,000', suffix: '+', label: '已服务 C 端求职者' },
  { value: '98', suffix: '%', label: '客户续约率' },
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
.brand-card {
  position: relative;
  padding: 20px 16px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(10, 37, 64, 0.5);
  backdrop-filter: blur(12px);
  opacity: 0;
  transform: translateY(20px);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
  cursor: default;
}
.brand-card--visible {
  animation: card-in 0.5s ease-out var(--delay, 0ms) both;
}
.brand-card:hover {
  border-color: rgba(59, 143, 232, 0.3);
  box-shadow: 0 0 24px rgba(26, 111, 212, 0.15);
  transform: translateY(-3px);
}

.stat-strip {
  padding: 24px 28px;
  border-radius: 14px;
  border: 1px solid rgba(212, 160, 23, 0.15);
  background: rgba(10, 37, 64, 0.4);
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
}
.stat-strip--visible {
  animation: card-in 0.5s ease-out var(--delay, 0ms) both;
}

@keyframes card-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
