import { message } from 'antd';
import * as React from 'react'
import { useParams } from 'react-router'
import { fetchActivityDetail } from '../../api/activity';
import { IActivityDetail } from '../../api/activity/interface';

const ActivityDetail: React.FC = () => {
  const { id } = useParams<{id:string}>();
  const [data, setData] = React.useState<IActivityDetail|null>(null);
  React.useEffect(() => {
  fetchActivityDetail(id).then(res => {
    if (res) {
      setData(data);
      return;
    }
      message.error('服务器开小差了...')
  })
  }, [])
  // const [activityInfo, setActivityInfo] = React.useState({})
  return (
    <div>信息</div>
  )
}

export default ActivityDetail
