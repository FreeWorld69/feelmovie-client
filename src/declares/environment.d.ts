export type AppDebugMode = 'development' | 'production';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: AppDebugMode;
      NG_APP_API_URL: string;
      NG_APP_MOVIE_API_URL: string;
      NG_APP_MOVIE_API_HEADER_USER_AGENT: string;
      NG_APP_MOVIE_API_HEADER_X_SOURCE: string;
      NG_APP_MOVIE_API_HEADER_ORIGIN: string;
      NG_APP_MOVIE_API_HEADER_REFERER: string;
      NG_APP_MOVIE_API_SOURCE_PARAM: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
