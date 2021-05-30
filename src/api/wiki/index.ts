import { get } from '../../common/services'
import { WikiListRes } from '../models/wiki'

export const fetchWikiList = () => get<WikiListRes>('/api/wiki/list/all/1?size=10')
