import {message, Calendar} from 'antd'
import * as React from 'react'
import {useParams} from 'react-router'
import {fetchActivityDetail} from '../../api/activity'
import {IActivityDetail} from '../../api/activity/interface'
import './index.less'

const ActivityDetail: React.FC = () => {
	const {id} = useParams<{id: string}>()
	const [data, setData] = React.useState<IActivityDetail | null>(null)
	React.useEffect(() => {
		fetchActivityDetail(id).then((res) => {
			if (res) {
				setData(res)
				return
			}
			message.error('服务器开小差了...')
		})
	}, [])
	// const [activityInfo, setActivityInfo] = React.useState({})
	return (
		<div className="activity_detaile_wrap">
			<div className="activity_detaile_left">
				<div className="site-calendar-demo-card">
					<Calendar fullscreen={false} />
				</div>
				<div className="h100">
					<span className="activity_detaile_explore">
						{data?.explore}
						<span>浏览量</span>
					</span>
					<span className="activity_dataile_left_box">
						<span>{data?.title}</span>
					</span>
				</div>
			</div>
			<div className="activity_detaile_right">
				<div className="activity_detaile_article_wrap">
					<h1 className="activity_title">{data?.title}</h1>
					<span>{data?.pubTime}</span>
					<hr />
					<div dangerouslySetInnerHTML={{__html: data?.content || ''}} />
				</div>
			</div>
		</div>
	)
}

export default ActivityDetail
