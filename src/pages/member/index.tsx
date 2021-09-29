import * as React from 'react'
import {Link, Route, Switch, Redirect, useRouteMatch} from 'react-router-dom'
import Graduate from './graduate'
import Memberstyle from './memberstyle'
import './index.less'

const Member: React.FC = () => {
	const [state, setState] = React.useState(0)
	const {path, url} = useRouteMatch()

	return (
		<div className="wrapperMax">
			<div className="wrapper" />
			<div className="member-router">
				<Link
					to={`${url}/graduate`}
					className={state === 0 ? 'memberOnclick' : 'member-item'}
					onClick={(e) => {
						setState(0)
					}}
				>
					毕业生
				</Link>
				<Link
					to={`${url}/memberstyle`}
					className={state === 2 ? 'memberOnclick' : 'member-item'}
					onClick={(e) => {
						setState(2)
					}}
				>
					成员风采
				</Link>
			</div>
			<div className="memberlist">
				<Switch>
					<Route path={`${path}/graduate`} component={Graduate} />
					<Route path={`${path}/memberstyle`} component={Memberstyle} />
					<Redirect to="/member/graduate" />
				</Switch>
			</div>
		</div>
	)
}

export default Member
