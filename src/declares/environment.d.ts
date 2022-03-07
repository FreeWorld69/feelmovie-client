export type AppDebugMode = 'development' | 'production';

declare global {
  const process: { env: NodeJS.ProcessEnv };

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: AppDebugMode;
      NG_APP_API_URL: string;
    }
  }
}

