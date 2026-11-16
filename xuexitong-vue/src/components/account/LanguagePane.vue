<script setup>
import { ref } from 'vue'

/** 语言列表与原版 main.html 的 8 个单选项完全一致 */
const languages = [
  { value: 'zh-CN', label: '中文' },
  { value: 'zh-TW', label: '中文繁體' },
  { value: 'en', label: 'English' },
  { value: 'lo', label: 'ລາວ' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'es', label: 'Español' },
  { value: 'ru', label: 'Русский' },
]

const language = ref('zh-CN')
</script>

<template>
  <div class="language-pane">
    <p class="language-pane__tip">选择界面语言后会在下次登录时生效。</p>

    <div class="language-list" role="radiogroup" aria-label="界面语言">
      <label
        v-for="item in languages"
        :key="item.value"
        class="language-option"
        :class="{ 'is-checked': language === item.value }"
      >
        <input v-model="language" type="radio" name="language" :value="item.value" />
        <span>{{ item.label }}</span>
      </label>
    </div>
  </div>
</template>

<style scoped>
.language-pane {
  max-width: 680px;
  padding-top: 8px;
}

.language-pane__tip {
  margin-bottom: 18px;
  color: var(--text-500);
}

.language-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}

.language-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: border-color 0.16s ease, background-color 0.16s ease,
    box-shadow 0.16s ease;
}

.language-option:hover {
  border-color: #c9cde0;
  background-color: #fbfbfe;
}

.language-option.is-checked {
  border-color: var(--brand-500);
  background-color: var(--brand-50);
  box-shadow: inset 0 0 0 1px var(--brand-500);
}

.language-option input[type="radio"] {
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--brand-500);
  cursor: pointer;
}
</style>
