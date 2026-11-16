<script setup>
import { ref } from 'vue'

const emit = defineEmits(['forgot'])

const oldPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const captcha = ref('')

/**
 * 与原版 que3 的点击逻辑一致：
 * 两次输入不一致时弹出 confirm 并清空两个新密码输入框；
 * 一致时提示修改成功（原版成功后不清空，这里保持一致）。
 */
function submit() {
  if (newPassword.value !== confirmPassword.value) {
    confirm('两次输入密码不一致')
    newPassword.value = ''
    confirmPassword.value = ''
    return
  }

  alert('密码修改成功')
}

function forgotPassword() {
  emit('forgot')
}
</script>

<template>
  <form class="password-pane" @submit.prevent="submit">
    <div class="form-row">
      <label class="form-row__label" for="old-password">旧密码</label>
      <input
        id="old-password"
        v-model="oldPassword"
        class="text-input"
        type="password"
        autocomplete="current-password"
      />
      <button type="button" class="link-button" @click="forgotPassword">
        忘记密码
      </button>
    </div>

    <div class="form-row">
      <label class="form-row__label" for="new-password">新密码</label>
      <input
        id="new-password"
        v-model="newPassword"
        class="text-input"
        type="password"
        autocomplete="new-password"
      />
    </div>

    <div class="form-row">
      <label class="form-row__label" for="confirm-password">确认新密码</label>
      <input
        id="confirm-password"
        v-model="confirmPassword"
        class="text-input"
        type="password"
        autocomplete="new-password"
      />
    </div>

    <div class="form-row">
      <label class="form-row__label" for="captcha">验证码</label>
      <input id="captcha" v-model="captcha" class="text-input" type="text" />
    </div>

    <div class="form-actions">
      <button type="submit" class="button button--primary">确定</button>
    </div>
  </form>
</template>

<style scoped>
.password-pane {
  max-width: 640px;
  padding-top: 8px;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.form-row__label {
  flex: 0 0 96px;
  color: var(--text-500);
}

.form-row .text-input {
  width: 240px;
}

.form-actions {
  padding-left: 108px;
  margin-top: 4px;
}

.form-actions .button {
  width: 100px;
}

@media (max-width: 640px) {
  .form-row__label {
    flex-basis: 100%;
  }

  .form-row .text-input {
    width: 100%;
  }

  .form-actions {
    padding-left: 0;
  }
}
</style>
