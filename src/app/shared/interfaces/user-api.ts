export interface UserApi {
  page: number,
  data: data[]
}
export interface data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
