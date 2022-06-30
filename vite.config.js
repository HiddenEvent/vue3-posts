import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  return defineConfig({
    plugins: [vue()],
    // mode: 'production', <========  mode 사용할 수 없다1!!
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: `${process.env.VITE_APP_API_URL}`,
          changeOrigin: true,
          secure: false,
          ws: true,
        },
      },
    },
  });
};

//========================= 이슈 url이 mode에 따라 안바뀜...
// import { fileURLToPath, URL } from 'url';
//
// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   mode: 'production',
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),
//     },
//   },
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8080',
//         changeOrigin: true,
//         secure: false,
//         ws: true,
//       },
//     },
//   },
// });
