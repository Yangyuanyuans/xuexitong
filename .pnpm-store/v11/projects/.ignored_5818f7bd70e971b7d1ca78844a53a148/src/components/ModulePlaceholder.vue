<script setup>
defineProps({
  menu: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="module-placeholder" role="status">
    <div class="module-placeholder__badge">
      <img :src="menu.icon" alt="" width="40" height="40" />
    </div>
    <h2 class="module-placeholder__title">{{ menu.label }}</h2>
    <p class="module-placeholder__desc">
      该模块的内容还在建设中，点击右上角头像可回到账号管理。
    </p>
  </section>
</template>

<style scoped>
.module-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-height: 100%;
  padding: 48px 24px;
  text-align: center;
}

.module-placeholder__badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--brand-500), #6a74cf);
  box-shadow: 0 12px 24px rgba(77, 88, 181, 0.24);
}

.module-placeholder__title {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-700);
}

.module-placeholder__desc {
  max-width: 320px;
  color: var(--text-500);
}
</style>
