import Avatar from 'antd/lib/avatar/avatar'
import React, { FC } from 'react'
import { IWikiItem } from '@api/wiki/interface'
import './index.less'
import { EyeOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export const WikiHomeItem: FC<IWikiItem> = (props) => {
  const { img, title, author, explore, id } = props
  return (
    <div className="item-wrapper">
      <Link to={`/wiki-detail/${id}`}>
        <img src={img} alt="wiki图片" />
        <div className="item-content">
          <div className="item-info">
            <h3 className="item-title">{title}</h3>
            <div className="item-bottom">
              <Link to={`/user-detail/${author.userName}`} className="item-user">
                <Avatar src={author?.portrait} />
                <span className="name">{author.realName}</span>
                <span className="group">{author.team}</span>
              </Link>
              <span className="views">{`访问量${explore}`}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export const WikiItem: FC<IWikiItem> = (props) => {
  const { img, title, author, pubTime, explore, id } = props
  return (
    <div className="wiki-item-wrapper">
      <Link to={`/wiki-detail/${id}`}>
        <img src={img} alt="wiki图片" />
        <span className="bar">
          <div className="views">
            <EyeOutlined />
            <span className="views_text">{`${explore}`}</span>
          </div>
          <div className="date">
            <ClockCircleOutlined />
            <span className="date_text">{`${pubTime.slice(0, 10)}`}</span>
          </div>
        </span>
        <div className="item-content">
          <div className="item-info">
            <h3 className="item-title">{title}</h3>
            <div className="item-bottom">
              <Link to={`/user-detail/${author.userName}`} className="item-user">
                <span className="group">{author.team}</span>
                <span className="name">{author.realName}</span>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
