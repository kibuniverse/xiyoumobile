import { get } from '../../common/services'
import { FetchActivityListReq, FetchActivityListRes } from './interface'

export const fetchActivityList = (params: FetchActivityListReq) => get<FetchActivityListRes>('/api/activity/list/1', params)
