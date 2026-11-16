<script setup>
import { computed, ref } from 'vue'

import AccountPanel from '@/components/account/AccountPanel.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import ModulePlaceholder from '@/components/ModulePlaceholder.vue'
import { sidebarMenus } from '@/data/menu'

/**
 * 原版 indext.js 通过直接改 style.display 来控制三块区域：
 * .d（顶部栏）、.sidwbar-body（侧边栏）、.myiframe（账号管理 iframe）。
 * 重构后统一用响应式状态描述：
 * - activeMenuId：当前选中的侧边栏模块，null 表示停留在账号管理；
 * - 账号管理面板与模块占位互斥，代替原来的 iframe / .z 显隐。
 *
 * 说明：原版首次加载时 iframe 是 display:none，右侧为空白；
 * 这里默认展示账号管理面板，点击右上角头像仍会回到该面板。
 */
const activeMenuId = ref(null)

const activeMenu = computed(
  () => sidebarMenus.find((menu) => menu.id === activeMenuId.value) ?? null,
)

const showAccountPanel = computed(() => activeMenu.value === null)

function selectMenu(menuId) {
  activeMenuId.value = menuId
}

function openAccountPanel() {
  activeMenuId.value = null
}
</script>

<template>
  <div class="app-shell">
    <AppHeader @open-account="openAccountPanel" />

    <div class="app-body">
      <AppSidebar :active-id="activeMenuId" @select="selectMenu" />

      <main class="app-main">
        <AccountPanel v-show="showAccountPanel" />
        <ModulePlaceholder v-if="activeMenu" :menu="activeMenu" />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  background-color: var(--canvas);
}

.app-body {
  display: flex;
  align-items: stretch;
  gap: 16px;
  height: calc(100vh - 80px);
  min-height: 620px;
  padding: 17px 16px 16px 10px;
}

.app-main {
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  overflow: auto;
  background-color: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
}

@media (max-width: 900px) {
  .app-body {
    flex-direction: column;
    gap: 12px;
    height: auto;
    min-height: 0;
    padding: 12px;
  }

  .app-main {
    width: 100%;
    height: auto;
    min-height: 520px;
  }
}
</style>
