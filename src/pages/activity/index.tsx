import { Menu, message, Pagination, Spin } from 'antd'
import * as React from 'react'
import { fetchActivityList } from '@api/activity'
import { IActivityItem } from '@api/activity/interface'

import { ActivityHome } from '@components/activity-home'
import './index.less'

const parseGroupName = (key: number) => {
  if (key === 6 || key === 3) {
    return null
  }
  return {
    1: 'Android',
    2: 'iOS',
    4: '前端',
    5: '后台'
  }[key]
}
const Activity: React.FC = () => {
  const [dataList, setDataList] = React.useState<IActivityItem[]>([])
  const [pageNum, setPageNum] = React.useState(1)
  const [totalCount, setTotalCount] = React.useState(1)
  const [selectGroup, setSelectGroup] = React.useState(['all'])
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setLoading(true)
    fetchActivityList({
      size: 6
    }).then((res) => {
      setLoading(false)
      if (res) {
        setTotalCount((res?.pageInfo.totalCount || 18) - 18)
        setDataList(res?.dataList || [])
        return
      }
      message.error('服务器开了点小差...')
    })
  }, [selectGroup, pageNum])
  return (
    <div className="activity">
      <div className="activity-header">
        <h3 className="activity-title">成员风采</h3>
        <p className="activity-describe">正因为有你们，3G才与众不同</p>
      </div>
      <Spin spinning={loading}>
        <div className="activity-body">
          <ActivityHome {...dataList} />
        </div>
        <div className="activity-bottom">
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
  )
}

export default Activity
