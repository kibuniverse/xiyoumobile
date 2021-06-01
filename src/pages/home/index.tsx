import * as React from 'react'
import { message } from 'antd'
import { useHistory } from 'react-router-dom'
import { fetchActivityList } from '../../api/activity'
import './index.less'

const Home: React.FC = () => {
  const [list, setList] = React.useState<Record<string, string | number>[]>([])
  const history = useHistory()
  // 获取activity
  React.useEffect(() => {
    fetchActivityList({ size: 5 }).then(res => {
      console.log(res)
      if (res) {
        setList(res.dataList)
        return
      }
      message.error('服务器游离中...')
    })
  }, [])

  const handleClickActivity = (id: number) => () => {
    console.log(id)
    history.push(`/activity-detail?id=${id}`)
  }

  return (
    <div className="wrapper">
      <div className="content-header">
        <div>xiyouMobile</div>
        <div>西邮移动应用开发实验室</div>
      </div>
      <div className="content">
        {list.map(item => {
          const { id, img, summary, title } = item
          return (
            <div key={id} className="activity-item">
              <div className="left">
                <div className="title">
                  <a onClick={handleClickActivity(id as number)}>{title}</a>
                </div>
                <div className="summary">
                  {summary}
                  ...
                </div>
              </div>
              <img className="activity-item-img" alt="活动背景图" src={img as string} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Home
