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
export interface GetgraduateMemberInfoRes{
  dataList: GraduateMemberInfo[]
}
export interface GetgraduateMemberReq {
  year: '2017' | '2016' | '2015' | '2014' | '2013' | '2012' | '2011' | '2010' | '2009'
  size: number
}
export interface GraduateMemberInfo{
  username: string
  name: string
  team: string
  graduateImg: string | null
  signature: string
  company: string
}
