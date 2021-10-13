import Avatar from 'antd/lib/avatar/avatar'
import React, { FC } from 'react'
import { IWikiItem } from '@api/wiki'
import './index.less'

export const WikiItem: FC<IWikiItem> = (props) => (
  <div className="wikiWrapper">
    <img src={props.img} alt="wiki图片" />
    <div className="content">
      <h3 className="title">{props.title}</h3>
      <div className="detail">
        <Avatar src={props.author.portrait} />
        <div>
          <p>{props.author.userName}</p>
          <p>{props.pubTime}</p>
        </div>
        <span>
          {props.explore}
          人已浏览
        </span>
      </div>
      <p className="summary">{props.summary}</p>
    </div>
  </div>
)
