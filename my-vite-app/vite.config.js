import { defineConfig } from 'vite';


export default defineConfig({
    base: "https://im-wadd.github.io/Week9Practical1/my-vite-app",
    build: {
        outDir: 'docs',
        emptyOutDir: true,
    }
})