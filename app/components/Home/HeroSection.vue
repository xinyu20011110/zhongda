<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <!-- 深蓝渐变背景 -->
    <div class="absolute inset-0 bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950" />

    <!-- 放射状光晕（公司名后方） -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div class="w-[600px] h-[600px] rounded-full opacity-[0.12] blur-[80px] bg-brand-400 hero-radial-glow" />
    </div>
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div class="w-[300px] h-[300px] rounded-full opacity-[0.08] blur-[60px] bg-gold-400 hero-radial-glow"
        style="animation-delay: -1s" />
    </div>

    <!-- 背景网格线 -->
    <div class="absolute inset-0 opacity-[0.035]"
      style="background-image: linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px); background-size: 60px 60px;" />

    <!-- 动态粒子光点 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="i in 14" :key="i" class="absolute rounded-full bg-brand-300" :style="particleStyle(i)" />
    </div>

    <!-- 主内容 -->
    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">

      <!-- ① Logo + 公司名 —— 最重点，最先出现，最大 -->
      <div class="hero-logo-block mb-14">
        <!-- Logo 图标 -->
        <div class="flex justify-center mb-6">
          <div
            class="hero-logo-icon w-28 h-28 rounded-3xl bg-gradient-to-br from-brand-400 via-brand-600 to-brand-800 flex items-center justify-center shadow-glow-blue">
            <svg class="w-14 h-14 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 2L2 7l10 5 10-5-10-5z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M2 17l10 5 10-5" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>

        <!-- 公司名 -->
        <h1 class="hero-company-name text-6xl md:text-8xl lg:text-9xl font-black tracking-widest mb-3 leading-none">
          中达<span class="text-gold-400 hero-gold-text">聚财</span>
        </h1>

        <!-- 英文副名 + 分隔线 -->
        <div class="flex items-center justify-center gap-4 mb-2">
          <div class="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/60" />
          <p class="text-gold-300/70 text-sm tracking-[0.4em] uppercase font-light">Zhongda Jucai</p>
          <div class="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/60" />
        </div>
      </div>

      <!-- ② 理念标语 —— 第二层 -->
      <div class="hero-tagline mb-4">
        <p class="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 tracking-wide leading-relaxed">
          合规赋能 <span class="text-gold-400/80">·</span> 多元协同 <span class="text-gold-400/80">·</span>
          <span class="text-gold-300"> 价值共生</span>
        </p>
      </div>

      <!-- ③ 副标题说明 —— 第三层 -->
      <p class="hero-subtitle section-subtitle text-base md:text-lg max-w-2xl mx-auto mb-10 text-neutral-400">
        深耕人力资源、商务生活、教育培训与咨询投资四大领域，
        以专业合规的服务体系赋能企业降本增效、规避风险。
      </p>

      <!-- ④ CTA 按钮组 —— 第四层 -->
      <div class="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
        <NuxtLink to="/services" class="btn-primary text-base px-8 py-3.5">
          探索核心业务
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </NuxtLink>
        <NuxtLink to="/about" class="btn-outline text-base px-8 py-3.5">
          了解我们
        </NuxtLink>
      </div>

      <!-- 滚动指示器 -->
      <div class="hero-scroll mt-16 flex justify-center">
        <div class="flex flex-col items-center gap-2 text-neutral-500 text-xs">
          <span>向下探索</span>
          <div class="w-5 h-9 rounded-full border border-white/20 flex justify-center pt-1.5">
            <div class="w-1 h-2.5 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function particleStyle(i: number) {
  const positions = [
    { top: '12%', left: '6%' },
    { top: '28%', left: '18%' },
    { top: '55%', left: '4%' },
    { top: '78%', left: '12%' },
    { top: '8%', left: '72%' },
    { top: '32%', left: '86%' },
    { top: '62%', left: '91%' },
    { top: '82%', left: '78%' },
    { top: '18%', left: '42%' },
    { top: '72%', left: '38%' },
    { top: '48%', left: '65%' },
    { top: '90%', left: '55%' },
    { top: '40%', left: '28%' },
    { top: '5%', left: '55%' },
  ]
  const delays = [0, 0.8, 1.6, 2.4, 0.4, 1.2, 2.0, 3.2, 0.6, 1.8, 2.8, 0.2, 1.4, 2.2]
  const pos = positions[(i - 1) % positions.length]
  const size = 3 + (i % 4)
  return {
    ...pos,
    width: `${size}px`,
    height: `${size}px`,
    opacity: 0.25 + (i % 3) * 0.1,
    animation: `pulse-ring ${2.5 + (i % 3) * 0.5}s ease-out ${delays[(i - 1) % delays.length]}s infinite`,
  }
}
</script>

<style scoped>
/* 放射状光晕动画 */
@keyframes radial-pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.12;
  }

  50% {
    transform: scale(1.15);
    opacity: 0.18;
  }
}

.hero-radial-glow {
  animation: radial-pulse 5s ease-in-out infinite;
}

/* ===== Logo 图标：先从小变大 + 发光 ===== */
@keyframes logo-reveal {
  0% {
    opacity: 0;
    transform: scale(0.3) rotate(-15deg);
    box-shadow: none;
  }

  60% {
    opacity: 1;
    transform: scale(1.08) rotate(2deg);
  }

  80% {
    transform: scale(0.96) rotate(0deg);
  }

  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.hero-logo-icon {
  animation: logo-reveal 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
}

/* ===== 公司名：字符从模糊到清晰 + 上升 ===== */
@keyframes name-reveal {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.92);
    filter: blur(8px);
    letter-spacing: 0.2em;
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
    letter-spacing: 0.1em;
  }
}

.hero-company-name {
  animation: name-reveal 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both;
  letter-spacing: 0.1em;
}

/* 金色文字额外光晕 */
@keyframes gold-glow {

  0%,
  100% {
    text-shadow: 0 0 20px rgba(212, 160, 23, 0.4), 0 0 60px rgba(212, 160, 23, 0.1);
  }

  50% {
    text-shadow: 0 0 30px rgba(212, 160, 23, 0.7), 0 0 80px rgba(212, 160, 23, 0.25);
  }
}

.hero-gold-text {
  animation: gold-glow 3s ease-in-out 1.5s infinite;
}

/* 英文副名 */
.hero-logo-block>.flex {
  animation: fade-up 0.6s ease-out 1.2s both;
}

/* ===== 标语 ===== */
@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(24px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-tagline {
  animation: fade-up 0.7s ease-out 1.4s both;
}

/* ===== 副标题 ===== */
.hero-subtitle {
  animation: fade-up 0.7s ease-out 1.7s both;
}

/* ===== CTA 按钮 ===== */
.hero-cta {
  animation: fade-up 0.7s ease-out 1.9s both;
}

/* ===== 滚动指示器 ===== */
.hero-scroll {
  animation: fade-up 0.7s ease-out 2.2s both;
}
</style>
