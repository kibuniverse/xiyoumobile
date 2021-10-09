import * as React from 'react'
import { IActivityItem } from '@/api/activity/interface'
import { Link } from 'react-router-dom'
import { Image } from 'antd'
import './index.less'

type ActivityItemProps = {
  activityInfo: IActivityItem
}
const ActivityItem: React.FC<ActivityItemProps> = (props) => {
  const { title, pubTime, summary, img, id } = props.activityInfo || {}
  return (
    <div>
      <div key={id} className="activity-item">
        <div className="item-desc">
          <div className="item-title">
            <Link to={`/activity-detail/${id}`}>
              <span>{title}</span>
            </Link>
          </div>
          <div className="pub-time">
            <div>{pubTime?.slice(0, 10)}</div>
          </div>
          <div>{summary}</div>
        </div>
        <Image preview={false} src={img} />
      </div>
    </div>
  )
}

export default ActivityItem
