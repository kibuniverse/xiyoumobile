import { get } from '../../common/services'
import { FetchWikiListReq, IWikiItem } from '.'
import { IPageInfo } from '../../common/Inteface';

export interface IGroupType {
  count: number,
  id: number,
  typeName: string
}
export const fetchWikiList = (req: FetchWikiListReq) => get<{ dataList: IWikiItem[] } & { pageInfo: IPageInfo }>(`/api/wiki/list/${(req.type && `type/${req.type}`) || 'all'}/${req.pageNum || 1}?size=${req.size}`)
export const fetchWikiGroup = () => get<IGroupType[]>('/api/wiki/types');
