import {defineConfig} from '@hey-api/openapi-ts';

export default defineConfig({
    input: './openapi.json',
    output: './src/client',
    plugins: [
        {
            name: '@hey-api/client-fetch',
            runtimeConfigPath: './hey-api-config.ts',
        },
        "@hey-api/schemas",
        '@tanstack/react-query',
        {
            dates: false,
            name: '@hey-api/transformers'
        },
        {
            name: '@hey-api/sdk',
            transformer: true
        }
    ],
});
