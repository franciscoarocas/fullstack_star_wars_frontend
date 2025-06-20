
import type { BaseHttp } from "./http/base";

import axios from 'axios';

class AxiosHttp implements BaseHttp {

  async get(url: string, params: any): Promise<any> {
    const response = await axios.get(url, {
      params: params,
    });
    return response.data;
  }

};

export default AxiosHttp;