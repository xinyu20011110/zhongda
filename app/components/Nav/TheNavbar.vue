<template>
  <nav ref="navbarEl" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[scrolled ? 'shadow-navbar navbar-scrolled' : 'navbar-top']">
    <div class="max-w-7xl mx-auto px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo 左侧 -->
        <NuxtLink to="/" class="flex items-center gap-4 group">
          <!-- Logo Icon -->
          <img
            src="~/assets/img/logo.png"
            alt="Zhongda Fortune Logo"
            class="w-12 h-12 object-contain transition-all duration-300 group-hover:shadow-glow-blue group-hover:scale-105"
          />
          <!-- 公司名称 -->
          <div class="flex flex-col leading-tight">
            <span class="text-xl font-bold tracking-widest" :class="scrolled ? 'text-neutral-800' : 'text-neutral-800'">
              中达<span class="text-[#00BFA5]">聚财</span>
            </span>
            <span class="text-[10px] text-neutral-400 tracking-[0.2em] uppercase">Zhongda Fortune</span>
          </div>
        </NuxtLink>

        <!-- 桌面端导航 右侧 -->
        <div class="hidden md:flex items-center gap-2">
          <NavLink v-for="link in navLinks" :key="link.to" :to="link.to" :label="link.label" />

        </div>

        <!-- 移动端汉堡按钮 -->
        <button class="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          @click="toggleMenu" aria-label="打开菜单">
          <span class="block w-6 h-0.5 bg-neutral-700 transition-all duration-300"
            :class="menuOpen ? 'rotate-45 translate-y-2' : ''" />
          <span class="block w-6 h-0.5 bg-neutral-700 transition-all duration-300"
            :class="menuOpen ? 'opacity-0' : ''" />
          <span class="block w-6 h-0.5 bg-neutral-700 transition-all duration-300"
            :class="menuOpen ? '-rotate-45 -translate-y-2' : ''" />
        </button>
      </div>
    </div>

    <!-- 移动端抽屉菜单 -->
    <Transition name="drawer">
      <div v-if="menuOpen" class="md:hidden border-t border-neutral-100 navbar-scrolled">
        <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
          <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to"
            class="px-4 py-3 rounded-lg text-neutral-600 hover:text-[#1890FF] hover:bg-blue-50/50 transition-all duration-200 font-medium"
            @click="menuOpen = false">
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/contact" class="mt-2 btn-primary text-sm text-center" @click="menuOpen = false">
            立即咨询
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/about', label: '关于我们' },
  { to: '/services', label: '核心业务' },
  { to: '/cases', label: '客户案例' },
  { to: '/contact', label: '联系我们' },
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

onMounted(() => {
  const handler = () => {
    scrolled.value = window.scrollY > 30
  }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})
</script>

<style scoped>
/* 顶部未滚动：白色半透明 */
.navbar-top {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
}

/* 滚动后：纯白毛玻璃 */
.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.drawer-enter-active,
.drawer-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
  max-height: 400px;
}

.drawer-enter-from,
.drawer-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
