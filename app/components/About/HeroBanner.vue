<template>
  <section class="relative overflow-hidden banner-section">
    <!-- 浅色渐变背景 -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#F0F7FF] via-[#F5FAFE] to-white" />

    <!-- 放射状光晕 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.06] bg-[#1890FF] glow-orb" />
      <div class="absolute top-1/2 right-1/4 -translate-y-1/2 w-[280px] h-[280px] rounded-full blur-[80px] opacity-[0.04] bg-[#00BFA5]" />
    </div>

    <!-- 背景网格 -->
    <div class="absolute inset-0 opacity-[0.025]"
      style="background-image: linear-gradient(rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.12) 1px, transparent 1px); background-size: 60px 60px;" />

    <!-- 主内容 -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full py-10">
      <div class="flex items-center justify-between gap-12">

        <!-- 左侧文字内容 -->
        <div class="flex-1 banner-content">
          <!-- 面包屑 -->
          <div class="flex items-center gap-2 text-neutral-400 text-xs tracking-widest uppercase mb-6">
            <NuxtLink to="/" class="hover:text-neutral-600 transition-colors">首页</NuxtLink>
            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 18l6-6-6-6" />
            </svg>
            <span class="text-[#1890FF]">关于我们</span>
          </div>

          <p class="text-[#00BFA5] text-xs font-semibold tracking-[0.4em] uppercase mb-3">About Us · Since 2018</p>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-black tracking-wide text-neutral-800 mb-5 leading-tight">
            关于我们
          </h1>
          <div class="flex items-center gap-3 mb-6">
            <div class="h-px w-10 bg-gradient-to-r from-[#1890FF] to-[#00BFA5]" />
            <span class="text-neutral-400 text-xs tracking-[0.3em]">Zhongda Fortune · About</span>
          </div>
          <p class="section-subtitle max-w-xl">
            深耕人力资源服务行业，以专业与诚信构建企业发展的坚实基础。
          </p>
        </div>

        <!-- 右侧装饰图形 -->
        <div class="hidden lg:flex items-center justify-center flex-shrink-0 banner-deco">
          <div class="relative w-64 h-64">
            <div class="absolute inset-0 rounded-full border border-[#1890FF]/15 ring-1" />
            <div class="absolute inset-5 rounded-full border border-[#1890FF]/12 ring-2" />
            <div class="absolute inset-10 rounded-full border border-[#00BFA5]/10 ring-3" />

            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-28 h-28 rounded-3xl bg-gradient-to-br from-[#1890FF] via-[#0D7FEE] to-[#00BFA5] flex items-center justify-center shadow-glow-blue">
                <svg class="w-14 h-14 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>

            <div class="absolute w-3 h-3 rounded-full bg-[#00BFA5] opacity-70 orbit-dot-top" style="box-shadow: 0 0 8px rgba(0,191,165,0.4)" />
            <div class="absolute w-2 h-2 rounded-full bg-[#1890FF] opacity-60 orbit-dot-right" />
            <div class="absolute w-2 h-2 rounded-full bg-[#00BFA5] opacity-50 orbit-dot-left" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.banner-section {
  min-height: 28vh;
  display: flex;
  align-items: center;
  padding-top: 5rem;
}

@keyframes glow-pulse {
  0%, 100% { transform: scale(1); opacity: 0.06; }
  50% { transform: scale(1.12); opacity: 0.1; }
}
.glow-orb { animation: glow-pulse 7s ease-in-out infinite; }

@keyframes ring-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.ring-1 { animation: ring-rotate 30s linear infinite; }
.ring-2 { animation: ring-rotate 22s linear infinite reverse; }
.ring-3 { animation: ring-rotate 16s linear infinite; }

@keyframes orbit-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.orbit-dot-top {
  top: 4%; left: 50%; margin-left: -6px;
  animation: orbit-float 3s ease-in-out infinite;
}
.orbit-dot-right {
  top: 50%; right: 4%; margin-top: -4px;
  animation: orbit-float 3s ease-in-out 1s infinite;
}
.orbit-dot-left {
  bottom: 12%; left: 12%;
  animation: orbit-float 3s ease-in-out 2s infinite;
}

@keyframes banner-in {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.banner-content { animation: banner-in 0.8s ease-out 0.2s both; }
.banner-deco { animation: banner-in 0.8s ease-out 0.5s both; }
</style>
