<template>
  <section ref="sectionEl" class="py-24 relative overflow-hidden" style="background: #f8fafc;">
    <!-- 背景网格纹 -->
    <div class="absolute inset-0 pointer-events-none" style="
      background-image: linear-gradient(rgba(14,165,201,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(14,165,201,0.03) 1px, transparent 1px);
      background-size: 48px 48px;
    " />

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- 标题 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style="color: #0EA5C9">Service Scenarios</p>
        <h2 class="section-title text-4xl mb-4">7 大服务场景</h2>
        <p class="section-subtitle">覆盖软件、家政、配送、同城等多元化灵活就业形态，全面满足企业弹性用工需求</p>
      </div>

      <!-- 大数字装饰 -->
      <div class="flex justify-center mb-12" :class="visible ? 'animate-fade-up' : 'opacity-0'" style="animation-delay:0.1s">
        <div class="flex items-end gap-2">
          <span class="text-[72px] font-black leading-none" style="color: rgba(14,165,201,0.12)">7</span>
          <span class="text-sm font-medium mb-4" style="color: rgba(14,165,201,0.4)">大场景全覆盖</span>
        </div>
      </div>

      <!-- 场景卡片（不等分自然流动布局） -->
      <div class="flex flex-wrap justify-center gap-4">
        <div
          v-for="(scene, i) in scenes"
          :key="i"
          class="scene-card"
          :class="visible ? 'scene-card--visible' : ''"
          :style="`--delay: ${i * 80}ms`"
        >
          <!-- 图标 -->
          <div class="scene-icon">
            <svg class="w-5 h-5" style="color:#0EA5C9" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24">
              <path v-for="(d, pi) in scene.paths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
            </svg>
          </div>
          <!-- 文字 -->
          <span class="scene-label">{{ scene.label }}</span>
          <!-- hover 粒子光点 -->
          <div class="scene-dot" />
        </div>
      </div>

      <!-- 底部说明行 -->
      <div class="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3"
        :class="visible ? 'animate-fade-up' : 'opacity-0'" style="animation-delay:0.5s">
        <div v-for="(tag, i) in bottomTags" :key="i" class="flex items-center gap-2">
          <div class="w-1.5 h-1.5 rounded-full" style="background:#0EA5C9" />
          <span class="text-neutral-400 text-xs">{{ tag }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const visible = ref(false)

const scenes = [
  {
    label: '软件',
    paths: ['M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'],
  },
  {
    label: '家政',
    paths: ['M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'],
  },
  {
    label: '配送',
    paths: ['M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'],
  },
  {
    label: '同城',
    paths: ['M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', 'M15 11a3 3 0 11-6 0 3 3 0 016 0z'],
  },
  {
    label: '媒体',
    paths: ['M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'],
  },
  {
    label: '营销',
    paths: ['M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'],
  },
  {
    label: '零售',
    paths: ['M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'],
  },
]

const bottomTags = [
  '灵活接单，自主安排时间',
  '按任务结算，收入透明',
  '全国城市覆盖',
  '数字化平台支撑',
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
.scene-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 24px;
  border-radius: 50px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  cursor: default;
  opacity: 0;
  transform: translateY(16px) scale(0.96);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s, background 0.3s;
  overflow: hidden;
}
.scene-card--visible {
  animation: pill-in 0.5s ease-out var(--delay, 0ms) both;
}
.scene-card:hover {
  border-color: rgba(14, 165, 201, 0.4);
  background: rgba(14, 165, 201, 0.04);
  box-shadow: 0 4px 20px rgba(0,0,0,0.07), 0 0 20px rgba(14,165,201,0.1);
  transform: translateY(-3px) scale(1.02);
}
.scene-icon {
  width: 36px; height: 36px;
  border-radius: 10px;
  background: rgba(14,165,201,0.08);
  border: 1px solid rgba(14,165,201,0.2);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
}
.scene-card:hover .scene-icon {
  background: rgba(14,165,201,0.15);
  border-color: rgba(14,165,201,0.4);
  box-shadow: 0 0 12px rgba(14,165,201,0.2);
}
.scene-label {
  font-size: 15px;
  font-weight: 600;
  color: #374151;
  white-space: nowrap;
  transition: color 0.3s;
}
.scene-card:hover .scene-label {
  color: #0EA5C9;
}
/* 角落光点 */
.scene-dot {
  position: absolute;
  top: 8px; right: 10px;
  width: 4px; height: 4px;
  border-radius: 50%;
  background: rgba(14,165,201,0.4);
  opacity: 0;
  transition: opacity 0.3s;
}
.scene-card:hover .scene-dot { opacity: 1; }

@keyframes pill-in {
  from { opacity: 0; transform: translateY(16px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
</style>
