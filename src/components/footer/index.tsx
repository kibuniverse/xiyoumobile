import * as React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { WechatFilled } from '@ant-design/icons'
import './index.less'

const Footer: React.FC = () => {
	const nowTime = new Date()
	const [iconState, setIconState] = useState(false)
	return (
		<footer className="footerAll">
			<div className="footer_wrap">
				<div className="footer_top">
					<Link to="">
						<div className="footer_top_logo" />
					</Link>
				</div>
				<div className="middle_box">
					<h3>关于我们</h3>
					<div className="footer_relation">
						<div className="relation">
							<span className="title">新浪微博</span>
							<span className="text">@西邮移动应用开发实验室</span>
						</div>
						<div className="relation">
							<span className="title">交流QQ</span>
							<span className="text">315602317</span>
						</div>
						<div className="relation">
							<span className="title">官方微信</span>
							<span
								className="text"
								onMouseOver={() => setIconState(true)}
								onMouseLeave={() => {
									setIconState(false)
								}}
							>
								<WechatFilled />
							</span>
						</div>
						<img
							className={iconState ? 'qr_code' : 'null'}
							src="https://mobile.xupt.edu.cn/src/images/wxqr.jpg"
						/>
					</div>
				</div>
				<div className="footer_content text_content">
					Copyright @<span>{nowTime.getFullYear()}</span>
					西安邮电大学移动应用开发实验室 All rights reserved.
				</div>
			</div>
		</footer>
	)
}

export default Footer
