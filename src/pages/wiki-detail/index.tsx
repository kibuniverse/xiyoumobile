import * as React from 'react'
import { useParams } from 'react-router'
import { message } from 'antd'
import { fetchWikiDetail } from '@api/wiki'
import { IWikeDetail } from '@api/wiki/interface'
import './index.less'

const WikiDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [data, setData] = React.useState<IWikeDetail | null>(null)
  React.useEffect(() => {
    console.log('active')
    fetchWikiDetail(id).then((res) => {
      if (res) {
        setData(res)
        return
      }
      message.error('服务器开小差了...')
    })
  }, [])
  return (
    <div className="wiki_detail_wrap">
      <div className="wiki_detail_box">
        <h1 className="wiki_detail_title_text">{data?.title}</h1>
        <span className="wiki_detail_img">
          <img src={data?.img} alt="" />
          <span className="wiki_detail_expolre_box">
            <div className="wiki_detail_expolre">{data?.explore}</div>
            <span className="wiki_detail_explore_text">浏览量</span>
          </span>
        </span>
        <div className="wiki_detail_messagr_box">
          <span>{data?.author.realName}</span>
          <span>{data?.author.team}</span>
          <span>{data?.pubTime}</span>
        </div>
        <hr />
        <div
          dangerouslySetInnerHTML={{ __html: data?.content || '' }}
          className="wiki-activity_txt"
        />
      </div>
    </div>
  )
}

export default WikiDetail
