<template>
  <section ref="sectionEl" class="py-24 relative overflow-hidden" style="background: #f8fafc;">
    <div class="absolute top-0 left-0 right-0 h-px"
      style="background: linear-gradient(90deg, transparent, rgba(14,165,201,0.3), transparent)" />

    <!-- 背景光晕 -->
    <div class="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
      style="background: radial-gradient(ellipse, rgba(14,165,201,0.04) 0%, transparent 65%)" />

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- 标题 -->
      <div class="text-center mb-12" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style="color: #0EA5C9">Solutions</p>
        <h2 class="section-title text-4xl mb-4" style="color:#111827">两大解决方案</h2>
        <p class="section-subtitle" style="color:#6b7280">根据企业实际需求，灵活选择最适合的合规用工路径</p>
      </div>

      <!-- Tab 切换 -->
      <div class="flex justify-center mb-12" :class="visible ? 'animate-fade-up' : 'opacity-0'"
        style="animation-delay:0.1s">
        <div class="solution-tab-wrap">
          <button v-for="(tab, i) in tabs" :key="i" class="solution-tab-btn"
            :class="activeTab === i ? 'solution-tab-btn--active' : ''" @click="setTab(i)">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24">
              <path v-for="(d, pi) in tab.paths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
            </svg>
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- 方案内容区 -->
      <Transition name="sol-fade" mode="out-in">
        <!-- ====== Tab 0: 自然人委托代征 ====== -->
        <div v-if="activeTab === 0" key="natural" class="solution-panel"
          :class="visible ? 'solution-panel--visible' : ''">
          <!-- 说明文字 -->
          <p class="text-center text-neutral-400 text-sm mb-12 max-w-xl mx-auto">
            中达聚财作为中间枢纽，将企业任务快速发布并完成结算，平台经营者自主领取并执行，实现合规、高效的灵活用工闭环。
          </p>

          <!-- 流程图：双角色 -->
          <div class="flow-container">
            <!-- 角色标题行 -->
            <div class="flow-header">
              <div class="flow-role flow-role--platform">
                <div class="role-avatar role-avatar--platform">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                    style="color:#a78bfa">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                </div>
                <span class="role-label">中达聚财</span>
              </div>
              <div class="flow-spacer" />
              <div class="flow-role flow-role--operator">
                <div class="role-avatar role-avatar--operator">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                    style="color:#60a5fa">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span class="role-label">平台经营者</span>
              </div>
            </div>

            <!-- 流程主体 -->
            <div class="flow-body">

              <!-- 行 1: 客户创建任务 → 领取任务 → 执行 -->
              <div class="flow-row">
                <div class="flow-node flow-node--left">客户创建任务</div>
                <div class="flow-arrow flow-arrow--dashed">
                  <div class="arrow-line" />
                  <div class="arrow-head" />
                </div>
                <div class="flow-node flow-node--right">领取任务</div>
                <div class="flow-arrow flow-arrow--solid">
                  <div class="arrow-line" />
                  <div class="arrow-head" />
                </div>
                <div class="flow-node flow-node--right">执行</div>
              </div>

              <!-- 连接线：执行 → 交付（右侧向下） -->
              <div class="flow-connector-row">
                <div class="flow-spacer-left" />
                <div class="flow-down-connector">
                  <div class="down-line" />
                  <div class="down-arrow" />
                </div>
              </div>

              <!-- 行 2: 客户验收任务 ← 交付/上传成果 -->
              <div class="flow-row flow-row--reverse">
                <div class="flow-node flow-node--left">客户验收任务</div>
                <div class="flow-arrow flow-arrow--dashed flow-arrow--reverse">
                  <div class="arrow-head arrow-head--left" />
                  <div class="arrow-line" />
                </div>
                <div class="flow-node flow-node--right flow-node--wide">交付 / 上传成果</div>
              </div>

              <!-- 连接线：客户验收 → 客户结算（左侧向下） -->
              <div class="flow-connector-row">
                <div class="flow-down-connector">
                  <div class="down-line" />
                  <div class="down-arrow" />
                </div>
                <div class="flow-spacer-right" />
              </div>

              <!-- 行 3: 客户结算 → 收款 -->
              <div class="flow-row">
                <div class="flow-node flow-node--left">客户结算</div>
                <div class="flow-arrow flow-arrow--dashed">
                  <div class="arrow-line" />
                  <div class="arrow-head" />
                </div>
                <div class="flow-node flow-node--right">收款</div>
              </div>

            </div>
          </div>
        </div>

        <!-- ====== Tab 1: 个体工商户 ====== -->
        <div v-else key="individual" class="solution-panel" :class="visible ? 'solution-panel--visible' : ''">
          <p class="text-center text-neutral-400 text-sm mb-12 max-w-xl mx-auto">
            甲方客户单位将业务发包给一般纳税人（业务分包），再由其分包给成立的个体工商户，形成合规税务链条，降低综合税负。
          </p>

          <!-- 三方流程图 -->
          <div class="triflow-container">
            <!-- 三列标题 -->
            <div class="triflow-header">
              <div class="triflow-col-title">业务发包</div>
              <div class="triflow-col-title triflow-col-title--center">业务分包</div>
              <div class="triflow-col-title">业务总包</div>
            </div>

            <!-- 三方节点 -->
            <div class="triflow-nodes">
              <!-- 左节点：甲方客户单位 -->
              <div class="trinode trinode--left">
                <div class="trinode-icon trinode-icon--blue">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.4" viewBox="0 0 24 24"
                    style="color:#60a5fa">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p class="trinode-label">甲方客户单位</p>
              </div>

              <!-- 中间连线区（左连） -->
              <div class="triflow-connector">
                <div class="triconn-line" />
                <div class="triconn-label triconn-label--top">发包</div>
                <div class="triconn-arrow" />
                <!-- 票据信息框 -->
                <div class="triconn-invoice">
                  <p class="invoice-title">专票</p>
                  <p class="invoice-text">《现代服务》</p>
                  <p class="invoice-text">6% 增值税 + 服务费</p>
                  <p class="invoice-text invoice-highlight">（6% 可以抵扣）</p>
                  <div class="invoice-divider" />
                  <p class="invoice-contract">《业务外包合同》</p>
                </div>
              </div>

              <!-- 中心节点：一般纳税人 -->
              <div class="trinode trinode--center">
                <div class="trinode-circle">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.4" viewBox="0 0 24 24"
                    style="color:#c4b5fd">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p class="trinode-label">一般纳税人</p>
              </div>

              <!-- 中间连线区（右连） -->
              <div class="triflow-connector">
                <div class="triconn-arrow triconn-arrow--left" />
                <div class="triconn-line" />
                <div class="triconn-label triconn-label--top">发包</div>
                <!-- 票据信息框 -->
                <div class="triconn-invoice triconn-invoice--right">
                  <p class="invoice-title">普票</p>
                  <p class="invoice-text">《现代服务*业务流程外包》</p>
                  <p class="invoice-text">3% 增值税 + 0.36% 附加</p>
                  <p class="invoice-text invoice-highlight">（0.5-1）% 左右个税</p>
                  <p class="invoice-text">提供完税凭证</p>
                  <div class="invoice-divider" />
                  <p class="invoice-contract">《业务外包合同》</p>
                </div>
              </div>

              <!-- 右节点：成立个体工商户 -->
              <div class="trinode trinode--right">
                <div class="trinode-icon trinode-icon--blue">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.4" viewBox="0 0 24 24"
                    style="color:#60a5fa">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <p class="trinode-label">成立个体工商户</p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionEl = ref<HTMLElement | null>(null)
