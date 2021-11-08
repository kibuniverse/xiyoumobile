/* eslint-disable react/destructuring-assignment */
import { Divider } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React, { FC } from 'react'

import './index.less'
import { Link } from 'react-router-dom'
import { IWikiItem } from '@api/wiki/interface'

interface option {
  row?: number
  title?: string
}

const Item: FC<IWikiItem> = (props) => (
  <div className="item-wrapper">
    <Link to={`/wiki-detail/${props.id}`}>
      <img src={props?.img} alt="wiki图片" />
      <h3 className="item-title">{props?.title}</h3>
      <Divider className="item-time">{props?.pubTime}</Divider>
      <div className="item-bottom">
        <Link to={`/user-detail/${props.id}`} className="item-user">
          <Avatar src={props.author?.portrait} />
          <span className="name">{props.author?.realName}</span>
          <span className="group">{props.author?.team}</span>
        </Link>
        <span className="views">{`访问量${props?.explore}`}</span>
      </div>
    </Link>
  </div>
)
export const WikiHome: FC<IWikiItem[] & option> = (props) => {
  const title = props.title || '实验室wiki'
  const row = props.row || 2
  const produceItem = () => {
    const res = []
    for (let i = 0; i < row; i += 1) {
      res.push(
        <div key={i} className="wiki-row">
          <Item {...props[0 + i * row]} />
          <Item {...props[1 + i * row]} />
          <Item {...props[2 + i * row]} />
        </div>
      )
    }
    return res
  }
  return (
    <div className="wiki-wrapper">
      <div className="wiki-home">
        <h3 className="wiki-title">{title}</h3>
        {produceItem()}
      </div>
    </div>
  )
}