import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, 'auto-import.d.ts'),
      imports: ['vue', 'vue-router', 'pinia']
    }),
    Components({
      resolvers: [
        // 自动引入 elementPlus组件
        ElementPlusResolver(),
        // 自动引入图标
        IconsResolver({
          prefix: false,
          enabledCollections: ['ep', 'mdi']
        })
      ],
      // 指定组件位置，默认是src
      dirs: ['src'],
      extensions: ['vue'],
      // 搜索子目录
      deep: true,
      dts: path.resolve(pathSrc, 'components.d.ts')
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3'
    })
  ]
})
