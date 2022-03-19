export type AppDebugMode = 'development' | 'production';

declare global {
  const process: { env: NodeJS.ProcessEnv };

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: AppDebugMode;
      NG_APP_API_URL: string;
      NG_MOVIE_API_URL: string;
      NG_MOVIE_API_HEADER_USER_AGENT: string;
      NG_MOVIE_API_HEADER_X_SOURCE: string;
      NG_MOVIE_API_HEADER_ORIGIN: string;
      NG_MOVIE_API_HEADER_REFERER: string;
      NG_MOVIE_API_SOURCE_PARAM: string;
    }
  }
}

