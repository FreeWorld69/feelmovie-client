import * as yg from '@yggdrasilts/axiosfit';

export class NetworkInterceptor
  implements
    yg.AxiosfitRequestInterceptor,
    yg.AxiosfitResponseInterceptor,
    yg.AxiosfitInterceptor
{
  onRequest(
    config: yg.AxiosRequestConfig
  ): yg.AxiosRequestConfig | Promise<yg.AxiosRequestConfig> {
    // 10 sec
    config.timeout = 10000;

    // register needed headers
    config.headers = {
      'content-type': 'application/json',
      Accept: 'application/json',
      'x-source': process.env['NG_APP_MOVIE_API_HEADER_X_SOURCE'],
      // unsafe headers are not set in client
      'User-Agent': process.env['NG_APP_MOVIE_API_HEADER_USER_AGENT'],
      origin: process.env['NG_APP_MOVIE_API_HEADER_ORIGIN'],
      referer: process.env['NG_APP_MOVIE_API_HEADER_REFERER'],
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

  onResponse(
    response: yg.AxiosResponse
  ): yg.AxiosResponse | Promise<yg.AxiosResponse> {
    return response.data;
  }
}
