/* eslint-disable react/destructuring-assignment */
import { Card, Col, Divider, Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { FC } from 'react';

import './index.less'
import { IWikiItem } from '../../api/wiki/index';

// const Item: FC<IActivityItem & { flex?: number }> = (props) => (
//   <div className="item-wrapper" style={{ flex: props.flex }}>
//     <img src={props.img} alt="活动图片" />
//     <span className="time">{props.pubTime?.slice(0, 10)}</span>
//     <div className="item-content">
//       <h3 className="item-title">{props.title}</h3>
//       <p className="item-summary">{props.summary}</p>
//     </div>
//   </div>
// );
const Item:FC<IWikiItem> = (props) => (
  <div className="item-wrapper">
    <img src={props.img} alt="wiki图片" />
    <h3 className="item-title">{props.title}</h3>
    <Divider className="item-time">{props.pubTime}</Divider>
    <div className="item-user">
      <Avatar src={props.author?.portrait} />
      <span>{props.author.realName}</span>
      <span className="group">{props.author.team}</span>
      <span className="views">{`访问量${props.explore}`}</span>
    </div>
  </div>
)
export const WikiHome:FC<IWikiItem[]> = (props) => (
  <div className="wiki-wrapper">
    <div className="wiki-home">
      <h3 className="wiki-title">小组 · wiki</h3>
      <div className="wiki-row">
        <Item {...props[0]} />
        <Item {...props[1]} />
        <Item {...props[2]} />
      </div>
      <div className="wiki-row">
        <Item {...props[3]} />
        <Item {...props[4]} />
        <Item {...props[5]} />
      </div>
    </div>
  </div>
)
