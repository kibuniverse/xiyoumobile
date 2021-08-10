/* eslint-disable react/destructuring-assignment */
import React, { FC } from 'react';
import './index.less';
import { IActivityItem } from '../../api/activity/interface';

const Item: FC<IActivityItem & { flex?: number }> = (props) => (
  <div className="item-wrapper" style={{ flex: props.flex }}>
    <img src={props?.img} alt="活动图片" />
    <span className="time">{props.pubTime?.slice(0, 10)}</span>
    <div className="item-content">
      <h3 className="item-title">{props?.title}</h3>
      <p className="item-summary">{props?.summary}</p>
    </div>
  </div>
);

export const ActivityHome: FC<IActivityItem[]> = (props) => (
  <div className="activity-wrapper">
    <h3 className="activity-title">小组 · 动态</h3>
    <div className="activity-content">
      <div className="activity-row">
        <Item {...props[0]} />
        <Item {...props[1]} />
        <Item {...props[2]} />
      </div>
      <div className="activity-row">
        <Item {...props[3]} />
        <Item {...props[4]} />
        <Item {...props[5]} />
      </div>
    </div>
  </div>
);
