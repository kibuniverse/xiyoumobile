import * as React from 'react'
import { Carousel, message } from 'antd'
import { fetchActivityList } from '@api/activity'
import { ActivityHome } from '@components/activity-home'
import { fetchWikiList } from '@api/wiki'
import { IWikiItem } from '@api/wiki/interface'
import { GroupIntroduce } from '@components/group-introduce'
import { IActivityItem } from '@api/activity/interface'
import { WikiHome } from '@components/wiki-home'
import './index.less'

const MainCarousel: React.FC = () => (
  <div className="content-header">
    <Carousel adaptiveHeight>
      <div className="carousel-item item1" />
      <div className="carousel-item item2" />
    </Carousel>
  </div>
)

const Home: React.FC = () => {
  const [activityList, setActivityList] = React.useState<IActivityItem[]>([])
  const [wikiList, setWikiList] = React.useState<IWikiItem[]>([])
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
      <MainCarousel />
      <div className="content">
        <GroupIntroduce />
        <ActivityHome {...activityList} row={1} />
        <WikiHome {...wikiList} row={1} />
      </div>
    </div>
  )
}
export default Home
