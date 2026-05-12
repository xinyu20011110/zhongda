<template>
  <div class="min-h-screen flex flex-col bg-white">
    <NavTheNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <!-- Footer -->
    <footer class="border-t border-neutral-100 bg-white py-8 mb-8">
      <div class="max-w-7xl mx-auto px-6 text-center text-sm text-neutral-500">
        <p>© {{ new Date().getFullYear() }} 中达聚财有限公司 版权所有</p>
        <p class="mt-2">
          主办单位：中达聚财有限公司
          <span class="mx-2 text-neutral-300">|</span>
          网站域名：zhongdajucai.com
        </p>
        <p class="mt-2">
          ICP备案号：
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-neutral-700 underline underline-offset-4 transition hover:text-neutral-900"
          >
            京ICP备2026008168号-2
          </a>
        </p>
        <p class="mt-2">
          公安备案号：
          <a
            href="https://beian.gov.cn/portal/registerSystemInfo?recordcode=11010102007688"
            target="_blank"
            rel="noopener noreferrer"
            class="text-neutral-700 underline underline-offset-4 transition hover:text-neutral-900"
          >
            京公网安备11010102007688号
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
