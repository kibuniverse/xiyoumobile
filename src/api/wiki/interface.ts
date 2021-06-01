import { get } from '../../common/services'
import { WikiListRes } from '.'

export const fetchWikiList = () => get<WikiListRes>('/api/wiki/list/all/2?size=10')
