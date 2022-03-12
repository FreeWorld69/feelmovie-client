export const Configs = {
  constants : {
    apiUrl: process.env.NG_APP_API_URL ?? '',
    enviroment: process.env.NODE_ENV ?? '',
  },

  backendRoutes : {
    home: 'home',
    details: (movieDetailsId: string | number) => `details/${movieDetailsId}`,
    search: (keyword: string | number) => `search/${keyword}`,
    movie: (id: string | number) => `movie/${id}`,
    series: (id: string | number, season: number = 1) => `series/${id}/${season}`
  },

  routeRootNames : {
    home: '',
    catalog: 'catalog',
    details: 'details/:id',
    signIn: 'sign-in',
    signUp: 'sign-up',
    error: '404',
  }
}
