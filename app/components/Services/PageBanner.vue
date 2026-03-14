<template>
  <section class="relative overflow-hidden banner-section">
    <!-- 深蓝渐变背景 -->
    <div class="absolute inset-0 bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950" />

    <!-- 放射状光晕 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.1] bg-brand-400 glow-orb" />
      <div class="absolute top-1/2 right-1/4 -translate-y-1/2 w-[280px] h-[280px] rounded-full blur-[80px] opacity-[0.06] bg-gold-500" />
    </div>

    <!-- 背景网格 -->
    <div class="absolute inset-0 opacity-[0.03]"
      style="background-image: linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px); background-size: 60px 60px;" />

    <!-- 主内容 -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
      <div class="flex items-center justify-between gap-12">

        <!-- 左侧文字内容 -->
        <div class="flex-1 banner-content">
          <!-- 面包屑 -->
          <div class="flex items-center gap-2 text-neutral-500 text-xs tracking-widest uppercase mb-6">
            <NuxtLink to="/" class="hover:text-neutral-300 transition-colors">首页</NuxtLink>
            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 18l6-6-6-6" />
            </svg>
            <span class="text-gold-400/80">核心业务</span>
          </div>

          <p class="text-gold-400 text-xs font-semibold tracking-[0.4em] uppercase mb-3">Core Services</p>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-black tracking-wide text-white mb-5 leading-tight">
            核心业务
          </h1>
          <div class="flex items-center gap-3 mb-6">
            <div class="h-px w-10 bg-gradient-to-r from-brand-500 to-gold-400" />
            <span class="text-gold-400/50 text-xs tracking-[0.3em]">Zhongda Jucai · Services</span>
          </div>
          <p class="section-subtitle max-w-xl">
            深耕人力资源领域，以专业合规的全链路服务体系，赋能企业高效招聘、降本增效、规避用人风险。
          </p>
        </div>

        <!-- 右侧装饰图形 -->
        <div class="hidden lg:flex items-center justify-center flex-shrink-0 banner-deco">
          <div class="relative w-64 h-64">
            <!-- 同心旋转圆环 -->
            <div class="absolute inset-0 rounded-full border border-brand-700/30 ring-1" />
            <div class="absolute inset-5 rounded-full border border-brand-600/25 ring-2" />
            <div class="absolute inset-10 rounded-full border border-brand-500/20 ring-3" />

            <!-- 中心图标 -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="w-28 h-28 rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 flex items-center justify-center shadow-glow-blue">
                <svg class="w-14 h-14 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="1.4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>

            <!-- 轨道光点 -->
            <div class="absolute w-3 h-3 rounded-full bg-gold-400 opacity-70 shadow-glow-gold orbit-dot-top" />
            <div class="absolute w-2 h-2 rounded-full bg-brand-300 opacity-60 orbit-dot-right" />
            <div class="absolute w-2 h-2 rounded-full bg-gold-300 opacity-50 orbit-dot-left" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.banner-section {
  min-height: 44vh;
  display: flex;
  align-items: center;
  padding-top: 5rem;
}

@keyframes glow-pulse {
  0%, 100% { transform: scale(1); opacity: 0.1; }
  50% { transform: scale(1.12); opacity: 0.16; }
}
.glow-orb { animation: glow-pulse 7s ease-in-out infinite; }

@keyframes ring-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.ring-1 { animation: ring-rotate 30s linear infinite; }
.ring-2 { animation: ring-rotate 22s linear infinite reverse; }
.ring-3 { animation: ring-rotate 16s linear infinite; }

/* 轨道光点浮动 */
@keyframes orbit-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.orbit-dot-top {
  top: 4%;
  left: 50%;
  margin-left: -6px;
  animation: orbit-float 3s ease-in-out infinite;
}
.orbit-dot-right {
  top: 50%;
  right: 4%;
  margin-top: -4px;
  animation: orbit-float 3s ease-in-out 1s infinite;
}
.orbit-dot-left {
  bottom: 12%;
  left: 12%;
  animation: orbit-float 3s ease-in-out 2s infinite;
}

/* 入场动效 */
@keyframes banner-in {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.banner-content { animation: banner-in 0.8s ease-out 0.2s both; }
.banner-deco { animation: banner-in 0.8s ease-out 0.5s both; }
</style>
