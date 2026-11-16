/**
 * 构建后把 JS / CSS 内联进 dist/index.html，产出可双击打开的离线单文件版本。
 * 使用方法：pnpm build
 */
import { readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = join(projectRoot, 'dist')
const indexPath = join(distDir, 'index.html')

let html = await readFile(indexPath, 'utf8')

/** 读取构建产物，路径统一按 dist 目录解析 */
async function readAsset(src) {
  const relativePath = src.replace(/^\.?\//, '')
  return readFile(join(distDir, relativePath), 'utf8')
}

const scriptPattern = /<script\b[^>]*\bsrc="([^"]+\.js)"[^>]*><\/script>/g
const scriptPaths = [...html.matchAll(scriptPattern)].map((match) => match[1])

for (const src of scriptPaths) {
  const code = await readAsset(src)
  html = html.replace(
    new RegExp(`<script\\b[^>]*\\bsrc="${src.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*><\\/script>`),
    () => `<script type="module">\n${code}\n</script>`,
  )
}

const stylePattern = /<link\b[^>]*\brel="stylesheet"[^>]*\bhref="([^"]+\.css)"[^>]*>/g
const stylePaths = [...html.matchAll(stylePattern)].map((match) => match[1])

for (const href of stylePaths) {
  const css = await readAsset(href)
  html = html.replace(
    new RegExp(`<link\\b[^>]*\\brel="stylesheet"[^>]*\\bhref="${href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`),
    () => `<style>\n${css}\n</style>`,
  )
}

// 模块预加载提示对单文件版本无意义
html = html.replace(/\s*<link\b[^>]*\brel="modulepreload"[^>]*>/g, '')

await writeFile(indexPath, html, 'utf8')

// 所有资源都已内联，清理构建产物中多余的资源目录
await rm(join(distDir, 'assets'), { recursive: true, force: true })

console.log('✔ 已生成离线单文件：dist/index.html')
