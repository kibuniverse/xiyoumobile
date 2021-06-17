export interface MemberInfo {
  username: string
  name: string
  team: string
  signature: string | null
  company: string | null
  graduateImg: string | null
}

export interface GetMemberInfoRes {
  dataList: MemberInfo[]
}

export interface GetMemberInfoReq {
  team: 'iOS' | 'Web' | 'Android' | 'Server'
  size: number
}
