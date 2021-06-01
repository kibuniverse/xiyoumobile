import * as React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'
import { filter } from 'remeda'
import { menu } from '../../menu'
import './index.less'

const header = {
  backdropFilter: 'blur(3px)', background: 'border-box border-box rgba(255, 255, 255, 0.25)',
}
interface Menu {
  key: string;
  path: string;
  title: string;
  component: React.FC<any>;
  notInMenu?: undefined | boolean;
}

const Header: React.FC = () => {
  const [selectKey, setSelectKey] = React.useState('')
  const realMenu: Menu[] = filter((menuItem: Menu) => !menuItem.notInMenu)(menu)
  const routerMenu: Menu[] = filter((menuItem: Menu) => Boolean(menuItem.notInMenu))(menu)
  return (
    <header className="header" style={header}>
      <div className="logo">
        <Avatar size="large" src="https://mobile.xupt.edu.cn/res/static/wiki_default.jpg" />
      </div>
      <div className="menu-router">
        {realMenu.map(item => (
          <Link
            className="menu-item"
            style={{ color: selectKey === item.key ? '#1890ff' : '#000' }}
            onClick={() => setSelectKey(item.key)}
            key={item.key}
            to={item.path}
          >
            {item.title}
          </Link>
      ))}
      </div>
    </header>
  )
}

export default Header
