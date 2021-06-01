import { get } from '../../common/services'
import { FetchActivityListReq, FetchActivityListRes } from './interface'

/**
 *
 * @param size number 请求的个数
 * @returns
 */
export const fetchActivityList = (params: FetchActivityListReq) => get<FetchActivityListRes>('/api/activity/list/1', params)
