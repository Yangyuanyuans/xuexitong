<script setup>
import arrowIcon from '@/assets/images/down.png'
import { useAvatar } from '@/composables/useAvatar'

defineEmits(['open-account'])

const { avatarUrl } = useAvatar()
</script>

<template>
  <header class="app-header">
    <div class="app-header__school">重庆理工大学（学生）</div>

    <div class="app-header__actions">
      <a class="app-header__invite" href="#" @click.prevent>输入邀请码</a>

      <button
        type="button"
        class="user-chip"
        title="打开账号管理"
        @click="$emit('open-account')"
      >
        <img class="user-chip__avatar" :src="avatarUrl" alt="用户头像" />
        <span class="user-chip__name">杨媛媛</span>
        <img class="user-chip__arrow" :src="arrowIcon" alt="" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding-right: 24px;
  color: #fff;
  background-color: #4f57bd;
  background-image: url('../assets/images/top-bg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 2px 10px rgba(38, 45, 100, 0.16);
}

.app-header__school {
  width: 190px;
  font-size: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  text-shadow: 0 1px 2px rgba(20, 25, 70, 0.18);
}

.app-header__actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.app-header__invite {
  color: #fff;
  font-size: 14px;
  opacity: 0.92;
  transition: opacity 0.16s ease;
}

.app-header__invite:hover {
  opacity: 1;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.75);
  padding-bottom: 2px;
}

.user-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 80px;
  padding: 0 8px;
  border: 0;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  transition: background-color 0.16s ease;
}

.user-chip:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.user-chip__avatar {
  width: 32px;
  height: 32px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 50%;
  background-color: #fff;
}

.user-chip__arrow {
  width: 14px;
  opacity: 0.9;
  transition: transform 0.16s ease;
}

.user-chip:hover .user-chip__arrow {
  transform: translateY(1px);
}

@media (max-width: 640px) {
  .app-header {
    padding-right: 8px;
  }

  .app-header__school {
    width: auto;
    padding-left: 16px;
    font-size: 14px;
    text-align: left;
  }

  .app-header__actions {
    gap: 12px;
  }

  .user-chip__name {
    display: none;
  }
}
</style>
