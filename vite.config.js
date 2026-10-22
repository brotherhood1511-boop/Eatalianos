// Settings for Vite, the tool that runs the site while you work on it (npm run dev)
// and packages it up for the internet (npm run build). The React plugin lets it
// understand the .jsx files. You shouldn't need to change this.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
