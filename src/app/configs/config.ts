export const Configs = {
  constants : {
    apiUrl: process.env.NG_APP_API_URL ?? '',
    enviroment: process.env.NODE_ENV ?? '',
  },

  backendRoutes : {
    home: 'home'
  },

  routeRootNames : {
    home: '',
    catalog: 'catalog',
    details: 'details',
    signIn: 'sign-in',
    signUp: 'sign-up',
    error: '404',
  }
}
