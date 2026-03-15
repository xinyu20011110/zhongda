<template>
  <div>
    <CasesPageBanner />
    <CasesBrandWall />
    <CasesStudyCasme />
    <CasesStudyAcasia />

    <!-- 底部 CTA -->
    <section class="py-24 bg-gradient-to-b from-brand-900 to-brand-950">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <p class="text-gold-400 text-xs font-semibold tracking-[0.4em] uppercase mb-4">Start Cooperation</p>
        <h2 class="section-title text-4xl mb-4">成为下一个成功案例</h2>
        <p class="section-subtitle mb-10">
          无论是招聘外包、人才管理还是灵活用工，我们都能为您量身定制专属解决方案
        </p>
        <div class="flex justify-center">
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-3.5">
            联系我们
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
