<template>
  <div class="min-h-screen flex flex-col">
    <NavTheNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <!-- Footer 占位 -->
    <footer class="border-t border-white/[0.06] bg-brand-950 py-8 mb-8">
      <div class="max-w-7xl mx-auto px-6 text-center text-neutral-500 text-sm">
        <p>© {{ new Date().getFullYear() }} 中达聚财 · 版权所有</p>
        <p class="mt-1">沪ICP备XXXXXXXX号</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
