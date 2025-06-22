
import type {
  ColumnDef
} from '@tanstack/react-table'


export type API_Direction = 'asc' | 'desc' | undefined;
export type API_Sorting = 'name' | 'created' | undefined;

export type API_Params = {
  page: number;
  size: number;
  search?: string;
  dir?: API_Direction;
  sort?: API_Sorting;
}

export type FullTableProps = {
  endpointPath : string;
  columns : ColumnDef<any>[];
}

export type TableProps = {
  data : any
  columns : ColumnDef<any>[],
  changePage : (page: number) => void;
}