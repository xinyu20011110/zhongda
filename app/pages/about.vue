<template>
  <div>
    <AboutHeroBanner />
    <AboutCompanyIntro />
    <AboutCoreValues />
    <AboutPhilosophy />

    <!-- 底部 CTA -->
    <section class="py-24 bg-gradient-to-b from-[#F8FAFD] to-white">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <p class="text-[#00BFA5] text-xs font-semibold tracking-[0.4em] uppercase mb-4">Work With Us</p>
        <h2 class="section-title text-4xl mb-4">携手中达聚财</h2>
        <p class="section-subtitle mb-10">专业团队为您的企业提供一体化人力资源解决方案，助力业务高效稳定运营</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-primary text-base px-8 py-3.5">
            立即咨询，了解合作方案
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
          <NuxtLink to="/services" class="btn-outline text-base px-8 py-3.5">
            了解核心业务
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
