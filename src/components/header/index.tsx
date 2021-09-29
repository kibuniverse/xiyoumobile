import * as React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {filter} from 'remeda'

import {menu} from '../../menu'
import './index.less'

interface Menu {
	key: string
	path: string
	title: string
	component: React.FC<any>
	notInMenu?: undefined | boolean
	opacity?: boolean
}

const useControlHeader = (initOpacity: boolean) => {
	const [scrollerHeight, setScrollerHeight] = React.useState(0)
	const [hidden, setHidden] = React.useState(false)
	const [opacity, setOpacity] = React.useState(initOpacity)
	React.useEffect(() => {
		const fn = () => {
			setScrollerHeight((item) => {
				if (item > document.documentElement.scrollTop) {
					setHidden(false)
				} else {
					setHidden(true)
				}
				return document.documentElement.scrollTop
			})
		}
		document.addEventListener('scroll', fn)
		return () => {
			document.removeEventListener('scroll', fn)
		}
	}, [])
	return {hidden, scrollerHeight, opacity, setOpacity}
}

const Header: React.FC = () => {
	// const [key, setKey] = React.useState('home');
	const realMenu: Menu[] = filter((menuItem: Menu) => !menuItem.notInMenu)(menu)
	const location = useLocation()
	const res = realMenu.find((item) => item.path === location.pathname)?.opacity
	const {hidden, scrollerHeight, opacity, setOpacity} = useControlHeader(
		typeof res === 'undefined' ? true : res
	)
	return (
		<header
			className={`header ${!opacity && scrollerHeight === 0 ? '' : 'opacity'} ${
				hidden ? 'hidden' : ''
			}`}
		>
			<div className="logo" />
			<div className="menu-router">
				{realMenu.map((item) => (
					<Link
						className="menu-item"
						key={item.key}
						to={item.path}
						onClick={() => {
							setOpacity(typeof item.opacity === 'undefined' ? true : item.opacity)
						}}
					>
						{item.title}
					</Link>
				))}
			</div>
		</header>
	)
}

export default Header
