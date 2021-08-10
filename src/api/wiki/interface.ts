import { get } from '../../common/services'
import { FetchWikiListReq, IWikiItem } from '.'

export const fetchWikiList = (req:FetchWikiListReq) => get<{dataList:IWikiItem[]}>(`/api/wiki/list/all/2?size=${req.size}`)
