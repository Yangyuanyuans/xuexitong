import appIcon from '@/assets/images/s3.png'
import cloudIcon from '@/assets/images/s9.png'
import contactIcon from '@/assets/images/s10.png'
import courseIcon from '@/assets/images/s4.png'
import favoriteIcon from '@/assets/images/s2.png'
import groupIcon from '@/assets/images/s8.png'
import homeIcon from '@/assets/images/s1.png'
import messageIcon from '@/assets/images/s7.png'
import microMajorIcon from '@/assets/images/s5.png'
import noteIcon from '@/assets/images/s6.png'

/**
 * 侧边栏导航。图标、文案与原版 index-HTML.html 保持一一对应，
 * 只是把散落在 HTML 里的 <div id="s1"> 换成了可遍历的数据。
 */
export const sidebarMenus = [
  { id: 'home', label: '首页', icon: homeIcon },
  { id: 'favorites', label: '常用', icon: favoriteIcon },
  { id: 'apps', label: '应用中心', icon: appIcon },
  { id: 'courses', label: '课程', icon: courseIcon },
  { id: 'micro-major', label: '微专业报名', icon: microMajorIcon },
  { id: 'notes', label: '笔记', icon: noteIcon },
  { id: 'messages', label: '消息', icon: messageIcon },
  { id: 'groups', label: '小组', icon: groupIcon },
  { id: 'cloud', label: '云盘', icon: cloudIcon },
  { id: 'contacts', label: '通讯录', icon: contactIcon },
]