const visible = ref(false)
const activeTab = ref(0)

const tabs = [
  {
    label: '自然人委托代征',
    paths: ['M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'],
  },
  {
    label: '个体工商户',
    paths: ['M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'],
  },
]

function setTab(i: number) {
  activeTab.value = i
}

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
/* ── Tab 切换 ── */
.solution-tab-wrap {
  display: flex;
  gap: 4px;
  padding: 5px;
  border-radius: 14px;
  background: rgba(14, 165, 201, 0.06);
  border: 1px solid rgba(14, 165, 201, 0.15);
}

.solution-tab-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.25s, background 0.25s, box-shadow 0.25s;
  white-space: nowrap;
}

.solution-tab-btn--active {
  color: #0EA5C9;
  background: rgba(14, 165, 201, 0.1);
  box-shadow: 0 0 16px rgba(14, 165, 201, 0.1);
}

.solution-tab-btn:hover:not(.solution-tab-btn--active) {
  color: #374151;
  background: rgba(14, 165, 201, 0.05);
}

/* ── 方案面板 ── */
.solution-panel {
  padding: 36px;
  border-radius: 20px;
  border: 1px solid rgba(14, 165, 201, 0.15);
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}

.solution-panel--visible {
  /* 面板本体无需动画，内容已就绪，Tab 切换由 sol-fade transition 处理 */
}

/* ── 自然人委托代征流程图 ── */
.flow-container {
  max-width: 700px;
  margin: 0 auto;
}

.flow-header {
  display: flex;
  align-items: center;
  margin-bottom: 28px;
}

.flow-role {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 140px;
}

.flow-spacer {
  flex: 1;
}

.role-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.role-avatar--platform {
  background: rgba(139, 92, 246, 0.15);
  border: 2px solid rgba(139, 92, 246, 0.35);
  box-shadow: 0 0 16px rgba(139, 92, 246, 0.15);
}

.role-avatar--operator {
  background: rgba(59, 143, 232, 0.15);
  border: 2px solid rgba(59, 143, 232, 0.35);
  box-shadow: 0 0 16px rgba(59, 143, 232, 0.12);
}

.role-label {
  font-size: 13px;
  font-weight: 600;
  color: #94a3b8;
}

