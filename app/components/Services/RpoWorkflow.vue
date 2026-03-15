<template>
  <section ref="sectionEl" class="py-24 bg-brand-950">
    <div class="max-w-7xl mx-auto px-6">

      <!-- 标题区 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-gold-400 text-xs font-semibold tracking-[0.4em] uppercase mb-3">Standard Workflow</p>
        <h2 class="section-title text-4xl mb-4">服务标准流程</h2>
        <p class="section-subtitle">七步闭环交付，每一个环节专业管控，确保招聘质量与效率</p>
      </div>

      <!-- 桌面端：横向时间轴 -->
      <div class="hidden lg:block">
        <div class="relative">
          <!-- 底部连接线（完整） -->
          <div class="absolute top-[28px] left-[calc(100%/14)] right-[calc(100%/14)] h-px bg-brand-800/60" />
          <!-- 动效进度线 -->
          <div
            class="absolute top-[28px] left-[calc(100%/14)] h-px bg-gradient-to-r from-brand-500 to-gold-400 workflow-line"
            :class="visible ? 'workflow-line--active' : ''" :style="`right: calc(100% / 14)`" />

          <!-- 步骤列表 -->
          <div class="grid grid-cols-7 gap-2">
            <div v-for="(step, i) in steps" :key="i" class="workflow-step flex flex-col items-center"
              :class="visible ? 'workflow-step--visible' : ''" :style="`--delay: ${i * 120}ms`">
              <!-- 圆圈 + 文字统一包裹，hover 时整体缩放 -->
              <div class="step-content">
                <!-- 序号圆圈 -->
                <div class="step-dot">
                  <span class="step-number">{{ i + 1 }}</span>
                  <!-- 外圈光晕（激活后） -->
                  <div v-if="visible" class="step-ring" :style="`animation-delay: ${i * 120 + 400}ms`" />
                </div>

                <!-- 步骤内容 -->
                <div class="mt-4 text-center px-1">
                  <h4 class="step-title">{{ step.title }}</h4>
                  <p class="step-desc">{{ step.desc }}</p>
                </div>
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

const steps = [
  {
    title: '沟通需求',
    desc: '与需求方逐一沟通，信息无缝传达',
  },
  {
    title: '指定方案',
    desc: '岗位需求分析、人才分析，制定专属方案',
  },
  {
    title: '执行打样',
    desc: '岗位竞争力测试，候选人画像匹配',
  },
  {
    title: '推荐人才',
    desc: '大数据精准匹配，人才库初试与推荐',
  },
  {
    title: '组织面试',
    desc: '面试组织及协调，招聘流程全程反馈',
  },
  {
    title: '入职跟进',
    desc: '入职资料收集，入职进度全程跟进',
  },
  {
    title: '回访总结',
    desc: '定期回访，阶段性汇报总结报告输出',
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
    { threshold: 0.2 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})
</script>

<style scoped>
/* ===== 横向时间轴（桌面） ===== */

/* 进度线动画：clip-path 从左向右展开 */
.workflow-line {
  clip-path: inset(0 100% 0 0);
}

.workflow-line--active {
  animation: line-reveal 1.2s ease-out 0.3s both;
}

@keyframes line-reveal {
  from {
    clip-path: inset(0 100% 0 0);
  }

  to {
    clip-path: inset(0 0% 0 0);
  }
}

/* 步骤整体入场 */
.workflow-step {
  opacity: 0;
  transform: translateY(20px);
}

.workflow-step--visible {
  animation: step-in 0.5s ease-out var(--delay, 0ms) both;
}

@keyframes step-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 内容容器：负责整体缩放，不影响网格布局 */
.step-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* spring 弹性曲线，丝滑且有弹性感 */
  transition: transform 0.4s ease-out;
  cursor: default;
}

.workflow-step:hover .step-content {
  transform: scale(1.12);
}

/* 序号圆圈 */
.step-dot {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, theme('colors.brand.700'), theme('colors.brand.900'));
  border: 2px solid theme('colors.brand.600');
  display: flex;
  align-items: center;
  justify-content: center;
  color: theme('colors.brand.200');
  z-index: 10;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease;
}

.workflow-step:hover .step-dot {
  border-color: theme('colors.gold.400');
  background: linear-gradient(135deg, theme('colors.brand.500'), theme('colors.brand.700'));
  box-shadow: 0 0 20px rgba(232, 184, 64, 0.5);
  color: white;
}

/* 数字和文字随 scale 同步，transition 由父容器控制 */
.step-number {
  font-size: 0.875rem;
  font-weight: 900;
}

.step-title {
  color: white;
  font-weight: 700;
  font-size: 0.875rem;
  margin-bottom: 0.375rem;
  transition: color 0.3s ease;
}

.step-desc {
  color: rgb(115 115 115);
  font-size: 0.75rem;
  line-height: 1.5;
  transition: color 0.3s ease;
}

.workflow-step:hover .step-title {
  color: theme('colors.gold.300');
}

.workflow-step:hover .step-desc {
  color: rgb(163 163 163);
}

/* 外圈脉冲 */
.step-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 1px solid rgba(232, 184, 64, 0.3);
  animation: ring-pulse 2.5s ease-out infinite;
}

@keyframes ring-pulse {
  0% {
    transform: scale(1);
    opacity: 0.3;
  }

  60% {
    transform: scale(1.3);
    opacity: 0;
  }

  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

/* ===== 纵向时间轴（移动端） ===== */
.workflow-line-v {
  height: 0%;
  transition: none;
}

.workflow-line-v--active {
  animation: line-grow-v 1.2s ease-out 0.3s both;
}

@keyframes line-grow-v {
  from {
    height: 0%;
  }

  to {
    height: calc(100% - 24px);
  }
}

.workflow-step-v {
  position: relative;
  opacity: 0;
  transform: translateX(-12px);
}

.workflow-step-v--visible {
  animation: step-in-v 0.45s ease-out var(--delay, 0ms) both;
}

@keyframes step-in-v {
  from {
    opacity: 0;
    transform: translateX(-12px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.step-dot-v {
  top: 12px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, theme('colors.brand.500'), theme('colors.brand.700'));
  border: 2px solid theme('colors.brand.500');
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 10;
  flex-shrink: 0;
}
</style>
