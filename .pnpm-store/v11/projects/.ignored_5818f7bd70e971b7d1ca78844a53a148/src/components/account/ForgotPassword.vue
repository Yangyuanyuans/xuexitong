<script setup>
import { ref } from 'vue'

import backIcon from '@/assets/images/left1.png'

const emit = defineEmits(['back'])

const phone = ref('')
const code = ref('')
const password = ref('')
</script>

<template>
  <section class="forgot-card">
    <header class="forgot-card__header">
      <button type="button" class="link-button" @click="emit('back')">
        <img :src="backIcon" alt="" width="18" height="18" />
        返回
      </button>
      <a class="forgot-card__service" href="#" @click.prevent>客服</a>
    </header>

    <h1 class="forgot-card__title">忘记密码</h1>

    <form class="forgot-card__form" @submit.prevent>
      <input
        v-model="phone"
        class="text-input"
        type="text"
        placeholder="手机号"
        autocomplete="tel"
      />
      <input
        v-model="code"
        class="text-input"
        type="text"
        placeholder="验证码"
        autocomplete="one-time-code"
      />
      <input
        v-model="password"
        class="text-input"
        type="password"
        placeholder="设置新密码"
        autocomplete="new-password"
      />
      <button type="submit" class="button button--primary forgot-card__submit">
        确定
      </button>
    </form>
  </section>
</template>

<style scoped>
.forgot-card {
  width: 500px;
  max-width: calc(100% - 32px);
  margin: 28px auto 48px;
  padding: 16px 24px 32px;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background-color: #f7f8fc;
  box-shadow: var(--shadow-card);
}

.forgot-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.forgot-card__service {
  color: var(--text-500);
  font-size: 14px;
}

.forgot-card__title {
  margin: 8px 0 22px;
  font-size: 20px;
  font-weight: 600;
}

.forgot-card__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.forgot-card__form .text-input {
  width: 320px;
  max-width: 100%;
}

.forgot-card__submit {
  width: 250px;
  max-width: 100%;
}
</style>
