import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    alias: {
      '@': __dirname + '/src'
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-import.d.ts',
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
      dts: 'src/components.d.ts'
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3'
    })
  ]
})

