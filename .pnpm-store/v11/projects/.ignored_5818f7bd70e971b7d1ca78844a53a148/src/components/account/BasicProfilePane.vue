<script setup>
import { ref } from 'vue'

/** 原版两个单选框没有默认选中，这里保持一致 */
const gender = ref('')
</script>

<template>
  <div class="profile-pane">
    <dl class="info-list">
      <div class="info-row">
        <dt class="info-row__label">姓名</dt>
        <dd class="info-row__value">杨媛媛</dd>
      </div>

      <div class="info-row">
        <dt class="info-row__label">ID</dt>
        <dd class="info-row__value">12345678</dd>
      </div>

      <div class="info-row">
        <dt class="info-row__label">性别</dt>
        <dd class="info-row__value">
          <label class="radio">
            <input v-model="gender" type="radio" name="gender" value="male" />
            男
          </label>
          <label class="radio">
            <input v-model="gender" type="radio" name="gender" value="female" />
            女
          </label>
        </dd>
      </div>

      <div class="info-row">
        <dt class="info-row__label">手机号</dt>
        <dd class="info-row__value">
          150****0947
          <a href="#" @click.prevent>修改</a>
        </dd>
      </div>

      <div class="info-row">
        <dt class="info-row__label">单位</dt>
        <dd class="info-row__value">
          <a href="#" @click.prevent>+ 添加单位</a>
        </dd>
      </div>
    </dl>

    <hr class="section-rule" />

    <ul class="unit-list">
      <li class="unit">
        <p class="unit__name">重庆理工大学</p>
        <p class="unit__meta">
          <span>学号/学工号：</span>
          <span>12502090221</span>
        </p>
      </li>
      <li class="unit">
        <p class="unit__name">重庆理工大学图书馆</p>
        <p class="unit__meta">
          <span>学号/学工号：</span>
          <span>12502090221</span>
        </p>
      </li>
    </ul>

    <hr class="section-rule" />
  </div>
</template>

<style scoped>
.profile-pane {
  max-width: 760px;
  padding-top: 4px;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
}

.info-row__label {
  flex: 0 0 76px;
  color: var(--text-500);
}

.info-row__value {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  color: var(--text-900);
}

.section-rule {
  height: 1px;
  margin: 6px 0 16px;
  border: 0;
  background-color: var(--line);
}

.unit-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.unit {
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background-color: #fbfbfe;
}

.unit__name {
  font-weight: 600;
  color: var(--text-700);
}

.unit__meta {
  margin-top: 6px;
  font-size: 13px;
  color: var(--text-500);
}

@media (max-width: 640px) {
  .info-row {
    align-items: flex-start;
    padding: 8px 0;
  }

  .info-row__label {
    flex-basis: 64px;
  }
}
</style>
