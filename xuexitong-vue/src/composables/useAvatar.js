import { ref } from 'vue'

import defaultAvatar from '@/assets/images/avatar.png'

/** 与原版 main.js / indext.js 共用的 localStorage 键名 */
const STORAGE_KEY = 'avatarUrl'

function readStoredAvatar() {
  try {
    return localStorage.getItem(STORAGE_KEY) || defaultAvatar
  } catch (error) {
    // 某些浏览器在 file:// 或隐私模式下会禁用 localStorage
    console.warn('[avatar] 读取本地头像失败，已回退为默认头像', error)
    return defaultAvatar
  }
}

/**
 * 头像状态放在模块级，任意组件通过 useAvatar() 拿到同一个 ref，
 * 因此“修改头像”后顶部栏与侧边栏会立即同步（原版需要刷新页面）。
 */
const avatarUrl = ref(readStoredAvatar())

export function useAvatar() {
  function setAvatar(dataUrl) {
    avatarUrl.value = dataUrl

    try {
      localStorage.setItem(STORAGE_KEY, dataUrl)
    } catch (error) {
      console.warn('[avatar] 头像已更新，但写入 localStorage 失败', error)
      throw error
    }
  }

  return { avatarUrl, setAvatar }
}
