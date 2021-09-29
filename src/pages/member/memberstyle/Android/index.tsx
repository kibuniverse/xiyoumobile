import * as React from 'react'
import { Link } from 'react-router-dom'
import { getMemberInfo } from '../../../../api/member'
import { MemberInfo } from '../../../../api/member/interface'
import './index.less'
// 成员
const Member: React.FC = () => {
	const [list, setGroupList] = React.useState<MemberInfo[]>([])

	React.useEffect(() => {
		getMemberInfo({ size: 100, team: 'Android' }).then((res) => {
			if (res) {
				setList(res.dataList)
			}
		})
	}, [])

	return (
		<div className="groupPerson">
			<div className="groupTheme">Android组成员</div>
			<div className="groupMessageA">
				{grouplist.map((item) => {
					const { username, name, team, mienImg } = item
					return (
						<div key={name} className="personMessage">
							<Link to={`/user-detail/${username}`}>
								<div className="mess">
									<p className="name">{name}</p>
									<div className="job">
										<p>{team}</p>
									</div>
								</div>
								<div className="pic">
									<img src={mienImg as string} alt="" />
									<i className="icon" />
								</div>
							</Link>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Member
