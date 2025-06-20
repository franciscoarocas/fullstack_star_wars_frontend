

export interface BaseHttp {

  get(url : string, params : any) : Promise<any>;

}