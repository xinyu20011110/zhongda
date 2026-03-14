<template>
  <section ref="sectionEl" class="py-24 bg-brand-900">
    <div class="max-w-7xl mx-auto px-6">

      <!-- 标题区 -->
      <div class="text-center mb-12" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-gold-400 text-xs font-semibold tracking-[0.4em] uppercase mb-3">Talent Reserve</p>
        <h2 class="section-title text-4xl mb-4">候选人储备</h2>
        <p class="section-subtitle">覆盖各行各业的海量优质人才，随时匹配您的招聘需求</p>
      </div>

      <!-- 400万+ 大横幅 -->
      <div
        class="stat-banner"
        :class="visible ? 'stat-banner--visible' : 'opacity-0'"
      >
        <!-- 左侧光晕 -->
        <div class="absolute left-12 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-[40px] opacity-20 bg-gold-400 pointer-events-none" />
        <div class="absolute right-12 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-[30px] opacity-10 bg-brand-300 pointer-events-none" />

        <div class="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <!-- 人才图标 -->
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow-blue flex-shrink-0">
            <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <!-- 数字 -->
          <div class="text-center sm:text-left">
            <div class="flex items-baseline gap-2 justify-center sm:justify-start">
              <span class="text-6xl md:text-7xl font-black text-gold-400 leading-none">400<span class="text-4xl">万+</span></span>
            </div>
            <p class="text-white font-semibold text-lg mt-1">各行业基础岗位候选人有效人才库</p>
            <p class="text-neutral-400 text-sm mt-1">满足客户上百个岗位需求，与主流招聘平台实时同步更新</p>
          </div>
          <!-- 竖向分隔线 -->
          <div class="hidden sm:block w-px h-16 bg-white/10" />
          <!-- 右侧辅助说明 -->
          <div class="text-center sm:text-left">
            <div class="flex items-baseline gap-1 justify-center sm:justify-start">
              <span class="text-3xl font-black text-brand-300">100+</span>
              <span class="text-neutral-400 text-sm">岗位类型</span>
            </div>
            <p class="text-neutral-500 text-xs mt-1">覆盖基础岗到中高端岗</p>
          </div>
        </div>
      </div>

      <!-- 重点服务行业标题 -->
      <div class="text-center mt-16 mb-10" :class="visible ? 'animate-fade-up-delay-1' : 'opacity-0'">
        <h3 class="text-white font-bold text-2xl mb-2">重点服务行业</h3>
        <p class="text-neutral-500 text-sm">六大核心行业纵深覆盖，人才储备精准匹配</p>
      </div>

      <!-- 6 个行业卡片（3×2） -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(industry, i) in industries"
          :key="i"
          class="industry-card"
          :class="visible ? 'industry-card--visible' : ''"
          :style="`--delay: ${200 + i * 100}ms`"
        >
          <!-- 行业图标 + 名称 -->
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              :style="`background: ${industry.color}1a; border: 1px solid ${industry.color}30`">
              <svg class="w-5 h-5" :style="`color: ${industry.color}`" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" :d="industry.icon" />
              </svg>
            </div>
            <div>
              <h4 class="text-white font-semibold text-sm">{{ industry.name }}</h4>
              <div class="text-[10px] mt-0.5" :style="`color: ${industry.color}`">{{ industry.count }} 个岗位方向</div>
            </div>
          </div>

          <!-- 顶部色条 -->
          <div class="h-px mb-4" :style="`background: linear-gradient(90deg, ${industry.color}60, transparent)`" />

          <!-- 岗位标签 -->
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="role in industry.roles"
              :key="role"
              class="role-tag"
            >
              {{ role }}
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

const industries = [
  {
    name: '新零售',
    count: 7,
    color: '#3B8FE8',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
    roles: ['门店运营', '社群运营', '供应链', '采购', '店员', '餐饮管理', 'BD'],
  },
  {
    name: '互联网教育',
    count: 7,
    color: '#E8B840',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
    roles: ['社群运营', '课程顾问', 'TMK', '辅导老师', '班主任', '教务', '审核'],
  },
  {
    name: '互联网医疗',
    count: 6,
    color: '#34d399',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    roles: ['线下店员', '热线客服', '在线客服', '医师', '药师', '地推'],
  },
  {
    name: 'O2O / 电子商务',
    count: 5,
    color: '#f472b6',
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    roles: ['呼叫中心', '销售主管', '催收', '新媒体运营', '审核'],
  },
  {
    name: '音视频',
    count: 7,
    color: '#a78bfa',
    icon: 'M15 10l4.553-2.069A1 1 0 0121 8.876v6.248a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    roles: ['数据标注', '图片审核', '音频审核', '视频审核', '文字审核', '账号审核', '版权审核'],
  },
  {
    name: '职能技术',
    count: 6,
    color: '#72B5F2',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    roles: ['HR', '行政', '财务会计', '法务', '设计师', '程序员'],
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
/* 大数据横幅 */
.stat-banner {
  position: relative;
  padding: 40px 48px;
  border-radius: 20px;
  border: 1px solid rgba(232, 184, 64, 0.2);
  background: linear-gradient(135deg, rgba(10, 37, 64, 0.8), rgba(13, 53, 96, 0.6));
  backdrop-filter: blur(16px);
  overflow: hidden;
  transition: transform 0.3s;
}

.stat-banner--visible {
  animation: banner-in 0.7s ease-out 0.1s both;
}

.stat-banner:hover {
  transform: translateY(-2px);
  border-color: rgba(232, 184, 64, 0.35);
}

@keyframes banner-in {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}

/* 行业卡片 */
.industry-card {
  padding: 24px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(10, 37, 64, 0.5);
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translateY(24px);
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}

.industry-card--visible {
  animation: card-in 0.55s ease-out var(--delay, 0ms) both;
}

.industry-card:hover {
  border-color: rgba(255, 255, 255, 0.12);
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
}

@keyframes card-in {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 岗位标签 */
.role-tag {
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 9999px;
  background: rgba(59, 143, 232, 0.1);
  border: 1px solid rgba(59, 143, 232, 0.2);
  color: theme('colors.brand.200');
  transition: background 0.2s, border-color 0.2s;
}

.industry-card:hover .role-tag {
  background: rgba(59, 143, 232, 0.15);
  border-color: rgba(59, 143, 232, 0.3);
}
</style>
