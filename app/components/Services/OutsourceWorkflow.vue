<template>
  <section ref="sectionEl" class="py-24 bg-brand-950">
    <div class="max-w-7xl mx-auto px-6">

      <!-- 标题区 -->
      <div class="text-center mb-14" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style="color: #10b981">Standard Workflow</p>
        <h2 class="section-title text-4xl mb-4">服务标准流程</h2>
        <p class="section-subtitle">七步闭环交付，运营与品控贯穿始终，高质量、高效完成每一个项目</p>
      </div>

      <!-- 七步流程卡片区 -->
      <div class="relative workflow-cards-wrap">

        <!-- 背景连接线 -->
        <div class="absolute h-px bg-brand-800/40 pointer-events-none"
          style="top: 46px; left: calc(100%/14); right: calc(100%/14)" />
        <!-- 动效进度线 -->
        <div class="absolute h-px pointer-events-none workflow-line" :class="visible ? 'workflow-line--active' : ''"
          style="top: 46px; left: calc(100%/14); right: calc(100%/14);
                 background: linear-gradient(90deg, #10b981, #34d399, #10b981)" />

        <!-- 卡片列表 -->
        <div class="grid grid-cols-7 gap-3">
          <div v-for="(step, i) in steps" :key="i" class="step-card" :class="visible ? 'step-card--visible' : ''"
            :style="`--delay: ${i * 110}ms`">
            <!-- 序号标记（右上角） -->
            <div class="step-badge">{{ String(i + 1).padStart(2, '0') }}</div>

            <!-- 顶部亮线（hover 时出现） -->
            <div class="step-top-line" />

            <!-- 图标圆 -->
            <div class="step-icon-circle">
              <svg class="w-5 h-5" style="color: #10b981" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.8">
                <path v-for="(d, pi) in step.paths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
              </svg>
              <!-- 脉冲光环 -->
              <div v-if="visible" class="icon-ring" :style="`animation-delay: ${i * 200 + 800}ms`" />
            </div>

            <!-- 标题 -->
            <h4 class="step-title">{{ step.title }}</h4>

            <!-- 描述（hover 展开） -->
            <p class="step-desc-reveal">{{ step.desc }}</p>

            <!-- 底部状态指示点 -->
            <div class="step-dot-indicator" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const visible = ref(false)

const steps = [
  {
    title: '需求沟通',
    desc: '深入了解企业用人需求，明确岗位画像与交付目标',
    paths: ['M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'],
  },
  {
    title: '项目评估',
    desc: '评估可行性，结合资源情况制定最优外包服务方案',
    paths: ['M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'],
  },
  {
    title: '合同签订',
    desc: '明确双方权责边界，签署规范合同，确保合作合规',
    paths: ['M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'],
  },
  {
    title: '方案制定',
    desc: '定制招募策略与人员管理方案，分解量化阶段目标',
    paths: ['M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'],
  },
  {
    title: '项目实施',
    desc: '全面启动人才招募与在岗管理，进度实时同步汇报',
    paths: ['M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z', 'M21 12a9 9 0 11-18 0 9 9 0 0118 0z'],
  },
  {
    title: '项目交付',
    desc: '完成人员到岗与交接工作，逐一核验并对齐验收标准',
    paths: ['M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'],
  },
  {
    title: '项目总结',
    desc: '复盘全程数据与执行质量，输出改进建议持续优化',
    paths: ['M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'],
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
/* ===== 贯穿全程横幅 ===== */
.through-banner {
  padding: 14px 28px;
  border-radius: 12px;
  border: 1px solid rgba(16, 185, 129, 0.18);
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.06), rgba(6, 21, 41, 0.6));
}

.through-line {
  height: 1px;
  background: linear-gradient(90deg, rgba(16, 185, 129, 0.4), transparent);
}

.through-line--rev {
  background: linear-gradient(270deg, rgba(16, 185, 129, 0.4), transparent);
}

/* ===== 连接线动画 ===== */
.workflow-line {
  clip-path: inset(0 100% 0 0);
}

.workflow-line--active {
  animation: line-reveal 1.4s ease-out 0.3s both;
}

@keyframes line-reveal {
  from {
    clip-path: inset(0 100% 0 0);
  }

  to {
    clip-path: inset(0 0% 0 0);
  }
}

/* ===== 卡片容器：聚焦效果 ===== */
.workflow-cards-wrap:has(.step-card:hover) .step-card:not(:hover) {
  opacity: 0.5;
}

/* ===== 步骤卡片 ===== */
.step-card {
  position: relative;
  padding: 24px 14px 20px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(10, 37, 64, 0.5);
  backdrop-filter: blur(10px);
  text-align: center;
  overflow: hidden;
  cursor: default;
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.3s ease,
    transform 0.35s cubic-bezier(0.34, 1.36, 0.64, 1),
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    background 0.35s ease;
}

.step-card--visible {
  animation: card-in 0.6s ease-out var(--delay, 0ms) both;
}

@keyframes card-in {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.step-card:hover {
  transform: translateY(-6px);
  border-color: rgba(16, 185, 129, 0.4);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45), 0 0 32px rgba(16, 185, 129, 0.18);
  background: rgba(6, 50, 35, 0.55);
}

/* ===== 顶部亮线 ===== */
.step-top-line {
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 2px;
  border-radius: 0 0 4px 4px;
  background: linear-gradient(90deg, transparent, #10b981, transparent);
  opacity: 0;
  transform: scaleX(0.4);
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.step-card:hover .step-top-line {
  opacity: 1;
  transform: scaleX(1);
}

/* ===== 序号标记 ===== */
.step-badge {
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: rgba(16, 185, 129, 0.35);
  transition: color 0.3s ease;
  line-height: 1;
}

.step-card:hover .step-badge {
  color: #34d399;
}

/* ===== 图标圆 ===== */
.step-icon-circle {
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(6, 21, 41, 0.8));
  border: 1.5px solid rgba(16, 185, 129, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  z-index: 2;
  transition: border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
}

.step-card:hover .step-icon-circle {
  border-color: #34d399;
  box-shadow: 0 0 22px rgba(16, 185, 129, 0.5), 0 0 8px rgba(16, 185, 129, 0.3);
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 21, 41, 0.6));
}

/* 脉冲光环 */
.icon-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 1px solid rgba(16, 185, 129, 0.3);
  animation: ring-pulse 3s ease-out infinite;
  pointer-events: none;
}

@keyframes ring-pulse {
  0% {
    transform: scale(1);
    opacity: 0.3;
  }

  60% {
    transform: scale(1.35);
    opacity: 0;
  }

  100% {
    transform: scale(1.35);
    opacity: 0;
  }
}

/* ===== 标题 ===== */
.step-title {
  color: rgb(229 229 229);
  font-weight: 700;
  font-size: 0.8rem;
  margin-top: 12px;
  margin-bottom: 0;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.step-card:hover .step-title {
  color: #34d399;
}

/* ===== 描述（常驻显示）===== */
.step-desc-reveal {
  font-size: 0.67rem;
  color: rgb(115 115 115);
  line-height: 1.55;
  margin-top: 8px;
  transition: color 0.3s ease;
}

.step-card:hover .step-desc-reveal {
  color: rgb(148 163 184);
}

/* ===== 底部状态点 ===== */
.step-dot-indicator {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.25);
  margin: 12px auto 0;
  transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.step-card:hover .step-dot-indicator {
  background: #34d399;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);
  transform: scale(1.5);
}
</style>
