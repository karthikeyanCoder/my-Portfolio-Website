import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // If using SWC, it might be '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(), // Or your React plugin
    tailwindcss(),
  
  ],
  base: "/karthi-portfolio/"
});