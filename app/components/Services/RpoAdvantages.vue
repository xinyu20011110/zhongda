<template>
  <section ref="sectionEl" class="py-24" style="background: #f8fafc;">
    <div class="max-w-7xl mx-auto px-6">

      <!-- 标题区 -->
      <div class="text-center mb-16" :class="visible ? 'animate-fade-up' : 'opacity-0'">
        <p class="text-gold-400 text-xs font-semibold tracking-[0.4em] uppercase mb-3">Why Choose Us</p>
        <h2 class="section-title text-4xl mb-4">服务优势</h2>
        <p class="section-subtitle">三大核心优势，构建企业招聘的全方位竞争壁垒</p>
      </div>

      <!-- 3 组优势卡片 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div
          v-for="(adv, i) in advantages"
          :key="i"
          class="adv-card"
          :class="visible ? 'adv-card--visible' : ''"
          :style="`--delay: ${i * 150}ms`"
        >
          <!-- 顶部图标 + 标题 -->
          <div class="flex items-center gap-4 mb-6">
            <div class="adv-icon-wrap">
              <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path v-for="(d, pi) in adv.iconPaths" :key="pi" stroke-linecap="round" stroke-linejoin="round" :d="d" />
              </svg>
            </div>
            <div>
              <div class="text-[10px] font-semibold tracking-[0.3em] text-gold-400/70 uppercase mb-0.5">0{{ i + 1 }}</div>
              <h3 style="color:#111827" class="font-bold text-lg leading-none">{{ adv.title }}</h3>
            </div>
          </div>

          <!-- 左金色竖线分隔 -->
          <div class="h-px bg-gradient-to-r from-gold-400/30 to-transparent mb-6" />

          <!-- 子项列表 -->
          <div class="space-y-5">
            <div v-for="(item, j) in adv.items" :key="j" class="adv-item">
              <div class="flex items-start gap-3">
                <!-- 子项图标 -->
                <div class="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
                  style="background: rgba(255,255,255,0.05);">
                  <svg class="w-4 h-4 text-brand-300" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-1">
                    <span style="color:#111827" class="font-semibold text-sm">{{ item.label }}</span>
                    <!-- 高亮数字 -->
                    <span v-if="item.stat" class="text-gold-400 font-black text-base leading-none">{{ item.stat }}</span>
                  </div>
                  <p style="color:#6b7280" class="text-xs leading-relaxed">{{ item.desc }}</p>
                  <!-- 工具标签 -->
                  <div v-if="item.tags" class="flex flex-wrap gap-1.5 mt-2">
                    <span
                      v-for="tag in item.tags"
                      :key="tag"
                      class="text-[10px] px-2 py-0.5 rounded-full"
                      style="background: rgba(24,144,255,0.08); color: #1890FF; border: 1px solid rgba(24,144,255,0.2)"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
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

const advantages = [
  {
    title: '资源与匹配',
    iconPaths: [
      'M13 10V3L4 14h7v7l9-11h-7z',
    ],
    items: [
      {
        label: '渠道丰富',
        stat: '',
        desc: '矩阵式布局，全渠道覆盖直领平台。',
        icon: 'M4 6h16M4 10h16M4 14h16M4 18h16',
        tags: ['全渠道覆盖', '矩阵式布局'],
      },
      {
        label: '私域人才池',
        stat: '400万+',
        desc: '不重复专属人才库，与市场招聘平台同步更新。',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
        tags: null,
      },
      {
        label: '人岗精准匹配',
        stat: '',
        desc: '行业领先的简历解析技术 + 深度学习算法，多维标签体系精准匹配。',
        icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
        tags: ['标签体系', '深度学习'],
      },
    ],
  },
  {
    title: '专业与覆盖',
    iconPaths: [
      'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    ],
    items: [
      {
        label: '专业服务团队',
        stat: '200+',
        desc: '人，70%+ 成员拥有多年行业深耕经验。',
        icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
        tags: null,
      },
      {
        label: '全国城市覆盖',
        stat: '70%+',
        desc: '在多个一二线城市设立分支，支持全国城市落地执行。',
        icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
        tags: null,
      },
      {
        label: '资质认证',
        stat: '',
        desc: '中国中小企业协会会员，AA 级信用企业，合规经营有保障。',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        tags: ['AA 级信用', '协会会员'],
      },
    ],
  },
  {
    title: '服务模式与工具',
    iconPaths: [
      'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    ],
    items: [
      {
        label: '专属 VIP 服务',
        stat: '',
        desc: '标准化 VIP 服务流程，实行项目负责制，包含专人寻访与驻场服务。',
        icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
        tags: ['项目负责制', '驻场服务'],
      },
      {
        label: '按效果付费',
        stat: '',
        desc: '根据企业规模、业务需求定制解决方案，支持按招聘效果灵活付费。',
        icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
        tags: ['按需定制', '效果付费'],
      },
      {
        label: '智能工具支持',
        stat: '',
        desc: '自研工具生态，全流程数字化管控，实现人企高效互动。',
        icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
        tags: ['入职有赏', '招聘管理系统'],
      },
    ],
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.1 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})
</script>

<style scoped>
.adv-card {
  position: relative;
  padding: 32px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  opacity: 0;
  transform: translateY(28px);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
  border-left: 3px solid rgba(24, 144, 255, 0.35);
}

.adv-card--visible {
  animation: card-in 0.65s ease-out var(--delay, 0ms) both;
}

.adv-card:hover {
  border-left-color: rgba(24, 144, 255, 0.8);
  box-shadow: 0 8px 32px rgba(24, 144, 255, 0.1);
  transform: translateY(-4px);
}

@keyframes card-in {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
}

.adv-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, theme('colors.brand.600'), theme('colors.brand.800'));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 0 16px rgba(26, 111, 212, 0.3);
}
</style>
