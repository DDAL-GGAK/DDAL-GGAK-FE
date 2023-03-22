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

class Axios {
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
        Authorization: `${this.#cookie.get(KEY.ACCESS_TOKEN)}`,
      },
    };

    return newConfig;
  }

  #reqOnError(error: ReqRejected) {
    return Promise.reject(error);
  }

  /* Res */
  #resMiddleWare(res: AxiosInterceptorRes) {
    const { refreshtoken } = res.headers;

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
    return Promise.reject(error);
  }

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
   * @param {number} id
   * @param {object} data
   */
  put(endPoint: EndPoint, id: ID, data: DataForm) {
    return this.#instance({
      method: METHOD.PUT,
      url: `${endPoint}/${id}`,
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

export default Axios;
