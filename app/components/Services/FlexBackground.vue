<template>
  <section ref="sectionEl" class="py-28 overflow-hidden relative" style="background: #ffffff;">
    <!-- 背景装饰：大字水印 -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <span class="text-[clamp(80px,18vw,200px)] font-black tracking-widest text-white/[0.02] whitespace-nowrap">
        灵活用工
      </span>
    </div>
    <!-- 紫色光晕 -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
      style="background: radial-gradient(ellipse at center, rgba(14,165,201,0.04) 0%, transparent 70%);" />

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- 标题 -->
      <div class="fade-block text-center mb-20" :class="visible ? 'fade-block--in' : ''">
        <p class="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style="color: #0EA5C9">Industry Background</p>
        <h2 class="section-title text-4xl mb-4">新就业形态，政策驱动新机遇</h2>
        <p class="section-subtitle">共享经济蓬勃发展，灵活用工已成为国家战略级支持的用人新模式</p>
      </div>

      <!-- Z字型：左文字 + 右政策卡片 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- 左侧：背景段落 -->
        <div class="fade-block" :class="visible ? 'fade-block--in' : ''" style="--fb-delay: 120ms">
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
                style="background: rgba(14,165,201,0.08); border: 1px solid rgba(14,165,201,0.2)">
                <svg class="w-5 h-5" style="color:#0EA5C9" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-base mb-2" style="color:#111827">共享经济的时代背景</h3>
                <p class="text-sm leading-relaxed" style="color:#6b7280">
                  随着疫情催化，共享用工、灵活就业等"新就业形态"受到前所未有的关注。快递小哥、网约车司机、视频博主成为人们熟悉的"新职业"，灵活用工已成为劳动力市场的重要组成。
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
                style="background: rgba(14,165,201,0.08); border: 1px solid rgba(14,165,201,0.2)">
                <svg class="w-5 h-5" style="color:#0EA5C9" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-base mb-2" style="color:#111827">数字经济的新动能</h3>
                <p class="text-sm leading-relaxed" style="color:#6b7280">
                  共享经济领域的发展使个人生产经营活动更多元、更灵活，为贫困人口创造了提高收入的可能，是全面建成小康社会、打好脱贫攻坚战的重要路径。
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
                style="background: rgba(14,165,201,0.08); border: 1px solid rgba(14,165,201,0.2)">
                <svg class="w-5 h-5" style="color:#0EA5C9" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-base mb-2" style="color:#111827">我们的核心理念</h3>
                <p class="text-sm leading-relaxed" style="color:#6b7280">
                  持续创新迭代，依托数字化赋能提升服务效率，快速匹配供给与需求，让千万奋斗者更快地接单干活，牢固树立"业务真实、风险可控"的发展理念。
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧：政策引用卡片 -->
        <div class="space-y-5">
          <div
            v-for="(policy, i) in policies"
            :key="i"
            class="policy-card"
            :class="visible ? 'policy-card--visible' : ''"
            :style="`--delay: ${i * 150 + 100}ms`"
          >
            <!-- 紫色左边框 -->
            <div class="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full" style="background: #0EA5C9" />
            <div class="pl-5">
              <p class="text-sm leading-relaxed mb-3 italic" style="color:#374151">" {{ policy.quote }} "</p>
              <div class="flex items-center gap-2">
                <div class="w-5 h-[1px]" style="background: rgba(14,165,201,0.5)" />
                <span class="text-xs" style="color: #0EA5C9">{{ policy.source }}</span>
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

const policies = [
  {
    quote: '要支持多渠道灵活就业，顺势而为，新就业形态脱颖而出。',
    source: '习近平总书记，2020年',
  },
  {
    quote: '进一步降低个体经营者线上创业就业成本，提供多样化的就业机会。',
    source: '国家发展改革委等13部门联合发布，2020年',
  },
  {
    quote: '个体经营、非全日制以及新就业形态等灵活多样的就业方式，是劳动者就业增收的重要途径。',
    source: '国务院办公厅，国办发〔2020〕27号',
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
/* ── 通用淡入上升块（替代全局 animate-fade-up，避免 forwards 重置冲突） ── */
.fade-block {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.55s ease, transform 0.55s ease;
  transition-delay: var(--fb-delay, 0ms);
}
.fade-block--in {
  opacity: 1;
  transform: translateY(0);
}

/* ── 政策卡片：改用 transition 替代 animation，消除卡顿 ── */
.policy-card {
  position: relative;
  padding: 20px 20px 20px 0;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  background: #f8fafc;
  overflow: hidden;
  opacity: 0;
  transform: translateX(16px);
  transition: opacity 0.5s ease, transform 0.5s ease,
              border-color 0.3s, box-shadow 0.3s;
  transition-delay: var(--delay, 0ms);
}

.policy-card--visible {
  opacity: 1;
  transform: translateX(0);
}

.policy-card:hover {
  border-color: rgba(14, 165, 201, 0.25);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.07), 0 0 20px rgba(14, 165, 201, 0.06);
}
</style>
