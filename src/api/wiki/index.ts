export interface IWikiItem {
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
export interface FetchWikiListReq {
  size: number;
  pageNum?:number;
  type?:string;
}
export interface IWikeDetail{
        content: string,
        id: number,
        author: {
            id: number,
            realName: string,
            userName:string,
            team:string
        },
        title: string,
        img:string,
        summary:string,
        type: {
            id: number,
            typeName: string
        },
        pubTime: string,
        explore: number
}
