import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cyber-incident-game/',
  plugins: [react()],
});
