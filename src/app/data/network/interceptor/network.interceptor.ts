import * as yg from '@yggdrasilts/axiosfit';

export class NetworkInterceptor implements yg.AxiosfitRequestInterceptor, yg.AxiosfitResponseInterceptor, yg.AxiosfitInterceptor {
  onRequest(config: yg.AxiosRequestConfig): yg.AxiosRequestConfig | Promise<yg.AxiosRequestConfig> {
    // 10 sec
    config.timeout = 10000;

    // register needed headers
    config.headers = {
      'content-type': 'application/json',
      Accept: 'application/json',
      'User-Agent': process.env.NG_MOVIE_API_HEADER_USER_AGENT,
      'x-source': process.env.NG_MOVIE_API_HEADER_X_SOURCE,
      origin: process.env.NG_MOVIE_API_HEADER_ORIGIN,
      referer: process.env.NG_MOVIE_API_HEADER_REFERER,
    };

    // console.log('----------------------------');
    // console.log(config.headers);
    // console.log('----------------------------');

    return config;
  }

  onError(error: yg.AxiosError): any {
    console.log('=======================');
    console.log(error.isAxiosError);
    console.log(error.code);
    console.log(error.message);
    console.log(error.name);
    console.log(error.stack);
    console.log('=======================');
  }

  onResponse(response: yg.AxiosResponse): yg.AxiosResponse | Promise<yg.AxiosResponse> {
    console.log('=======================[]');
    console.log(response.status);
    console.log(response.headers);
    console.log(response.statusText);
    console.log(response.config);
    console.log('=======================[]');

    return response.data;
  }
}
