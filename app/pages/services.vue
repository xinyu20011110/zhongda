<template>
  <div>
    <ServicesPageBanner />
    <ServicesTabSwitcher :active-tab="activeTab" @update:active-tab="activeTab = $event" />

    <Transition name="tab-fade" mode="out-in">
      <!-- RPO 招聘流程外包 -->
      <div v-if="activeTab === 'rpo'" key="rpo" class="pb-20">
        <ServicesRpoPainPoints />
        <ServicesRpoServiceCards />
        <ServicesRpoAdvantages />
        <ServicesRpoTalentPool />
        <ServicesRpoWorkflow />

        <!-- 底部 CTA -->
        <section class="py-24 bg-gradient-to-b from-white to-[#F8FAFD]">
          <div class="max-w-3xl mx-auto px-6 text-center">
            <p class="text-[#00BFA5] text-xs font-semibold tracking-[0.4em] uppercase mb-4">Ready to Start</p>
            <h2 class="section-title text-4xl mb-4">开启专属招聘合作</h2>
            <p class="section-subtitle mb-10">让 200+ 专业团队为您的企业解决用人难题，降本增效从这里开始</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/contact" class="btn-primary text-base px-8 py-3.5">
                立即咨询，获取定制方案
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>
              <NuxtLink to="/cases" class="btn-outline text-base px-8 py-3.5">
                查看客户案例
              </NuxtLink>
            </div>
          </div>
        </section>
      </div>

      <!-- 全风险岗位人才外包 -->
      <div v-else-if="activeTab === 'outsource'" key="outsource" class="pb-20">
        <ServicesOutsourcePainPoints />
        <ServicesOutsourceServiceIntro />
        <ServicesOutsourceAdvantages />
        <ServicesOutsourceStats />
        <ServicesOutsourceWorkflow />

        <!-- 底部 CTA -->
        <section class="py-24 bg-gradient-to-b from-white to-[#F8FAFD]">
          <div class="max-w-3xl mx-auto px-6 text-center">
            <p class="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style="color: #00BFA5">Ready to Start</p>
            <h2 class="section-title text-4xl mb-4">开启专属外包合作</h2>
            <p class="section-subtitle mb-10">让专业团队承担用工风险，企业专注核心业务，降本增效从这里开始</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/contact" class="btn-primary text-base px-8 py-3.5">
                立即咨询，了解外包方案
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>
              <NuxtLink to="/cases" class="btn-outline text-base px-8 py-3.5">
                查看客户案例
              </NuxtLink>
            </div>
          </div>
        </section>
      </div>

      <!-- 灵活用工 -->
      <div v-else key="flex" class="pb-20">
        <ServicesFlexBackground />
        <ServicesFlexServiceIntro />
        <ServicesFlexScenarios />
        <ServicesFlexSolutions />
        <ServicesFlexAdvantages />

        <!-- 底部 CTA -->
        <section class="py-24 bg-gradient-to-b from-white to-[#F8FAFD]">
          <div class="max-w-3xl mx-auto px-6 text-center">
            <p class="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style="color: #0D7FEE">Ready to Start</p>
            <h2 class="section-title text-4xl mb-4">开启灵活用工合作</h2>
            <p class="section-subtitle mb-10">依托数字化平台与大数据能力，让企业按需用工、合规结算，降本增效从这里开始</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/contact" class="btn-primary text-base px-8 py-3.5">
                立即咨询，了解灵活用工方案
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>
              <NuxtLink to="/cases" class="btn-outline text-base px-8 py-3.5">
                查看客户案例
              </NuxtLink>
            </div>
          </div>
        </section>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const activeTab = ref<'rpo' | 'outsource' | 'flex'>(
  (['rpo', 'outsource', 'flex'].includes(route.query.tab as string)
    ? route.query.tab
    : 'rpo') as 'rpo' | 'outsource' | 'flex'
)
</script>

<style scoped>
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.tab-fade-enter-from,
.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
