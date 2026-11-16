<script setup>
import { ref } from 'vue'

const reason = ref('')

/** 原版点击“注销/解绑”只弹出确认提示，不做真实注销 */
function handleDeactivate() {
  alert('确定要注销账号吗？')
}
</script>

<template>
  <div class="deactivate-pane">
    <textarea
      v-model="reason"
      class="reason-input"
      placeholder="请输入要注销的原因"
    ></textarea>

    <div class="deactivate-actions">
      <a href="#" @click.prevent>客服</a>
      <button type="button" class="button button--danger" @click="handleDeactivate">
        注销/解绑
      </button>
    </div>
  </div>
</template>

<style scoped>
.deactivate-pane {
  max-width: 640px;
  padding-top: 8px;
}

.reason-input {
  width: 100%;
  min-height: 220px;
  padding: 12px 14px;
  border: 1px solid #d9dce7;
  border-radius: var(--radius-md);
  background-color: #fff;
  line-height: 1.7;
  resize: vertical;
  transition: border-color 0.16s ease, box-shadow 0.16s ease;
}

.reason-input::placeholder {
  color: var(--text-300);
}

.reason-input:focus {
  outline: none;
  border-color: var(--brand-500);
  box-shadow: 0 0 0 3px rgba(77, 88, 181, 0.14);
}

.deactivate-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
}

.deactivate-actions .button {
  padding: 0 22px;
}
</style>
