import * as React from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../../menu'
import './index.less'

const Header = () => (
  <div>
    {menu.map(item => (
      <span key={item.key}>
        <Link to={item.path}>{item.title}</Link>
      </span>
      ))}
  </div>
  )

export default Header
