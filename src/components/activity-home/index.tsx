/* eslint-disable react/destructuring-assignment */
import React, { FC } from 'react';
import './index.less';
import { Link } from 'react-router-dom';
import { IActivityItem } from '../../api/activity/interface';

const Item: FC<IActivityItem & { flex?: number }> = (props) => (
  <Link to={`/activity-detail/${props.id}`}>
    <div className="item-wrapper" style={{ flex: props.flex }}>
      <img src={props?.img} alt="活动图片" />
      <span className="time">{props.pubTime?.slice(0, 10)}</span>
      <div className="item-content">
        <h3 className="item-title">{props?.title}</h3>
        <p className="item-summary">{props?.summary}</p>
      </div>
    </div>
  </Link>
);
interface option {
  row?: number;
  title?: string;
}

export const ActivityHome: FC<IActivityItem[] & option> = (props) => {
  const row = props.row || 2;
  const title = props.title || '小组 · 动态';
  const produceItem = () => {
    const res = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < row; i++) {
      res.push(
        <div key={i} className="activity-row">
          {[0, 1, 2].map(i1 => <Item key={i1} {...props[i * row + i1]} />)}
        </div>,
      );
    }
    return res;
  };
  return (
    <div className="activity-wrapper">
      <h3 className="activity-title">{title}</h3>
      <div className="activity-content">{produceItem()}</div>
    </div>
  );
};
