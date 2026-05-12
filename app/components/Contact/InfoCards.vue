<template>
  <section ref="sectionEl" class="py-24 bg-white">
    <div class="max-w-5xl mx-auto px-6 mt-10">

      <!-- 标题 -->
      <div class="text-center mb-14" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-[#00BFA5] text-xs font-semibold tracking-[0.4em] uppercase mb-3">Get In Touch</p>
        <h2 class="section-title text-4xl mb-4">随时与我们取得联系</h2>
        <p class="section-subtitle">专属顾问一对一服务，快速响应您的每一个需求</p>
      </div>

      <!-- 合并联系卡片 -->
      <div class="unified-card" :class="visible ? 'unified-card--visible' : ''">

        <!-- 左列：极速咨询热线 -->
        <div class="col">
          <div class="col-header">
            <div class="col-icon" style="background: rgba(24,144,255,0.08)">
              <svg class="w-5 h-5 text-[#1890FF]" fill="none" stroke="currentColor" stroke-width="1.8"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span class="text-neutral-800 font-bold text-base">极速咨询热线</span>
          </div>

          <div class="items-list">
            <div class="info-item">
              <span class="item-label">全国服务热线</span>
              <a href="tel:400XXXXXXX" class="item-value text-[#1890FF] hover:text-[#0D7FEE]">
                400-XXX-XXXX
              </a>
            </div>
            <div class="info-item">
              <span class="item-label">企业专属联系人</span>
              <div class="flex items-center gap-2.5">
                <span class="text-neutral-800 text-sm font-semibold">韩国斌</span>
                <a href="tel:15510290711" class="item-value text-[#1890FF] hover:text-[#0D7FEE]">
                  155-1029-0711
                </a>
              </div>
            </div>
            <div class="info-item">
              <span class="item-label">服务时间</span>
              <div class="flex items-center gap-2">
                <span class="online-dot" />
                <span class="text-neutral-800 text-sm font-semibold">7×24 小时在线</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 竖向分隔线 -->
        <div class="divider-v" />

        <!-- 右列：全国总部地址 -->
        <div class="col">
          <div class="col-header">
            <div class="col-icon" style="background: rgba(0,191,165,0.08)">
              <svg class="w-5 h-5 text-[#00BFA5]" fill="none" stroke="currentColor" stroke-width="1.8"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span class="text-neutral-800 font-bold text-base">全国总部地址</span>
          </div>

          <div class="items-list">
            <div class="info-item">
              <span class="item-label">总部地址</span>
              <p class="text-neutral-800 text-sm leading-relaxed">XX市XX区XX路XX号XX大厦XX层</p>
            </div>
            <div class="info-item">
              <span class="item-label">交通指引</span>
              <p class="text-neutral-600 text-sm leading-relaxed">
                地铁X号线X站X口出，步行X米
              </p>
            </div>
            <div class="info-item">
              <span class="item-label">电子邮箱</span>
              <a href="mailto:service@zdjcgroup.com" class="item-value text-[#1890FF] hover:text-[#0D7FEE]">
                service@zdjcgroup.com
              </a>
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
.unified-card {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: rgba(248, 250, 253, 0.8);
  overflow: hidden;
  opacity: 0;
  transform: translateY(24px);
}

.unified-card--visible {
  animation: card-in 0.65s ease-out 0.1s both;
}

@media (min-width: 768px) {
  .unified-card {
    flex-direction: row;
  }
}

.col {
  flex: 1;
  padding: 36px 40px;
}

.divider-v {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.06), transparent);
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .divider-v {
    width: 1px;
    height: auto;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.06), transparent);
  }
}

.col-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
}

.col-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.items-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.info-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.item-label {
  font-size: 0.72rem;
  color: #9ca3af;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.item-value {
  font-size: 0.9rem;
  font-weight: 600;
  transition: color 0.2s;
  letter-spacing: 0.02em;
}

.online-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00BFA5;
  box-shadow: 0 0 8px rgba(0, 191, 165, 0.5);
  animation: blink 2s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

@keyframes card-in {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
