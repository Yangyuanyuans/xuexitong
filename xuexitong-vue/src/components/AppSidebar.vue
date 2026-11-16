<script setup>
import collapseIcon from '@/assets/images/left.png'
import { useAvatar } from '@/composables/useAvatar'
import { sidebarMenus } from '@/data/menu'

defineProps({
  activeId: {
    type: String,
    default: null,
  },
})

defineEmits(['select'])

const { avatarUrl } = useAvatar()
</script>

<template>
  <aside class="app-sidebar">
    <div class="app-sidebar__profile">
      <img class="app-sidebar__avatar" :src="avatarUrl" alt="用户头像" />
      <span class="app-sidebar__name">杨媛媛</span>
    </div>

    <nav class="app-sidebar__menu" aria-label="主导航">
      <button
        v-for="menu in sidebarMenus"
        :key="menu.id"
        type="button"
        class="menu-item"
        :class="{ 'is-active': menu.id === activeId }"
        :aria-current="menu.id === activeId ? 'page' : undefined"
        @click="$emit('select', menu.id)"
      >
        <img
          class="menu-item__icon"
          :src="menu.icon"
          alt=""
          width="20"
          height="20"
        />
        <span class="menu-item__label">{{ menu.label }}</span>
      </button>
    </nav>

    <div class="app-sidebar__footer" aria-hidden="true">
      <img :src="collapseIcon" alt="" width="20" height="20" />
    </div>
  </aside>
</template>

<style scoped>
.app-sidebar {
  display: flex;
  flex: 0 0 190px;
  flex-direction: column;
  width: 190px;
  height: 100%;
  overflow: hidden;
  color: #fff;
  background-color: var(--brand-500);
  border-radius: var(--radius-lg);
  box-shadow: 0 10px 30px rgba(47, 55, 130, 0.18);
}

.app-sidebar__profile {
  display: flex;
  flex: 0 0 168px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.55);
}

.app-sidebar__avatar {
  width: 56px;
  height: 56px;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.75);
  border-radius: 50%;
  background-color: #fff;
}

.app-sidebar__name {
  opacity: 0.95;
}

.app-sidebar__menu {
  flex: 1 1 auto;
  padding: 6px 0;
  overflow-y: auto;
}

.menu-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 48px;
  padding: 0 20px;
  border: 0;
  background-color: transparent;
  color: #fff;
  font-size: 14px;
  text-align: left;
  transition: background-color 0.16s ease;
}

.menu-item__icon {
  flex: 0 0 20px;
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.menu-item__label {
  white-space: nowrap;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.14);
}

.menu-item.is-active {
  background-color: var(--brand-600);
  font-weight: 600;
}

.menu-item.is-active::before {
  content: '';
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 0;
  width: 3px;
  border-radius: 0 3px 3px 0;
  background-color: #fff;
}

.app-sidebar__footer {
  display: flex;
  flex: 0 0 44px;
  align-items: center;
  justify-content: flex-end;
  padding: 0 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
}

.app-sidebar__footer img {
  opacity: 0.75;
}

@media (max-width: 900px) {
  .app-sidebar {
    flex: none;
    width: 100%;
    height: auto;
  }

  .app-sidebar__profile {
    flex: none;
    flex-direction: row;
    justify-content: flex-start;
    height: 96px;
    padding: 0 20px;
    gap: 14px;
  }

  .app-sidebar__avatar {
    width: 44px;
    height: 44px;
  }

  .app-sidebar__menu {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    padding: 6px;
  }

  .menu-item {
    height: 44px;
    border-radius: var(--radius-sm);
  }

  .app-sidebar__footer {
    display: none;
  }
}
</style>
