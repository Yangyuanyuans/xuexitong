<script setup>
import { ref } from 'vue'

import { useAvatar } from '@/composables/useAvatar'

const MAX_FILE_SIZE = 5 * 1024 * 1024

const { avatarUrl, setAvatar } = useAvatar()

const fileInput = ref(null)
const errorMessage = ref('')

function pickFile() {
  fileInput.value?.click()
}

function onFileChange(event) {
  const input = event.target
  const file = input.files?.[0]

  // 清空 value，保证连续选择同一张图片也能触发 change
  input.value = ''

  if (!file) {
    return
  }

  if (!file.type.startsWith('image/')) {
    errorMessage.value = '请选择图片文件（JPG / PNG / WebP）'
    return
  }

  if (file.size > MAX_FILE_SIZE) {
    errorMessage.value = '图片不能超过 5MB，请压缩后再上传'
    return
  }

  const reader = new FileReader()

  reader.onload = () => {
    try {
      // 原版逻辑：FileReader 读取为 DataURL，预览并写入 localStorage
      setAvatar(String(reader.result))
      errorMessage.value = ''
    } catch {
      errorMessage.value = '头像已预览，但浏览器存储空间不足，刷新后可能丢失'
    }
  }

  reader.onerror = () => {
    errorMessage.value = '图片读取失败，请重试'
  }

  reader.readAsDataURL(file)
}
</script>

<template>
  <div class="avatar-pane">
    <p class="avatar-pane__tip">
      上传新头像后会立即同步到顶部栏与侧边栏，并保存在浏览器本地。
    </p>

    <div class="avatar-pane__layout">
      <img class="avatar-pane__preview" :src="avatarUrl" alt="头像预览" />

      <div class="avatar-pane__actions">
        <button type="button" class="button" @click="pickFile">选择图片</button>
        <p class="avatar-pane__hint">支持 JPG / PNG / WebP，单张不超过 5MB</p>
        <p v-if="errorMessage" class="avatar-pane__error" role="alert">
          {{ errorMessage }}
        </p>
      </div>
    </div>

    <input
      ref="fileInput"
      class="visually-hidden"
      type="file"
      accept="image/*"
      @change="onFileChange"
    />
  </div>
</template>

<style scoped>
.avatar-pane {
  max-width: 640px;
  padding-top: 8px;
}

.avatar-pane__tip {
  margin-bottom: 20px;
  color: var(--text-500);
}

.avatar-pane__layout {
  display: flex;
  align-items: center;
  gap: 24px;
}

.avatar-pane__preview {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 1px solid var(--line);
  border-radius: 14px;
  background-color: #f7f8fb;
  box-shadow: 0 8px 18px rgba(34, 42, 90, 0.08);
}

.avatar-pane__actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.avatar-pane__hint {
  font-size: 13px;
  color: var(--text-300);
}

.avatar-pane__error {
  font-size: 13px;
  color: var(--danger);
}
</style>
