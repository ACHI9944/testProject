import {AxiosResponse} from 'axios';
import {UserType} from '../components/User/types';

export interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserType[];
}

export type ResponseType = AxiosResponse<ApiResponse>;
