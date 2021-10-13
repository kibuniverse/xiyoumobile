import { IPageInfo } from '../../common/Inteface'

export interface FetchActivityListReq {
  size: number
}

export interface FetchActivityListRes {
  pageInfo: IPageInfo
  dataList: IActivityItem[]
}
export interface IActivityItem {
  img: string
  title: string
  summary: string
  pubTime: string
  explore: number
  id: number
}
export interface IActivityDetail {
  title: string
  img: string
  content: string
  pubTime: string
  explore: number
}
