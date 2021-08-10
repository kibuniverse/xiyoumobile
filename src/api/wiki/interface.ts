import { get } from '../../common/services'
import { FetchWikiListReq, IWikiItem } from '.'

export interface IPageInfo {
  everyPage: number;
  totalCount: number;
  currentpage: number;
  beginIndex: number;
  hasPrePage: boolean;
  hasNextPage: boolean;
  totalPage: number;
}
export interface IGroupType {
  count: number,
  id: number,
  typeName: string
}
export const fetchWikiList = (req: FetchWikiListReq) => get<{ dataList: IWikiItem[] } & { pageInfo: IPageInfo }>(`/api/wiki/list/${(req.type && `type/${req.type}`) || 'all'}/${req.pageNum || 1}?size=${req.size}`)
export const fetchWikiGroup = () => get<IGroupType[]>('/api/wiki/types');
