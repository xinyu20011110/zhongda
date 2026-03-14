<template>
  <section ref="sectionEl" class="py-24 bg-brand-900 relative overflow-hidden">

    <!-- 背景装饰 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 rounded-full opacity-30"
        style="background: radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)" />
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">

      <!-- 标题 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-gold-400 text-xs font-semibold tracking-[0.4em] uppercase mb-3">Our Philosophy</p>
        <h2 class="section-title text-4xl mb-4">企业理念</h2>
        <p class="section-subtitle">明确的使命与愿景，构建专业化的价值体系</p>
      </div>

      <!-- 4 项理念 -->
      <div class="grid grid-cols-4 gap-6" :class="visible ? 'philo-grid--visible' : 'opacity-0'">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="philo-card"
          :style="`--delay: ${i * 110}ms`"
        >
          <!-- 序号 -->
          <div class="philo-num">{{ String(i + 1).padStart(2, '0') }}</div>

          <!-- 图标 -->
          <div class="philo-icon-wrap mb-5" :style="`color: ${item.color}`">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path v-for="(d, pi) in item.paths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
            </svg>
          </div>

          <!-- 关键词 -->
          <div class="text-xs font-bold tracking-[0.25em] uppercase mb-3" :style="`color: ${item.color}`">
            {{ item.keyword }}
          </div>

          <!-- 标题 -->
          <h3 class="text-white font-bold text-base mb-3 leading-snug">{{ item.title }}</h3>

          <!-- 内容 -->
          <p class="text-neutral-400 text-sm leading-relaxed">{{ item.content }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const visible = ref(false)

const items = [
  {
    keyword: 'Mission',
    title: '使命',
    content: '为企业做好人力资源保障和数据库共享平台，助力组织高效稳定发展。',
    color: '#34d399',
    paths: ['M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'],
  },
  {
    keyword: 'Position',
    title: '定位',
    content: '提供专业人力资源服务解决方案，覆盖招聘外包、人才外包、灵活用工全场景。',
    color: '#60a5fa',
    paths: ['M15 10.5a3 3 0 11-6 0 3 3 0 016 0z', 'M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'],
  },
  {
    keyword: 'Vision',
    title: '愿景',
    content: '成为全场景人力资源服务行业引领者，推动人才与企业的高质量双向赋能。',
    color: '#fbbf24',
    paths: ['M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z', 'M15 12a3 3 0 11-6 0 3 3 0 016 0z'],
  },
  {
    keyword: 'Culture',
    title: '团队文化',
    content: '平等互利、讲求实效、形式多样、共同发展，打造高凝聚力的专业服务团队。',
    color: '#f87171',
    paths: ['M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'],
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
.philo-grid--visible .philo-card {
  animation: card-up 0.6s ease-out var(--delay, 0ms) both;
}
@keyframes card-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.philo-card {
  position: relative;
  padding: 28px 24px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(10, 37, 64, 0.45);
  backdrop-filter: blur(12px);
  overflow: hidden;
  opacity: 0;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
}
.philo-card:hover {
  border-color: rgba(255, 255, 255, 0.13);
  box-shadow: 0 8px 36px rgba(0, 0, 0, 0.35);
  transform: translateY(-4px);
}

.philo-num {
  position: absolute;
  top: 14px; right: 18px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.08);
  line-height: 1;
}

.philo-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, box-shadow 0.3s;
}
.philo-card:hover .philo-icon-wrap {
  background: rgba(255, 255, 255, 0.08);
}
</style>
