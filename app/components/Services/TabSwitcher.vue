<template>
  <div class="sticky top-20 z-40 tab-switcher border-b border-white/[0.08]">
    <div class="max-w-7xl mx-auto px-6">
      <!-- justify-center 居中，overflow-x-auto 保留小屏横滚 -->
      <div class="flex items-stretch justify-center overflow-x-auto" style="scrollbar-width: none;">
        <button v-for="tab in tabs" :key="tab.id" class="tab-btn" :class="{ 'tab-btn--active': activeTab === tab.id }"
          :style="activeTab === tab.id ? `border-bottom-color: ${tab.color}` : ''"
          @click="$emit('update:active-tab', tab.id)">
          <!-- 图标：激活时用该 Tab 的主题色 -->
          <span class="tab-icon-wrap" :style="activeTab === tab.id
            ? `background: ${tab.color}1a; color: ${tab.color}`
            : ''">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" :d="tab.icon" />
            </svg>
          </span>
          <!-- 文字 -->
          <span class="flex flex-col items-start">
            <span class="tab-label">{{ tab.label }}</span>
            <span class="tab-en" :style="activeTab === tab.id ? `color: ${tab.color}80` : ''">{{ tab.labelEn }}</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ activeTab: string }>()
defineEmits<{ 'update:active-tab': [value: string] }>()

const tabs = [
  {
    id: 'rpo',
    label: 'RPO 招聘流程外包',
    labelEn: 'Recruitment Process Outsourcing',
    // 剪贴板任务图标
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    color: '#3B8FE8', // 品牌蓝
  },
  {
    id: 'outsource',
    label: '全风险岗位人才外包',
    labelEn: 'Full-Risk Talent Outsourcing',
    // 护盾+勾图标（象征风险管控/保障）
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    color: '#10b981', // 翡翠绿
  },
  {
    id: 'flex',
    label: '灵活用工',
    labelEn: 'Flexible Employment',
    // 闪电图标（象征灵活/敏捷）
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    color: '#f97316', // 活力橙
  },
]
</script>

<style scoped>
.tab-switcher {
  background: rgba(6, 21, 41, 0.9);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.tab-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  width: 273px;
  color: rgb(163 163 163);
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
  white-space: nowrap;
  flex-shrink: 0;
}

.tab-btn:hover {
  color: rgb(229 229 229);
}

/* 激活时仅控制文字颜色，border-bottom-color 由 inline style 控制 */
.tab-btn--active {
  color: white;
}

.tab-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  color: rgb(163 163 163);
  transition: background 0.25s, color 0.25s;
  flex-shrink: 0;
}

.tab-label {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.2;
}

.tab-en {
  font-size: 10px;
  color: rgb(115 115 115);
  letter-spacing: 0.05em;
  margin-top: 1px;
  transition: color 0.25s;
}
</style>
