import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import AutoImport from 'unplugin-auto-import/vite'

/// <reference types="vitest" />
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), AutoImport({
    imports: ['vitest'],
    dts: true,
  })],
})
