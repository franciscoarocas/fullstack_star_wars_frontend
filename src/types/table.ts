
export type API_Direction = 'asc' | 'desc' | undefined;

export type API_Params = {
  page: number;
  size: number;
  search?: string;
  dir?: API_Direction;
}