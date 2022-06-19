import { defineConfig, BuildOptions } from 'vite';
import react from '@vitejs/plugin-react';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const prodOptions: BuildOptions = {
    lib: {
        entry: 'src/index.ts',
        name: 'screech-editor',
        formats: ['cjs']
    }
};

export default defineConfig({
    build: {
        ...(IS_PRODUCTION ? prodOptions : {})
    },
    plugins: [
        react()
    ]
});
