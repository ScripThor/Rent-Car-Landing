import { defineConfig } from 'vite';

export default defineConfig({
    root: './', // Указывает на корень проекта
    publicDir: 'public', // Папка с публичными файлами
    server: {
        port: 3000, // Задание порта
        open: true, // Открытие браузера при запуске
    },
    build: {
        outDir: 'dist', // Папка для сборки
    },
});