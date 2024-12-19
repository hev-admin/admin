import { defineConfig, presetAttributify, presetIcons, presetUno, presetWind } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        'width': '1em',
        'height': '1em',
      },
      collections: {
        custom: FileSystemIconLoader(
          './src/assets/icons',
          svg => svg,
        ),
      },
    }),
    presetAttributify(),
    presetWind(),
    presetRemToPx({ baseFontSize: 4 }),
  ],
})
