import axios from 'axios';
import { Cookies } from 'react-cookie';
import { KEY, EXPIRE, METHOD } from 'constants/';
import {
  AxiosInterceptorReqConfig,
  AuthReqConfig,
  ReqRejected,
  AxiosInterceptorRes,
  AxiosRes,
  EndPoint,
  Query,
  Params,
  DataForm,
  ID,
} from 'types';

export class Axios {
  #instance;
  #auth;
  #cookie;

  /**
   * @param {boolean} isAuthReq
   */
  constructor(isAuthReq = false) {
    this.#instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_BASE_ROUTE}`,
    });
    this.#auth = isAuthReq;
    this.#cookie = new Cookies();
    this.#setInterceptor();
  }

  /* Interceptor */
  #setInterceptor() {
    this.#instance.interceptors.request.use(
      this.#reqMiddleWare.bind(this),
      this.#reqOnError.bind(this)
    );
    this.#instance.interceptors.response.use(
      this.#resMiddleWare.bind(this),
      this.#resOnError.bind(this)
    );
  }

  /* Req */
  #reqMiddleWare(config: AxiosInterceptorReqConfig) {
    let newConfig = config;
    if (this.#auth) newConfig = this.#setAuthReq(newConfig);

    return newConfig;
  }

  #setAuthReq(config: AxiosInterceptorReqConfig): AuthReqConfig {
    const { headers } = config;
    const newConfig = {
      ...config,
      headers: {
        ...headers,
        Authorization: `${this.#cookie
          .get(KEY.ACCESS_TOKEN)
          ?.replace('%', ' ')}`,
      },
    };

    return newConfig;
  }

  #reqOnError(error: ReqRejected) {
    return Promise.reject(error);
  }

  /* Res */
  #resMiddleWare(res: AxiosInterceptorRes) {
    const { authorization, refreshtoken } = res.headers;

    if (authorization) {
      const validUntil = new Date();
      validUntil.setTime(new Date().getTime() + EXPIRE.ACCESS_TOKEN);

      this.#cookie.set(KEY.ACCESS_TOKEN, authorization, {
        path: '/',
        expires: validUntil,
      });
    }

    if (refreshtoken) {
      const validUntil = new Date();
      validUntil.setTime(new Date().getTime() + EXPIRE.REFRESH_TOKEN);

      this.#cookie.set(KEY.REFRESH_TOKEN, refreshtoken, {
        path: '/',
        expires: validUntil,
      });
    }

    return res;
  }

  #resOnError(error: AxiosRes) {
    if (error.response && error?.response.status === 1002) this.#getNewToken();
    return Promise.reject(error);
  }

  #getNewToken() {}

  /**
   * @param {string} endPoint
   */
  get(endPoint: EndPoint) {
    return this.#instance({
      method: METHOD.GET,
      url: endPoint,
    });
  }

  /**
   * @param {string} endPoint
   * @param {string} query
   */
  getByQuery(endPoint: EndPoint, query: Query) {
    return this.#instance({
      method: METHOD.GET,
      url: endPoint,
      params: {
        ...query,
      },
    });
  }

  /**
   * @param {string} endPoint
   * @param {string} query
   */
  getByParams(endPoint: EndPoint, params: Params) {
    return this.#instance({
      method: METHOD.GET,
      url: `${endPoint}/${params}`,
    });
  }

  /**
   * @param {string} endPoint
   * @param {object} data
   */
  post(endPoint: EndPoint, data: DataForm) {
    return this.#instance({
      method: METHOD.POST,
      url: `${endPoint}`,
      data,
    });
  }

  /**
   * @param {string} endPoint
   * @param {any} data
   */
  postMultipartFormData(endPoint: EndPoint, data: FormData) {
    return this.#instance({
      method: 'POST',
      url: `${endPoint}`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data,
    });
  }

  /**
   * @param {string} endPoint
   * @param {number} id
   * @param {object} data
   */
  put(endPoint: EndPoint, data: object, id: ID | undefined = undefined) {
    return this.#instance({
      method: METHOD.PUT,
      url: !!id || id === '' || id === 0 ? `${endPoint}/${id}` : endPoint,
      data,
    });
  }

  /**
   *
   */
  putFormData(endPoint: EndPoint, data: DataForm) {
    return this.#instance({
      method: METHOD.PUT,
      url: `${endPoint}`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data,
    });
  }

  /**
   * @param {string} endPoint
   * @param {number} id
   */
  delete(endPoint: EndPoint, id: ID) {
    return this.#instance({
      method: METHOD.DELETE,
      url: `${endPoint}/${id}`,
    });
  }
}