.flow-body {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.flow-row {
  display: flex;
  align-items: center;
  gap: 0;
}

.flow-row--reverse {
  flex-direction: row;
}

.flow-node {
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  min-width: 120px;
  text-align: center;
}

.flow-node--left {
  background: rgba(14, 165, 201, 0.08);
  border: 1px solid rgba(14, 165, 201, 0.3);
  color: #0EA5C9;
  box-shadow: 0 0 12px rgba(14, 165, 201, 0.06);
}

.flow-node--right {
  background: rgba(24, 144, 255, 0.08);
  border: 1px solid rgba(24, 144, 255, 0.3);
  color: #1890FF;
  box-shadow: 0 0 12px rgba(24, 144, 255, 0.06);
}

.flow-node--wide {
  min-width: 160px;
}

/* 箭头 */
.flow-arrow {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  min-width: 60px;
}

.arrow-line {
  flex: 1;
  height: 1px;
}

.flow-arrow--dashed .arrow-line {
  background: none;
  border-top: 2px dashed rgba(14, 165, 201, 0.4);
}

.flow-arrow--solid .arrow-line {
  background: none;
  border-top: 2px solid rgba(24, 144, 255, 0.5);
}

.flow-arrow--reverse .arrow-line {
  background: none;
  border-top: 2px dashed rgba(14, 165, 201, 0.4);
}

.arrow-head {
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 8px solid rgba(14, 165, 201, 0.6);
  flex-shrink: 0;
}

.flow-arrow--solid .arrow-head {
  border-left-color: rgba(24, 144, 255, 0.7);
}

.arrow-head--left {
  border-left: none;
  border-right: 8px solid rgba(14, 165, 201, 0.6);
}

/* 下连线 */
.flow-connector-row {
  display: flex;
  height: 40px;
}

.flow-spacer-left {
  flex: 1;
}

.flow-spacer-right {
  flex: 1;
}

.flow-down-connector {
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.down-line {
  width: 1px;
  flex: 1;
  background: rgba(24, 144, 255, 0.35);
}

.down-arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid rgba(24, 144, 255, 0.55);
  flex-shrink: 0;
}

/* ── 个体工商户三方流程图 ── */
.triflow-container {
  max-width: 860px;
  margin: 0 auto;
}

.triflow-header {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  text-align: center;
  margin-bottom: 20px;
}

.triflow-col-title {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(14, 165, 201, 0.5);
}

.triflow-col-title--center {
  color: rgba(14, 165, 201, 0.85);
}

.triflow-nodes {
  display: flex;
  align-items: center;
  gap: 0;
}

/* 左右节点 */
.trinode {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.trinode--left,
.trinode--right {
  width: 140px;
}

.trinode-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trinode-icon--blue {
  background: rgba(59, 143, 232, 0.12);
  border: 1.5px solid rgba(59, 143, 232, 0.3);
  box-shadow: 0 0 16px rgba(59, 143, 232, 0.1);
}

.trinode-label {
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  text-align: center;
  line-height: 1.4;
}

/* 中心圆节点 */
.trinode--center {
  flex-shrink: 0;
  width: 120px;
}

.trinode-circle {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: rgba(14, 165, 201, 0.1);
  border: 2px solid rgba(14, 165, 201, 0.4);
  box-shadow: 0 0 24px rgba(14, 165, 201, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 连接线区 */
.triflow-connector {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  min-width: 80px;
  height: 120px;
}

.triconn-line {
  flex: 1;
  height: 1.5px;
  background: none;
  border-top: 2px dashed rgba(14, 165, 201, 0.3);
}

.triconn-label {
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: rgba(14, 165, 201, 0.7);
  white-space: nowrap;
}

.triconn-arrow {
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 8px solid rgba(14, 165, 201, 0.5);
  flex-shrink: 0;
}

.triconn-arrow--left {
  border-left: none;
  border-right: 8px solid rgba(14, 165, 201, 0.5);
}

/* 票据信息框 */
.triconn-invoice {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 170px;
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(248, 250, 252, 0.95);
  border: 1px solid rgba(14, 165, 201, 0.2);
  backdrop-filter: blur(8px);
}

.triconn-invoice--right {
  width: 200px;
}

.invoice-title {
  font-size: 11px;
  font-weight: 700;
  color: #0EA5C9;
  margin-bottom: 4px;
}

.invoice-text {
  font-size: 10px;
  color: #6b7280;
  line-height: 1.6;
}

.invoice-highlight {
  color: #0EA5C9;
}

.invoice-divider {
  height: 1px;
  background: rgba(14, 165, 201, 0.15);
  margin: 6px 0;
}

.invoice-contract {
  font-size: 10px;
  font-weight: 600;
  color: rgba(14, 165, 201, 0.7);
  text-align: center;
}

/* Tab 过渡 */
.sol-fade-enter-active,
.sol-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.sol-fade-enter-from,
.sol-fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>
