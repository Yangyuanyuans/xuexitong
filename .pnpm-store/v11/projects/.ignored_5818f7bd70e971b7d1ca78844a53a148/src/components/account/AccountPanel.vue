<script setup>
import { ref } from 'vue'

import userIcon from '@/assets/images/z.png'

import AvatarPane from './AvatarPane.vue'
import BasicProfilePane from './BasicProfilePane.vue'
import DeactivatePane from './DeactivatePane.vue'
import ForgotPassword from './ForgotPassword.vue'
import LanguagePane from './LanguagePane.vue'
import PasswordPane from './PasswordPane.vue'

/**
 * 对应原版 main.js 的 tab 切换：
 * type1 ~ type5 五个入口，同一时间只显示一个 .zi 面板。
 */
const tabs = [
  { id: 'profile', label: '基本资料' },
  { id: 'avatar', label: '修改头像' },
  { id: 'password', label: '密码管理' },
  { id: 'deactivate', label: '注销账号' },
  { id: 'language', label: '语言' },
]

const activeTab = ref('profile')
/** 原版点击“忘记密码”会隐藏顶部标题与 tab，改为密码找回视图 */
const showForgotPassword = ref(false)

function openForgotPassword() {
  showForgotPassword.value = true
}

/** 原版点击“返回”后固定回到密码管理面板 */
function backToPassword() {
  showForgotPassword.value = false
  activeTab.value = 'password'
}
</script>

<template>
  <section class="account-page">
    <header v-show="!showForgotPassword" class="account-header">
      <img class="account-header__icon" :src="userIcon" alt="" />
      <h3 class="account-header__title">账号管理</h3>
    </header>

    <nav
      v-show="!showForgotPassword"
      class="account-tabs"
      role="tablist"
      aria-label="账号设置"
    >
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        role="tab"
        class="account-tabs__item"
        :class="{ 'is-active': activeTab === tab.id }"
        :aria-selected="activeTab === tab.id"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </nav>

    <div v-show="!showForgotPassword" class="account-divider"></div>

    <div v-show="!showForgotPassword" class="account-body">
      <BasicProfilePane v-show="activeTab === 'profile'" />
      <AvatarPane v-show="activeTab === 'avatar'" />
      <PasswordPane
        v-show="activeTab === 'password'"
        @forgot="openForgotPassword"
      />
      <DeactivatePane v-show="activeTab === 'deactivate'" />
      <LanguagePane v-show="activeTab === 'language'" />
    </div>

    <ForgotPassword v-show="showForgotPassword" @back="backToPassword" />
  </section>
</template>

<style scoped>
.account-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.account-header {
  display: flex;
  flex: none;
  align-items: center;
  gap: 12px;
  height: 70px;
  padding: 0 24px;
  border-bottom: 1px solid var(--line);
}

.account-header__icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.account-header__title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-900);
}

.account-tabs {
  display: flex;
  flex: none;
  align-items: center;
  padding: 0 16px;
}

.account-tabs__item {
  position: relative;
  min-width: 96px;
  height: 44px;
  padding: 0 14px;
  border: 0;
  background: none;
  color: var(--text-500);
  font-size: 14px;
  transition: color 0.16s ease;
}

.account-tabs__item::after {
  content: '';
  position: absolute;
  right: 14px;
  bottom: 0;
  left: 14px;
  height: 2px;
  border-radius: 2px 2px 0 0;
  background-color: transparent;
  transform: scaleX(0.4);
  transition: transform 0.16s ease, background-color 0.16s ease;
}

.account-tabs__item:hover {
  color: var(--brand-500);
}

.account-tabs__item:hover::after {
  background-color: var(--brand-500);
  transform: scaleX(1);
}

.account-tabs__item.is-active {
  color: var(--brand-500);
  font-weight: 600;
}

.account-tabs__item.is-active::after {
  background-color: var(--brand-500);
  transform: scaleX(1);
}

.account-divider {
  flex: none;
  height: 12px;
  background-color: #f2f3f8;
}

.account-body {
  flex: 1 1 auto;
  padding: 16px 24px 32px;
}

@media (max-width: 640px) {
  .account-header {
    padding: 0 16px;
  }

  .account-tabs {
    padding: 0 8px;
    overflow-x: auto;
  }

  .account-tabs__item {
    flex: 1 1 0;
    min-width: 0;
    padding: 0 6px;
    font-size: 13px;
    white-space: nowrap;
  }

  .account-tabs__item::after {
    right: 6px;
    left: 6px;
  }

  .account-body {
    padding: 12px 16px 24px;
  }
}
</style>
