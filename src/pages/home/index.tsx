import * as React from 'react'
import { Carousel, message } from 'antd'
import { fetchActivityList } from '@api/activity'
import { fetchWikiList } from '@api/wiki'
import { IWikiItem } from '@api/wiki/interface'
import { IActivityItem } from '@api/activity/interface'
import { WikiHome } from '@components/wiki-home'
import './index.less'
import ActivityItem from '@/components/activity-item'

const Home: React.FC = () => {
  const [activityList, setActivityList] = React.useState<IActivityItem[]>([])
  const [wikiList, setWikiList] = React.useState<IWikiItem[]>([])
  const groupImageList = [
    'https://pic1.zhimg.com/v2-20741c653f3bbb02f917dc4ee7a50532_r.jpg?source=172ae18b',
    'https://mobile.xiyou.edu.cn/src/images/web.jpg',
    'https://mobile.xiyou.edu.cn/src/images/android.jpg'
  ]
  // 获取activity
  React.useEffect(() => {
    fetchActivityList({ size: 6 }).then((res) => {
      if (res) {
        setActivityList(res.dataList)
        return
      }
      message.error('服务器游离中...')
    })
    fetchWikiList({ size: 6 }).then((res) => {
      if (res) {
        setWikiList(res.dataList)
        return
      }
      message.error('服务器游离中...')
    })
  }, [])

  return (
    <div className="home-wrapper">
      <div className="content-header">
        <Carousel effect="fade" autoplay adaptiveHeight>
          <div className="carousel-item ios" />
          <div className="carousel-item android" />
          <div className="carousel-item web" />
          <div className="carousel-item server" />
        </Carousel>
      </div>
      <div className="content">
        <div className="activity-home-container">
          <div className="title">实验室动态</div>
          <div className="list-wrapper">
            {activityList.map((item) => (
              <ActivityItem key={item.id} activityInfo={item} />
            ))}
          </div>
        </div>
        <WikiHome {...wikiList} row={1} />
      </div>
    </div>
  )
}
export default Home
