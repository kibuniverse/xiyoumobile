export interface FetchActivityListReq {
  size: number;
}

export interface FetchActivityListRes {
  dataList: any[]
}
export interface IActivityItem {
  img: string;
  title: string;
  summary: string;
  pubTime: string;
  explore: number;
}
