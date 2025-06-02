import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({

  plugins: [
    svelte(),
    tailwindcss({
      config: {
        content: ['./src/**/*.{html,js,svelte}'],
        theme: {
          extend: {
            colors: {
              primary: '#1DA1F2',
              secondary: '#14171A',
            },
          },
        },
      },
    }),
  ],

})
