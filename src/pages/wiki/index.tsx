import { Menu, message, Pagination, Spin } from 'antd';
import * as React from 'react';
import { IWikiItem } from '../../api/wiki';
import {
  fetchWikiGroup,
  fetchWikiList,
  IGroupType,
} from '../../api/wiki/interface';
import { WikiHome } from '../../components/wikiHome';
import './index.less';

const parseGroupName = (key: number) => {
  if (key === 6 || key === 3) {
    return null;
  }
  return {
    1: 'Android',
    2: 'iOS',
    4: '前端',
    5: '后台',
  }[key];
};
const Wiki: React.FC = () => {
  const [dataList, setDataList] = React.useState<IWikiItem[]>([]);
  const [pageNum, setPageNum] = React.useState(1);
  const [totalCount, setTotalCount] = React.useState(1);
  const [selectGroup, setSelectGroup] = React.useState(['all']);
  const [group, setGroup] = React.useState<IGroupType[] | null>(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetchWikiGroup().then((res) => {
      setGroup(res || null);
      setLoading(false);
    });
  }, []);
  React.useEffect(() => {
    setLoading(true);
    fetchWikiList({
      size: 6,
      pageNum,
      type: selectGroup[0] === 'all' ? undefined : selectGroup[0],
    }).then((res) => {
      setLoading(false);
      if (res) {
        setTotalCount((res?.pageInfo.totalCount || 18) - 18);
        setDataList(res?.dataList || []);
        return;
      }
      message.error('服务器开了点小差...');
    });
  }, [selectGroup, pageNum]);
  return (
    <div className="wiki">
      <div className="wiki-header">
        <h3 className="wiki-title">成员风采</h3>
        <p className="wiki-describe">正因为有你们，3G才与众不同</p>
      </div>
      <Spin spinning={loading}>
        <div className="wiki-body">
          <div className="wiki-select">
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['all']}
              selectedKeys={selectGroup}
              onSelect={(item) => {
                setSelectGroup([item.key as string]);
                setPageNum(1);
              }}
            >
              <Menu.Item key="all">全部</Menu.Item>
              {group?.map(
                (item) =>
                  parseGroupName(item.id) && (
                    <Menu.Item key={item.id}>
                      {parseGroupName(item.id)}
                    </Menu.Item>
                  ),
              )}
            </Menu>
          </div>
          <WikiHome {...dataList} />
        </div>
        <div className="wiki-bottom">
          <Pagination
            current={pageNum}
            total={totalCount}
            hideOnSinglePage
            pageSize={6}
            showSizeChanger={false}
            onChange={(e) => setPageNum(e)}
          />
        </div>
      </Spin>
    </div>
  );
};

export default Wiki;
