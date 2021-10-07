export interface MemberInfo {
  username: string
  name: string
  team: string
  signature: string | null
  company: string | null
  mienImg: string | null
}

export interface GetMemberInfoRes {
  dataList: MemberInfo[]
}
export interface GetMemberInfoReq {
  team: 'iOS' | 'Web' | 'Android' | 'Server'
  size: number
}
export interface GetgraduateMemberInfoRes {
  dataList: GraduateMemberInfo[]
}
export interface GetgraduateMemberReq {
  year: string
  size: number
}
export interface GraduateMemberInfo {
  username: string
  name: string
  team: string
  graduateImg: string | null
  signature: string
  company: string
}

export interface GetMemberMessage {
  username: string
  portrait: string
  gender: string
  classGrade: string
  year: number
  id: number
  name: string
  group: string
  mienImg: string
  graduateImg: string
  signature: string
  company: string
}
