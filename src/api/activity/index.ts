import { get } from '../../common/services'
import { FetchActivityListReq, FetchActivityListRes, IActivityDetail } from './interface'

/**
 *
 * @param size number 请求的个数
 * @returns
 */
export const fetchActivityList = (params: FetchActivityListReq) =>
	get<FetchActivityListRes>('/api/activity/list/1', params)
export const fetchActivityDetail = (id: string) =>
	get<IActivityDetail>(`/api/activity/detail/${id}`)
