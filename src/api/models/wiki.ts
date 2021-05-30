interface DataItem {
  id: number
  author: {
      id: number
      realName: string
      userName: string
      team: string
      portrait: string
  }
  title: string
  img: string
  summary: string
  type: {
      id: number
      typeName: string
  }
  pubTime: string
  explore: number
}
export interface WikiListRes {
  dataList: DataItem[]
}
