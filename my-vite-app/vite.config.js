import { defineConfig } from 'vite';


export default defineConfig({
    base: "https://im-wadd.github.io/Week9Practical1",
    build: {
        outDir: '../docs',
        emptyOutDir: true,
    }
})