import { get } from '../../common/services'
import { GetMemberInfoRes, GetMemberInfoReq, GetgraduateMemberInfoRes, GetgraduateMemberReq, GetMemberMessage } from './interface'

/**
 * @param team 组别
 * @param size 获取的个数
 * @returns 获取成员列表
 */
export const getMemberInfo = (params: GetMemberInfoReq) => get<GetMemberInfoRes>(`/api/member/list/current/${params.team}/1?size=${params.size}`)
export const getgraduateMemberInfo = (params: GetgraduateMemberReq) => get<GetgraduateMemberInfoRes>(`/api/member/list/graduate/${params.year}/1?size=${params.size}`)
export const getMemberDetail = (username: string) => get<GetMemberMessage>(`/api/member/detail/${username}`)
