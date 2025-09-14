import type {CreateClientConfig} from './src/client/client.gen.ts';

export const createClientConfig: CreateClientConfig = (config) => (
    {
        ...config,
        baseUrl: import.meta.env.VITE_API_URL
    }
);

